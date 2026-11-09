import githubIcon from "../../assets/icons/github.svg";
import previewIcon from "../../assets/icons/preview.svg";
import downloadIcon from "../../assets/icons/download.svg";
import colabIcon from "../../assets/icons/colab.svg";
import figmaIcon from "../../assets/icons/figma.svg";
import mediumIcon from "../../assets/icons/medium.svg";
import { Tag, glass } from "./Section";

/** Link fields a project can have, in display order. */
const linkTypes = [
  { key: "githubLink", label: "Code", icon: githubIcon },
  { key: "previewLink", label: "Preview", icon: previewIcon },
  { key: "apkLink", label: "APK", icon: downloadIcon },
  { key: "colabLink", label: "Colab", icon: colabIcon },
  { key: "figmaLink", label: "Figma", icon: figmaIcon },
  { key: "mediumLink", label: "Case study", icon: mediumIcon },
];

/** Project card. Stretches to the height of its row so every card lines up. */
const Card = ({ img, imgPosition = "center", title, desc, tags = [], ...links }) => (
  <article className={`${glass} flex h-full flex-col overflow-hidden`}>
    <img
      src={img}
      alt=""
      loading="lazy"
      className="aspect-video w-full bg-white/5 object-cover"
      style={{ objectPosition: imgPosition }}
    />
    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-lg font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {linkTypes
          .filter(({ key }) => links[key])
          .map(({ key, label, icon }) => (
            <a
              key={key}
              href={links[key]}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title}: ${label}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white transition hover:bg-white/20"
            >
              <img src={icon} alt="" className="size-4" />
              {label}
            </a>
          ))}
      </div>
    </div>
  </article>
);

export default Card;
