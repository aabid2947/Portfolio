
import React, { useEffect, useState } from "react"
import { ArrowRight, Github } from 'lucide-react'
import { Cloudinary } from "@cloudinary/url-gen"
import { auto } from "@cloudinary/url-gen/actions/resize"
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity"
import { GlareCard } from "../ui/Glare-card"

export function ProjectCard({ project }) {
  const cld = new Cloudinary({ cloud: { cloudName: "dscnmbhnf" } })
  const [cldImg, setCldImg] = useState([])

  useEffect(() => {
    const img = cld
      .image("mainProjectsImage/pcrqt7kyiste4hd04qdn")
      .format("auto")
      .quality("auto")
      .resize(auto().gravity(autoGravity()).width(900).height(600))
    setCldImg([img.toURL()])
    console.log(img)
    console.log(img.toURL())
  }, [])

  const handleRedirect = () => {
    if (project.githubLink) {
      window.open(project.githubLink, "_blank")
    }
  }

  return (
    <GlareCard className="flex flex-col items-start justify-start overflow-hidden  ">
        <div className="w-full h-48  overflow-hidden  ">
            {cldImg.length > 0 &&
              cldImg.map((cld, index) => (
                <img
                  key={index}
                  className="w-full h-full object-fit"
                  src={cld}
                  alt={`Project ${project.Name}`}
                />
              ))}
          </div>
      <div className="w-full  flex flex-col justify-between p-3 bg-black bg-opacity-50">
      
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
          <div>
            <h3 className="font-mono text-2xl font-bold text-white mb-2 ml-1">
              {project.Name}
            </h3>
          </div>
        </div>

        <div className="flex gap-3 ">
          {project.isLive && (
            <button className="flex items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 transition-colors hover:bg-purple-500/20">
              Live <ArrowRight className="h-4 w-4" />
            </button>
          )}
        
          {project.githubLink && (
            <button
              className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 transition-colors hover:bg-purple-500/20"
              onClick={handleRedirect}
            >
              GitHub <Github className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </GlareCard>
  )
}

