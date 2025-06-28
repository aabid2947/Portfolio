"use client";

import { Link, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Github, Dribbble, Figma, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ALogo from "../assets/ALogo.png"
export default function NavMenu() {
  const pathname = useNavigation();
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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-yellow-500/20 bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-yellow-500/5"
            : "border-b border-transparent bg-zinc-950/50 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex h-20 items-center justify-between">
            <Link
               to="/"
              className="group relative flex items-center  text-2xl font-extrabold text-white transition-all duration-300 hover:scale-105"
            >
              <img src={ALogo} alt="A" className="h-14 w-14" />
              <span className="z-10 ml-[-12px] mb-[-6px]">ABID</span>
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100"></div>
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></div>
            </Link>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => setIsOverlayOpen(true)}
                className="grid grid-cols-2 gap-1 w-10 h-10 group-hover:rotate-45 items-center justify-center group transition-all"
              >
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 bg-yellow-400 rounded-full transform transition-all duration-300 "
                  ></span>
                ))}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {isOverlayOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-white bg-zinc-950 transition-all duration-700 ease-out ${
            showOverlay ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <div
            className={`absolute top-0 left-0 right-0 flex items-center justify-center p-6 transition-all duration-700 ease-out ${
              showOverlay ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOverlayOpen(false)}
              className="text-white hover:bg-zinc-800 p-2"
            >
              <X className="h-8 w-8" />
            </Button>
          </div>

          <div
            className={`flex flex-col items-center space-y-8 text-center transition-all duration-700 ease-out delay-200 ${
              showOverlay ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }`}
          >
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOverlayOpen(false)}
                className="text-5xl md:text-6xl lg:text-7xl font-bold hover:text-yellow-400 transition-colors duration-300"
              >
                {label.toUpperCase()}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-8 flex space-x-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 text-lg font-medium"
            >
              LINKEDIN
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 text-lg font-medium"
            >
              BEHANCE
            </a>
          </div>
        </div>
      )}
    </>
  );
}
