/**
 * Converts every .png / .jpg / .jpeg in src/assets to .webp and updates the
 * imports in src/ to point at the new files.
 *
 *   npm run images:webp              convert + update imports (keeps originals)
 *   npm run images:webp -- --dry-run show the size savings, change nothing
 *   npm run images:webp -- --delete  convert + update imports + delete originals
 */
import { readdir, readFile, writeFile, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src");
const ASSETS = path.join(SRC, "assets");

const QUALITY = 80;
// Project thumbnails are shown in cards ~450px wide; 1200px stays sharp on
// high-DPI screens. Other images are displayed at their natural size, so
// they are converted without resizing to keep the layout identical.
const THUMBNAIL_DIR = path.join(ASSETS, "thumbnail");
const THUMBNAIL_MAX_WIDTH = 1200;

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has("--dry-run");
const DELETE = args.has("--delete");

const IMAGE_RE = /\.(png|jpe?g)$/i;
const CODE_RE = /\.(jsx?|tsx?|css)$/i;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? walk(full) : [full];
    })
  );
  return files.flat();
}

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;
const rel = (p) => path.relative(ROOT, p).replaceAll("\\", "/");

async function convertImages() {
  const images = (await walk(ASSETS)).filter((f) => IMAGE_RE.test(f));
  const results = [];

  for (const file of images) {
    const output = file.replace(IMAGE_RE, ".webp");
    let pipeline = sharp(file);
    if (file.startsWith(THUMBNAIL_DIR + path.sep)) {
      pipeline = pipeline.resize({
        width: THUMBNAIL_MAX_WIDTH,
        withoutEnlargement: true,
      });
    }

    const buffer = await pipeline.webp({ quality: QUALITY }).toBuffer();
    const before = (await stat(file)).size;

    if (!DRY_RUN) await writeFile(output, buffer);
    results.push({ file, output, before, after: buffer.length });
  }

  return results;
}

// Rewrites import paths like "../assets/foo.png" -> "../assets/foo.webp",
// but only for images that were actually converted.
async function updateImports(converted) {
  const convertedSet = new Set(converted.map((r) => path.normalize(r.file)));
  const codeFiles = (await walk(SRC)).filter((f) => CODE_RE.test(f));
  const changed = [];

  for (const codeFile of codeFiles) {
    const source = await readFile(codeFile, "utf8");
    const updated = source.replace(
      /(["'])([^"'\n]+?)\.(png|jpe?g)\1/gi,
      (match, quote, base, ext) => {
        const target = path.resolve(path.dirname(codeFile), `${base}.${ext}`);
        return convertedSet.has(path.normalize(target))
          ? `${quote}${base}.webp${quote}`
          : match;
      }
    );

    if (updated !== source) {
      if (!DRY_RUN) await writeFile(codeFile, updated);
      changed.push(codeFile);
    }
  }

  return changed;
}

const results = await convertImages();

console.table(
  results.map((r) => ({
    image: rel(r.file),
    before: kb(r.before),
    after: kb(r.after),
    saved: `${Math.round((1 - r.after / r.before) * 100)}%`,
  }))
);

const totalBefore = results.reduce((s, r) => s + r.before, 0);
const totalAfter = results.reduce((s, r) => s + r.after, 0);
console.log(
  `\nTotal: ${kb(totalBefore)} -> ${kb(totalAfter)} ` +
    `(${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`
);

const changedFiles = await updateImports(results);
console.log(
  `\n${DRY_RUN ? "Would update" : "Updated"} imports in:\n` +
    (changedFiles.map((f) => `  ${rel(f)}`).join("\n") || "  (none)")
);

if (DELETE && !DRY_RUN) {
  await Promise.all(results.map((r) => unlink(r.file)));
  console.log(`\nDeleted ${results.length} original images.`);
} else if (!DRY_RUN) {
  console.log(
    "\nOriginals kept. Check the site, then run with --delete to remove them."
  );
}

if (DRY_RUN) console.log("\nDry run: no files were changed.");
