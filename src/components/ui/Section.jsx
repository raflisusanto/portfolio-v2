import { motion } from "motion/react";

/** Fades content up when it scrolls into view (once). */
export const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

/** Standard page section: anchor id, heading and consistent spacing. */
const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24 ${className}`}>
    <div className="mx-auto max-w-6xl">
      <Reveal className="mb-10 lg:mb-14">
        {eyebrow && (
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#52a5e4]">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold text-white lg:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export const glass =
  "rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md";

export const Tag = ({ children }) => (
  <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

export default Section;
