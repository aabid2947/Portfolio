import HeroImage from '../assets/HeroSectionImage.png'

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="font-mono text-4xl text-white">
              Elias is a{' '}
              <span className="text-purple-500">web designer</span> and{' '}
              <span className="text-purple-500">front-end developer</span>
            </h1>
            <p className="font-mono text-lg text-zinc-400">
              He crafts responsive websites where technologies
              meet creativity
            </p>
            <button className="border border-white px-6 py-2 font-mono text-white transition-colors hover:bg-white hover:text-black">
              Contact me!!
            </button>
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0 -z-10 h-72 w-72 bg-purple-500/10 blur-3xl"></div>
            <div className="relative aspect-square">
              {/* Geometric squares */}
              <div className="absolute right-8 top-8 z-10">
                <div className="relative h-24 w-24">
                  <div className="absolute border border-purple-500"></div>
                  <div className="absolute left-4 top-4 border border-purple-500"></div>
                  <div className="absolute left-8 top-8 border border-purple-500"></div>
                </div>
              </div>
              {/* Dot pattern */}
              <div className="absolute -right-4 top-4 grid h-24 w-24 grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
                ))}
              </div>
              <img
                src={HeroImage}
                alt="Developer portrait"
                className="relative z-0 h-full w-full object-cover"
              />
              {/* Status bar */}
              <div className="absolute bottom-8 left-0 right-0 z-10 mx-4">
                <div className="flex items-center gap-2 rounded bg-zinc-900/80 p-4 backdrop-blur">
                  <div className="h-3 w-3 rounded-sm bg-purple-500"></div>
                  <p className="font-mono text-sm text-zinc-400">
                    Currently working on{' '}
                    <span className="text-white">Portfolio</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

