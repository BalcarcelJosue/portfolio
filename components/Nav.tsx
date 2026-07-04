"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-100 flex items-center justify-between border-b border-steel-line px-6 py-5 transition-colors duration-300 md:px-18 ${
        open
          ? "bg-paper"
          : scrolled
            ? "bg-paper/96 backdrop-blur-md"
            : "bg-paper/82 backdrop-blur-md"
      }`}
    >
      <a
        href="#top"
        className="border-[1.5px] border-ink px-2.5 py-1 font-mono text-lg font-semibold tracking-wide"
      >
        JB
      </a>

      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col gap-1.5 p-1 md:hidden"
      >
        <span
          className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 flex flex-col items-start gap-7 bg-paper px-6 py-10 transition-transform duration-300 md:static md:flex-row md:items-center md:gap-9 md:bg-transparent md:p-0 md:transition-none ${
          open ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="group relative flex items-center gap-2 font-mono text-xl text-ink md:text-sm md:tracking-wide"
          >
            <span className="text-xs text-steel">{link.num}</span>
            {link.label}
            <span className="absolute -bottom-0.5 left-0 hidden h-px w-0 bg-blueprint transition-all duration-250 group-hover:w-full md:block" />
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-3 border border-ink bg-ink px-4 py-2 font-mono text-sm text-paper transition-colors hover:border-blueprint hover:bg-blueprint md:mt-0"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
