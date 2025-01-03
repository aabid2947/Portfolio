import { ArrowRight, Github } from 'lucide-react'

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  hasLive, 
  hasCached, 
  hasGithub 
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 transition-all hover:border-purple-500/50">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div>
          <h3 className="font-mono text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div className="flex gap-2">
          {hasLive && (
            <button className="flex items-center gap-2 rounded border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-500 transition-colors hover:bg-purple-500/20">
              Live <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {hasCached && (
            <button className="flex items-center gap-2 rounded border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-500 transition-colors hover:bg-purple-500/20">
              Cached <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {hasGithub && (
            <button className="flex items-center gap-2 rounded border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-500 transition-colors hover:bg-purple-500/20">
              Github <Github className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

