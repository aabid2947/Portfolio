import React from "react";
import { GlowButton } from "@/components/ui/glow-button";

export  function ProjectCard({ project }) {
  return (
    <div className=" bg-gradient-to-b from-gray-900 to-black text-white border-0 rounded-[16px] ">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Project</span>
            <span className="text-orange-500 font-semibold">
              {project.Name}
            </span>
          </div>
        </div>
      </header>

      {/* Tech Stack */}
      <div className="container mx-auto px-4 py-6 ">
        <div className="flex flex-col gap-3 ">
          <div className="flex flex-wrap gap-1">
            {project.TechStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl tracking-wide font-bold font-mono mb-2">{project.Name}</h1>
        <p className="text-gray-400 mb-8 font-['Fira_Code'] h-[30px]">{project.Desc}</p>

        <div className="flex justify-center gap-4">
          <GlowButton variant="live">
            Live <span className="ml-2">↗</span>
          </GlowButton>
          <a href={project.githubLink} target="_blank">
            <GlowButton variant="cached">
              GitRepo <span className="ml-2">↗</span>
            </GlowButton>
          </a>
        </div>
      </main>
    </div>
  );
}
