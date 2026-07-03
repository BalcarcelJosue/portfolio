"use client";

import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1180px] px-6 py-24 md:px-18 md:py-30">
      <div className="mb-16 max-w-[640px]">
        <span className="mb-3 block font-mono text-sm tracking-wide text-blueprint">03</span>
        <h2 className="mb-4 font-display text-[clamp(32px,4vw,48px)] font-bold tracking-tight">
          Experience
        </h2>
        <p className="max-w-[52ch] text-base text-steel">
          Internships, industry work, and where the tools got real.
        </p>
      </div>

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <motion.article
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid grid-cols-1 items-start gap-8 border-t border-steel-line py-10 md:grid-cols-[320px_1fr] md:gap-10"
          >
            <PhotoFrame
              label={job.photoLabel}
              src={job.photoSrc}
              aspect={job.photoAspect ?? "wide"}
            />
            <div>
              <p className="mb-2.5 font-mono text-xs tracking-wide text-blueprint">
                {job.meta}
              </p>
              <h3 className="mb-3.5 font-display text-2xl font-semibold">{job.company}</h3>
              <p className="mb-5 max-w-[60ch] text-[15px] text-[#3A3D44]">{job.body}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-blueprint px-2.5 py-1.5 font-mono text-[11px] tracking-wide text-blueprint"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
