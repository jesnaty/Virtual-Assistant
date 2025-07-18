"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react" // Removed Download, Mail
import { AnimatedText } from "@/components/animated-text"
import { FloatingImage } from "@/components/floating-image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <FloatingImage
            src="/natnael-ayele-profile.png"
            alt="Profile Picture"
            className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-blue-400 shadow-2xl"
          />

          <AnimatedText
            text="Natnael Ayele"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-shift"
            delay={0.2}
          />

          <AnimatedText
            text="Full-Stack Software Engineer"
            className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-6"
            delay={0.4}
          />

          <div
            className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and building scalable applications that make a difference.
              Let's turn your ideas into reality.
            </p>

            {/* Removed all buttons from Hero Section */}
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <ArrowDown className="h-6 w-6 text-blue-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
