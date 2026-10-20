import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { profile } from "../data/portfolio.js";

/**
 * Interactive 3D skill sphere — a billboarded tag cloud rotating in real space.
 *
 * Each tag is placed on a Fibonacci sphere and re-projected every frame, so the
 * text always faces the viewer (billboard) while depth drives scale + fog. The
 * cursor steers the spin; with no pointer it drifts on its own. Reduced-motion
 * and touch-only clients fall back to the categorized grid below.
 */

// Even point distribution on a unit sphere (Fibonacci lattice).
function fibonacciSphere(n) {
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2; // 1 → -1
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
  }
  return pts;
}

function Sphere({ skills }) {
  const wrapRef = useRef(null);
  const itemRefs = useRef([]);
  const base = useMemo(() => fibonacciSphere(skills.length), [skills.length]);

  // Mutable animation state kept off React to avoid per-frame re-renders.
  const state = useRef({ ay: 0, ax: -0.18, velY: 0.0022, axTarget: -0.18, radius: 200 });
  const visibleRef = useRef(true);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const measure = () => {
      const s = Math.min(wrap.clientWidth, wrap.clientHeight);
      state.current.radius = (s / 2) * 0.82;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);

    // Pause the per-frame transform churn when the sphere is off-screen or the
    // tab is hidden — no point spinning 16 nodes nobody can see (battery + it
    // otherwise keeps the main thread busy enough to stall headless capture).
    const io = new IntersectionObserver(([e]) => (visibleRef.current = e.isIntersecting), {
      threshold: 0.05,
    });
    io.observe(wrap);

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 2 - 1; // -1..1
      const my = ((e.clientY - r.top) / r.height) * 2 - 1;
      state.current.velY = 0.0022 + mx * 0.026;
      state.current.axTarget = my * 0.55;
    };
    const onLeave = () => {
      state.current.velY = 0.0022;
      state.current.axTarget = -0.18;
    };
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    let raf;
    const tick = () => {
      if (!visibleRef.current || document.hidden) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const st = state.current;
      st.ay += st.velY;
      st.ax += (st.axTarget - st.ax) * 0.05;
      const cy = Math.cos(st.ay);
      const sy = Math.sin(st.ay);
      const cx = Math.cos(st.ax);
      const sx = Math.sin(st.ax);

      for (let i = 0; i < base.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const [ux, uy, uz] = base[i];
        // yaw around Y
        const x1 = ux * cy + uz * sy;
        const z1 = -ux * sy + uz * cy;
        // pitch around X
        const y2 = uy * cx - z1 * sx;
        const z2 = uy * sx + z1 * cx;
        const x = x1 * st.radius;
        const y = y2 * st.radius;
        const z = z2 * st.radius;
        const depth = (z2 + 1) / 2; // 0 (back) → 1 (front)
        const scale = 0.62 + depth * 0.55;
        el.style.transform = `translate(-50%,-50%) translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) scale(${scale.toFixed(3)})`;
        el.style.opacity = (0.4 + depth * 0.6).toFixed(3);
        el.style.zIndex = String(Math.round(depth * 100));
        el.style.filter = depth < 0.5 ? `blur(${((0.5 - depth) * 2.2).toFixed(2)}px)` : "none";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [base]);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-square w-full max-w-[440px] [perspective:1100px]"
      role="img"
      aria-label={`Technologies: ${skills.join(", ")}`}
    >
      {/* core glow the tags orbit — gives the cloud a luminous centre to read against */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(227,185,100,0.22),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,212,145,0.35),transparent_72%)] blur-md" />
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        {skills.map((skill, i) => (
          <span
            key={skill}
            ref={(el) => (itemRefs.current[i] = el)}
            className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-gold-500/20 bg-ink-900/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-sm transition-colors duration-300 hover:border-gold-400/70 hover:text-gold-200"
            style={{ willChange: "transform, opacity" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function GroupedGrid({ groups }) {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {groups.map((g) => (
        <div key={g.label}>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold-400">
            {g.label}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {g.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-ink-900/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function SkillSphere() {
  const reduce = useReducedMotion();
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    // Sphere on the desktop layout (room to orbit + a cursor to steer it); the
    // categorized grid on mobile (cleaner, no scroll-spin) and for reduced motion.
    // Width-based, not pointer-based, so it renders deterministically in CI shots.
    const wide = window.matchMedia("(min-width: 768px)").matches;
    setInteractive(wide && !reduce);
  }, [reduce]);

  return interactive ? (
    <Sphere skills={profile.skills} />
  ) : (
    <GroupedGrid groups={profile.skillGroups} />
  );
}
