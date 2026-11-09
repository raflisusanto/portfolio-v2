import { motion, useReducedMotion } from "motion/react";
import { ReactTyped } from "react-typed";
import codePanel from "../../assets/hero/ornament-code-panel.webp";
import codeWindow from "../../assets/hero/ornament-code-window.webp";
import codeTag from "../../assets/hero/ornament-code-tag.webp";
import Background from "../background/Background";
import { profile, stats } from "../../data/content";
import { glass } from "../ui/Section";
import { DocumentIcon, LinkedInIcon, MailIcon } from "../ui/Icons";

/** Decorative code ornaments floating in front of the portrait (from the old About section). */
const ornaments = [
  { src: codePanel, className: "-left-12 top-[52%] w-24", duration: 4.5, delay: 0 },
  { src: codeWindow, className: "-right-14 bottom-[12%] w-44", duration: 5.5, delay: 0.8 },
  { src: codeTag, className: "-bottom-6 left-6 w-28", duration: 5, delay: 1.6 },
];

const FloatingOrnament = ({ src, className, duration, delay }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute drop-shadow-2xl ${className}`}
      animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-svh items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:pt-32"
  >
    <Background />
    {/* Fade the hero background into the page color */}
    <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-b from-transparent to-[#061e33]" />

    <motion.div
      className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto]"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
    >
      <div className="text-white">
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
        >
          <span className="font-normal text-white/80">Hi, I&apos;m </span>
          {profile.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-2xl font-semibold sm:text-3xl"
        >
          <span className="bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">
            {profile.title}
          </span>
          <span className="hidden text-white/50 sm:inline"> · </span>
          {/* Own line on phones so the typing never re-wraps the text below */}
          <ReactTyped
            className="block min-h-[1.25em] text-white sm:inline"
            strings={profile.specialties}
            typeSpeed={70}
            backSpeed={40}
            backDelay={1600}
            loop
          />
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg font-light text-white/80"
        >
          {profile.tagline}{" "}
          <span className="font-medium text-white">{profile.relocation}.</span>
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="relative rounded-lg bg-linear-to-r from-blue-600 to-green-500 p-0.5"
          >
            <span className="flex items-center gap-2 rounded-md bg-black px-6 py-2.5 font-medium transition duration-300 hover:bg-transparent">
              <DocumentIcon /> Download CV
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`${glass} flex items-center gap-2 px-5 py-2.5 transition hover:bg-white/15`}
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className={`${glass} flex items-center gap-2 px-5 py-2.5 transition hover:bg-white/15`}
          >
            <MailIcon /> {profile.email}
          </a>
        </motion.div>

        <motion.dl
          variants={fadeUp}
          className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-[#52a5e4]/60 pl-3">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold">{stat.value}</dd>
              <dd className="text-sm leading-snug text-white/60">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div variants={fadeUp} className="hidden lg:block">
        <div className="relative">
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-4xl bg-linear-to-br from-[#2e79b2] to-[#183955]" />
          <img
            src={profile.portrait}
            alt={profile.name}
            className={`${glass} w-80 rounded-4xl object-cover`}
          />
          {ornaments.map((ornament) => (
            <FloatingOrnament key={ornament.src} {...ornament} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
