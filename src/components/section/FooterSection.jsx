import { motion } from "framer-motion";

const FooterSection = () => {
  const footerVariants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <footer id="Contact" className="h-36">
      <div className="absolute -z-[8] bg-black h-36 w-full"></div>
      <motion.div
        className="flex flex-col items-end mr-10"
        variants={footerVariants}
        initial="initial"
        whileInView="animate"
      >
        <h1 className="text-white mt-10 text-opacity-80 font-bold">
          Contact Me
        </h1>
        <div className="flex justify-center items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 448 448"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400 0H48C35.2696 0 23.0606 5.05713 14.0589 14.0589C5.05713 23.0606 0 35.2696 0 48L0 400C0 412.73 5.05713 424.939 14.0589 433.941C23.0606 442.943 35.2696 448 48 448H400C412.73 448 424.939 442.943 433.941 433.941C442.943 424.939 448 412.73 448 400V48C448 35.2696 442.943 23.0606 433.941 14.0589C424.939 5.05713 412.73 0 400 0ZM383.61 307.37L368.61 372.37C367.848 375.675 365.989 378.624 363.335 380.736C360.682 382.848 357.391 383.999 354 384C194 384 64 254.29 64 94C64.119 90.6405 65.3132 87.408 67.4068 84.778C69.5003 82.1479 72.3828 80.2593 75.63 79.39L140.63 64.39C141.739 64.1555 142.867 64.025 144 64C146.901 64.1464 149.709 65.0666 152.134 66.6651C154.559 68.2635 156.512 70.4819 157.79 73.09L187.79 143.09C188.525 144.977 188.934 146.976 189 149C188.756 153.44 186.781 157.608 183.5 160.61L145.61 191.61C168.568 240.269 207.731 279.432 256.39 302.39L287.39 264.5C290.392 261.219 294.56 259.244 299 259C301.024 259.065 303.023 259.474 304.91 260.21L374.91 290.21C377.519 291.486 379.739 293.439 381.338 295.864C382.936 298.289 383.856 301.099 384 304C383.98 305.133 383.849 306.262 383.61 307.37Z"
              fill="white"
            />
          </svg>

          <h1 className="text-white text-opacity-80">+62 857 4962 3626</h1>
        </div>
        <h1 className="text-white text-opacity-80 font-light mt-2">
          © Rafli 2024
        </h1>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
