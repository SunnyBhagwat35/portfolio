/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE — it's the single source of truth for the site.
 *  Everything below is placeholder content. Replace it with yours.
 * ─────────────────────────────────────────────────────────────
 */

export const personal = {
  name: "Sunny Bhagwat",
  // Short handle shown in the nav (e.g. your first name or @handle)
  handle: "sunny.dev",
  role: "Software Developer",
  // One or two sentences. Shows under your name in the hero.
  tagline:
    "I build fast, reliable web apps, from Postgres schemas to pixel-level UI. Currently focused on developer tools and AI-powered products.",
  location: "Mumbai, India",
  // Set to "" to hide the availability line
  availability: "available for work",
  email: "sunnybhagwat35@gmail.com",
  // Put a resume.pdf inside /public and this link will work after deploy.
  // Set to "" to hide the resume button.
  resumeUrl: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/SunnyBhagwat35" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sunnybhagwat/" },
  { label: "X / Twitter", url: "https://x.com/SunnyBhagwat35" },
];

export const about = {
  // Each string renders as a paragraph.
  paragraphs: [
    "I'm a developer with 4+ years of experience shipping production software across the stack. I care about clean APIs, honest error handling, and interfaces that stay out of the user's way.",
    "Outside of work you'll find me trying open source libraries, leaning about system design, or over-engineering my dotfiles.",
    "Sometimes playing cricket or video games too."
  ],
  skills: [
    {
      group: "Languages",
      items: ["TypeScript", "Python", "SQL", "Go"],
    },
    {
      group: "Frameworks",
      items: ["React", "Node.js", "FastAPI", "Next.js"],
    },
    {
      group: "Infra & Tools",
      items: ["PostgreSQL", "Redis", "Docker", "AWS", "Vercel", "Git"],
    },
  ],
};

export const projects = [
  {
    title: "Shipwatch",
    year: "2026",
    description:
      "Real-time deployment dashboard that aggregates build status, error rates, and rollback controls across environments into a single view.",
    tech: ["React", "FastAPI", "PostgreSQL", "WebSockets"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/shipwatch",
  },
  {
    title: "Querybird",
    year: "2025",
    description:
      "A lightweight SQL client for the browser with schema-aware autocomplete, saved query collections, and one-click CSV export.",
    tech: ["TypeScript", "CodeMirror", "Node.js"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/querybird",
  },
  {
    title: "Inklet",
    year: "2025",
    description:
      "Markdown-first note app with offline sync and end-to-end encryption. 2k+ weekly active users.",
    tech: ["React", "IndexedDB", "Rust/WASM"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/inklet",
  },
  {
    title: "gh-standup",
    year: "2024",
    description:
      "CLI that turns your GitHub activity into a daily standup summary. Featured on Hacker News front page.",
    tech: ["Go", "GitHub API"],
    liveUrl: "", // set to "" to hide the Live link
    codeUrl: "https://github.com/yourusername/gh-standup",
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Acme Cloud",
    period: "2024 — Present",
    points: [
      "Lead a team of 4 building the billing and metering platform (~2M events/day).",
      "Cut p95 API latency 40% by reworking query patterns and adding read replicas.",
      "Drove adoption of typed API contracts across 6 internal services.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Brightlabs",
    period: "2022 — 2024",
    points: [
      "Built the customer-facing analytics dashboard from zero to GA.",
      "Owned CI/CD pipelines; brought deploy time from 25 min to 6 min.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Studio North",
    period: "2021 — 2022",
    points: [
      "Shipped marketing sites and web apps for 10+ clients.",
      "Introduced a shared component library that halved build-out time.",
    ],
  },
];
