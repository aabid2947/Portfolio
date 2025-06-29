import React, { useEffect, useRef } from 'react';

/**
 * RotatingGlowButton
 * 
 * Props:
 * - text: string (button label)
 * - width: string (CSS width, e.g. '250px', '100%')
 * - height: string (CSS height, e.g. '80px')
 */
export default function RotatingGlowButton({ text = 'Click Me', width = '250px', height = '80px' }) {
  const btnRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const btn = btnRef.current;
    const rotate = () => {
      angle = (angle + 1) % 360;
      btn.style.setProperty('--angle', `${angle}deg`);
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
      className="relative z-10 border-4 border-transparent rounded-[3rem] text-white font-medium flex items-center justify-center outline-none transition-colors duration-300 hover:text-opacity-90"
    >
      {/* Blurred glow behind the button using the same yellow→orange→red gradient */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-[3rem] filter blur-[8px]"
        style={{
          background: `${gradient} padding-box, conic-gradient(from var(--angle), transparent, white 10%, transparent 20%) border-box`,
        }}
      />

      {/* Button label */}
      <span className="relative">{text}</span>
    </button>
  );
}
