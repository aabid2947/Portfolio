import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../data/portfolio.js";
import { scrollToTarget } from "../lib/scroll.js";
import HeroBackdrop from "./HeroBackdrop.jsx";

const lineVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.2 } },
};
const letterVariants = {
  hidden: { y: "115%", rotate: 5 },
  show: {
    y: 0,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function StaggeredLine({ text, className }) {
  return (
    <span className={`block ${className}`}>
      {text.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={letterVariants} className="inline-block">
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero({ started }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-28 pt-24 md:pt-28"
    >
      {/* 3D liquid-gold backdrop (procedural R3F; CSS gold-glow fallback for reduced-motion / no-WebGL) */}
      <HeroBackdrop />
      {/* legibility scrim over the canvas */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(6,6,8,0.45)_68%,#060608_100%)]" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-[11px] uppercase tracking-[0.5em] text-gold-400"
        >
          Est. 2023 — Portfolio
        </motion.p>

        <motion.h1
          variants={lineVariants}
          initial="hidden"
          animate={started ? "show" : "hidden"}
          className="mt-6 font-display text-[clamp(3.5rem,min(14vw,17vh),10.5rem)] leading-[0.95] text-zinc-100 [text-shadow:0_2px_50px_rgba(6,6,8,0.55)]"
        >
          <StaggeredLine text={profile.firstName} />
          <StaggeredLine
            text={profile.lastName}
            className="text-stroke-gold italic"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg [text-shadow:0_2px_24px_rgba(6,6,8,0.7)]"
        >
          <span className="text-zinc-200">{profile.role}.</span> {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            onClick={(e) => (e.preventDefault(), scrollToTarget("#work"))}
            className="rounded-full bg-gold-500 px-7 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-950 transition-colors duration-300 hover:bg-gold-300"
          >
            View the work
          </a>
          <a
            href="#contact"
            onClick={(e) => (e.preventDefault(), scrollToTarget("#contact"))}
            className="rounded-full border border-white/15 px-7 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-300 transition-colors duration-300 hover:border-gold-400 hover:text-gold-300"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
          Scroll to begin
        </span>
        <div className="h-12 w-px overflow-hidden bg-white/10">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1/2 w-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
