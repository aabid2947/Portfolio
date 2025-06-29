"use client"

import { Github, Instagram, Twitter, Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { socialLinks } from "../utils/socials"
// Mock API function since we don't have the actual API
const getAboutMe = async () => {
  return [
    {
      socialLink: {
        github: "https://github.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
  ]
}

export default function Footer() {

 

  const navigationLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about-me" },
        { name: "Works", href: "/works" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Design", href: "/services/web-design" },
        { name: "Frontend Development", href: "/services/frontend" },
        { name: "UI/UX Design", href: "/services/ui-ux" },
        { name: "Consulting", href: "/services/consulting" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "E-commerce Sites", href: "/projects/ecommerce" },
        { name: "Landing Pages", href: "/projects/landing" },
        { name: "Web Applications", href: "/projects/web-apps" },
        { name: "Mobile Apps", href: "/projects/mobile" },
      ],
    },
  ]

  return (
    <footer className="relative bg-zinc-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-yellow-500/10 to-orange-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-orange-500/10 to-yellow-500/10 blur-3xl"></div>
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-5">
          <svg viewBox="0 0 400 600" className="h-full w-full">
            <path d="M0,100 C150,50 250,150 400,100 L400,600 L0,600 Z" fill="url(#footerGradient)" />
            <defs>
              <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Let's{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Talk.
                </span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-md">
                Ready to bring your ideas to life? Let's create something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/20">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="font-mono text-lg">aabidhussainpas@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/20">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="font-mono text-lg">Delhi, India</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-lg text-yellow-400 font-medium">Follow Me</p>
              <div className="flex gap-3">
                {[ 
                  { icon: Github, href: socialLinks.githubLink, label: "Github" },
                  { icon: Instagram, href: socialLinks.instagramLink, label: "Instagram" },
                  { icon: Twitter, href: socialLinks.xLink, label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-zinc-400 transition-all duration-300 hover:border-yellow-500/40 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 hover:text-yellow-400 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/20"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {navigationLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-mono text-lg font-semibold text-yellow-400 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group font-mono text-lg text-zinc-400 transition-all duration-300 hover:text-yellow-400 hover:translate-x-1"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-yellow-500/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="group font-mono text-xl font-bold text-white transition-all duration-300 hover:text-yellow-400"
              >
                <span className="relative">
                  # Aabid
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <span className="h-4 w-px bg-zinc-700"></span>
              <p className="font-mono text-lg text-zinc-500">Full Stack and Mobile developer</p>
            </div>

            <p className="font-mono text-lg text-zinc-500">
              © Copyright 2025. Made with <span className="text-yellow-400">♥</span> by Aabid
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
