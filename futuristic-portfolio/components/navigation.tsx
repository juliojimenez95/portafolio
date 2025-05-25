"use client"

import { useState, useEffect } from "react"
import { X, Rocket } from "lucide-react"

const navItems = [
  { id: "hero", label: "Inicio", icon: "◆" },
  { id: "about", label: "Sobre Mí", icon: "◇" },
  { id: "projects", label: "Proyectos", icon: "◈" },
  { id: "skills", label: "Habilidades", icon: "◉" },
  { id: "experience", label: "Experiencia", icon: "◎" },
  { id: "education", label: "Formación", icon: "◐" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // Cerrar menú después de navegar
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("navigation-menu")
      if (nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav id="navigation-menu" className="fixed top-8 right-8 z-50">
      {/* Botón del menú */}
      <button
        onClick={toggleMenu}
        className={`
          w-14 h-14 backdrop-blur-md border rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110
          ${
            isMenuOpen
              ? "bg-cyan-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/25"
              : "bg-slate-900/30 border-cyan-500/20 hover:border-cyan-500/40"
          }
        `}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-cyan-400" />
        ) : (
          <div className="relative">
            <Rocket className="w-6 h-6 text-cyan-400" />
            {/* Indicador de sección activa */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"></div>
          </div>
        )}
      </button>

      {/* Menú desplegable */}
      <div
        className={`
          absolute top-16 right-0 w-64 backdrop-blur-md bg-slate-900/95 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 transform origin-top-right
          ${
            isMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
      >
        {/* Header del menú */}
        <div className="px-6 py-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Alex Rivera</h3>
              <p className="text-xs text-slate-400">Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Items del menú */}
        <div className="py-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                w-full text-left px-6 py-3 transition-all duration-200 flex items-center space-x-3 group
                ${
                  activeSection === item.id
                    ? "bg-cyan-500/10 border-r-2 border-cyan-500 text-cyan-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }
              `}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span
                className={`
                  text-lg font-mono transition-colors duration-200
                  ${activeSection === item.id ? "text-cyan-400" : "text-slate-500 group-hover:text-cyan-400"}
                `}
              >
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>

              {/* Indicador de sección activa */}
              {activeSection === item.id && (
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Footer del menú */}
        <div className="px-6 py-3 border-t border-slate-700/50 bg-slate-800/30">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Navegación</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <div
                className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar en móvil */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  )
}
