import { motion } from "motion/react";
import { ReactTyped } from "react-typed";
import Background from "../background/Background";
import { profile, stats } from "../../data/content";
import { glass } from "../ui/Section";
import {
  DocumentIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "../ui/Icons";

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
        <motion.p
          variants={fadeUp}
          className={`${glass} inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 px-4 py-1.5 text-sm text-white/85`}
        >
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <MapPinIcon className="size-4 text-[#52a5e4]" />
            {profile.location}
          </span>
          <span className="hidden text-white/40 sm:inline">·</span>
          <span className="whitespace-nowrap font-medium text-white">
            {profile.relocation}
          </span>
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
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
          {profile.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="relative rounded-lg bg-linear-to-r from-blue-600 to-green-500 p-[2px]"
          >
            <span className="flex items-center gap-2 rounded-[6px] bg-black px-6 py-2.5 font-medium transition duration-300 hover:bg-transparent">
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
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-linear-to-br from-[#2e79b2] to-[#183955]" />
          <img
            src={profile.portrait}
            alt={profile.name}
            className={`${glass} w-80 rounded-[2rem] object-cover`}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
