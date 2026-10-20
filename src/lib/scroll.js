import { useEffect } from "react";
import Lenis from "lenis";

let instance = null;

/** Smooth-scroll so a section's heading lands just under the fixed header
 *  ("#top" goes to the very top), falling back to native scrolling. */
export function scrollToTarget(target) {
  if (target === "#top") {
    if (instance) instance.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const section = document.querySelector(target);
  if (!section) return;
  // Aim at the heading, not the section's top padding, so a jump never lands
  // on a screen of empty space above the title.
  const el = section.querySelector("[data-section-heading]") ?? section;
  const header = document.querySelector("header")?.offsetHeight ?? 72;
  const offset = -(header + 24);
  if (instance) {
    instance.scrollTo(el, { offset, duration: 1.2 });
  } else {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: "smooth" });
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
