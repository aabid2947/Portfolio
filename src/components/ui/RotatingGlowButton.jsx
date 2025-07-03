import React, { useEffect, useRef } from 'react';

/**
 * RotatingGlowButton (Dark & White Glow Version)
 *
 * Props:
 * - text: string (button label)
 * - width: string (CSS width, e.g. '250px', '100%')
 * - height: string (CSS height, e.g. '80px')
 * - onClick: () => void
 */
export default function RotatingGlowButton({
  text = 'Click Me',
  width = '250px',
  height = '80px',
  onClick,
}) {
  const btnRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const btn = btnRef.current;
    const rotate = () => {
      angle = (angle + 1) % 360;
      btn?.style.setProperty('--angle', `${angle}deg`);
      requestAnimationFrame(rotate);
    };
    rotate();
  }, []);

  // Inline CSS variables and background setup with a yellow→orange→red gradient
  const gradient = 'linear-gradient(to right, #f59e0b, #fb923c, #f87171)';
  const style = {
    '--angle': '0deg',
    width,
    height,
    background: `${gradient} padding-box, conic-gradient(from var(--angle), transparent, white 10%, transparent 20%) border-box`,
  };

  return (
    <button
      ref={btnRef}
      style={style}
      onClick={onClick}
      className="relative z-10 border-4 border-transparent rounded-[3rem] text-white font-semibold text-lg flex items-center justify-center outline-none transition-all duration-300 hover:text-gray-300"
    >
      {/* Glowing blur effect in grayscale */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-[3rem] blur-[8px] opacity-50"
        style={{
          background: `${gradient} padding-box, conic-gradient(from var(--angle), #ffffff20, #99999910,rgba(255, 255, 255, 0)) border-box`,
        }}
      />

      {/* Text Layer */}
      <span className="relative z-10">{text}</span>
    </button>
  );
}
