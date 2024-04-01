import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <motion.div
      className="z-50 fixed top-0 left-0 bottom-0 w-400 bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-white border-opacity-20 block lg:hidden"
      variants={variants}
      animate={open ? "open" : "closed"}
    >
      <ToggleButton setOpen={setOpen} />
      <Links />
    </motion.div>
  );
};

export default Sidebar;
