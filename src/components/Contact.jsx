import { profile } from "../data/portfolio.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none transition-colors duration-300 focus:border-gold-400";

export default function Contact() {
  // No backend in this demo — compose the message into the visitor's mail client.
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
    const body = encodeURIComponent(
      `${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-14 md:py-20">
      <div className="absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-500/[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading act="Final Act" kicker="The Resolution" title="Contact me" />

        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <p className="font-display text-3xl leading-snug text-zinc-100 md:text-4xl">
                Have a story worth telling?{" "}
                <span className="italic text-gold-300">Let's shoot the next scene together.</span>
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-10 inline-block font-mono text-lg tracking-wide text-zinc-300 transition-colors hover:text-gold-300 md:text-xl"
              >
                {profile.email}
                <span className="mt-2 block h-px w-full origin-left scale-x-0 bg-gold-400 transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-gold-300"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600">
                {profile.location} · {profile.availability}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className={inputClass} />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className={inputClass}
                />
              </div>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about the project — scope, timeline, dream outcome…"
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="mt-2 self-start rounded-full bg-gold-500 px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-950 transition-colors duration-300 hover:bg-gold-300"
              >
                Send the script →
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Opens your mail client — no servers were harmed in this demo.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
