
import { useEffect, useState } from "react";
import { getMainProjects } from "../../API/api";
import { motion } from "framer-motion";
import {ProjectCard} from "../projectCard"


export default function MainProjets() {
    const [mainProjets, setMainProjects] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("Fetching main projects");
        const fetchMainProjects = async () => {
            try {
                const mainProjets = await getMainProjects();
                if (mainProjets) {
                    setLoading(false)
                    setMainProjects(mainProjets);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchMainProjects();
    }, []);

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
        <>
            <div className="min-h-screen py-16 px-8">
                <div className="mx-auto max-w-7xl">
                    <h1 className="mb-8 font-mono text-3xl font-bold text-purple-500">#complete-apps</h1>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                        {mainProjets.map((project) => (
                            <motion.div
                                key={project.Name}
                                whileHover={{ x: 8, y: -8, boxShadow: "0px 10px 30px rgb(0, 2, 48)" }}
                                transition={{ duration: 0.2 }}
                                className="rounded-lg overflow-hidden"
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}