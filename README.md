# Josué Balcárcel — Engineering Portfolio

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `lib/content.ts` — **all site copy lives here**. Edit this file to change any text,
  add projects, update experience, etc. — no need to touch component code.
- `components/` — one component per section (Hero, FeaturedProjects, BuildLog,
  Experience, About, Footer, Nav) plus a shared `PhotoFrame` placeholder component.
- `app/page.tsx` — assembles the sections in order.
- `app/globals.css` — design tokens (colors, fonts) as CSS variables, wired into
  Tailwind via `@theme inline`.

## Adding real photos

Every image slot is currently a labeled placeholder (`<PhotoFrame label="..." />`).
To swap in a real photo:

1. Drop the image file into `public/images/`.
2. In the relevant component (or in `lib/content.ts` if you add an `image` field),
   replace `<PhotoFrame label="..." />` with a Next.js `<Image>` component:

```tsx
import Image from "next/image";

<Image
  src="/images/melvin-v1.jpg"
  alt="Melvin V1 on scale"
  width={800}
  height={600}
  className="border-[1.5px] border-ink object-cover"
/>
```

## Known gaps (flagged in content)

- **Résumé PDF**: add your resume to `public/resume.pdf` — the link is already wired up.
- **LinkedIn URL**: update `profile.linkedin` in `lib/content.ts`.
- **Dual-axis solar tracker**: the project card is drafted but marked `draft: true` —
  fill in `lib/content.ts` → `featuredProjects` with the real story.
- **Melvin V6**: same deal — `buildLog` has a placeholder entry marked `isDraft: true`.

## Deploying

Easiest path is [Vercel](https://vercel.com) (same company as Next.js — free tier,
connects directly to a GitHub repo, auto-deploys on push). Push this project to a
GitHub repo, import it on Vercel, done. Custom domain can be attached afterward.

## Design notes

Visual identity: a "blueprint / spec-sheet" language pulled from the subject matter
itself — technical drawing blue, hazard-yellow (Melvin's actual color scheme), CNC/CAD
grid lines in the hero, and the combat robot section built as a literal build-log with
revision tags (REV 0–5) since that's how the real content is structured.
