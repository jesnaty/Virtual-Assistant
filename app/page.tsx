import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProfessionalSummary } from "@/components/professional-summary"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { ContactSection } from "@/components/contact-section" // New import
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { MorphingDivider } from "@/components/morphing-divider"
import { GlitchTransition } from "@/components/glitch-transition"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <ParticleBackground />
      <HeroSection />
      <MorphingDivider variant="wave" />
      <AboutSection />
      <MorphingDivider variant="neural" />
      <ProfessionalSummary />
      <MorphingDivider variant="quantum" />
      <SkillsSection />
      <MorphingDivider variant="matrix" />
      <GlitchTransition>
        <ProjectsSection />
      </GlitchTransition>
      <MorphingDivider variant="wave" />
      <CertificationsSection />
      <MorphingDivider variant="neural" />
      <HobbiesSection />
      <MorphingDivider variant="quantum" />
      <ContactSection /> {/* New Contact Section */}
      <MorphingDivider variant="matrix" /> {/* Added a divider before the footer */}
      <Footer />
    </main>
  )
}
