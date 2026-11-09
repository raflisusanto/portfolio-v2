import { experience } from "../../data/content";
import Section, { Reveal, glass } from "../ui/Section";

const ExperienceSection = () => (
  <Section id="experience" eyebrow="Career" title="Experience">
    <ol className="relative space-y-8 border-l border-white/15 pl-6 sm:pl-10">
      {experience.map((job) => (
        <li key={job.company} className="relative">
          <span
            aria-hidden
            className="absolute -left-[31px] top-7 size-3 rounded-full bg-[#52a5e4] ring-4 ring-[#52a5e4]/20 sm:-left-[47px]"
          />
          <Reveal>
            <article className={`${glass} p-6 sm:p-8`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold text-white">{job.company}</h3>
                <p className="text-sm text-white/60">
                  {job.period} · {job.location}
                </p>
              </div>

              <ul className="mt-4 space-y-2">
                {job.roles.map((role) => (
                  <li
                    key={role.title}
                    className="flex flex-wrap items-center gap-x-3 gap-y-1"
                  >
                    <span className="font-medium text-white">{role.title}</span>
                    <span className="text-sm text-white/50">{role.period}</span>
                    {role.promoted && (
                      <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-medium text-green-300">
                        ↑ Promoted
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 list-disc space-y-1.5 pl-5 text-white/75 marker:text-[#52a5e4]">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default ExperienceSection;
