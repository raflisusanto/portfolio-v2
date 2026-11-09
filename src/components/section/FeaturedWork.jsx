import { caseStudies } from "../../data/content";
import { diagrams } from "../diagrams";
import Section, { Reveal, Tag, glass } from "../ui/Section";
import { ArrowUpRightIcon } from "../ui/Icons";

/** Tags shown on the card itself on phones/tablets. */
const MOBILE_TAGS = 3;

const Heading = ({ children }) => (
  <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
    {children}
  </h4>
);

const Bullets = ({ items }) => (
  <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#52a5e4]">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

/** On phones, run diagrams to the card edges so their text stays readable. */
const Bleed = ({ children }) => <div className="-mx-4 sm:mx-0">{children}</div>;

/** A wide shot with a second one overlapping its corner. */
const Screenshots = ({ images }) => {
  const [main, ...rest] = images;
  return (
    <div className="relative pb-[22%]">
      <img
        src={main.src}
        alt={main.alt}
        loading="lazy"
        className="w-[92%] rounded-xl border border-white/10 shadow-2xl shadow-black/40"
      />
      {rest.map((image) => (
        <img
          key={image.alt}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="absolute bottom-0 right-0 w-[34%] rotate-2 rounded-xl border border-white/15 shadow-2xl shadow-black/60"
        />
      ))}
    </div>
  );
};

const Media = ({ media }) => {
  if (media.diagram) {
    const Diagram = diagrams[media.diagram];
    return (
      <Bleed>
        <Diagram />
      </Bleed>
    );
  }
  return <Screenshots images={media.images} />;
};

const CaseStudy = ({ study, flipped }) => {
  const DetailDiagram = study.detailDiagram ? diagrams[study.detailDiagram] : null;

  return (
    <Reveal>
      <article
        className={`${glass} grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:p-10`}
      >
        <div className={flipped ? "lg:order-2" : ""}>
          <p className="text-sm font-medium text-[#52a5e4]">{study.eyebrow}</p>
          <h3 className="mt-2 text-2xl font-bold leading-snug text-white">
            {study.title}
          </h3>
          {/* Phones/tablets: one-liner + media up front; the rest moves into "Read more" */}
          <p className="mt-3 text-white/80 lg:hidden">{study.summary}</p>
          <div className="mt-6 lg:hidden">
            <Media media={study.media} />
          </div>

          <p className="mt-3 hidden text-sm italic text-white/70 lg:block">{study.role}</p>
          <div className="mt-4 hidden flex-wrap gap-2 lg:flex">
            {study.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="mt-6 space-y-5 text-white/80">
            <div className="hidden space-y-5 lg:block">
              <div>
                <Heading>Problem</Heading>
                <p className="mt-2">{study.problem}</p>
              </div>
              <div>
                <Heading>What I did</Heading>
                <Bullets items={study.approach} />
              </div>
            </div>
            <div className="rounded-xl border border-[#52a5e4]/30 bg-[#52a5e4]/10 p-4">
              <Heading>Results</Heading>
              <ul className="mt-2 space-y-1.5 font-medium text-white">
                {study.results.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Phones/tablets: first 3 tags under the results (all of them in "Read more") */}
          <div className="mt-5 flex flex-wrap gap-2 lg:hidden">
            {study.tags.slice(0, MOBILE_TAGS).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {study.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {study.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
                >
                  {link.label} <ArrowUpRightIcon />
                </a>
              ))}
            </div>
          )}
        </div>

        <div
          className={`hidden self-start lg:sticky lg:top-24 lg:block ${flipped ? "lg:order-1" : ""}`}
        >
          <Media media={study.media} />
        </div>

        <details className="group border-t border-white/10 pt-5 text-white/80 lg:order-3 lg:col-span-2">
          <summary className="flex cursor-pointer list-none items-center gap-2 font-medium text-white marker:hidden hover:text-[#52a5e4] [&::-webkit-details-marker]:hidden">
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-open:rotate-90"
            >
              ▸
            </span>
            <span className="lg:hidden">Read the full case study</span>
            <span className="hidden lg:inline">Read more: challenges and what I learned</span>
          </summary>
          <div
            className={`mt-5 grid gap-8 ${DetailDiagram ? "lg:grid-cols-[1.15fr_1fr] lg:gap-12" : ""}`}
          >
            <div className="space-y-5">
              <div className="space-y-5 lg:hidden">
                <div>
                  <Heading>My role</Heading>
                  <p className="mt-2">{study.role}</p>
                </div>
                <div>
                  <Heading>Problem</Heading>
                  <p className="mt-2">{study.problem}</p>
                </div>
                <div>
                  <Heading>What I did</Heading>
                  <Bullets items={study.approach} />
                </div>
                {study.tags.length > MOBILE_TAGS && (
                  <div>
                    <Heading>Tech</Heading>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Heading>Challenges</Heading>
                <Bullets items={study.challenges} />
              </div>
              <div>
                <Heading>What I learned</Heading>
                <p className="mt-2">{study.learned}</p>
              </div>
            </div>
            {DetailDiagram && (
              <Bleed>
                <DetailDiagram />
              </Bleed>
            )}
          </div>
        </details>
      </article>
    </Reveal>
  );
};

const FeaturedWork = () => (
  <Section
    id="work"
    eyebrow="Featured work"
    title="Case studies"
    subtitle="Projects I led or built from the ground up. Company code is private, so these are written case studies with simplified diagrams and public store links."
  >
    <div className="space-y-8">
      {caseStudies.map((study, i) => (
        <CaseStudy key={study.id} study={study} flipped={i % 2 === 1} />
      ))}
    </div>
  </Section>
);

export default FeaturedWork;
