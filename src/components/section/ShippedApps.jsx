import { motion } from "motion/react";
import { shippedApps } from "../../data/content";
import Section, { glass } from "../ui/Section";
import { ArrowUpIcon, ArrowUpRightIcon } from "../ui/Icons";

const ShippedApps = () => (
  <Section
    eyebrow="In production"
    title="Apps I've worked on"
    subtitle="Client apps for well-known brands, live on Google Play, the App Store and Huawei AppGallery. On the ones I didn't lead, I worked on the features listed."
    className="pt-0 lg:pt-0"
  >
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {shippedApps.map((app, i) => (
        <motion.li
          key={app.name}
          className={`${glass} flex h-full flex-col p-5`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: (i % 3) * 0.08 }}
        >
            <div className="flex items-center gap-4">
              <img
                src={app.icon}
                alt=""
                loading="lazy"
                className="size-14 shrink-0 rounded-2xl bg-white"
              />
              <div className="min-w-0">
                <h3 className="truncate font-semibold text-white">{app.name}</h3>
                <p className="text-sm text-white/60">{app.client}</p>
              </div>
              {app.led && (
                <span className="ml-auto shrink-0 self-start rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-medium text-green-300">
                  Tech lead
                </span>
              )}
            </div>
            <p className="mt-4 flex-1 text-sm text-white/75">{app.role}</p>
            <p className="mt-3 text-xs font-medium text-[#52a5e4]">{app.tech}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {app.caseStudy && (
                <a
                  href={`#case-${app.caseStudy}`}
                  aria-label={`${app.name} case study`}
                  className="inline-flex items-center gap-1 rounded-md bg-[#2e79b2] px-2.5 py-1 text-xs font-medium text-white transition hover:bg-[#52a5e4]"
                >
                  Case study <ArrowUpIcon className="size-3" />
                </a>
              )}
              {app.stores.map((store) => (
                <a
                  key={store.href}
                  href={store.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${app.name} on ${store.store}`}
                  className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-xs text-white transition hover:bg-white/20"
                >
                  {store.store} <ArrowUpRightIcon className="size-3" />
                </a>
              ))}
            </div>
        </motion.li>
      ))}
    </ul>
  </Section>
);

export default ShippedApps;
