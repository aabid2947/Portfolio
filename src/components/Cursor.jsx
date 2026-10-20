import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Gold dot + trailing ring cursor; the ring swells over interactive elements. */
export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.6 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) =>
      setHovering(Boolean(e.target.closest?.("a, button, input, textarea, [data-cursor]")));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] hidden [@media(pointer:fine)]:block"
      aria-hidden="true"
    >
      <motion.div
        style={{ x, y }}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-gold-400"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.35 : 0.9 }}
        transition={{ duration: 0.25 }}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-gold-400/60"
      />
    </div>
  );
}
