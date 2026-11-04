import { useState } from "react";
import { motion } from "motion/react";

const SWIPE_THRESHOLD = 80;

const ArrowButton = ({ direction, onClick }) => (
  <button
    type="button"
    aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 grid place-items-center size-12 rounded-lg text-white transition hover:bg-white/10 active:bg-white/30 ${
      direction === "prev" ? "left-0" : "right-0"
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          direction === "prev"
            ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        }
      />
    </svg>
  </button>
);

/**
 * Minimal slide carousel built on motion.
 * Each child is one slide. Supports arrows, dots and swipe/drag.
 */
const Carousel = ({ children, className = "" }) => {
  const slides = Array.isArray(children) ? children : [children];
  const count = slides.length;
  const [index, setIndex] = useState(0);

  const goTo = (next) => setIndex(((next % count) + count) % count);

  const handleDragEnd = (_event, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(index + 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(index - 1);
  };

  return (
    <div className={`relative w-full px-12 sm:px-16 ${className}`}>
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          drag={count > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {slides.map((slide, i) => (
            // inert: off-screen slides are hidden from screen readers and
            // their links can't be reached with Tab
            <div key={i} className="w-full shrink-0" inert={i !== index}>
              {slide}
            </div>
          ))}
        </motion.div>
      </div>

      {count > 1 && (
        <>
          <ArrowButton direction="prev" onClick={() => goTo(index - 1)} />
          <ArrowButton direction="next" onClick={() => goTo(index + 1)} />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
                className={`h-1 rounded-2xl transition-all ${
                  i === index ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
