// All portfolio content lives here — swap this file out to re-skin the demo.
// Sources: resume, LinkedIn profile export, and GitHub repo data (commit counts
// and deployment URLs verified with live HTTP checks, June 2026).

import portraitImg from "../../assets/aabid.jpeg";
import gamoriteShot from "../../assets/Gamorite.webp";
import evalzzShot from "../../assets/Evalzz.png";
import aivaShot from "../../assets/aiva.jpeg";
import ekycShot from "../../assets/Ekyc.png";
import tradeflowShot from "../../assets/Tradeflow.png";
import tankShot from "../../assets/TankTurnTactics.png";
import pvpingShot from "../../assets/PvPingMC.png";
import sihWinnerImg from "../../assets/sih/sih-winner.jpg";
import sihTeamImg from "../../assets/sih/sih-team.jpg";
import sihTrophyImg from "../../assets/sih/sih-trophy.jpg";

export const profile = {
  firstName: "AABID",
  lastName: "HUSSAIN",
  portrait: portraitImg,
  // About's photo deck, top card first.
  photos: [
    { src: portraitImg, alt: "Md Aabid Hussain", caption: "New Delhi, India" },
    {
      src: sihWinnerImg,
      alt: "Aabid holding the Smart India Hackathon 2024 Grand Finale winner's trophy and cheque",
      caption: "SIH 2024 · Grand Finale winner",
    },
    {
      src: sihTeamImg,
      alt: "Team Paradox with their trophies and the ₹1,00,000 winner's cheque",
      caption: "Team Paradox · ₹1,00,000 prize",
    },
    {
      src: sihTrophyImg,
      alt: "The SIH 2024 Grand Finale winner's trophy and certificate",
      caption: "Winner's trophy & certificate",
    },
  ],
  role: "Full-Stack & React Native Developer",
  tagline:
    "1.5+ years shipping Play Store releases to real users. The Gamorite app I build now serves 18,000+ people. I also build AI agents that make your phone calls and hold the conversation for you.",
  location: "New Delhi, India",
  email: "aabidhussainpas@gmail.com",
  availability: "Open to full-time roles & freelance",
  bio: [
    "I'm Md Aabid Hussain, a full-stack and React Native developer based in New Delhi. For 1.5+ years I've shipped Play Store releases to real users: five months on TejAgro, an agri-commerce app for farmers, and the rest on Gamorite, where I own the app that now serves 18,000+ users.",
    "My work spans the whole stack: React Native and Flutter apps, React frontends with Redux Toolkit and Zustand, Go, Node.js and Python backends, WebSocket live messaging, OAuth 2.0 flows, FCM push notifications, payment gateways, and AI integrations with the Gemini and Claude APIs.",
    "Outside client work I chase hard problems — winning the Smart India Hackathon 2024 Grand Finals, ranking top 100 of 32,000+ teams in the Amazon ML Challenge 2024, and building for the W3B AI & Blockchain Society and the IEEE student branch at JMI.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/aabid2947" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/md-aabid-hussain-852a72255/",
    },
    { label: "Email", url: "mailto:aabidhussainpas@gmail.com" },
  ],
  stats: [
    { value: 1.5, decimals: 1, suffix: "+", label: "Years shipping to the Play Store" },
    { value: 18, suffix: "k+", label: "Users on Gamorite" },
    { value: 2, suffix: "", label: "Apps live on Play Store" },
    { value: 20, suffix: "+", label: "KYC APIs integrated" },
  ],
  skills: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Redux Toolkit",
    "Tailwind CSS",
    "WebSockets",
    "OAuth 2.0",
    "Docker",
    "CI/CD",
    "Gemini & Claude APIs",
  ],
  // Grouped form — drives the accessible / reduced-motion fallback for the 3D sphere.
  skillGroups: [
    {
      label: "Frontend",
      items: ["React", "React Native", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "WebSockets"],
    },
    {
      label: "Platform & AI",
      items: ["OAuth 2.0", "Docker", "CI/CD", "Gemini & Claude APIs"],
    },
  ],
};

// Featured productions. `links` are real, verified destinations — GitHub only
// appears when the repo is public, "Live" only when the deployment responds.
export const projects = [
  {
    id: "01",
    title: "Gamorite",
    image: gamoriteShot,
    category: "Esports & Gaming Communities · Play Store",
    year: "2025",
    description:
      "The esports tournaments and gaming-communities app I build at Gamorite, live on the Play Store with 18,000+ users. I own every release, from reviewing each PR to shipping the build and triaging crashes and ANRs in Play Console. Inside: WebSocket chat, Discord-style voice and video calls, and an Instagram-style clips feed that preloads clips so playback starts instantly.",
    tags: ["React Native", "Go", "WebSockets", "Sentry"],
    metrics: [
      { v: "18k+", k: "users" },
      { v: "Live", k: "on Play Store" },
      { v: "Solo", k: "app owner" },
    ],
    role: "Full-stack · sole app owner",
    video: "/media/gamorite-demo-16x10.mp4",
    poster: "/media/gamorite-card-poster.png",
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.gamorite",
      },
      { label: "Watch demo", url: "/media/gamorite-demo-1080p.mp4" },
      { label: "gamorite.gg", url: "https://gamorite.gg" },
    ],
    gradient: "from-emerald-600/40 via-teal-500/15 to-transparent",
    accent: "#34d399",
  },
  {
    id: "02",
    title: "Aiva",
    image: aivaShot,
    category: "AI Voice Agent",
    year: "2026",
    description:
      "An AI assistant that makes your phone calls for you. It dials out through Twilio, introduces itself as AIVA, says up front that the call is AI-generated on your behalf, and answers the other side live from your saved details, so it can book an appointment start to finish. Around the calls it triages your Gmail, handles email replies, runs reminders and summarizes documents, on always-on workers on AWS with Gemini backed by an automatic Groq fallback.",
    tags: ["Flutter", "Python", "Twilio", "LLM agents", "AWS"],
    metrics: [
      { v: "Live", k: "AI phone calls" },
      { v: "24/7", k: "AWS workers" },
      { v: "Gemini", k: "+ Groq fallback" },
    ],
    role: "Full-stack + AI",
    links: [
      { label: "App code", url: "https://github.com/aabid2947/Aiva" },
      { label: "Backend code", url: "https://github.com/aabid2947/AivaBackend" },
    ],
    video: "/media/aiva-demo-16x10.mp4",
    poster: "/media/aiva-card-poster.png",
    gradient: "from-rose-600/40 via-red-500/15 to-transparent",
    accent: "#fb7185",
  },
  {
    id: "03",
    title: "Evalzz",
    image: evalzzShot,
    category: "Unified Hiring Platform",
    year: "2024",
    description:
      "A unified hiring platform engineered to support 50,000+ users — 500+ registered and 800 monthly actives — at zero infrastructure cost beyond LLM APIs. Convex DB indexing and query optimization cut database reads by 35%, alongside Clerk authentication, Zustand state, Python automation scripts, and Zoho mass mailing.",
    tags: ["React.js", "Convex", "Zustand", "Python"],
    metrics: [
      { v: "800", k: "monthly actives" },
      { v: "−35%", k: "database reads" },
      { v: "50k+", k: "users supported" },
    ],
    role: "Full-stack developer",
    links: [{ label: "Live", url: "https://evalz.vercel.app" }],
    gradient: "from-sky-600/40 via-cyan-500/15 to-transparent",
    accent: "#38bdf8",
  },
];

// B-roll — smaller but real productions: public repos and live deployments.
export const archive = [
  {
    title: "eKYC Platform",
    image: ekycShot,
    year: "2025",
    blurb:
      "A full-stack background-verification platform integrating 20+ KYC APIs (PAN, Aadhaar, Voter ID, GST), with JWT auth, role-based access, rate limiting, and payments with invoice generation and PDF export — deployed on a VPS behind Cloudflare after security testing.",
    tags: ["React.js", "Node.js", "MongoDB", "Cloudflare"],
    links: [{ label: "Live demo", url: "https://e-kyc-eight.vercel.app" }],
  },
  {
    title: "TradeFlow",
    image: tradeflowShot,
    year: "2025",
    blurb:
      "A secure peer-to-peer marketplace where users buy and sell USDT using FUN tokens — a React client and a Node.js API, and one of my most-iterated builds at 140+ commits across the pair.",
    tags: ["React.js", "Node.js", "JavaScript"],
    links: [
      { label: "Live", url: "https://trade-flow-three.vercel.app" },
      { label: "GitHub", url: "https://github.com/aabid2947/TradeFlow" },
    ],
  },
  {
    title: "PvPingMC",
    image: pvpingShot,
    year: "2024",
    blurb:
      "A storefront for one of the largest Minecraft PvP networks, built on the Tebex Headless API with a 95+ PageSpeed score, CI/CD on Cloudflare Pages and a Markdown blog — delivered in a month with 100% client satisfaction.",
    tags: ["React.js", "Tebex API", "Cloudflare Pages"],
    links: [{ label: "Live store", url: "https://pvpingmc.net/store" }],
  },
  {
    title: "Tank Turn Tactics",
    image: tankShot,
    year: "2025",
    blurb:
      "A multiplayer turn-based strategy game with real-time actions on a dynamic grid — playable live in the browser.",
    tags: ["JavaScript", "Multiplayer", "Real-time"],
    links: [
      { label: "Live", url: "https://tank-turn-tactics.vercel.app" },
      { label: "GitHub", url: "https://github.com/aabid2947/TankTurnTactics" },
    ],
  },
];

// Unified experience + education timeline, newest first.
export const journey = [
  {
    type: "work",
    title: "Full-Stack Developer",
    org: "Gamorite",
    period: "Aug 2025 — Present",
    location: "Remote",
    summary:
      "Own the full stack, from the Go backend to the web app and the React Native app on the Play Store, now at 18,000+ users.",
    highlights: [
      "Sole owner of the app codebase: review every PR from other contributors and ship every Play Store release.",
      "Triage crashes and ANRs from Play Console every release cycle, with Sentry and Google Analytics for error tracking and usage insight.",
      "Built an Instagram-style clips feed that preloads the first 1–2 seconds of the next 4–5 clips as soon as the dashboard opens, so playback starts instantly.",
      "Integrated Claude Vision for image analysis that returns structured JSON, and built media storage on Cloudflare buckets.",
    ],
    tags: ["React Native", "Go", "Sentry", "Play Console"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.gamorite" },
    ],
  },
  {
    type: "work",
    title: "Frontend App Developer Intern",
    org: "Gamorite",
    period: "Dec 2024 — Jul 2025",
    location: "Remote",
    summary: "Shipped the production app from scratch to the Play Store in six months.",
    highlights: [
      "Built Discord-style real-time voice and video calls, screen sharing and WebSocket chat on a Supabase + Go backend.",
      "Held 60fps on low-end Android by optimizing FlatList rendering, cutting JS bridge calls and lazy-loading images.",
      "Added Google and Discord login with OAuth 2.0, plus FCM push notifications.",
    ],
    tags: ["React Native", "Redux Toolkit", "WebSockets", "FCM"],
  },
  {
    type: "work",
    title: "React Native Developer (Freelance)",
    org: "TejAgro",
    period: "5 months",
    location: "Remote",
    summary:
      "Five months of Play Store releases for a live agri-commerce app used by farmers.",
    highlights: [
      "Owned the Android build pipeline, keystore configuration and Play Store deployment, resolving Play Console errors across regular release cycles.",
      "Integrated EaseBuzz payments end to end: checkout, webhook verification, and handling failed and double charges.",
      "Fixed connectivity for farmers on weak networks with exponential backoff, request queuing and offline caching.",
    ],
    tags: ["React Native", "Redux", "EaseBuzz", "Play Store"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.tejagroapp" },
    ],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    org: "Evalzz — Unified Hiring Platform",
    period: "Aug 2024 — Dec 2024",
    location: "Remote",
    summary:
      "Scaled platform infrastructure to support 50,000+ users at zero infrastructure cost (excluding LLM APIs).",
    highlights: [
      "Served 500+ registered users with 800 monthly actives through Convex DB indexing and query optimization.",
      "Built Python backend scripts for data processing and automation; integrated Zoho mailing and Clerk authentication.",
      "Led React.js frontend development with Zustand, cutting database reads by 35% through query optimization.",
    ],
    tags: ["React.js", "Convex", "Zustand", "Python"],
  },
  {
    type: "education",
    title: "B.Tech, Electronics Engineering",
    org: "Jamia Millia Islamia University",
    period: "Oct 2022 — May 2026",
    location: "New Delhi",
    summary: "Built production software alongside the degree.",
    highlights: [],
    tags: ["Electronics", "Engineering"],
  },
];

export const certifications = [
  "Smart India Hackathon 2024 — Grand Finals Winner, 1st place nationally (PS: SIH-1680)",
  "Amazon ML Challenge 2024 — Ranked Top 100 of 32,000+ teams",
];
