import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpIcon } from "./Icons";

/** Round button in the bottom-right corner, shown once the hero is scrolled past. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          className="fixed bottom-5 right-5 z-40 flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#2e79b2]/80 text-white shadow-lg shadow-black/40 backdrop-blur-md transition-colors hover:bg-[#2e79b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#52a5e4] sm:bottom-8 sm:right-8"
        >
          <ArrowUpIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
