"use client"

import { useEffect, useState } from "react"

export function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-zinc-950 px-8 py-24 overflow-hidden">
      {/* Dynamic mouse-following glow */}
      <div
        className="absolute -z-10 h-96 w-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 bg-yellow-600/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 bg-orange-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-yellow-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                  Frontend Developer
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                Hello, I'm{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                    Elias
                  </span>
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform scale-x-0 animate-scale-x"></span>
                </span>
                .
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-zinc-300 animate-fade-in-up delay-300">
                I'm a self-taught front-end developer based in{" "}
                <span className="text-yellow-400 font-medium">Kyiv, Ukraine</span>. I transform creative ideas into
                modern, user-friendly websites from the ground up.
              </p>

              <p className="text-base leading-relaxed text-zinc-400 animate-fade-in-up delay-500">
                For over a year, my passion has been turning knowledge into engaging web experiences that help clients
                establish a strong online presence. I am constantly learning and adapting to the newest technologies to
                push the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up delay-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">1+</div>
                <div className="text-sm text-zinc-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">50+</div>
                <div className="text-sm text-zinc-500">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">100%</div>
                <div className="text-sm text-zinc-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image and Decorative Elements */}
          <div className="relative group animate-fade-in-up delay-200">
            {/* Animated decorative rings */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-orange-400/20 animate-spin-slow-reverse"></div>
            </div>

            {/* The two decorative dot grids */}
            <div className="absolute -right-4 -top-4 grid h-24 w-24 grid-cols-4 gap-2 transition-all duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:rotate-12">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-zinc-700 transition-all duration-500 group-hover:bg-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-400/50"
                  style={{ animationDelay: `${i * 50}ms` }}
                ></div>
              ))}
            </div>

            <div className="absolute -bottom-4 -left-4 grid h-24 w-24 grid-cols-4 gap-2 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-12">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-zinc-700 transition-all duration-500 group-hover:bg-orange-400 group-hover:shadow-lg group-hover:shadow-orange-400/50"
                  style={{ animationDelay: `${i * 50}ms` }}
                ></div>
              ))}
            </div>

            {/* The Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl shadow-yellow-900/30 group-hover:shadow-yellow-500/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-orange-500/10 z-10"></div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Developer portrait of Elias"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />

              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating tech icons */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
              <span className="text-white font-bold text-sm">JS</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow delay-1000">
              <span className="text-white font-bold text-xs">TS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
