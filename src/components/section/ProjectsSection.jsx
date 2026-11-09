import { useEffect, useState } from "react";
import Card from "../ui/Card";
import Carousel from "../ui/Carousel";
import Section, { Reveal } from "../ui/Section";
import { projectCategories, projectData } from "../../data/card-data";

const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const ProjectsSection = () => {
  const [selected, setSelected] = useState(0);
  const [chunkSize, setChunkSize] = useState(3);

  // Cards per slide: 1 on phones, 2 on tablets, 3 on desktop (Tailwind sm / lg breakpoints)
  useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => setChunkSize(lg.matches ? 3 : sm.matches ? 2 : 1);
    update();
    sm.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, []);

  return (
    <Section
      id="projects"
      eyebrow="Before & beside work"
      title="Earlier projects"
      subtitle="Personal, university and bootcamp projects, plus UI/UX and event design from my student years."
    >
      <Reveal>
        <div className="mb-8 flex flex-wrap gap-3">
          {projectCategories.map((category, i) => (
            <button
              key={category}
              type="button"
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
              className={`rounded-full border border-white/20 px-5 py-1.5 text-sm text-white backdrop-blur-md transition ${
                selected === i ? "bg-white/30" : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* key resets the carousel to slide 1 when switching category */}
        <Carousel key={`${selected}-${chunkSize}`}>
          {chunkArray(projectData[selected], chunkSize).map((chunk, chunkIndex) => (
            <div
              key={chunkIndex}
              className="grid h-full gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {chunk.map((project) => (
                <Card key={project.title} {...project} />
              ))}
            </div>
          ))}
        </Carousel>
      </Reveal>
    </Section>
  );
};

export default ProjectsSection;
