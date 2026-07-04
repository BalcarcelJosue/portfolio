"use client";

import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-6 pb-24 md:px-18 md:pb-30">
      <div className="mb-12 flex items-center gap-4 md:mb-14" aria-hidden="true">
        <div className="h-0 flex-1 border-t-[1.5px] border-ink" />
        <span className="font-mono text-[11px] tracking-wide text-steel">§</span>
        <div className="h-0 flex-1 border-t-[1.5px] border-ink" />
      </div>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <PhotoFrame label="casual/personal shot" aspect="tall" />
          <span className="mt-2.5 block font-mono text-[11px] tracking-wide text-steel">
            FIG. 6 — OFF THE CLOCK
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="mb-3 block font-mono text-sm tracking-wide text-blueprint">04</span>
          <h2 className="mb-4 font-display text-[clamp(32px,4vw,48px)] font-bold tracking-tight">
            About
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mb-5 max-w-[58ch] text-base text-[#3A3D44]">
              {p}
            </p>
          ))}

          <div className="mt-9 grid grid-cols-1 gap-6 border-t border-steel-line pt-7 sm:grid-cols-3">
            {about.skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2.5 font-mono text-[11px] tracking-wide text-blueprint">
                  {group.label}
                </p>
                <p className="text-[13px] leading-relaxed text-ink">{group.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
