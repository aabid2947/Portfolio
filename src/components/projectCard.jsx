import React from 'react';

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

// Updated ProjectCard to use mainProjects data shape
export function ProjectCard({ project }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-lg shadow-black/40 h-full flex flex-col justify-between">
      <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between">
        {/* Title and Description */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/60 mb-4">
            {project.Name}
          </h2>
          <p className="text-base text-gray-300/80 leading-relaxed mb-6">
            {project.Desc}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.Tech.map((tech) => (
            <span key={tech} className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.Live && (
            <a href={project.Live} target="_blank" rel="noreferrer" className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full font-semibold text-white transition-opacity hover:opacity-80">
              Live <ExternalLinkIcon />
            </a>
          )}
          {project.Repo && (
            <div className="relative group inline-block">
              <button className="inline-flex items-center bg-black/60 px-4 py-2 rounded-full font-semibold text-white transition-all hover:bg-white hover:text-black shadow-md">
                Repo <ExternalLinkIcon />
              </button>
              {/* Dropdown */}
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-gray-800 rounded-md shadow-lg">
                {project.Repo.map((url, idx) => (
                  <a key={idx} href={url} target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                    Repo {idx + 1}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
