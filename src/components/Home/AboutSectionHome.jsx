"use client"
import { ChevronsRight } from 'lucide-react';
import { MapPin, Award, User, Briefcase, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const HighlightTag1 = ({ children }) => {
  return (
    <span className="relative inline-block mx-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gray-800 border border-gray-700 overflow-hidden group text-sm sm:text-base">
      <span className="relative z-10 ">{children}</span>
      {/* Glow effect */}
      <span className="absolute inset-0">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-glow"
          style={{
            animationDuration: '3s',
            animationDelay: '0.5s'
          }}
        ></span>
      </span>
    </span>
  );
};

const HighlightTag = ({ children }) => {
  return (
    <button className="relative inline-flex h-10 sm:h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
      {/* Spinning gradient border */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a2aeff_0%,#3749be_50%,#a2aeff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Inner content with glowing text */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-[#070e41] bg-[#ffffff] px-4 sm:px-8 py-1 text-base sm:text-lg font-medium dark:text-white text-black backdrop-blur-3xl [text-shadow:0_0_10px_rgba(164,172,255,0.8)] dark:[text-shadow:0_0_10px_rgba(226,203,255,0.8)]">
        {children}
      </span>
    </button>
  );
};

export default function AboutSectionHome() {
  return (
    <div className="relative w-full pt-60 sm:py-20 md:py-20 flex">
      {/* Sidebar */}


      {/* Main Content */}
      <div className="flex-1 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-hidden">
        {/* Background Gradient */}
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-8 sm:mb-10 self-start">
          About Me
        </h2>

        {/* Header */}
        {/* <header className="relative z-10 flex justify-between items-center p-8">
          <div className="flex items-center gap-2">
            <div className="text-white font-bold text-xl">
              <span className="italic">RS</span> RITIK
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </header> */}

        {/* Main Content */}

        <div className="flex flex-col sm:flex-row w-full items-center">


        </div>
        {/* About Section */}
        <div className="mx-auto text-center">
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed space-y-4 mb-8 sm:mb-12">
            Self-taught <HighlightTag>UX Designer</HighlightTag> with{' '}
            <HighlightTag>3 years</HighlightTag> of experience crafting{' '}
            <HighlightTag>seamless user experiences</HighlightTag>.


            Skilled with a strong focus on aesthetics, usability, and functionality. Proficient in{' '}
            <HighlightTag>No Code Development</HighlightTag> and exploring new technologies.


            Staying updated with new <HighlightTag>Design Trends</HighlightTag> and
            shaping digital experiences at <HighlightTag>Rankplus</HighlightTag>.


            Also freelancing to create intuitive and engaging{' '}
            <HighlightTag>design solutions</HighlightTag>.
          </p>

          {/* About Me Button */}
          <div className='flex justify-center'>

            <a
              className="flex w-36 sm:w-40 gap-2 cursor-pointer px-3 py-2 sm:px-4 sm:py-3 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-all border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold text-sm sm:text-base"
              href="#">
              Know More
              <ChevronsRight className='w-4 h-4 sm:w-5 sm:h-5' />
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}