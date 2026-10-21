/** Animated film-grain overlay across the whole page.
 *  The drifting layer is 150% of the viewport each way: just enough to keep
 *  the screen covered through the grain keyframes (max ~15% drift). It used
 *  to be 300% each way, a texture nine times the screen, on top of the page. */
export default function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80] overflow-hidden opacity-[0.06]"
      aria-hidden="true"
    >
      <div className="grain-bg absolute -inset-[25%] animate-grain will-change-transform" />
    </div>
  );
}
