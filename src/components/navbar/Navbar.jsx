import { motion } from "framer-motion";

const navbarVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Navbar = () => {
  const items = ["Home", "About", "Projects", "Contact"];

  return (
    <motion.header
      className="fixed left-1/2 transform -translate-x-1/2 pt-8 hidden lg:block"
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      <ul className="py-2 px-20 flex gap-12 text-white font-light text-sm bg-white rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-white border-opacity-20">
        {items.map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
      </ul>
    </motion.header>
  );
};

export default Navbar;
