import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { profile } from "../data/portfolio.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Tilt from "./ui/Tilt.jsx";

function Stat({ value, decimals = 0, suffix, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState((0).toFixed(decimals));
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setN(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, delay]);
  return (
    <div ref={ref}>
      <p className="font-display text-5xl text-zinc-100 md:text-6xl">
        {n}
        <span className="text-gold-400">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading act="Act I" kicker="The Character" title="About me" />

        <div className="grid items-start gap-14 md:grid-cols-[2fr_3fr] md:gap-20">
          {/* portrait card — real photo, object-cover keeps it filled at any size */}
          <Reveal>
            <Tilt className="mx-auto w-full max-w-sm rounded-2xl">
            <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
              <img
                src={profile.portrait}
                alt={`${profile.firstName} ${profile.lastName} — portrait`}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/10" />
              {/* film-frame corner marks */}
              <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-gold-400/70" />
              <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-gold-400/70" />
              <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-gold-400/70" />
              <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-gold-400/70" />
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                {profile.location}
              </span>
            </div>
            </Tilt>
          </Reveal>

          <div>
            {profile.bio.map((para, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p className="mb-6 text-base leading-relaxed text-zinc-400 md:text-lg [&:first-of-type]:text-zinc-200">
                  {para}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
                {profile.availability}
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {profile.stats.map((s, i) => (
                <Stat key={s.label} {...s} delay={0.1 * i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
