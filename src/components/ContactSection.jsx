import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope,FaTwitter  } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="min-h-screen px-8 py-24">
      <div className="mx-auto max-w-7xl w-[50%]">
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
            <p className="max-w-3xl font-mono text-zinc-400">
              I'm interested in freelance opportunities. However,
              if you have other request or question, don't
              hesitate to contact me
            </p>

            {/* Contact boxes */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4 rounded border border-zinc-800 p-6">
                <h3 className="font-mono text-lg text-white">Message me here</h3>
                <div className="space-y-2">
                  <a
                    href="https://instagram.com/aabid2947"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-sm text-zinc-400 hover:text-purple-500 transition"
                  >
                    <FaInstagram className="h-5 w-5" /> Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-aabid-hussain-852a72255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-sm text-zinc-400 hover:text-blue-500 transition"
                  >
                    <FaLinkedin className="h-5 w-5" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/aabid2947"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-sm text-zinc-400 hover:text-gray-500 transition"
                  >
                    <FaGithub className="h-5 w-5" /> GitHub
                  </a>
                  <a
                    href="https://x.com/aabid2947"
                    target="_blank"
                    className="flex items-center gap-2 font-mono text-sm text-zinc-400 hover:text-blue-400 transition"
                  >
                    <FaTwitter className="h-5 w-5" /> Twitter
                  </a>
                  <a
                    href="mailto:aabidhussainpas@gmail.com"
                    className="flex items-center gap-2 font-mono text-sm text-zinc-400 hover:text-red-500 transition"
                  >
                    <FaEnvelope className="h-5 w-5" /> Email
                  </a>
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
                  @Aabid
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-zinc-400 hover:text-purple-500"
                >
                  @Aabid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

