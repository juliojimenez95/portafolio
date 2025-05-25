"use client"

import { useEffect, useRef } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ExperienceTimeline from "@/components/experience-timeline"
import EducationConstellation from "@/components/education-constellation"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import ParticleSystem from "@/components/particle-system"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * -0.5

      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <ParticleSystem />
      <Navigation />

      <div ref={containerRef} className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceTimeline />
        <EducationConstellation />
      </div>

      <Footer />

      {/* Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  )
}
