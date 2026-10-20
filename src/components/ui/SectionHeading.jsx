import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

/** Film-credit style heading: "ACT II · SELECTED WORK" over a big serif title. */
export default function SectionHeading({ act, kicker, title }) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold-400">
          {act} <span className="text-zinc-600">·</span> {kicker}
        </p>
      </Reveal>
      <div className="mt-4 overflow-hidden">
        <motion.h2
          initial={{ y: "115%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl leading-[1.05] text-zinc-100 md:text-7xl"
        >
          {title}
        </motion.h2>
      </div>
      <Reveal delay={0.25} className="mt-6">
        <div className="h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" />
      </Reveal>
    </div>
  );
}
