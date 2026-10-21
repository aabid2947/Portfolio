import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import SkillSphere from "./SkillSphere.jsx";
import { profile } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          act="Intermission"
          kicker="The Toolkit"
          title="Tools of the trade"
        />

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal>
              <p className="max-w-md text-lg leading-relaxed text-zinc-300">
                One stack, end to end — the same hands write the React Native
                screen, the WebSocket server behind it, and the AI agent that
                makes it useful.
              </p>
            </Reveal>
            {/* Desktop only — the sphere is the visual on the right; on mobile the
                sphere renders this same grouping itself, so don't duplicate it. */}
            <Reveal delay={0.12} className="hidden md:block">
              <div className="mt-10 space-y-5">
                {profile.skillGroups.map((g) => (
                  <div key={g.label} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <p className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-gold-400">
                      {g.label}
                    </p>
                    <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                      {g.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.22} className="hidden md:block">
              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                Drag your cursor through the cloud →
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <SkillSphere />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
