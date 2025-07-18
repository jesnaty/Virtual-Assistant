"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface FloatingImageProps {
  src: string
  alt: string
  className?: string
}

export function FloatingImage({ src, alt, className = "" }: FloatingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse opacity-20 scale-110"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-10 scale-125"></div>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={200}
        height={200}
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "animate-float opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}
