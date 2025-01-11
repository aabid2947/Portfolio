const projects = [
  {
    name: "Bot boilerplate",
    description: "Start creating scalable Discord.js bot with TypeScript template.",
    tech: "Discord.js ts",
    link: { text: "Github >>", url: "#" }
  },
  {
    name: "My blog",
    description: "Front-end of my future blog website written in React.",
    tech: "React",
    link: { text: "Github >>", url: "#" }
  },
  {
    name: "Chess pro",
    description: "Simple landing page about something. For learning Sass.",
    tech: "Figma",
    link: { text: "Figma >>", url: "#" }
  },
  {
    name: "Crash protect website",
    description: "Simple website about anti-raid, anti-crash Discord bot.",
    tech: "Figma",
    link: { text: "Figma >>", url: "#" }
  },
  {
    name: "CSS experiments",
    description: "Collection of CSS snippets and experiments.",
    tech: "HTML CSS",
    link: { text: "Live >>", url: "#" }
  },
  {
    name: "Web Dev nvim config",
    description: "Config for Neovim perfect for web development.",
    tech: "Lua",
    link: { text: "Github >>", url: "#" }
  },
  {
    name: "Ooku",
    description: "Discord file converter with rich features.",
    tech: "Python",
    link: { text: "Live >>", url: "#" }
  },
  {
    name: "School website",
    description: "Simple website template for my school.",
    tech: "Figma",
    link: { text: "Figma >>", url: "#" }
  }
]

export default function SmallProjectsSection() {
  return (
    <section className="w-full  py-16 px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <h2 className="font-['Fira_Code'] text-[#C778DD] text-base">#small-projects</h2>
          <div className="h-[1px] w-32 bg-[#C778DD]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border border-[#ABB2BF] group hover:border-[#C778DD] transition-colors"
            >
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-['Fira_Code'] text-white text-lg">
                    {project.name}
                  </h3>
                  <p className="text-[#ABB2BF] text-sm min-h-[40px]">
                    {project.description}
                  </p>
                </div>
                <div className="border border-[#ABB2BF] inline-block px-2 py-1">
                  <span className="text-[#ABB2BF] text-sm font-['Fira_Code']">
                    {project.tech}
                  </span>
                </div>
                <div>
                  <a 
                    href={project.link.url}
                    className="text-[#ABB2BF] text-sm font-['Fira_Code'] hover:text-[#C778DD] transition-colors"
                  >
                    {project.link.text}
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

