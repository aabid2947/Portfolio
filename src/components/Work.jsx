import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { archive, projects } from "../data/portfolio.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import LinkPills from "./ui/LinkPills.jsx";

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/* A browser-chrome poster whose layers live on different Z-planes, so a single
   pointer-driven rotation parallaxes the frame, the metric chips, and the ghost
   number against each other — a real depth read, not a flat hover. */
function ProjectFrame({ project }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 140, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 140, damping: 18, mass: 0.4 });
  const rotateX = useTransform(sy, [0, 1], [8, -8]);
  const rotateY = useTransform(sx, [0, 1], [-10, 10]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,240,210,0.22), transparent 48%)`;

  const primary = project.links?.[0];
  const host = primary ? hostOf(primary.url) : "";
  // With a demo video, its poster stands in for it when motion is reduced.
  const still = project.video ? project.poster : project.image;

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
      style={
        reduce
          ? undefined
          : { rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }
      }
      className="relative"
    >
      {/* ghost act number, set deepest */}
      <span
        aria-hidden="true"
        style={reduce ? undefined : { transform: "translateZ(-50px)" }}
        className="pointer-events-none absolute -left-4 -top-12 select-none font-display text-[7rem] leading-none text-white/[0.06] md:text-[9rem]"
      >
        {project.id}
      </span>

      {/* the browser frame */}
      <div
        style={reduce ? undefined : { transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-800 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-ink-900/90 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          {host && (
            <span className="ml-3 truncate rounded-md bg-ink-950/70 px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-zinc-500">
              {host}
            </span>
          )}
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            {project.year}
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-ink-900">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          {project.video && !reduce ? (
            <video
              src={project.video}
              poster={project.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${project.title} — app demo`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : still ? (
            <>
              <img
                src={still}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
              />
              <img
                src={still}
                alt={`${project.title} — screenshot`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </>
          ) : (
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[6rem] italic opacity-90"
              style={{ color: project.accent }}
            >
              {project.title.charAt(0)}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        </div>
      </div>

      {/* floating metric chips — closest plane, biggest parallax */}
      {project.metrics?.length > 0 && (
        <div
          style={reduce ? undefined : { transform: "translateZ(60px)" }}
          className="pointer-events-none absolute -bottom-6 left-3 right-3 flex flex-wrap justify-center gap-2.5"
        >
          {project.metrics.map((m) => (
            <div
              key={m.k}
              className="flex items-baseline gap-2 rounded-lg border border-gold-500/20 bg-ink-950/85 px-3 py-2 shadow-xl backdrop-blur-md"
            >
              <span className="font-display text-lg leading-none text-gold-300">{m.v}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                {m.k}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* cursor glare on the frontmost plane */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ background: glare, transform: "translateZ(80px)" }}
          className="pointer-events-none absolute inset-0 rounded-xl mix-blend-soft-light"
        />
      )}
    </motion.div>
  );
}

function ProjectRow({ project, index }) {
  const reversed = index % 2 === 1;
  const primary = project.links?.[0];

  const frame = primary ? (
    <a href={primary.url} target="_blank" rel="noreferrer" data-cursor className="block">
      <ProjectFrame project={project} />
    </a>
  ) : (
    <ProjectFrame project={project} />
  );

  return (
    <Reveal y={48}>
      <article
        className={`group grid items-center gap-12 pb-6 md:grid-cols-2 md:gap-16 ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {frame}

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">
            <span className="text-gold-400">{project.id}</span> · {project.category}
          </p>
          <h3 className="mt-3 font-display text-4xl text-zinc-100 transition-colors duration-300 group-hover:text-gold-300 md:text-5xl">
            {project.title}
          </h3>
          {project.role && (
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold-400/80">
              {project.role}
            </p>
          )}
          <p className="mt-4 max-w-md leading-relaxed text-zinc-400">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>
          <LinkPills links={project.links} className="mt-6" />
        </div>
      </article>
    </Reveal>
  );
}

function ArchiveCard({ item, index }) {
  return (
    <Reveal delay={0.06 * (index % 4)} className="h-full">
      <div className="group flex h-full flex-col rounded-2xl border border-white/5 bg-ink-900/60 p-6 transition-colors duration-500 hover:border-gold-500/30">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-display text-2xl text-zinc-100 transition-colors duration-300 group-hover:text-gold-300">
            {item.title}
          </h4>
          <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-500">
            {item.year}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {item.blurb}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500"
            >
              {tag}
            </li>
          ))}
        </ul>
        <LinkPills links={item.links} className="mt-5" />
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading act="Act II" kicker="The Plot" title="Selected work" />
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* B-roll — smaller productions from the archive */}
        <div className="mt-28 md:mt-36">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
              <span className="text-gold-400">B-roll</span> · From the archive
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {archive.map((item, i) => (
              <ArchiveCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-600"
        >
          <a
            href="https://github.com/aabid2947?tab=repositories"
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="transition-colors duration-300 hover:text-gold-300"
          >
            + 55 more productions on GitHub ↗
          </a>
        </motion.p>
      </div>
    </section>
  );
}
