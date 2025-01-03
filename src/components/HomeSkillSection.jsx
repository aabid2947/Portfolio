export default function SkillsSection() {
    const skills = {
      languages: ['TypeScript tsx', 'Python JavaScript'],
      databases: ['SQLite PostgreSQL', 'Mongo'],
      tools: ['VSCode Neovim Linux', 'Figma XFCE Arch', 'Git Font Awesome'],
      other: ['HTML CSS CSS SCSS', 'REST APIs'],
      frameworks: ['React Vue', 'Discord.js', 'Flask Express.js']
    }
  
    return (
      <section className="w-full bg-black py-16 px-8 relative">
        {/* Header */}
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="font-['Fira_Code'] text-[#C778DD] text-base">#skills</h2>
            <div className="h-[1px] w-32 bg-[#C778DD]" />
          </div>
  
          {/* Decorative Shapes */}
          <div className="absolute left-8 top-24">
            {/* Dots Grid */}
            <div className="grid grid-cols-6 gap-[6px]">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-[3px] h-[3px] bg-zinc-400 rounded-full" />
              ))}
            </div>
            
            {/* Square Shapes */}
            <div className="relative mt-12">
              <div className="absolute top-0 left-0 w-12 h-12 border border-[#C778DD] opacity-50" />
              <div className="absolute top-4 left-4 w-12 h-12 border border-[#C778DD] opacity-50" />
              <div className="absolute top-8 left-8 w-12 h-12 border border-[#C778DD] opacity-50" />
            </div>
          </div>
  
          {/* Additional Dots */}
          <div className="absolute left-48 top-48">
            <div className="grid grid-cols-4 gap-[6px]">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-[3px] h-[3px] bg-zinc-400 rounded-full" />
              ))}
            </div>
          </div>
  
          {/* Skills Grid */}
          <div className="ml-32 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-white font-['Fira_Code'] capitalize text-sm mb-2">
                  {category}
                </h3>
                <div className="border border-[#ABB2BF] p-2">
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li key={index} className="text-[#ABB2BF] text-sm font-['Fira_Code']">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  