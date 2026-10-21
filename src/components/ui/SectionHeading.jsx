import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

/** Film-credit style heading: "ACT II · SELECTED WORK" over a big serif title. */
export default function SectionHeading({ act, kicker, title }) {
  return (
    <div data-section-heading className="mb-10 md:mb-14">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold-400">
          {act} <span className="text-zinc-600">·</span> {kicker}
        </p>
      </Reveal>
      {/* Watch the clipping wrapper, not the title: the title starts pushed out
          of the wrapper, so it never counts as "in view" on its own. */}
      <motion.div
        className="mt-4 overflow-hidden"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.h2
          variants={{ hidden: { y: "115%" }, shown: { y: 0 } }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl leading-[1.05] text-zinc-100 md:text-7xl"
        >
          {title}
        </motion.h2>
      </motion.div>
      <Reveal delay={0.25} className="mt-6">
        <div className="h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" />
      </Reveal>
    </div>
  );
}
