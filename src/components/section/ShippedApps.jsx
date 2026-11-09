import { motion } from "motion/react";
import { shippedApps } from "../../data/content";
import Section, { glass } from "../ui/Section";
import { ArrowUpRightIcon } from "../ui/Icons";

const ShippedApps = () => (
  <Section
    eyebrow="In production"
    title="Apps I've worked on"
    subtitle="Client apps for well-known brands, live on Google Play, the App Store and Huawei AppGallery."
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
            </div>
            <p className="mt-4 flex-1 text-sm text-white/75">{app.role}</p>
            <div className="mt-4 flex flex-wrap gap-2">
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
