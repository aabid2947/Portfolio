import { Github, DiscIcon as Discord, Twitter } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="/" className="font-mono text-lg font-bold text-white hover:text-purple-500">
              # Elias
            </a>
            <p className="font-mono text-sm text-zinc-400">
              elias@elias.dev.nl
            </p>
            <p className="font-mono text-sm text-zinc-400">
              Web designer and front-end developer
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <p className="font-mono text-sm text-zinc-400">Media</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-zinc-400 transition-colors hover:text-purple-500"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
              <a 
                href="https://discord.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-purple-500"
              >
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-purple-500"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-sm text-zinc-400">
            © Copyright 2022. Made by Elias
          </p>
        </div>
      </div>
    </footer>
  )
}

