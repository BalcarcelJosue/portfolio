"use client";

import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame";
import { buildLog, type BuildLogStatus } from "@/lib/content";

const statusColor: Record<BuildLogStatus, string> = {
  competed: "text-ok",
  failed: "text-fail",
  shelved: "text-steel",
  "in-progress": "text-hazard",
};

export default function BuildLog() {
  return (
    <section id="combat" className="bg-ink pt-14 pb-24 text-paper md:pt-16 md:pb-30">
      <div className="mx-auto max-w-[1180px] px-6 md:px-18">
        <div className="mb-16">
          <span className="mb-3 block font-mono text-sm tracking-wide text-hazard">02</span>
          <h2 className="mb-4 font-display text-[clamp(32px,4vw,48px)] font-bold tracking-tight">
            Build Log: Melvin
          </h2>
          <p className="text-base text-[#A8ACB5]">
            Seven iterations, NHRL 3lb class. Each entry is what actually happened — including
            the failures.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {buildLog.map((entry, i) => (
            <motion.article
              key={entry.rev}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="border border-[#2A2F38] bg-[#1A1E25] p-6 md:p-8"
            >
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="bg-hazard px-2.5 py-1 font-mono text-xs tracking-wide text-ink">
                  {entry.rev}
                </span>
                <h3 className="font-display text-2xl font-semibold">{entry.title}</h3>
                <span
                  className={`ml-auto border border-current px-2.5 py-1 font-mono text-[11px] tracking-wide ${statusColor[entry.status]}`}
                >
                  {entry.statusLabel}
                </span>
              </div>

              <div
                className={
                  entry.photoSrc2 ||
                  entry.photoLabel2 ||
                  (entry.photoSrc && entry.videoSrc)
                    ? "grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr_300px]"
                    : "grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]"
                }
              >
                <div className="flex flex-col gap-4">
                  {!entry.photoSrc && entry.videoSrc ? (
                    <PhotoFrame
                      label={entry.videoLabel ?? entry.photoLabel}
                      src={entry.videoPoster}
                      videoSrc={entry.videoSrc}
                      mediaPosition={entry.videoPosition}
                      dark
                      aspect={entry.photoAspect ?? "tall"}
                    />
                  ) : (
                    <PhotoFrame
                      label={entry.photoLabel}
                      src={entry.photoSrc}
                      dark
                      aspect={entry.photoAspect ?? "square"}
                    />
                  )}
                  {entry.photoSrc && entry.videoSrc && (
                    <div className={entry.photoSrc2 ? undefined : "lg:hidden"}>
                      <PhotoFrame
                        label={entry.videoLabel ?? entry.photoLabel}
                        src={entry.videoPoster}
                        videoSrc={entry.videoSrc}
                        mediaPosition={entry.videoPosition}
                        dark
                        aspect="tall"
                      />
                    </div>
                  )}
                  {(entry.photoSrc2 || entry.photoLabel2) && (
                    <div className="lg:hidden">
                      <PhotoFrame
                        label={entry.photoLabel2 ?? entry.photoLabel}
                        src={entry.photoSrc2}
                        dark
                        aspect={entry.photoAspect ?? "square"}
                      />
                    </div>
                  )}
                </div>

                <div>
                  {entry.body.map((p, idx) => (
                    <p key={idx} className="mb-4 text-[15px] text-[#C4C7CE] last:mb-0">
                      {p}
                    </p>
                  ))}

                  {entry.detailLabel && (
                    <p className="mt-5 mb-2.5 font-mono text-[11px] tracking-wide text-hazard">
                      {entry.detailLabel}
                    </p>
                  )}

                  {entry.list && (
                    <ul className="flex flex-col gap-2">
                      {entry.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="relative pl-4.5 text-sm text-[#C4C7CE] before:absolute before:left-0 before:text-hazard before:content-['—']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.detailBody && (
                    <p className="text-[15px] text-[#C4C7CE]">{entry.detailBody}</p>
                  )}
                </div>

                {entry.photoSrc2 || entry.photoLabel2 ? (
                  <div className="hidden lg:block">
                    <PhotoFrame
                      label={entry.photoLabel2 ?? entry.photoLabel}
                      src={entry.photoSrc2}
                      dark
                      aspect={entry.photoAspect ?? "square"}
                    />
                  </div>
                ) : entry.photoSrc && entry.videoSrc ? (
                  <div className="hidden lg:block">
                    <PhotoFrame
                      label={entry.videoLabel ?? entry.photoLabel}
                      src={entry.videoPoster}
                      videoSrc={entry.videoSrc}
                      mediaPosition={entry.videoPosition}
                      dark
                      aspect="tall"
                    />
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
