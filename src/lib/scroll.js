import { useEffect } from "react";
import Lenis from "lenis";

let instance = null;

/** Smooth-scroll to a CSS selector (e.g. "#work"), falling back to native. */
export function scrollToTarget(target) {
  if (instance) {
    instance.scrollTo(target, { offset: -72, duration: 1.4 });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}

/** Mount a Lenis instance for the page; `locked` pauses it (preloader, menu). */
export function useLenis(locked) {
  useEffect(() => {
    instance = new Lenis({ lerp: 0.09, smoothWheel: true });
    // Debug handle so the CI screenshot script can stop smooth-scroll before
    // capturing (Lenis easing makes Playwright's element-stability wait hang).
    if (typeof window !== "undefined") window.__lenis = instance;
    let rafId;
    const raf = (time) => {
      instance?.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      instance = null;
      if (typeof window !== "undefined") window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    if (!instance) return;
    if (locked) instance.stop();
    else instance.start();
  }, [locked]);
}
