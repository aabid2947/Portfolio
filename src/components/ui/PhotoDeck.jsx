import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Where each card sits by its depth in the deck: the top card square-on, the
// next two fanned out behind it, the rest tucked underneath.
const SLOTS = [
  { rotate: 0, x: 0, y: 0, scale: 1, opacity: 1 },
  { rotate: -5, x: -16, y: 10, scale: 0.95, opacity: 1 },
  { rotate: 6, x: 18, y: 18, scale: 0.9, opacity: 1 },
];
const HIDDEN = { rotate: 0, x: 0, y: 24, scale: 0.86, opacity: 0 };

/* A stack of photos that shuffles the top card to the back every few seconds
   while it's on screen (paused under the pointer, off for reduced motion), and
   on every click or tap. */
export default function PhotoDeck({ photos, interval = 3200 }) {
  const [top, setTop] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-80px" });
  const reduce = useReducedMotion();
  const next = () => setTop((t) => (t + 1) % photos.length);

  useEffect(() => {
    if (reduce || paused || !inView) return;
    const id = setInterval(() => setTop((t) => (t + 1) % photos.length), interval);
    return () => clearInterval(id);
  }, [reduce, paused, inView, interval, photos.length]);

  return (
    <div ref={ref}>
      <button
        type="button"
        onClick={next}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        aria-label={`Photo ${top + 1} of ${photos.length}: ${photos[top].caption}. Show the next photo.`}
        data-cursor
        className="relative isolate block aspect-[3/4] w-full text-left"
      >
        {photos.map((photo, i) => {
          const depth = (i - top + photos.length) % photos.length;
          return (
            <motion.div
              key={photo.src}
              initial={false}
              animate={SLOTS[depth] ?? HIDDEN}
              transition={reduce ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ zIndex: photos.length - depth }}
              className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]"
            >
              <img
                src={photo.src}
                alt={depth === 0 ? photo.alt : ""}
                loading={i === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/10" />
              {/* film-frame corner marks */}
              <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-gold-400/70" />
              <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-gold-400/70" />
              <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-gold-400/70" />
              <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-gold-400/70" />
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                {photo.caption}
              </span>
            </motion.div>
          );
        })}
      </button>
      <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
        {photos.map((photo, i) => (
          <span
            key={photo.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === top ? "w-6 bg-gold-400" : "w-1.5 bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
}
