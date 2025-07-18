"use client"

import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            A brief introduction to my journey and passion for technology.
          </p>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              Hello! I'm Natnael Ayele, a dedicated Full-Stack Software Engineer with a passion for building robust,
              scalable, and user-friendly applications. My journey in software development began with a curiosity for
              how things work, evolving into a drive to create impactful solutions. I thrive in dynamic environments,
              constantly learning and adapting to new technologies to deliver high-quality results.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mt-4">
              With a strong foundation in both front-end and back-end development, I enjoy tackling complex problems and
              transforming ideas into tangible products. I believe in clean code, collaborative teamwork, and continuous
              improvement. Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
