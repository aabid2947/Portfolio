import { useEffect, useState } from "react";
import { getMainProjects } from "../../API/api";
import { motion } from "framer-motion";
import { ProjectCard } from "../projectCard"
import { useMainProjects } from "../../contexts/ProjectContext";

export default function MainProjets() {
    const [loading, setLoading] = useState(false)
    const mainProjects = useMainProjects()

    if (loading) {
        return <div className="flex items-center justify-center h-screen ">
            <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-300"
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
            <div className="w-full max-w-7xl mx-auto relative pt-16 sm:pt-20 md:pt-24 px-4 sm:px-8"> {/* Adjusted padding */}
                <div className="mx-auto max-w-7xl">
                    <h1 className="mb-6 sm:mb-8 font-mono text-2xl sm:text-3xl font-bold text-yellow-300">Major Projects</h1> {/* Adjusted heading size and margin */}
                    <div className="grid gap-x-2 gap-y-8 sm:grid-cols-1 lg:grid-cols-2"> {/* Added gap-y for vertical spacing between cards on smaller screens */}
                        {mainProjects.map((project) => (
                            <motion.div
                                key={project.Name}
                                transition={{ duration: 0.2 }}
                                className="rounded-lg "
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