import { caseStudies } from "../../data/content";
import Section, { Reveal, Tag, glass } from "../ui/Section";
import { ArrowUpRightIcon } from "../ui/Icons";

const Media = ({ study }) => {
  if (study.images.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-white/25 bg-white/[0.03] p-6 text-center text-sm text-white/50">
        {study.placeholder}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {study.images.map((image, i) => (
        <img
          key={image.alt}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={`w-full rounded-xl border border-white/10 object-cover shadow-2xl shadow-black/40 ${
            i === 1 ? "mt-8" : ""
          }`}
        />
      ))}
    </div>
  );
};

const CaseStudy = ({ study, flipped }) => (
  <Reveal>
    <article
      className={`${glass} grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:p-10`}
    >
      <div className={flipped ? "lg:order-2" : ""}>
        <p className="text-sm font-medium text-[#52a5e4]">{study.eyebrow}</p>
        <h3 className="mt-2 text-2xl font-bold leading-snug text-white">
          {study.title}
        </h3>
        <p className="mt-3 text-sm italic text-white/70">{study.role}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <dl className="mt-6 space-y-5 text-white/80">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Problem
            </dt>
            <dd className="mt-1">{study.problem}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-white/50">
              What I did
            </dt>
            <dd className="mt-1">
              <ul className="list-disc space-y-1.5 pl-5 marker:text-[#52a5e4]">
                {study.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Result
            </dt>
            <dd className="mt-1 font-medium text-white">{study.result}</dd>
          </div>
        </dl>

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

      <div className={`self-center ${flipped ? "lg:order-1" : ""}`}>
        <Media study={study} />
      </div>
    </article>
  </Reveal>
);

const FeaturedWork = () => (
  <Section
    id="work"
    eyebrow="Featured work"
    title="Case studies"
    subtitle="Selected work from client projects. Company code is private, so these are written case studies with public store links."
  >
    <div className="space-y-8">
      {caseStudies.map((study, i) => (
        <CaseStudy key={study.id} study={study} flipped={i % 2 === 1} />
      ))}
    </div>
  </Section>
);

export default FeaturedWork;
