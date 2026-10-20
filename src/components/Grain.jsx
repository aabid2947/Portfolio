/** Animated film-grain overlay across the whole page. */
export default function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80] overflow-hidden opacity-[0.06]"
      aria-hidden="true"
    >
      <div className="grain-bg absolute -inset-[100%] animate-grain" />
    </div>
  );
}
