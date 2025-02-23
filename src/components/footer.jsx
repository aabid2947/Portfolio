import { Github, DiscIcon as Discord, Twitter ,Instagram } from 'lucide-react'
import { getAboutMe } from '../API/api'
import { useState,useEffect } from 'react'

export default function Footer() {
  const [socialLink,setSocialLink] = useState([])

  useEffect(() => {
    console.log("Fetching About me")
    const fetchSocialLinks = async () => {
      try {
        const fetchedAboutme = await getAboutMe()

        if (fetchedAboutme) {
          setSocialLink(fetchedAboutme[0].socialLink)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchSocialLinks()
  }, [])

  return (
    <footer className="border-t border-zinc-800 ">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="/" className="font-mono text-lg font-bold text-white hover:text-purple-500">
              # Aabid
            </a>
            <p className="font-mono text-sm text-zinc-400">
              aabidhussainpas@gmail.com
            </p>
            <p className="font-mono text-sm text-zinc-400">
              Web designer and front-end developer
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <p className="font-mono text-sm text-zinc-400">Media</p>
            <div className="flex gap-4">
              <a 
                href={socialLink.github}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-zinc-400 transition-colors hover:text-purple-500"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
              <a 
                href={socialLink.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-purple-500"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href={socialLink.twitter}
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
            © Copyright 2025. Made by Aabid
          </p>
        </div>
      </div>
    </footer>
  )
}

