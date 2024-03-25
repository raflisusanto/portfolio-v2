import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import ArrowDownButton from "../button/ArrowDownButton";
import Socials from "./Socials";

const heroVariants = {
  initial: {
    y: 300,
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

const Hero = () => {
  return (
    <motion.div
      className="flex-col text-white justify-center text-center pt-44 px-10"
      variants={heroVariants}
      initial="initial"
      whileInView="animate"
    >
      <Socials />
      <motion.h1 className="text-4xl lg:text-5xl font-bold">
        <motion.span className="font-normal" variants={heroVariants}>
          Hi there,
        </motion.span>{" "}
        I'm Rafli Susanto
      </motion.h1>
      <motion.div variants={heroVariants}>
        <ReactTyped
          className="text-4xl lg:text-5xl font-bold pt-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
          strings={[
            "a Mobile Developer",
            "a Front-end Developer",
            "a Machine Learning Engineer",
          ]}
          typeSpeed={120}
          backSpeed={80}
          loop
        ></ReactTyped>
      </motion.div>
      <motion.p
        className="text-normal lg:text-xl font-light pt-8"
        variants={heroVariants}
      >
        Also a passionate Informatics Fresh Graduate with <br />
        1+ year of professional experience.
      </motion.p>
      <a href="#Projects">
        <motion.button
          className="mt-8 p-[3px] relative"
          variants={heroVariants}
        >
          <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg" />
          <motion.div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-500 text-white hover:bg-transparent">
            Check out my Projects
          </motion.div>
        </motion.button>
      </a>
      <br></br>
      <motion.div variants={heroVariants}>
        <ArrowDownButton />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
