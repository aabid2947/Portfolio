import { ProjectCard } from "../components/Project/projectCard";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import SmallProjectsSection from "../components/Project/SmallProject";
import { useEffect, useState } from "react";
import { getMainProjects } from "../API/api";
import Hyperspeed from "../components/ui/Hyperspeed";

const projects = [
  {
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["HTML", "SCSS", "Python", "Flask"],
    hasLive: true,
    hasCached: true,
  },
  {
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["CSS", "Express", "Node.js"],
    hasLive: true,
  },
  {
    title: "ProtectX",
    description: "Discord anti-crash bot",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Express", "Discord.js", "Node.js"],
    hasCached: true,
  },
  {
    title: "Kotik Bot",
    description: "Multi-functional discord bot",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["HTML", "CSS", "JS"],
    hasLive: true,
  },
  {
    title: "Portfolio",
    description: "You're using it rn",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue", "TS", "Less"],
    hasGithub: true,
  },
];

export default function ProjectPage() {
  const [mainProjets, setMainProjects] = useState([]);

  useEffect(() => {
    console.log("Fetching main projects");
    const fetchMainProjects = async () => {
      try {
        const mainProjets = await getMainProjects();

        if (mainProjets) {
          console.log(mainProjets);
          setMainProjects(mainProjets);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMainProjects();
  }, []);
  return (
    <>
    
       <div className="fixed top-0 left-0 w-full h-full z-[-1] ">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 5,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            },
          }}
        />
      </div>
      <div>

      <NavBar />
      <div className="  py-16 px-8 ">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 font-mono text-3xl font-bold text-purple-500">
            #complete-apps
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainProjets.map((project) => (
              <ProjectCard key={project.Name} project={project} />
            ))}
          </div>
        </div>
      </div>
      <SmallProjectsSection />
      <Footer />
      </div>
    </>
  );
}
