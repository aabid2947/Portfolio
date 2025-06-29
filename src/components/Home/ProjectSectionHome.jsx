'use client';
import { ReactLenis } from "@studio-freight/react-lenis"
import { useMainProjects } from "../../contexts/ProjectContext";
export default function ProjectSectionHome() {
  const mainProjects = useMainProjects()
  const projects = mainProjects.map((proj, idx) => ({
  id: `proj-${idx}`,
  name: proj.Name,
  desc: proj.Desc,
  tech: proj.Tech,
  githubs: proj.Repo,
  live: proj.Live,
  bg: ['bg-green-500', 'bg-red-400', 'bg-orange-400', 'bg-blue-400', 'bg-indigo-400'][idx % 5],
  rotate: ['rotate-6', '', '-rotate-6', '', 'rotate-6'][idx % 5],
}));
 

  return (
    <ReactLenis root>
      <main className="flex justify-center">
        <section className="text-white max-w-7xl w-full py-16 sm:py-20 md:py-24">
          <div className="flex flex-col lg:flex-row justify-around px-4 sm:px-8 lg:px-16">
            {/* Projects Column */}
            <div className="grid gap-8 lg:gap-2 w-full lg:w-auto"> {/* Added w-full */}
              {projects.map((project, idx) => (
                <figure
                  key={project.name + idx}
                  className="sticky top-0 h-screen grid place-content-center py-8 lg:py-0" /* Added vertical padding for smaller screens */
                >
                  <article
                    className={`${project.bg} h-64 sm:h-72 w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[30rem] rounded-lg p-4 grid place-content-center gap-3 sm:gap-4 ${project.rotate}`} /* Made width responsive */
                  >
                    <h1 className="text-2xl sm:text-3xl font-semibold">{project.name}</h1>
                    <p className="text-base sm:text-xl ">{project.desc}</p>
                    <div className="flex gap-2 mt-2">
                      <a
                        href={project.live}
                        target="_blank"
                        className="w-fit bg-black text-white p-2 sm:p-3 rounded-md cursor-pointer text-sm sm:text-base"
                      >
                        Live View
                      </a>
                      <a
                        href={project.githubs}
                        target="_blank"
                        className="w-fit bg-white text-black p-2 sm:p-3 rounded-md cursor-pointer text-sm sm:text-base"
                      >
                        GitHub
                      </a>
                    </div>
                  </article>
                </figure>
              ))}
            </div>
            {/* Heading Column */}
            <div className="sticky top-0 h-40 sm:h-screen grid place-content-center text-center lg:text-left mt-8 lg:mt-0"> {/* Adjusted height and text alignment */}
              <h1 className="text-3xl sm:text-4xl px-4 sm:px-8 font-medium tracking-tight leading-[120%]">
                What I <br className="hidden sm:inline" /> Have Built😎
              </h1>
            </div>
          </div>
        </section>

      </main>
    </ReactLenis>
  );
}