import React, { useState, useEffect } from "react";
import { getMainProjects } from "../../API/api";
import { ProjectCard } from "../projectCard";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function ProjectSectionHome() {
  const [mainProjects, setMainProjects] = useState([]);

  useEffect(() => {
    console.log("Fetching main projects");
    const fetchMainProjects = async () => {
      try {
        const fetchedProjects = await getMainProjects();
        if (fetchedProjects) {
          setMainProjects(fetchedProjects);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMainProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden ">
      <div className="mx-auto max-w-7xl ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-3xl font-bold text-purple-500 flex justify-between items-center"
        >
          <div className="flex flex-row w-[80%] items-center">
            #projects
            <div className="m-1 h-[1px] w-16 sm:w-24 md:w-32 bg-[#C778DD]" />

          </div>

          <Link
            to="/works"
            className="hover:border border-zinc-500 p-1 rounded-lg cursor-pointer"
          >
            <p className="text-sm font-mono text-zinc-500 whitespace-nowrap">
              View all ~~>
            </p>
          </Link>
        </motion.h1>
        <Slider {...settings}>
          {mainProjects.map((project, index) => (
            <motion.div
              key={project.Name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="px-4 py-2 max-w-lg mx-auto">
                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
