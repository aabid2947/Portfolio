"use client";
import { useEffect, useState } from "react";

// The component no longer accepts or renders the 'children' prop.
export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[-1] h-96 w-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl transition-all duration-300 ease-out"
      style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
      }}
    >
        {/* Children removed from here */}
    </div>
  );
}