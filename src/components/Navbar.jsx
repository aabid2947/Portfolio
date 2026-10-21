import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToTarget } from "../lib/scroll.js";

const LINKS = [
  { n: "01", label: "About", href: "#about" },
  { n: "02", label: "Skills", href: "#skills" },
  { n: "03", label: "Work", href: "#work" },
  { n: "04", label: "Journey", href: "#journey" },
  { n: "05", label: "Contact", href: "#contact" },
];

export default function Navbar({ started }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={started ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-500 ${
          scrolled && !open
            ? "border-b border-white/5 bg-ink-950/90"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-[72px]">
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            className="font-display text-xl text-zinc-100"
          >
            Aabid<span className="text-gold-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="group font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-zinc-100"
              >
                <span className="mr-1.5 text-gold-500">{l.n}</span>
                {l.label}
                <span className="mt-1 block h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="rounded-full border border-gold-500/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold-300 transition-colors duration-300 hover:bg-gold-500 hover:text-ink-950"
            >
              Hire me
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`h-px w-6 bg-zinc-200 transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-zinc-200 transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col justify-center bg-ink-950/95 px-10 backdrop-blur-lg md:hidden"
          >
            {LINKS.map((l, i) => (
              <div key={l.href} className="overflow-hidden py-2">
                <motion.a
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "110%" }}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="block font-display text-5xl text-zinc-100"
                >
                  <span className="mr-3 font-mono text-sm text-gold-500">{l.n}</span>
                  {l.label}
                </motion.a>
              </div>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500"
            >
              New Delhi, India — est. 2023
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
