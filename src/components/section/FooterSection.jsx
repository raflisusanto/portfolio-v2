import { profile } from "../../data/content";
import { Reveal, glass } from "../ui/Section";
import { DocumentIcon, LinkedInIcon, MailIcon, MapPinIcon } from "../ui/Icons";

const FooterSection = () => (
  <footer id="contact" className="scroll-mt-24 px-5 pb-10 pt-20 sm:px-8 lg:pt-28">
    <div className="mx-auto max-w-6xl">
      <Reveal>
        <div className={`${glass} px-6 py-12 text-center sm:px-12`}>
          <p className="text-sm font-medium uppercase tracking-widest text-[#52a5e4]">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white lg:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            {profile.relocation}. The fastest way to reach me is email or
            LinkedIn.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl"
          >
            <MailIcon className="size-6 text-[#52a5e4]" />
            {profile.email}
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${glass} flex items-center gap-2 px-5 py-2.5 text-white transition hover:bg-white/15`}
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className={`${glass} flex items-center gap-2 px-5 py-2.5 text-white transition hover:bg-white/15`}
            >
              <DocumentIcon /> CV
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-white/60">
            <MapPinIcon /> {profile.location}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>App names, icons and screenshots belong to their respective owners.</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
