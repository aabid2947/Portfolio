import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";
import { onHeroReady } from "../lib/heroReady.js";

const EASE = [0.76, 0, 0.24, 1];
const DIGITS = Array.from({ length: 101 }, (_, i) => i);

// The count and the bar are Web Animations on `transform`, so the browser runs
// them off the main thread. A setInterval counter froze (around 60%) while the
// 3D hero compiled underneath, then jumped to 100 when the thread came free.
// The count eases toward 96 while we wait, then runs on to 100 once the hero
// has drawn, never sooner than MIN_MS and never later than CREEP_MS.
const CREEP = [
  [0, 0],
  [0.15, 50],
  [0.3, 75],
  [0.42, 88],
  [1, 96],
];
const CREEP_MS = 2600;
const MIN_MS = 900;
const HOLD_MS = 200;

const readTranslateY = (el) => new DOMMatrixReadOnly(getComputedStyle(el).transform).m42;
const readScaleX = (el) => new DOMMatrixReadOnly(getComputedStyle(el).transform).a;

export default function Preloader({ onDone }) {
  const stripRef = useRef(null);
  const barRef = useRef(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const strip = stripRef.current;
    const bar = barRef.current;
    const done = () => doneRef.current();
    if (!strip || !bar || typeof strip.animate !== "function") {
      const t = setTimeout(done, MIN_MS); // no Web Animations: just wait, then go
      return () => clearTimeout(t);
    }

    const step = strip.firstElementChild.getBoundingClientRect().height;
    const y = (n) => `translateY(${-n * step}px)`;
    // steps() per segment, so the number ticks through every value.
    const creepStrip = strip.animate(
      CREEP.map(([offset, n], i) => ({
        offset,
        transform: y(n),
        easing: i < CREEP.length - 1 ? `steps(${CREEP[i + 1][1] - n}, end)` : "linear",
      })),
      { duration: CREEP_MS, fill: "forwards" }
    );
    const creepBar = bar.animate(
      CREEP.map(([offset, n]) => ({ offset, transform: `scaleX(${n / 100})` })),
      { duration: CREEP_MS, fill: "forwards" }
    );

    let finished = false;
    let minDone = false;
    let heroDone = false;
    let doneTimer;
    // Run on from wherever the count is now to 100, then hand over.
    const finish = () => {
      if (finished) return;
      finished = true;
      const k = Math.min(100, Math.max(0, Math.round(-readTranslateY(strip) / step)));
      const sx = readScaleX(bar);
      const ms = 250 + (100 - k) * 6;
      strip.animate([{ transform: y(k) }, { transform: y(100) }], {
        duration: ms,
        easing: `steps(${Math.max(1, 100 - k)}, end)`,
        fill: "forwards",
      });
      bar.animate([{ transform: `scaleX(${sx})` }, { transform: "scaleX(1)" }], {
        duration: ms,
        easing: "ease-out",
        fill: "forwards",
      });
      creepStrip.cancel();
      creepBar.cancel();
      doneTimer = setTimeout(done, ms + HOLD_MS);
    };
    const check = () => {
      if (minDone && heroDone) finish();
    };
    const minTimer = setTimeout(() => {
      minDone = true;
      check();
    }, MIN_MS);
    const capTimer = setTimeout(finish, CREEP_MS); // never hold the site hostage
    const off = onHeroReady(() => {
      heroDone = true;
      check();
    });

    return () => {
      clearTimeout(minTimer);
      clearTimeout(capTimer);
      clearTimeout(doneTimer);
      off();
      strip.getAnimations().forEach((a) => a.cancel());
      bar.getAnimations().forEach((a) => a.cancel());
    };
  }, []);

  const name = `${profile.firstName} ${profile.lastName}`;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
      exit={{ y: "-100%", transition: { duration: 0.9, ease: EASE } }}
      aria-hidden="true"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-500"
      >
        A single-page feature presentation
      </motion.p>

      <div className="mt-6 overflow-hidden">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl tracking-wide text-zinc-100 md:text-6xl"
        >
          {name}
        </motion.h1>
      </div>

      <div className="mt-10 h-px w-56 overflow-hidden bg-white/10 md:w-72">
        <div ref={barRef} className="h-full w-full origin-left scale-x-0 bg-gold-400 will-change-transform" />
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-8 right-8 flex items-end font-display text-7xl italic text-zinc-700 md:text-8xl"
      >
        {/* A strip of 0–100 slid up one line per step, seen through a one-line window. */}
        <span className="relative block h-[1em] w-[1.8em] overflow-hidden text-right leading-none">
          <span ref={stripRef} className="absolute inset-x-0 top-0 block will-change-transform">
            {DIGITS.map((n) => (
              <span key={n} className="block h-[1em] pr-[0.08em]">
                {n}
              </span>
            ))}
          </span>
        </span>
        <span className="pb-2 text-3xl leading-none text-gold-500 md:pb-3 md:text-4xl">%</span>
      </motion.span>
    </motion.div>
  );
}
