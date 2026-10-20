import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * Pointer-reactive 3D tilt with a soft cursor glare — the DOM-layer echo of the
 * WebGL hero. All hooks run unconditionally; tilt is simply not applied when the
 * user prefers reduced motion.
 */
export default function Tilt({ children, className = "", max = 7, glare = true }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 150, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 150, damping: 18, mass: 0.4 });
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareBg = useTransform(
    [sx, sy],
    ([x, y]) => `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,240,210,0.18), transparent 46%)`
  );

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      {children}
      {glare && !reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] mix-blend-soft-light"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}
