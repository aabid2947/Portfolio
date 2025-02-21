

import { Link } from "react-router-dom"
import { FaGithub, FaDribbble, FaFigma } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function NavMenu() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex h-14 items-center justify-between">
          <Link
            to="/"
            className="font-mono text-lg font-bold text-white hover:text-purple-500"
          >
            # Elias
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex items-center gap-6">
            <li>
              <Link
                to="/"
                className="font-mono text-purple-500 hover:text-purple-400"
              >
                #home
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className="font-mono text-zinc-400 hover:text-purple-500"
              >
                #works
              </Link>
            </li>
            <li>
              <Link
                to="/about-me"
                className="font-mono text-zinc-400 hover:text-purple-500"
              >
                #about-me
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-mono text-zinc-400 hover:text-purple-500"
              >
                #contacts
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="font-mono text-sm text-zinc-400 hover:text-purple-500">
              EN
            </button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="sm:hidden text-zinc-400 hover:text-purple-500"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-64 border-zinc-800 bg-black/95 backdrop-blur-sm p-6"
              >
                <nav className="flex flex-col h-full">
                  <ul className="flex flex-col gap-6 py-4">
                    <li>
                      <Link
                        to="/"
                        className="font-mono text-purple-500 hover:text-purple-400"
                      >
                        #home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/works"
                        className="font-mono text-zinc-400 hover:text-purple-500"
                      >
                        #works
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="font-mono text-zinc-400 hover:text-purple-500"
                      >
                        #about-me
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="font-mono text-zinc-400 hover:text-purple-500"
                      >
                        #contacts
                      </Link>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <button className="font-mono text-sm text-zinc-400 hover:text-purple-500 mb-6">
                      EN
                    </button>
                    <div className="flex gap-6 text-zinc-400">
                      <a href="#" className="hover:text-purple-500">
                        <FaGithub className="h-5 w-5" />
                      </a>
                      <a href="#" className="hover:text-purple-500">
                        <FaDribbble className="h-5 w-5" />
                      </a>
                      <a href="#" className="hover:text-purple-500">
                        <FaFigma className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}

