import {
  achievements,
  certifications,
  education,
  publication,
} from "../../data/content";
import Section, { Reveal, glass } from "../ui/Section";
import { ArrowUpRightIcon } from "../ui/Icons";

const Card = ({ title, children, className = "" }) => (
  <div className={`${glass} h-full p-6 ${className}`}>
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
      {title}
    </h3>
    {children}
  </div>
);

const CredentialsSection = () => (
  <Section eyebrow="Background" title="Education & credentials">
    <div className="grid gap-4 lg:grid-cols-2">
      <Reveal>
        <Card title="Education">
          <p className="font-semibold text-white">{education.degree}</p>
          <p className="text-white/70">
            {education.school} · {education.period}
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/75 marker:text-[#52a5e4]">
            {education.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Reveal>

      <Reveal delay={0.08}>
        <Card title="Publication">
          <a
            href={publication.href}
            target="_blank"
            rel="noreferrer"
            className="group font-semibold text-white hover:text-[#52a5e4]"
          >
            {publication.title}{" "}
            <ArrowUpRightIcon className="inline size-3.5 opacity-60 group-hover:opacity-100" />
          </a>
          <p className="mt-2 text-sm text-white/70">{publication.authors}</p>
          <p className="text-sm text-white/70">{publication.venue}</p>
        </Card>
      </Reveal>

      <Reveal>
        <Card title="Certifications & training">
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <p className="text-white">{cert.name}</p>
                <p className="text-sm text-white/60">
                  {cert.issuer} · {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>

      <Reveal delay={0.08}>
        <Card title="Achievements">
          <ul className="list-disc space-y-2 pl-5 text-white/80 marker:text-[#52a5e4]">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </div>
  </Section>
);

export default CredentialsSection;
