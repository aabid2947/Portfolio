export function AboutSection() {
    return (
      <div className="relative min-h-screen  px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <h1 className="font-mono text-2xl text-white">
                Hello, i'm Elias!
              </h1>
              <div className="space-y-4 font-mono text-zinc-400">
                <p>
                  I'm a self-taught front-end developer based in Kyiv,
                  Ukraine. I can develop responsive websites from
                  scratch and raise them into modern user-friendly web
                  experiences.
                </p>
                <p>
                  Transforming my creativity and knowledge into a
                  websites has been my passion for over a year. I have
                  been helping various clients to establish their
                  presence online. I always strive to learn about the
                  newest technologies and frameworks.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute right-0 top-0 -z-10 h-72 w-72 bg-purple-500/10 blur-3xl"></div>
              <div className="relative aspect-square">
                <div className="absolute -right-4 -top-4 grid h-24 w-24 grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -left-4 grid h-24 w-24 grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
                  ))}
                </div>
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Developer portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  