"use client"

import { useEffect, useRef } from "react"

interface MorphingDividerProps {
  variant: "wave" | "neural" | "quantum" | "matrix"
}

export function MorphingDivider({ variant }: MorphingDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const path = svg.querySelector("path")
    if (!path) return

    let animationId: number

    const animate = (timestamp: number) => {
      const progress = (timestamp % 4000) / 4000

      switch (variant) {
        case "wave":
          path.setAttribute(
            "d",
            `M0,50 Q${25 + Math.sin(progress * Math.PI * 2) * 10},${30 + Math.cos(progress * Math.PI * 2) * 15} 50,50 T100,50`,
          )
          break
        case "neural":
          path.setAttribute(
            "d",
            `M0,50 C${20 + Math.sin(progress * Math.PI * 4) * 8},${20 + Math.cos(progress * Math.PI * 3) * 12} ${60 + Math.sin(progress * Math.PI * 5) * 6},${80 + Math.cos(progress * Math.PI * 4) * 8} 100,50`,
          )
          break
        case "quantum":
          path.setAttribute(
            "d",
            `M0,50 Q${15 + Math.sin(progress * Math.PI * 6) * 12},${25 + Math.cos(progress * Math.PI * 8) * 18} 30,50 Q${70 + Math.sin(progress * Math.PI * 7) * 10},${75 + Math.cos(progress * Math.PI * 6) * 15} 100,50`,
          )
          break
        case "matrix":
          path.setAttribute(
            "d",
            `M0,50 L${20 + Math.sin(progress * Math.PI * 8) * 5},${40 + Math.cos(progress * Math.PI * 6) * 8} L${50 + Math.sin(progress * Math.PI * 10) * 7},${60 + Math.cos(progress * Math.PI * 8) * 10} L${80 + Math.sin(progress * Math.PI * 12) * 6},${35 + Math.cos(progress * Math.PI * 10) * 12} L100,50`,
          )
          break
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [variant])

  const getGradientId = () => `gradient-${variant}`
  const getColor = () => {
    switch (variant) {
      case "wave":
        return "#3b82f6"
      case "neural":
        return "#8b5cf6"
      case "quantum":
        return "#06b6d4"
      case "matrix":
        return "#10b981"
      default:
        return "#3b82f6"
    }
  }

  return (
    <div className="relative h-24 overflow-hidden">
      <svg ref={svgRef} className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id={getGradientId()} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={getColor()} stopOpacity="0.1" />
            <stop offset="50%" stopColor={getColor()} stopOpacity="0.3" />
            <stop offset="100%" stopColor={getColor()} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q25,30 50,50 T100,50"
          fill="none"
          stroke={`url(#${getGradientId()})`}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
