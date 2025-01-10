import React, { useEffect, useState } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import DecayCard from './ui/DecayCard';

export function ProjectCard({ project }) {
  const cld = new Cloudinary({ cloud: { cloudName: 'dscnmbhnf' } });
  const [cldImg, setCldImg] = useState(null);

  useEffect(() => {
    const img = cld
      .image('mainProjectsImage/pcrqt7kyiste4hd04qdn')
      .format('auto')
      .quality('auto')
      .resize(auto().gravity(autoGravity()).width(900).height(900));
    setCldImg(img.toURL());
  }, []);

  const handleRedirect = () => {
    if (project.githubLink) {
      window.open(project.githubLink, '_blank');
    }
  };

  return (
    <DecayCard width={400} height={500} image={cldImg || ''}>
      <div className="w-full h-full flex flex-col justify-between p-4 bg-black bg-opacity-50">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {project.TechStack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
          <div>
            <h3 className="font-mono text-xl font-bold text-white">{project.Name}</h3>
            <p className="text-sm text-zinc-400 py-1">{project.Desc}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {project.isLive && (
            <button className="flex items-center gap-2 rounded border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-500 transition-colors hover:bg-purple-500/20">
              Live <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {project.isCached && (
            <button className="flex items-center gap-2 rounded border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-500 transition-colors hover:bg-purple-500/20">
              Cached <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {project.githubLink && (
            <button
              className="flex items-center gap-2 rounded border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-500 transition-colors hover:bg-purple-500/20"
              onClick={handleRedirect}
            >
              GitHub <Github className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </DecayCard>
  );
}
