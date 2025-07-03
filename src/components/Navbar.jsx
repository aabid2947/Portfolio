"use client";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Github, Dribbble, Figma, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ALogo from "../assets/ALogo.png"
import RotatingGlowButton from "./ui/RotatingGlowButton";
import { socialLinks } from "../utils/socials";
export default function NavMenu() {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout;
    if (isOverlayOpen) {
      timeout = setTimeout(() => setShowOverlay(true), 100);
    } else {
      setShowOverlay(false);
    }
    return () => clearTimeout(timeout);
  }, [isOverlayOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/works", label: "Works" },
    { path: "/about-me", label: "About Me" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
          ? "border-b border-yellow-500/20 bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-yellow-500/5"
          : "border-b border-transparent bg-zinc-950/50 backdrop-blur-sm"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> {/* Added sm:px-6 lg:px-8 for better horizontal padding on different screens */}
          <nav className="flex h-16 sm:h-20 items-center justify-between"> {/* Adjusted height for smaller screens */}
            <Link
              to="/"
              className="group relative flex items-center text-xl sm:text-2xl font-extrabold text-white transition-all duration-300 hover:scale-105" // Adjusted font size
            >
              <img src={ALogo} alt="A" className="h-10 w-10 sm:h-14 sm:w-14" /> {/* Adjusted image size */}
              <span className="z-10 ml-[-8px] sm:ml-[-12px] mb-[-4px] sm:mb-[-6px]">ABID</span> {/* Adjusted margin */}
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100"></div>
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></div>
            </Link>

            <div className="group absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => setIsOverlayOpen(true)}
                className="
                  grid grid-cols-2 gap-1
                  w-8 h-8 sm:w-10 sm:h-10 /* Adjusted button size */
                  items-center justify-center
                  transform transition-transform duration-300
                  group-hover:rotate-[50deg]
                "
              >
                {[0, 1, 2, 3].map(i => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full" // Adjusted dot size
                  />
                ))}
              </button>
            </div>

            <div className="hidden sm:block"> {/* Hide on small screens and show on sm and up */}
              <RotatingGlowButton
                text="Hire Me"
                width="180px"
                height="54px"
                onClick={() =>
                  window.open("https://www.upwork.com/freelancers/~010946d8e216b2221e", "_blank")
                }
              />
            </div>
            <div className="block sm:hidden"> {/* Show on small screens only */}
              <Button variant="ghost" size="icon" onClick={() => setIsOverlayOpen(true)} className="text-white">
                <X className="w-6 h-6 rotate-45" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {isOverlayOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-white bg-zinc-950 transition-all duration-700 ease-out ${showOverlay ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
        >
          <div
            className={`absolute top-0 left-0 right-0 flex items-center justify-center p-4 sm:p-6 /* Adjusted padding */
          transition-all duration-700 ease-out
          ${showOverlay ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOverlayOpen(false)}
              className="
            text-white hover:bg-zinc-100 rounded-full p-2
            transform transition-transform duration-300
            hover:rotate-[50deg]
          "
            >
              <X
                className="
              w-10 h-10 sm:w-12 sm:h-12 /* Adjusted icon size */
              transform transition-transform duration-300
              hover:rotate-[50deg]
            "
              />
            </Button>
          </div>


          <div
            className={`flex flex-col items-center space-y-6 sm:space-y-8 text-center transition-all duration-700 ease-out delay-200 ${showOverlay ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
          >
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOverlayOpen(false)}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold hover:text-yellow-400 transition-colors duration-300" // Adjusted font sizes
              >
                {label.toUpperCase()}
              </Link>
            ))}
             <div className=" bottom-4 sm:bottom-8 flex space-x-4 sm:space-x-8">
            <a
              href="https://www.upwork.com/freelancers/~010946d8e216b2221e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold hover:text-yellow-400 transition-colors duration-300"
            >
              Upwork
            </a>

          </div>
          </div>

         
        </div>
      )}
    </>
  );
}