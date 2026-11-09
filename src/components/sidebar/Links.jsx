import { motion } from "motion/react";
import { navItems } from "../../data/content";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ onNavigate }) => {
  const items = [{ id: "home", label: "Home" }, ...navItems];

  return (
    <motion.div
      className="flex flex-col text-white w-60 justify-center pl-10 pt-4"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          className="pt-3 font-light"
          href={`#${item.id}`}
          key={item.id}
          onClick={onNavigate}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
