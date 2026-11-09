import { languages, skillGroups } from "../../data/content";
import Section, { Reveal, Tag, glass } from "../ui/Section";

const SkillsSection = () => (
  <Section id="skills" eyebrow="Toolbox" title="Skills">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={(i % 3) * 0.08} className="h-full">
          <div className={`${glass} h-full p-5`}>
            <h3 className="mb-3 font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal className="mt-6">
      <div className={`${glass} flex flex-wrap items-center gap-x-8 gap-y-3 p-5`}>
        <h3 className="font-semibold text-white">Languages</h3>
        {languages.map((language) => (
          <p key={language.name} className="text-white/75">
            <span className="font-medium text-white">{language.name}</span>{" "}
            · {language.level}
          </p>
        ))}
      </div>
    </Reveal>
  </Section>
);

export default SkillsSection;
