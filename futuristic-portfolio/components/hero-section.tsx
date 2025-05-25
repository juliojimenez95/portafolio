"use client"

import { useState, useEffect } from "react"
import Spaceship3D from "./spaceship-3d"

const roles = ["Desarrollador Full Stack", "Tecnólogo en Software", "Especialista en Laravel", "Analista de Datos"]

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <Spaceship3D />
          <h1 className="text-6xl md:text-8xl font-display mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Julio César Jiménez
          </h1>
        </div>

        <div className="text-2xl md:text-3xl text-slate-300 mb-8 font-mono h-12 flex items-center justify-center">
          <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">{displayText}</span>
        </div>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-delayed">
          Tecnólogo en desarrollo de software con 2.5 años de experiencia. Especializado en crear soluciones web
          innovadoras con PHP, Laravel, JavaScript y Python.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delayed-2">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
            Ver Proyectos
          </button>
          <button className="px-8 py-4 border border-cyan-500/50 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
            Contactar
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
