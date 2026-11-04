import { motion } from "motion/react";
import BackgroundFlipped from "../background/BackgroundFlipped";
import Card from "../ui/Card";
import Carousel from "../ui/Carousel";
import Chip from "../ui/Chip";
import { projectData } from "../../data/card-data";

import { useState, useEffect } from "react";

const ProjectsSection = () => {
  const [selectedChip, setSelectedChip] = useState(0);
  const [chunkSize, setChunkSize] = useState(2);

  const titleVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const projectVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chipOnClickHandler = (newValue) => {
    setSelectedChip(newValue);
  };

  const setChipOpacity = (selected) => {
    if (selectedChip === selected) {
      return "bg-white/30";
    }
    return "bg-white/10 hover:bg-white/20";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 720px)").matches) {
        setChunkSize(1);
      } else {
        setChunkSize(2);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="Projects" className="h-[60rem]">
      <BackgroundFlipped inset="20" />
      <div className="flex justify-center pt-12 flex-col items-center">
        <motion.h1
          className="text-2xl xl:text-3xl text-white font-bold"
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          My{" "}
          <span className="underline underline-offset-4 text-[#52a5e4]">
            Projects
          </span>
        </motion.h1>
        <motion.h5
          className="text-base xl:text-lg text-white/80 font-light"
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          All my notable personal projects heheheh.
        </motion.h5>
        <motion.div
          className="flex gap-4 mt-6"
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
        >
          <Chip
            name={`${chunkSize === 2 ? "FE/Mobile Development" : "FE/MD"}`}
            className={`${setChipOpacity(0)}`}
            onClick={() => chipOnClickHandler(0)}
          />
          <Chip
            name={`${chunkSize === 2 ? "Machine Learning" : "ML"}`}
            className={`${setChipOpacity(1)}`}
            onClick={() => chipOnClickHandler(1)}
          />
          <Chip
            name={`${chunkSize === 2 ? "Graphic Design" : "GD"}`}
            className={`${setChipOpacity(2)}`}
            onClick={() => chipOnClickHandler(2)}
          />
        </motion.div>
        <motion.div
          className="flex justify-center mt-6 w-full max-w-6xl"
          variants={projectVariants}
          initial="initial"
          whileInView="animate"
        >
          {/* key resets the carousel to slide 1 when switching category */}
          <Carousel key={`${selectedChip}-${chunkSize}`}>
            {chunkArray(projectData[selectedChip], chunkSize).map(
              (chunk, chunkIndex) => (
                <div
                  key={chunkIndex}
                  className="flex justify-center items-start gap-6 pt-2 pb-16"
                >
                  {chunk.map((project, projectIndex) => (
                    <Card
                      key={projectIndex}
                      img={project.img}
                      title={project.title}
                      desc={project.desc}
                      techStack={project.techStack}
                      githubLink={project.githubLink}
                      previewLink={project.previewLink}
                      apkLink={project.apkLink}
                      colabLink={project.colabLink}
                      figmaLink={project.figmaLink}
                      mediumLink={project.mediumLink}
                    />
                  ))}
                </div>
              )
            )}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
