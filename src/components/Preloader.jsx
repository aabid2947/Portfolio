import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";

const EASE = [0.76, 0, 0.24, 1];

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n = Math.min(100, n + Math.floor(Math.random() * 9) + 4);
      setCount(n);
      if (n >= 100 && !done.current) {
        done.current = true;
        clearInterval(id);
        setTimeout(onDone, 500);
      }
    }, 75);
    return () => clearInterval(id);
  }, [onDone]);

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
        <div
          className="h-full bg-gold-400 transition-[width] duration-150 ease-out"
          style={{ width: `${count}%` }}
        />
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-8 right-8 font-display text-7xl italic text-zinc-700 md:text-8xl"
      >
        {count}
        <span className="text-3xl text-gold-500 md:text-4xl">%</span>
      </motion.span>
    </motion.div>
  );
}
