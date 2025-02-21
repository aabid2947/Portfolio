import { ProjectCard } from "../components/projectCard";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import SmallProjectsSection from "../components/Project/SmallProject";
import { useEffect, useState } from "react";
import { getMainProjects } from "../API/api";
import Hyperspeed from "../components/ui/Hyperspeed";
import { motion } from "framer-motion";

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
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
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
        <div className="py-16 px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-8 font-mono text-3xl font-bold text-purple-500">#complete-apps</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mainProjets.map((project) => (
                <motion.div
                  key={project.Name}
                  whileHover={{ x: 8,y:-8, boxShadow: "0px 10px 30px rgb(0, 2, 48)" }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg overflow-hidden"
                >
                  <ProjectCard project={project} />
                </motion.div>
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