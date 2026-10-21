import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { journey, certifications } from "../data/portfolio.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import LinkPills from "./ui/LinkPills.jsx";

function Entry({ item, index }) {
  const isEdu = item.type === "education";
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -22, z: -120, y: 40 }}
      whileInView={{ opacity: 1, rotateX: 0, z: 0, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.8, delay: 0.04 * (index % 3), ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200, transformOrigin: "left center" }}
      className="relative pl-12 md:pl-16"
    >
      {/* node on the rail */}
      <span
        className={`absolute left-[3px] top-2 h-3 w-3 rounded-full border-2 ${
          isEdu ? "border-violet-400 bg-ink-950" : "border-gold-400 bg-ink-950"
        }`}
      />
      <span
        className={`absolute left-[-1px] top-0 h-5 w-5 rounded-full ${
          isEdu ? "bg-violet-400/20" : "bg-gold-400/20"
        } blur-md`}
      />
      <div className="rounded-2xl border border-white/5 bg-ink-900/60 p-6 transition-colors duration-500 hover:border-gold-500/30 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p
            className={`font-mono text-[10px] uppercase tracking-[0.35em] ${
              isEdu ? "text-violet-300" : "text-gold-400"
            }`}
          >
            {isEdu ? "Education" : "Experience"}
          </p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-500">
            {item.period} · {item.location}
          </p>
        </div>
        <h3 className="mt-3 font-display text-2xl text-zinc-100 md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
          {item.org}
        </p>
        <p className="mt-4 leading-relaxed text-zinc-400">{item.summary}</p>
        {item.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500"
            >
              {tag}
            </li>
          ))}
        </ul>
        <LinkPills links={item.links} className="mt-5" />
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.45"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <section id="journey" className="relative scroll-mt-20 py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          act="Act III"
          kicker="The Backstory"
          title="Experience & education"
        />

        <div ref={railRef} className="relative">
          {/* timeline rail + scroll-drawn progress */}
          <div className="absolute bottom-2 left-2 top-2 w-px bg-white/10" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-2 left-2 top-2 w-px origin-top bg-gradient-to-b from-gold-300 via-gold-500 to-violet-500"
          />
          <div className="flex flex-col gap-10">
            {journey.map((item, i) => (
              <Entry key={`${item.org}-${item.period}`} item={item} index={i} />
            ))}
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="rounded-2xl border border-white/5 bg-ink-900/40 p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold-400">
              Post-credits · Achievements
            </p>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="text-gold-500">✦</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
