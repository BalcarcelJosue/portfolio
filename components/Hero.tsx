"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame";
import { profile, heroSpecs } from "@/lib/content";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const el = gridRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <header
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-10 md:pt-32"
    >
      {/* Cursor-reactive blueprint grid */}
      <div
        ref={gridRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-45 transition-[mask-position] duration-200"
        style={
          {
            "--mx": "30%",
            "--my": "40%",
            backgroundImage:
              "linear-gradient(#D8D5CC 1px, transparent 1px), linear-gradient(90deg, #D8D5CC 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            WebkitMaskImage:
              "radial-gradient(ellipse 480px 380px at var(--mx) var(--my), black 40%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 480px 380px at var(--mx) var(--my), black 40%, transparent 90%)",
          } as React.CSSProperties
        }
      />

      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-18">
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-xs tracking-[0.12em] text-blueprint"
        >
          {profile.eyebrow}
        </motion.p>

        <h1 className="mb-7 font-display text-[clamp(52px,10vw,108px)] leading-[0.95] font-bold tracking-tight text-balance">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {profile.firstName}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {profile.lastName}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-9 max-w-[46ch] text-[clamp(16px,1.6vw,19px)] text-[#3A3D44]"
        >
          {profile.tagline} {profile.subtagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-14 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 border-[1.5px] border-ink bg-ink px-6 py-3.5 font-mono text-sm tracking-wide text-paper transition-colors hover:border-blueprint hover:bg-blueprint"
          >
            View the work
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            className="border-[1.5px] border-ink px-6 py-3.5 font-mono text-sm tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Résumé (PDF)
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex max-w-[520px] flex-col gap-3.5 border-t border-steel-line pt-6"
        >
          {heroSpecs.map((spec) => (
            <div key={spec.label} className="grid grid-cols-[110px_1fr] items-baseline gap-3">
              <span className="font-mono text-[11px] tracking-wide text-steel">
                {spec.label}
              </span>
              <span className="text-sm text-ink">{spec.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={ready ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 order-first max-w-[280px] justify-self-center md:order-last md:max-w-none md:justify-self-auto"
      >
        <PhotoFrame label="portrait or robot action shot" aspect="square" />
        <span className="mt-2.5 block font-mono text-[11px] tracking-wide text-steel">
          FIG. 0 — PROFILE
        </span>
      </motion.div>
      </div>
    </header>
  );
}
