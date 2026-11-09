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
  const [chunkSize, setChunkSize] = useState(2);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 720px)");
    const update = () => setChunkSize(query.matches ? 1 : 2);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <Section
      id="projects"
      eyebrow="Before & beside work"
      title="Earlier projects"
      subtitle="Personal, university and bootcamp projects, with source code on GitHub."
    >
      <Reveal>
        <div className="mb-6 flex flex-wrap gap-3">
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
              className="flex items-start justify-center gap-6 pb-16 pt-2"
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
