import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { navItems } from "../../data/content";

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
      <nav aria-label="Main">
        <ul className="flex items-center gap-10 rounded-2xl border border-white/20 bg-white/10 bg-clip-padding px-10 py-2.5 text-sm font-light text-white backdrop-blur-md">
          <li>
            <a href="#home" className="font-semibold">
              Rafli
            </a>
          </li>
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${item.id}`}>{item.label}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
