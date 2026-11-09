import { useState } from "react";
import { motion } from "motion/react";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at calc(100% - 51px) 51px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at calc(100% - 51px) 51px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="z-50 fixed top-0 right-0 bottom-0 bg-white/10 bg-clip-padding backdrop-blur-md border border-white/20 block lg:hidden"
      variants={variants}
      // Start open and animate closed on first load
      initial="open"
      animate={open ? "open" : "closed"}
    >
      <ToggleButton setOpen={setOpen} />
      {/* inert while closed so hidden links aren't reachable with Tab */}
      <div inert={!open}>
        <Links onNavigate={() => setOpen(false)} />
      </div>
    </motion.div>
  );
};

export default Sidebar;
