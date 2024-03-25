import { motion, useInView } from "framer-motion";
import { Carousel, IconButton } from "@material-tailwind/react";
import BackgroundFlipped from "../background/BackgroundFlipped";
import Card from "../ui/Card";
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
      return "bg-opacity-30 hover:bg-opacity-30";
    }
    return "bg-opacity-10 hover:bg-opacity-20";
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

  const leftArrowMargin =
    selectedChip === 2
      ? "!absolute top-2/4 left-4 -translate-y-2/4 ml-[20rem] md:ml-[12rem] xl:ml-[6rem]"
      : "!absolute top-2/4 left-4 -translate-y-2/4 ml-[10rem] md:ml-[0rem] xl:ml-[0rem]";

  const rightArrowMargin =
    selectedChip === 2
      ? "!absolute top-2/4 !right-4 -translate-y-2/4 mr-[20rem] md:mr-[12rem] xl:mr-[6rem]"
      : "!absolute top-2/4 !right-4 -translate-y-2/4 mr-[10rem] md:mr-[0rem] xl:mr-[0rem]";

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
          className="text-base xl:text-lg text-white text-opacity-80 font-light"
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          All my notable projects heheheh.
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
            onClick={(_) => chipOnClickHandler(0)}
          />
          <Chip
            name={`${chunkSize === 2 ? "Machine Learning" : "ML"}`}
            className={`${setChipOpacity(1)}`}
            onClick={(_) => chipOnClickHandler(1)}
          />
          <Chip
            name={`${chunkSize === 2 ? "Graphic Design" : "GD"}`}
            className={`${setChipOpacity(2)}`}
            onClick={(_) => chipOnClickHandler(2)}
          />
        </motion.div>
        <motion.div
          className="flex mt-6 mx-32"
          variants={projectVariants}
          initial="initial"
          whileInView="animate"
        >
          <Carousel
            key={selectedChip}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className={leftArrowMargin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className={rightArrowMargin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
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
