import { scrollToTarget } from "../lib/scroll.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Directed, designed & developed by{" "}
          <span className="text-zinc-400">Md Aabid Hussain</span> · © 2026
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-700">
          React · Tailwind · Framer Motion · Lenis
        </p>
        <button
          onClick={() => scrollToTarget("#top")}
          className="rounded-full border border-white/10 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 transition-colors duration-300 hover:border-gold-400 hover:text-gold-300"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
