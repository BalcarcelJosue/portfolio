// All portfolio content lives here. Edit this file to update copy —
// no need to touch component code.

export const profile = {
  name: "Josué Balcárcel",
  firstName: "Josué",
  lastName: "Balcárcel",
  tagline:
    "I design, machine, and break things on purpose. Then I fix them better.",
  subtagline:
    "Combat robotics, CAD, and production engineering, documented like a lab notebook.",
  eyebrow: "MECHANICAL ENGINEERING — CASE WESTERN RESERVE UNIVERSITY",
  email: "jdb305@case.edu",
  linkedin: "https://www.linkedin.com/in/josuebalcarcel",
  resumeUrl: "/resume.pdf",
  location: "Cleveland, OH / Darien, CT",
  heroPhotoLabel: "Josué in the shop, holding a gear assembly",
  heroPhotoSrc: "/images/hero-portrait.jpg",
};

export const heroSpecs = [
  {
    label: "TOOLS",
    value: "SolidWorks (CSWA) · Fusion 360 · Inventor · AutoCAD",
  },
  {
    label: "FABRICATION",
    value: "CNC, plasma cutting, FDM/PETG/TPU printing, hand assembly",
  },
  {
    label: "CURRENTLY",
    value: "Seeking Fall 2026 / Spring 2027 co-ops",
  },
];

export type FeaturedProject = {
  id: string;
  kicker: string;
  title: string;
  lede: string;
  facts: { label: string; value: string }[];
  linkLabel: string;
  linkHref: string;
  figTag: string;
  photoLabel: string;
  photoSrc?: string;
  photoAspect?: "square" | "tall" | "wide" | "box";
  draft: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "melvin",
    kicker: "NHRL COMBAT ROBOTICS — TEAM LEAD",
    title: "Melvin",
    lede: "A 3lb combat robot rebuilt across seven iterations, from a first Fusion 360 model that never left the CAD file to a wheel-less shuffler version whose TPU chassis snagged an opponent's weapon and set their motor on fire.",
    facts: [
      { label: "Weight class", value: "2 lb 15.9 oz (3lb limit)" },
      { label: "Weapon", value: "Spinning drum, 1200kV brushless" },
      { label: "Drive", value: "2× Fingertech Mega Spark 2300kV" },
      { label: "Material evolution", value: "Aluminum → 3D-printed TPU" },
    ],
    linkLabel: "Read the full build log",
    linkHref: "#combat",
    figTag: "FIG. 1 — MELVIN V5, NHRL 3LB CLASS",
    photoLabel: "Melvin V5 — orange TPU chassis, shufflers + AR500 blades",
    photoSrc: "/images/melvin-hero.jpg",
    photoAspect: "box",
    draft: false,
  },
  {
    id: "solar-tracker",
    kicker: "TEAM DESIGN PROJECT — JAN–APR 2025",
    title: "Dual-Axis Solar Tracker",
    lede: "A two-axis solar tracking system co-developed in SolidWorks that follows the sun across both azimuth and elevation, increasing solar capture efficiency by an estimated 34% over a fixed-panel baseline. An Arduino compares readings from light sensors and drives the panel toward the brightest point in the sky. My focus was the mechanical design: drive assemblies, structural mounts, and a full GD&T-compliant drawing package ready for fabrication.",
    facts: [
      { label: "Axes", value: "2 (azimuth + elevation)" },
      { label: "Est. efficiency gain", value: "+34% vs. fixed panel" },
      { label: "Control", value: "Arduino + light sensors" },
      { label: "CAD", value: "SolidWorks assembly" },
      { label: "Documentation", value: "GD&T-compliant drawings" },
    ],
    linkLabel: "Get in touch about this build",
    linkHref: "#contact",
    figTag: "FIG. 2 — DUAL-AXIS TRACKER, SCHEMATIC VIEW",
    photoLabel: "Dual-axis solar tracker schematic illustration",
    photoSrc: "/images/solar-tracker-schematic.svg",
    draft: false,
  },
];

export type BuildLogStatus = "competed" | "failed" | "shelved" | "in-progress";

export type BuildLogEntry = {
  rev: string;
  title: string;
  status: BuildLogStatus;
  statusLabel: string;
  photoLabel: string;
  photoSrc?: string;
  photoAspect?: "square" | "tall" | "wide" | "box";
  photoAspectRatio?: string;
  photoLabel2?: string;
  photoSrc2?: string;
  videoSrc?: string;
  videoPoster?: string;
  videoLabel?: string;
  videoPosition?: string;
  body: string[];
  detailLabel?: string;
  list?: string[];
  detailBody?: string;
};

export const buildLog: BuildLogEntry[] = [
  {
    rev: "REV 0",
    title: "Pre-Melvin",
    status: "shelved" as BuildLogStatus,
    statusLabel: "Never competed",
    photoLabel: "Pre-Melvin — Fusion 360 CAD model",
    photoSrc: "/images/pre-melvin-cad.jpg",
    photoAspect: "wide" as const,
    body: [
      "First combat robot design, and the first time I ever opened a CAD package. Fusion 360's interface was intuitive enough to self-teach the fundamentals (sketches, constraints, basic assemblies) while building this. Never manufactured: I didn't have the shop access or know-how yet to take it from screen to metal. But turning sketches into a working 3D model was the moment that confirmed mechanical engineering was the right call. The image is a screenshot straight from the working file, construction geometry, stray 55° dimension callout and all.",
    ],
  },
  {
    rev: "REV 1",
    title: "Melvin V1",
    status: "competed" as BuildLogStatus,
    statusLabel: "NHRL — January 2023",
    photoLabel: "Melvin V1 on the scale — 2 lb 15.9 oz, under the 3lb cap",
    photoSrc: "/images/melvin-v1-scale.jpg",
    body: [
      "First iteration to actually reach competition. Drive came from two Fingertech Mega Spark brushless motors (2300kV); the weapon, a spinning drum inspired by BattleBots' Minotaur, ran off a 1200kV brushless motor. Every motor, ESC, and the battery connected through bullet connectors for fast field repairs. Final weigh-in: 2 lb 15.9 oz, under the 3lb cap after trimming the weapon and bottom plate.",
    ],
    detailLabel: "DESIGN PROCESS",
    list: [
      "Aluminum sheet chassis: light, and easy to cut on my high school's laser CNC",
      "Simple rectangular chassis, prioritizing assembly speed over optimization",
      "All components sketched and modeled in Fusion 360",
    ],
  },
  {
    rev: "REV 2",
    title: "Melvin V2",
    status: "competed" as BuildLogStatus,
    statusLabel: "NHRL — March 2023",
    photoLabel: 'Melvin V2 head-on — yellow "MELVIN" nameplate',
    photoSrc: "/images/melvin-v2-front.jpg",
    photoLabel2: "Melvin V2 three-quarter view, drum forward",
    photoSrc2: "/images/melvin-v2-angle.jpg",
    body: [
      "This round the robot got its name and its color scheme: bright yellow, a nod to its minion-like proportions. Chassis geometry moved to a pentagon profile with a smaller front cutout for a tighter weapon envelope; bearing holders were redesigned to match the new side-panel angles. Switched to rubber wheels for better traction over the previous iteration.",
    ],
  },
  {
    rev: "REV 3",
    title: "Melvin V3",
    status: "failed" as BuildLogStatus,
    statusLabel: "NHRL — May 2023",
    photoLabel: "Melvin V3 with the drum removed, 3D-printed bearing holders visible",
    photoSrc: "/images/melvin-v3.jpg",
    body: [
      "Chassis panels were cut the same way as before, on the plasma CNC, but the side panels ran longer so they could be bent around the redesigned bearing holders. Same drum weapon, trimmed to fit on a bandsaw. Complete and ready for competition with no pre-battle issues.",
    ],
    detailLabel: "WHAT WENT WRONG",
    detailBody:
      "On weapon spin-up and first contact, both 3D-printed bearing holders cracked, loosening the weapon and taking it out of the fight. The aluminum chassis picked up bends and dents too, a clear signal that the material and design margin weren't enough for what combat actually demands.",
  },
  {
    rev: "REV 4",
    title: "Melvin V4",
    status: "competed" as BuildLogStatus,
    statusLabel: "NHRL — June 2023",
    photoLabel: "Melvin V4 — yellow TPU chassis with carbon fiber plates",
    photoSrc: "/images/melvin-v4.jpg",
    photoLabel2: "Bare V4 TPU chassis fresh off the print bed",
    photoSrc2: "/images/melvin-v4-chassis-print.jpg",
    body: [
      "The direct answer to V3's failure: chassis material switched from aluminum to 3D-printed TPU, trading rigidity for impact absorption. TPU flexes and dissipates energy instead of cracking. The weapon system also got a significant upgrade this round. The material change proved itself in combat and set the template every version since has built on.",
    ],
  },
  {
    rev: "REV 5",
    title: "Melvin V5",
    status: "competed" as BuildLogStatus,
    statusLabel: "NHRL — August 2023",
    photoLabel: "Shuffler locomotion bench test",
    videoSrc: "/videos/melvin-v5-shuffler.mp4",
    videoPoster: "/images/shuffler-poster.jpg",
    videoLabel: "Shuffler locomotion bench test",
    videoPosition: "50% 22%",
    body: [
      "The headline change: wheels were gone entirely, replaced by a shuffler locomotion system. NHRL awards a weight bonus for non-traditional locomotion, and Melvin cashed it in on thicker AR500 steel weapon blades with more strike surface, cut by SendCutSend and mounted on a timing pulley between the two blades.",
      "The chassis kept V4's proven approach, printed as a single piece in 95A High-Speed TPU, with the inner back corners re-engineered so the shufflers slide in as self-contained modules. With no clear shuffler reference designs online, the mechanism went through numerous designed-built-tested variations, prototyped in PLA, with the final shuffler feet printed in TPU for traction in the arena.",
    ],
    detailLabel: "AN UNPLANNED WIN",
    detailBody:
      'The TPU chassis took multiple hits with only minimal damage, and a print imperfection did the rest. The outer walls came out with a stringy, "spaghetti" texture; mid-fight, an opponent struck Melvin\'s side and their weapon snagged on the loose strands, which wound into their weapon motor, overheated it, and set it on fire. Sometimes the defect is the feature.',
  },
  {
    rev: "REV 6",
    title: "Melvin V6",
    status: "in-progress" as BuildLogStatus,
    statusLabel: "In progress — current build",
    photoLabel: "Melvin V6 module layout, top view with drive, electronics, and weapon zones",
    photoSrc: "/images/melvin-v6-concept.png",
    photoAspectRatio: "484 / 337",
    body: [
      "The current build, and the first clean-sheet redesign since the original. Instead of another patch on the existing architecture, V6 is built around a brand-new modular system: subsystems designed to be swapped independently, so a damaged section means replacing a module between matches instead of rebuilding the robot. The same idea changes strategy, since one chassis can run different configurations depending on the opponent: wheels when a matchup calls for speed, shufflers when the weight bonus buys more armor or blade, weapon swaps to counter whatever is across the arena. Every previous rev's lesson feeds into the platform, from V3's cracked bearing holders to V4's energy-absorbing TPU. The result is a single platform that adapts match to match.",
    ],
  },
];

export type ExperienceEntry = {
  id: string;
  meta: string;
  company: string;
  photoLabel: string;
  photoSrc?: string;
  photoAspect?: "square" | "tall" | "wide" | "box";
  photoAspectRatio?: string;
  body: string;
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "cottrell",
    meta: "SUMMER 2024 · GAINESVILLE, GA",
    company: "Cottrell Trailers",
    photoLabel: "Cottrell production floor, car-hauler trailers on the line",
    photoSrc: "/images/cottrell-floor.jpg",
    photoAspect: "square" as const,
    body: "Mechanical engineering internship at the world's largest manufacturer of over-the-road auto transport equipment. Focused on 3D modeling and 2D drafting in Autodesk Inventor and AutoCAD, both new tools at the time. Work included a round-tube component with slot, through-hole, and bracket-aligned notches, full assembly drawings with exploded views, and technical drawings for a switch from painted to non-skid tape trailer surfaces.",
    tags: ["Inventor", "AutoCAD", "2D Drafting", "DFM"],
  },
  {
    id: "rocket-team",
    meta: "2023–2024 · CWRU, CLEVELAND, OH",
    company: "CASE Rocket Team",
    photoLabel: "L1 certification rocket, fresh paint in the spray booth",
    photoSrc: "/images/rocket-l1.jpg",
    photoAspect: "tall" as const,
    body: "Team member on CWRU's student rocketry team. Designed and assembled an L1 certification rocket to NAR (National Association of Rocketry) specifications, contributing to the team's mechanical fabrication work.",
    tags: ["Rocketry", "NAR L1 Spec", "Mechanical Fabrication", "Assembly"],
  },
  {
    id: "guardbot",
    meta: "SUMMER 2023 · STAMFORD, CT",
    company: "GuardBot Inc.",
    photoLabel: "GuardBot amphibious robot lineup on the Stamford shoreline",
    photoSrc: "/images/guardbot-family.jpg",
    photoAspect: "square" as const,
    body: 'First internship post-high-school. Designed the outer shell for HARV-18, an autonomous amphibious robot with 18" wheels and a near-spherical body for land-to-water transitions, 3D printed in PETG with O-ring grooves for a watertight seal. Kept the print farm running (bed leveling, belt tension, reinstalls) and handled robot teardown/repair/reassembly.',
    tags: ["3D Printing", "PETG", "Amphibious Robotics", "Maintenance"],
  },
  {
    id: "first-robotics",
    meta: "2022–2023 · DARIEN, CT",
    company: "FIRST Robotics — Co-Founder, D.A.R.T. #9216",
    photoLabel: "D.A.R.T. team mid-repair on the #9216 robot — Charged Up season",
    photoSrc: "/images/first-robotics-team.jpg",
    photoAspect: "square" as const,
    photoAspectRatio: "1660 / 1370",
    body: 'Co-founded Darien High School\'s first-ever robotics team in a school culture built around sports and the arts, and got it funded by the board of education. Competed in the 2023 "Charged Up" season as a rookie team, winning the Rookie All-Star Award. Modeled the swerve-drive chassis (pivoted from an initial 4-wheel direct-drive concept) and a pneumatic grabber mechanism in Fusion 360.',
    tags: ["Team Founding", "Swerve Drive", "Fusion 360", "Rookie All-Star"],
  },
];

export const about = {
  photoLabel: "3D-printed guitar body, honeycomb infill, clamped up in the shop",
  photoSrc: "/images/guitar-print.jpg",
  paragraphs: [
    "I'm a Mechanical Engineering student at Case Western Reserve University (Business Management minor), graduating May 2027. CSWA-certified in SolidWorks, bilingual in English and Spanish. The Spanish got a real workout in Fall 2025, studying abroad at Universidad Carlos III de Madrid and serving as Resident Assistant for CWRU's Madrid program.",
    "Outside the shop: Team Leader for CWRU's NHRL combat robotics team, lead pianist and drummer at my church, and hands-on in my family's construction business, which means my engineering instincts get tested against real jobsites, not just tolerances on a drawing. Sometimes the worlds collide: the guitar body in the photo is 3D-printed, honeycomb infill and all.",
  ],
  skillGroups: [
    {
      label: "CAD & DESIGN",
      value: "SolidWorks (CSWA) · Fusion 360 · Autodesk Inventor · AutoCAD",
    },
    {
      label: "FABRICATION",
      value: "CNC / plasma cutting · FDM 3D printing (PETG, TPU) · Cura · hand assembly",
    },
    {
      label: "OTHER",
      value: "MATLAB · Microsoft Office · Google Workspace · woodworking",
    },
  ],
};

export const navLinks = [
  { num: "01", label: "Projects", href: "#projects" },
  { num: "02", label: "Combat Robotics", href: "#combat" },
  { num: "03", label: "Experience", href: "#experience" },
  { num: "04", label: "About", href: "#about" },
];
