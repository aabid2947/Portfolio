// One-shot "the hero backdrop has drawn" signal. The 3D scene blocks the main
// thread while it compiles, so the preloader waits for this before it finishes:
// the hitch then happens under the loading screen, not during the first scroll.
// Also fired straight away when the 3D scene is skipped or fails.

let ready = false;
const listeners = new Set();

export function markHeroReady() {
  if (ready) return;
  ready = true;
  listeners.forEach((fn) => fn());
  listeners.clear();
}

/** Calls `fn` once the hero is ready (immediately if it already is). Returns an unsubscribe. */
export function onHeroReady(fn) {
  if (ready) {
    fn();
    return () => {};
  }
  listeners.add(fn);
  return () => listeners.delete(fn);
}
