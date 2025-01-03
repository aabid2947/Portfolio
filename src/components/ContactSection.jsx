export default function ContactSection() {
    return (
      <div className="min-h-screen bg-black px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="font-mono text-2xl text-zinc-400">
                <span className="text-purple-500">/</span>contacts
              </h1>
              <h2 className="font-mono text-lg text-zinc-400">
                Who am i?
              </h2>
            </div>
  
            {/* Main content */}
            <div className="space-y-12">
              <p className="max-w-2xl font-mono text-zinc-400">
                I'm interested in freelance opportunities. However,
                if you have other request or question, don't
                hesitate to contact me
              </p>
  
              {/* Contact boxes */}
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4 rounded border border-zinc-800 p-6">
                  <h3 className="font-mono text-lg text-white">
                    Support me here
                  </h3>
                  <p className="font-mono text-sm text-zinc-400">
                    0x0000000000000
                  </p>
                </div>
  
                <div className="space-y-4 rounded border border-zinc-800 p-6">
                  <h3 className="font-mono text-lg text-white">
                    Message me here
                  </h3>
                  <div className="space-y-2">
                    <p className="font-mono text-sm text-zinc-400">
                      @elias123
                    </p>
                    <p className="font-mono text-sm text-zinc-400">
                      elias@elias.dev.nl
                    </p>
                  </div>
                </div>
              </div>
  
              {/* All media section */}
              <div className="space-y-4">
                <h2 className="font-mono text-lg text-white">
                  <span className="text-purple-500">#</span>all-media
                </h2>
                <div className="flex gap-4">
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-zinc-400 hover:text-purple-500"
                  >
                    @elias
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-zinc-400 hover:text-purple-500"
                  >
                    @elias
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  