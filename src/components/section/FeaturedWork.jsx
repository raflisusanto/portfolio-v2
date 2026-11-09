import { caseStudies } from "../../data/content";
import { diagrams } from "../diagrams";
import Section, { Reveal, Tag, glass } from "../ui/Section";
import { ArrowUpRightIcon, LayoutIcon, TruckIcon } from "../ui/Icons";

/** Tags shown on the card itself on phones/tablets. */
const MOBILE_TAGS = 3;

/** Generic icons for case studies without a store icon (`logoIcon` in content.js). */
const fallbackIcons = { layout: LayoutIcon, truck: TruckIcon };

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

/** The app's store icon, or a generic icon tile when there is none to show. */
const AppLogo = ({ study }) => {
  const box =
    "size-14 shrink-0 rounded-2xl border border-white/15 shadow-lg shadow-black/40 lg:size-16";
  if (study.logo) {
    return <img src={study.logo} alt="" className={`${box} object-cover`} />;
  }
  const Icon = fallbackIcons[study.logoIcon];
  return (
    <div
      aria-hidden="true"
      className={`${box} flex items-center justify-center bg-linear-to-br from-[#2e79b2] to-[#183955] text-white`}
    >
      <Icon className="size-7 lg:size-8" />
    </div>
  );
};

const Results = ({ items }) => (
  <div className="rounded-xl border border-[#52a5e4]/30 bg-[#52a5e4]/10 p-4">
    <Heading>Results</Heading>
    <ul className="mt-2 space-y-1.5 font-medium text-white">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="text-green-400">✓</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Tags = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </div>
);

const Links = ({ links }) =>
  links.length > 0 && (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
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
  );

const CaseStudy = ({ study, flipped }) => {
  const DetailDiagram = study.detailDiagram ? diagrams[study.detailDiagram] : null;

  return (
    <Reveal>
      <article
        id={`case-${study.id}`}
        className={`${glass} scroll-mt-24 p-6 sm:p-8 lg:px-10 lg:py-8`}
      >
        {/* Desktop: two columns of about the same height, so a case study fits on one screen */}
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
          <div className={flipped ? "lg:order-2" : ""}>
            <header>
              <div className="flex items-center gap-4">
                <AppLogo study={study} />
                <div>
                  <h3 className="text-xl font-bold text-white lg:text-2xl">{study.app}</h3>
                  <p className="mt-0.5 text-sm text-white/60">{study.context}</p>
                </div>
              </div>
              <p className="mt-4 text-lg font-semibold leading-snug text-[#52a5e4] lg:text-xl">
                {study.title}
              </p>
              <p className="mt-1.5 hidden text-sm italic text-white/70 lg:block">{study.role}</p>
            </header>

            {/* Phones/tablets: one-liner, media and results up front; the rest is in "Read more" */}
            <div className="mt-4 space-y-6 lg:hidden">
              <p className="text-white/80">{study.summary}</p>
              <Media media={study.media} />
              <Results items={study.results} />
              <Tags tags={study.tags.slice(0, MOBILE_TAGS)} />
              <Links links={study.links} />
            </div>

            <div className="mt-6 hidden space-y-5 text-[15px] leading-relaxed text-white/80 lg:block">
              <div>
                <Heading>Problem</Heading>
                <p className="mt-2">{study.problem}</p>
              </div>
              <div>
                <Heading>What I did</Heading>
                <Bullets items={study.approach} />
              </div>
              <Tags tags={study.tags} />
            </div>
          </div>

          <div className="hidden flex-col gap-5 text-[15px] leading-relaxed lg:flex">
            <Media media={study.media} />
            <Results items={study.results} />
            <Links links={study.links} />
          </div>
        </div>

        <details className="group mt-6 border-t border-white/10 pt-5 text-white/80">
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
                    <div className="mt-2">
                      <Tags tags={study.tags} />
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
