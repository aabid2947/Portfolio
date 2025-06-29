"use client";

import { useEffect, useState } from "react";
import HeroImage from "../../assets/HeroSectionImage.png"; // Replace with your actual image

export  function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <div className="relative px-4 py-16 sm:px-8 sm:py-20 md:py-24 overflow-hidden">
      {/* Mouse-following glow */}
      

      {/* Animated background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-32 w-32 sm:h-64 sm:w-64 bg-yellow-600/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 h-40 w-40 sm:h-80 sm:w-80 bg-orange-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
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
          {/* Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm m-2 font-medium text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                  Full-Stack Developer
                </span>
                  <span className="text-sm font-medium text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                  App Developer
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                Hello, I'm{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                    Aabid
                  </span>
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform scale-x-0 animate-scale-x"></span>
                </span>
                .
              </h1>
            </div>
  

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-fade-in-up delay-700">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-400">1+</div>
                <div className="text-xs sm:text-sm text-zinc-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400">8+</div>
                <div className="text-xs sm:text-sm text-zinc-500">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400">100%</div>
                <div className="text-xs sm:text-sm text-zinc-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image and Effects */}
          <div className="relative group animate-fade-in-up delay-200 mt-12 lg:mt-0">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-orange-400/20 animate-spin-slow-reverse"></div>
            </div>

            <div className="absolute -right-4 -top-4 grid h-16 w-16 sm:h-24 sm:w-24 grid-cols-4 gap-1 sm:gap-2 transition-all duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:rotate-12">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="h-1 w-1 sm:h-2 sm:w-2 rounded-full bg-zinc-700 transition-all duration-500 group-hover:bg-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-400/50"
                  style={{ animationDelay: `${i * 50}ms` }}
                ></div>
              ))}
            </div>

            <div className="absolute -bottom-4 -left-4 grid h-16 w-16 sm:h-24 sm:w-24 grid-cols-4 gap-1 sm:gap-2 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-12">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="h-1 w-1 sm:h-2 sm:w-2 rounded-full bg-zinc-700 transition-all duration-500 group-hover:bg-orange-400 group-hover:shadow-lg group-hover:shadow-orange-400/50"
                  style={{ animationDelay: `${i * 50}ms` }}
                ></div>
              ))}
            </div>

            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl shadow-yellow-900/30 group-hover:shadow-yellow-500/20 transition-all duration-500">
              <div className="absolute inset-0 z-10"></div>
              <img
                src={HeroImage}
                alt="Aabid's portrait"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="absolute -top-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
              <span className="text-white font-bold text-xs sm:text-sm">JS</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow delay-1000">
              <span className="text-white font-bold text-xs sm:text-xs">TS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}