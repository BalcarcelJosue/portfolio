import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink px-6 pt-24 pb-8 text-paper md:px-18">
      <div className="mx-auto max-w-[1180px] pb-14 text-center">
        <h2 className="mb-4 font-display text-[clamp(38px,6vw,72px)] font-bold">
          Let&apos;s talk.
        </h2>
        <p className="mb-10 text-lg text-[#A8ACB5]">
          Open to Fall 2026 and Spring 2027 co-ops.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="border-b border-steel pb-1 font-mono text-sm text-paper transition-colors hover:border-hazard hover:text-hazard"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            className="border-b border-steel pb-1 font-mono text-sm text-paper transition-colors hover:border-hazard hover:text-hazard"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            className="border-b border-steel pb-1 font-mono text-sm text-paper transition-colors hover:border-hazard hover:text-hazard"
          >
            Résumé (PDF)
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-2 border-t border-[#2A2F38] pt-6 font-mono text-xs text-steel">
        <span>{profile.name} — {profile.location}</span>
        <span>Built from scratch, no templates.</span>
      </div>
    </footer>
  );
}
