"use client";

import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame";
import { featuredProjects } from "@/lib/content";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-[1180px] px-6 py-24 md:px-18 md:py-30">
      <div className="mb-16 max-w-[640px]">
        <span className="mb-3 block font-mono text-sm tracking-wide text-blueprint">01</span>
        <h2 className="mb-4 font-display text-[clamp(32px,4vw,48px)] font-bold tracking-tight">
          Featured Projects
        </h2>
        <p className="max-w-[52ch] text-base text-steel">
          Two builds that best show how I think: iterate fast, fail informatively, fix the
          real problem.
        </p>
      </div>

      <div className="flex flex-col">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`grid grid-cols-1 items-center gap-10 border-t border-steel-line py-14 md:grid-cols-2 md:gap-14 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <PhotoFrame
                label={project.photoLabel}
                src={project.photoSrc}
                aspect={project.photoAspect ?? "tall"}
              />
              <span className="mt-2.5 block font-mono text-[11px] tracking-wide text-steel">
                {project.figTag}
              </span>
            </div>

            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.08em] text-blueprint">
                {project.kicker}
              </p>
              <h3 className="mb-4 font-display text-[clamp(28px,3.2vw,42px)] font-bold">
                {project.title}
              </h3>
              <p
                className={`mb-6 max-w-[50ch] text-base ${
                  project.draft ? "italic text-fail" : "text-[#3A3D44]"
                }`}
              >
                {project.lede}
              </p>

              <ul className="mb-7 flex flex-col gap-2">
                {project.facts.map((fact) => (
                  <li
                    key={fact.label}
                    className="flex gap-2.5 border-b border-dotted border-steel-line pb-2 text-sm"
                  >
                    <span className="min-w-[130px] font-mono text-[11px] tracking-wide text-steel uppercase">
                      {fact.label}
                    </span>
                    {fact.value}
                  </li>
                ))}
              </ul>

              <a
                href={project.linkHref}
                className="border-b-[1.5px] border-ink pb-0.5 font-mono text-sm text-ink transition-colors hover:border-blueprint hover:text-blueprint"
              >
                {project.linkLabel} {project.draft ? "→" : "↓"}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
