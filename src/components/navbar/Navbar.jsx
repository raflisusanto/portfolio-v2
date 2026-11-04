import { motion } from "motion/react";
import { useEffect, useState } from "react";

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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed z-50 left-1/2 transform -translate-x-1/2 pt-8 transition-all duration-300 ease-in-out ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      } hidden lg:block`}
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      <ul className="py-2 px-20 flex gap-12 text-white font-light text-sm bg-white/10 rounded-2xl bg-clip-padding backdrop-blur-md border border-white/20">
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
