"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, ExternalLink } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "202X", // Placeholder for actual date
    credentialId: "CCNA-XXXX-XXXX", // Placeholder for actual ID
    image: "/logos/cisco.png",
    description:
      "Demonstrated foundational knowledge in networking, including routing, switching, security, and automation.",
    skills: ["Networking", "Routing", "Switching", "Network Security"],
  },
  {
    title: "Software Engineering Degree",
    issuer: "Adama Science and Technology University",
    date: "202X", // Placeholder for actual date
    credentialId: "ASTU-SE-XXXX", // Placeholder for actual ID
    image: "/logos/adama.png",
    description:
      "Comprehensive university degree covering software development lifecycle, algorithms, data structures, and system design.",
    skills: ["Software Development", "Algorithms", "Data Structures", "System Design"],
  },
  {
    title: "Mobile App Development",
    issuer: "Udemy",
    date: "202X", // Placeholder for actual date
    credentialId: "UDEMY-MAD-XXXX", // Placeholder for actual ID
    image: "/logos/udemy.png",
    description:
      "Completed a comprehensive course on mobile application development, focusing on modern frameworks and best practices.",
    skills: ["Mobile Development", "React Native", "Flutter", "UI/UX"],
  },
  {
    title: "Web App Development",
    issuer: "Udemy",
    date: "202X", // Placeholder for actual date
    credentialId: "UDEMY-WAD-XXXX", // Placeholder for actual ID
    image: "/logos/udemy.png",
    description:
      "Mastered full-stack web development concepts, including front-end and back-end technologies, databases, and deployment.",
    skills: ["Web Development", "Full-Stack", "Frontend", "Backend", "Databases"],
  },
  {
    title: "Soft Skill and Career Guidance",
    issuer: "Dereja Academy",
    date: "202X", // Placeholder for actual date
    credentialId: "DEREJA-SSCG-XXXX", // Placeholder for actual ID
    image: "/logos/dereja.png",
    description:
      "Completed a program focused on enhancing soft skills, professional development, and career readiness.",
    skills: ["Soft Skills", "Career Development", "Communication", "Professionalism"],
  },
  {
    title: "DYV Entrepreneurship",
    issuer: "EDI Ethiopia",
    date: "202X", // Placeholder for actual date
    credentialId: "EDI-DYVE-XXXX", // Placeholder for actual ID
    image: "/logos/edi-ethiopia.png",
    description: "Gained insights and practical knowledge in entrepreneurship, business development, and innovation.",
    skills: ["Entrepreneurship", "Business Development", "Innovation", "Leadership"],
  },
]

export function CertificationsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Professional certifications validating expertise and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title} // Changed key to title since ID is removed from display
              className={`bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="flex flex-row items-start space-y-0 space-x-4">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={`${cert.issuer} logo`}
                  width={60}
                  height={60}
                  className="rounded-lg bg-white p-2 object-contain"
                />
                <div className="flex-1">
                  <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                  <CardDescription className="text-blue-400 font-medium">{cert.issuer}</CardDescription>
                  <div className="flex items-center text-sm text-slate-400 mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {cert.date}
                  </div>
                </div>
                <Award className="h-6 w-6 text-yellow-500" />
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Associated Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end pt-2 border-t border-slate-700/50">
                  {/* Removed credential ID display */}
                  <ExternalLink className="h-4 w-4 text-blue-400 cursor-pointer hover:text-blue-300 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
