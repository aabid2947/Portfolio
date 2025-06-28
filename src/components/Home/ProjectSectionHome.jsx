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
        <section className="text-white max-w-7xl   w-full  ">
          <div className="flex justify-around px-16">
            <div className="grid gap-2">
              {projects.map((project, idx) => (
                <figure
                  key={project.name + idx}
                  className="sticky top-0 h-screen grid place-content-center"
                >
                  <article
                    className={`${project.bg} h-72 w-[30rem] rounded-lg p-4 grid place-content-center gap-4 ${project.rotate}`}
                  >
                    <h1 className="text-3xl font-semibold">{project.name}</h1>
                    <p className="text-xl ">{project.desc}</p>
                    <div className="flex gap-2">
                      <a
                        href={project.live}
                        target="_blank"
                        className="w-fit bg-black text-white p-3 rounded-md cursor-pointer"
                      >
                        Live View
                      </a>
                      <a
                        href={project.githubs}
                        target="_blank"
                        className="w-fit bg-white text-black p-3 rounded-md cursor-pointer"
                      >
                        GitHub
                      </a>
                    </div>
                  </article>
                </figure>
              ))}
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <h1 className="text-4xl px-8 font-medium text-center tracking-tight leading-[120%]">
                What I <br /> Have Built😎
              </h1>
            </div>
          </div>
        </section>

      </main>
    </ReactLenis>
  );
}
