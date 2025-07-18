"use client"

import { Github, Linkedin } from "lucide-react" // Removed Heart icon
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-slate-400 flex items-center justify-center md:justify-start">
              Made by Natnael Ayele {/* Updated text and removed icon */}
            </p>
            <p className="text-sm text-slate-500 mt-1">© 2025 Natnael Ayele. All rights reserved.</p>{" "}
            {/* Updated copyright year and name */}
          </div>

          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://github.com/jesnaty" target="_blank" rel="noopener noreferrer">
                {" "}
                {/* Updated link */}
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://www.linkedin.com/in/natnael-ayele-b9652621a/" target="_blank" rel="noopener noreferrer">
                {" "}
                {/* Updated link */}
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
