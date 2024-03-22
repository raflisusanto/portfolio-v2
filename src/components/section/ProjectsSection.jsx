import { Carousel, IconButton } from "@material-tailwind/react";
import BackgroundFlipped from "../background/BackgroundFlipped";
import Card from "../ui/Card";
import Chip from "../ui/Chip";
import { projectData } from "../../data/card-data";

import { useState, useEffect } from "react";

const ProjectsSection = () => {
  const [selectedChip, setSelectedChip] = useState(0);
  const [chunkSize, setChunkSize] = useState(2);

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
      ? "!absolute top-2/4 left-4 -translate-y-2/4 ml-[27rem] md:ml-[19rem] xl:ml-[10rem]"
      : "!absolute top-2/4 left-4 -translate-y-2/4 ml-[14rem] md:ml-[5rem] xl:ml-[0rem]";

  const rightArrowMargin =
    selectedChip === 2
      ? "!absolute top-2/4 !right-4 -translate-y-2/4 mr-[27rem] md:mr-[19rem] xl:mr-[10rem]"
      : "!absolute top-2/4 !right-4 -translate-y-2/4 mr-[14rem] md:mr-[5rem] xl:mr-[0rem]";

  return (
    <section id="Projects" className="h-[60rem]">
      <BackgroundFlipped inset="20" />
      <div className="flex justify-center pt-16 flex-col items-center">
        <h1 className="text-3xl text-white font-bold">
          My{" "}
          <span className="underline underline-offset-4 text-[#52a5e4]">
            Projects
          </span>
        </h1>
        <h5 className="text-white text-opacity-80 font-light">
          All my notable projects heheheh.
        </h5>
        <div className="flex gap-4">
          <Chip
            name={`${chunkSize === 2 ? "FE/Mobile Development" : "FE/MD"}`}
            className={`mt-10 ${setChipOpacity(0)}`}
            onClick={(_) => chipOnClickHandler(0)}
          />
          <Chip
            name={`${chunkSize === 2 ? "Machine Learning" : "ML"}`}
            className={`mt-10 ${setChipOpacity(1)}`}
            onClick={(_) => chipOnClickHandler(1)}
          />
          <Chip
            name={`${chunkSize === 2 ? "Graphic Design" : "GD"}`}
            className={`mt-10 ${setChipOpacity(2)}`}
            onClick={(_) => chipOnClickHandler(2)}
          />
        </div>
        <div className="flex mt-6 mx-32">
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
