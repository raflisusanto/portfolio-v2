import { Carousel } from "@material-tailwind/react";
import ImageTest from "../../assets/image-1.jpg";
import BackgroundFlipped from "../background/BackgroundFlipped";
import Card from "../ui/Card";
import Chip from "../ui/Chip";

import { useState } from "react";

const ProjectsSection = () => {
  const [selectedChip, setSelectedChip] = useState(0);

  const chipOnClickHandler = (newValue) => {
    setSelectedChip(newValue);
  };

  const setChipOpacity = (selected) => {
    if (selectedChip === selected) {
      return "bg-opacity-30 hover:bg-opacity-30";
    }
    return "bg-opacity-10 hover:bg-opacity-20";
  };

  return (
    <section id="Projects" className="h-screen">
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
            name="FE/Mobile Development"
            className={`mt-10 ${setChipOpacity(0)}`}
            onClick={(_) => chipOnClickHandler(0)}
          />
          <Chip
            name="Machine Learning"
            className={`mt-10 ${setChipOpacity(1)}`}
            onClick={(_) => chipOnClickHandler(1)}
          />
          <Chip
            name="Graphic Design"
            className={`mt-10 ${setChipOpacity(2)}`}
            onClick={(_) => chipOnClickHandler(2)}
          />
        </div>
        <div className="flex mt-6 mx-32">
          <Carousel>
            <div className="flex justify-center items-center gap-6 pt-2 pb-16">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} img={ImageTest} title={index} />
              ))}
            </div>
            <div className="flex justify-center items-center gap-6 pt-2 pb-16">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} img={ImageTest} title={index} />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
