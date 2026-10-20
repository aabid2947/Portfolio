import { Component, Suspense, lazy, useEffect, useRef, useState } from "react";

// All of three/R3F lives behind this dynamic import → kept out of the initial bundle.
const HeroScene = lazy(() => import("../three/HeroScene.jsx"));

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

/* Static gold-glow stand-in: reduced-motion path, no-WebGL path, AND the lazy/suspense + error fallback. */
function StaticGlow() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[62vmin] w-[62vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(227,185,100,0.20),rgba(184,140,47,0.07)_45%,transparent_70%)] blur-2xl" />
      <div className="absolute left-1/2 top-1/2 h-[32vmin] w-[32vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,212,145,0.28),transparent_66%)]" />
    </div>
  );
}

// If WebGL throws (context loss, weak GPU, lib mismatch) the hero degrades to the glow instead of crashing.
class CanvasBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {}
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export default function HeroBackdrop() {
  const [enabled, setEnabled] = useState(false); // is 3D allowed on this client?
  const [active, setActive] = useState(true); // run the render loop? (off when offscreen / tab hidden)
  const wrapRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!reduce && webglAvailable());
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = wrapRef.current;
    let inView = true;
    const update = () => setActive(inView && !document.hidden);
    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        update();
      },
      { threshold: 0.04 }
    );
    if (el) io.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [enabled]);

  return (
    <div ref={wrapRef} className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {enabled ? (
        <CanvasBoundary fallback={<StaticGlow />}>
          <Suspense fallback={<StaticGlow />}>
            <HeroScene active={active} />
          </Suspense>
        </CanvasBoundary>
      ) : (
        <StaticGlow />
      )}
    </div>
  );
}
