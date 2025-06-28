import { GlowButton } from "@/components/ui/glow-button";

export default function SmallProjectsSection() {
  const minorProjects = [
    {
      Name: 'Round‑Robin Coupon',
      Desc:
        'A live web app that distributes coupons in a round‑robin fashion to guest users, with IP and cookie tracking plus a one‑hour cooldown to prevent abuse. Includes light/dark themes and responsive design.',
      tech: [
        'React.js',
        'Vite',
        'Tailwind CSS',
        'Redux Toolkit',
        'shadcn/ui',
        'React Context API',
      ],
      githubLink: 'https://github.com/aabid2947/RR_Coupon',
      liveLink: 'https://rr-coupon.vercel.app/',
    },
    {
      Name: 'Task Manager Pro',
      Desc:
        'A modern task management app with weather integration, theme toggle, subtasks, reminders, and visual progress tracking through charts.',
      tech: [
        'React 18',
        'Redux Toolkit',
        'Bootstrap 5',
        'Chart.js',
        'Lucide React',
        'Redux Persist',
      ],
      githubLink: 'https://github.com/aabid2947/TODO_APP',
      liveLink: 'https://todo-app-steel-kappa-61.vercel.app/',
    },
    {
      Name: 'PodcastEncAIAbout',
      Desc:
        'An AI‑powered tool that dynamically edits multi‑camera podcast footage by detecting active speakers. It separates audio tracks, focuses on the current speaker’s camera view, and combines views when multiple speakers talk for a polished final video.',
      tech: [
        'Python',
        'PyTorch (yolov8)',
        'Diarization',
        'dlib face landmarks',
        'FFmpeg',
        'OpenCV',
      ],
      githubLink: 'https://github.com/aabid2947/PodcastEncAIAbout',
      liveLink: '',
    },
    {
      Name: 'NewCastleV2V',
      Desc:
        'A Veins/OMNeT++ & SUMO‑based V2V simulation framework that lets you import custom OpenStreetMap road networks, generate vehicle routes, and run multi‑vehicle networked simulations using Veins.',
      tech: [
        'OMNeT++',
        'Veins',
        'SUMO',
        'Python (randomTrips)',
        'OpenStreetMap',
        'XML config',
      ],
      githubLink: 'https://github.com/aabid2947/NewCastleV2V',
      liveLink: '',
    },
  ];

  return (
    <section className="w-full py-16 px-8">
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
              className="border border-[#ABB2BF] group hover:border-[#C778DD] transition-colors flex flex-col justify-between"
            >
              <div className="p-4 space-y-4 flex flex-col h-full">
                <div className="space-y-2">
                  <h3 className="font-['Fira_Code'] text-white text-lg">{project.Name}</h3>
                  <p className="text-[#ABB2BF] text-sm h-16 overflow-hidden">
                    {project.Desc}
                  </p>
                </div>

                <div className="border border-[#ABB2BF] text-white font-['Fira_Code'] tracking-wider inline-block px-2 py-1 rounded-sm">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}, </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <a href={project.githubLink} target="_blank">
                    <GlowButton variant="cached">
                      GitRepo <span className="ml-2">↗</span>
                    </GlowButton>
                  </a>

                  <a
                    href={project.liveLink || "#"}
                    target="_blank"
                    onClick={(e) => {
                      if (!project.liveLink) e.preventDefault();
                    }}
                  >
                    <GlowButton variant="live" disabled={!project.liveLink}>
                      Live <span className="ml-2">↗</span>
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
  );
}
