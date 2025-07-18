"use client"

import type React from "react"

import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"

interface GlitchTransitionProps {
  children: React.ReactNode
}

export function GlitchTransition({ children }: GlitchTransitionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [showGlitch, setShowGlitch] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShowGlitch(true)
      const timer = setTimeout(() => {
        setShowGlitch(false)
      }, 1000) // Glitch effect lasts for 1 second
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <div ref={ref} className="relative">
      {showGlitch && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <div className="glitch-effect"></div>
        </div>
      )}
      {children}
    </div>
  )
}
