"use client"

import { useInView } from "@/hooks/use-in-view"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Lightbulb, MessageSquare, Clock, Puzzle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" // New imports

const technicalSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "GraphQL",
  "REST APIs",
  "Tailwind CSS",
  "Redux",
  "Express.js",
]

const softSkills = [
  { icon: Users, title: "Team Leadership", description: "Leading cross-functional teams to success" },
  { icon: MessageSquare, title: "Communication", description: "Clear and effective stakeholder communication" },
  { icon: Lightbulb, title: "Problem Solving", description: "Creative solutions to complex challenges" },
  { icon: Clock, title: "Time Management", description: "Efficient project delivery and prioritization" },
  { icon: Puzzle, title: "Adaptability", description: "Quick learning and technology adaptation" },
  { icon: Code, title: "Code Review", description: "Mentoring and maintaining code quality" },
]

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional software solutions
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-slate-700/50">
              <TabsTrigger
                value="technical"
                className="data-[state=active]:bg-blue-600/30 data-[state=active]:text-blue-300 data-[state=active]:border-blue-500/50 transition-all duration-300"
              >
                Technical Skills
              </TabsTrigger>
              <TabsTrigger
                value="soft"
                className="data-[state=active]:bg-blue-600/30 data-[state=active]:text-blue-300 data-[state=active]:border-blue-500/50 transition-all duration-300"
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="mt-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {technicalSkills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`bg-slate-800/50 text-blue-300 border border-slate-700/50 hover:border-blue-500/50 px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:bg-blue-600/20 ${
                      isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="soft" className="mt-8">
              <div className="grid md:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className={`flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/50 ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <skill.icon className="h-5 w-5 text-blue-400 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{skill.title}</h4>
                      <p className="text-sm text-slate-400">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
