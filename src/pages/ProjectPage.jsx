import { ProjectCard } from "../components/projectCard"
import NavBar from "../components/Navbar"
import Footer from "../components/footer"
import SmallProjectsSection from "../components/SmallProject"

const projects = [
  {
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["HTML", "SCSS", "Python", "Flask"],
    hasLive: true,
    hasCached: true
  },
  {
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["CSS", "Express", "Node.js"],
    hasLive: true
  },
  {
    title: "ProtectX",
    description: "Discord anti-crash bot",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Express", "Discord.js", "Node.js"],
    hasCached: true
  },
  {
    title: "Kotik Bot",
    description: "Multi-functional discord bot",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["HTML", "CSS", "JS"],
    hasLive: true
  },
  {
    title: "Portfolio",
    description: "You're using it rn",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue", "TS", "Less"],
    hasGithub: true
  }
]

export default function ProjectPage() {
  return (
    <>
    <NavBar/>
    <div className=" bg-black py-16 px-8 ">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 font-mono text-3xl font-bold text-purple-500">
          #complete-apps
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
    <SmallProjectsSection/>
    <Footer/>


    </>
  )
}

