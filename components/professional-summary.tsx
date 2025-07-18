"use client"

import { useInView } from "@/hooks/use-in-view"
import { Zap, Target, Shield } from "lucide-react"

const summaryItems = [
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Delivering high-performance solutions with clean, optimized code that scales.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on achieving measurable outcomes and exceeding project expectations.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Committed to best practices, testing, and maintaining code excellence.",
  },
]

export function ProfessionalSummary() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Why Choose Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Bringing expertise, dedication, and innovation to every project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {summaryItems.map((item, index) => (
            <div
              key={item.title}
              className={`text-center p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6">
                <item.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
