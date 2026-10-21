import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { profile } from "../data/portfolio.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Tilt from "./ui/Tilt.jsx";
import PhotoDeck from "./ui/PhotoDeck.jsx";

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
    <section id="about" className="relative scroll-mt-20 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading act="Act I" kicker="The Character" title="About me" />

        <div className="grid items-start gap-14 md:grid-cols-[2fr_3fr] md:gap-20">
          {/* photo deck: the portrait on top, the SIH 2024 win behind it */}
          <Reveal>
            <Tilt className="mx-auto w-full max-w-sm rounded-2xl">
              <PhotoDeck photos={profile.photos} />
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
