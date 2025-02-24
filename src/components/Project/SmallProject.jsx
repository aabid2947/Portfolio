import { useEffect, useState } from "react"
import { getMinorProjects } from "../../API/api"
import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/glow-button";




export default function SmallProjectsSection() {
  const [minorProjects, setMinorProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMinorProjects = async () => {
      try {

        const minorProjects = await getMinorProjects()

        if (minorProjects) {
          console.log(minorProjects)
          setLoading(false)
          setMinorProjects(minorProjects)
        }
      } catch (error) {
        console.log("Error in fetching minor projeccts", error)
      }
    }
    fetchMinorProjects()
  }, [])


  if (loading) {
    return <div className="flex items-center justify-center h-screen ">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  }

  return (
    <section className="w-full  py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <h2 className="font-['Fira_Code'] text-[#C778DD] text-base">#small-projects</h2>
          <div className="h-[1px] w-32 bg-[#C778DD]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {minorProjects.map((project, index) => (
            <div
              key={index}
              className="border border-[#ABB2BF] group hover:border-[#C778DD] transition-colors"
            >
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-['Fira_Code'] text-white text-lg">
                    {project.Name}
                  </h3>
                  <p className="text-[#ABB2BF] text-sm min-h-[40px]">
                    {project.Desc}
                  </p>
                </div>
                <div className="border border-[#ABB2BF] text-white font-['Fira_Code'] tracking-wider  inline-block px-2 py-1 rounded-sm">
                  {project.tech.map((tech) =>
                  (
                    <span key={tech}>{tech}, </span>
                  )
                  )}
                </div>
                <div>
                  <a href={project.githubLink} target="_blank">
                    <GlowButton variant="cached">
                      GitRepo <span className="ml-2">↗</span>
                    </GlowButton>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Dots */}
        <div className="relative">
          <div className="absolute -left-8 bottom-0 opacity-20">
            <div className="grid grid-cols-4 gap-[6px]">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-[3px] h-[3px] bg-zinc-400 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

