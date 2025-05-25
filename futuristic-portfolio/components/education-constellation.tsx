"use client"

import { useState, useEffect, useRef } from "react"
import { GraduationCap, Award, BookOpen, Star, Zap, Lightbulb, X } from "lucide-react"

const educationData = {
  formal: [
    {
      id: 1,
      name: "Tecnología en Desarrollo de Software",
      institution: "I.T.M",
      year: "2024",
      type: "degree",
      size: "large",
      x: 30,
      y: 35,
      connections: [2, 3],
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Ingeniería en Sistemas",
      institution: "I.T.M",
      year: "En curso",
      type: "degree",
      size: "large",
      x: 70,
      y: 30,
      connections: [4, 5],
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Técnica en Desarrollo de Software",
      institution: "CESDE",
      year: "2021",
      type: "degree",
      size: "medium",
      x: 20,
      y: 70,
      connections: [1],
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
    },
  ],
  certifications: [
    {
      id: 4,
      name: "Inglés B1",
      institution: "Blendex",
      year: "2024",
      type: "certification",
      size: "medium",
      x: 60,
      y: 60,
      connections: [6],
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      name: "Interventoría de Proyectos",
      institution: "I.T.M",
      year: "2024",
      type: "certification",
      size: "small",
      x: 80,
      y: 70,
      connections: [],
      icon: Award,
      color: "from-cyan-500 to-blue-500",
    },
  ],
  skills: [
    {
      id: 6,
      name: "PHP Laravel",
      institution: "Comfenalco",
      year: "2024",
      type: "skill",
      size: "small",
      x: 40,
      y: 80,
      connections: [],
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 7,
      name: "Testing en Java",
      institution: "Platzi",
      year: "2024",
      type: "skill",
      size: "small",
      x: 15,
      y: 45,
      connections: [],
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 8,
      name: "Analítica de Datos",
      institution: "Prosedu",
      year: "2024",
      type: "skill",
      size: "small",
      x: 85,
      y: 45,
      connections: [],
      icon: Star,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 9,
      name: "Herramientas en Innovación e Investigación",
      institution: "EPM",
      year: "2024",
      type: "skill",
      size: "small",
      x: 25,
      y: 20,
      connections: [],
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 10,
      name: "Metodología de la Investigación",
      institution: "Ruta N y Sapiencia",
      year: "2024",
      type: "skill",
      size: "small",
      x: 75,
      y: 15,
      connections: [],
      icon: BookOpen,
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: 11,
      name: "Co-creación y Emprendimiento",
      institution: "Creaton (CESDE)",
      year: "2024",
      type: "skill",
      size: "small",
      x: 50,
      y: 25,
      connections: [],
      icon: Lightbulb,
      color: "from-rose-500 to-pink-500",
    },
  ],
}

const allEducation = [...educationData.formal, ...educationData.certifications, ...educationData.skills]

export default function EducationConstellation() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number
    y: number
    placement: "top" | "bottom" | "left" | "right" | "center"
  } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const filteredEducation =
    filter === "all"
      ? allEducation
      : allEducation.filter((item) => item.type === filter || (filter === "degree" && item.type === "degree"))

  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "w-6 h-6"
      case "medium":
        return "w-4 h-4"
      case "small":
        return "w-3 h-3"
      default:
        return "w-4 h-4"
    }
  }

  const getGlowSize = (size: string) => {
    switch (size) {
      case "large":
        return "shadow-2xl"
      case "medium":
        return "shadow-xl"
      case "small":
        return "shadow-lg"
      default:
        return "shadow-xl"
    }
  }

  const calculateOptimalPosition = (itemX: number, itemY: number) => {
    if (!containerRef.current) return { x: 0, y: 0, placement: "center" as const }

    const container = containerRef.current.getBoundingClientRect()
    const isMobile = window.innerWidth < 768

    if (isMobile) {
      // En móvil, siempre centrar
      return {
        x: container.width / 2,
        y: container.height / 2,
        placement: "center" as const,
      }
    }

    // En desktop, calcular la mejor posición
    const itemPixelX = (itemX / 100) * container.width
    const itemPixelY = (itemY / 100) * container.height
    const tooltipWidth = 280
    const tooltipHeight = 160
    const margin = 20

    let placement: "top" | "bottom" | "left" | "right" = "top"
    let x = itemPixelX
    let y = itemPixelY

    // Determinar la mejor posición basada en el espacio disponible
    const spaceTop = itemPixelY
    const spaceBottom = container.height - itemPixelY
    const spaceLeft = itemPixelX
    const spaceRight = container.width - itemPixelX

    if (spaceBottom >= tooltipHeight + margin) {
      placement = "bottom"
      y = itemPixelY + margin
      x = Math.max(margin, Math.min(itemPixelX - tooltipWidth / 2, container.width - tooltipWidth - margin))
    } else if (spaceTop >= tooltipHeight + margin) {
      placement = "top"
      y = itemPixelY - tooltipHeight - margin
      x = Math.max(margin, Math.min(itemPixelX - tooltipWidth / 2, container.width - tooltipWidth - margin))
    } else if (spaceRight >= tooltipWidth + margin) {
      placement = "right"
      x = itemPixelX + margin
      y = Math.max(margin, Math.min(itemPixelY - tooltipHeight / 2, container.height - tooltipHeight - margin))
    } else if (spaceLeft >= tooltipWidth + margin) {
      placement = "left"
      x = itemPixelX - tooltipWidth - margin
      y = Math.max(margin, Math.min(itemPixelY - tooltipHeight / 2, container.height - tooltipHeight - margin))
    } else {
      // Si no hay espacio suficiente en ningún lado, centrar
      placement = "center"
      x = container.width / 2 - tooltipWidth / 2
      y = container.height / 2 - tooltipHeight / 2
    }

    return { x, y, placement }
  }

  const handleItemClick = (item: any) => {
    if (selectedItem === item.id) {
      setSelectedItem(null)
      setTooltipPosition(null)
    } else {
      const position = calculateOptimalPosition(item.x, item.y)
      setTooltipPosition(position)
      setSelectedItem(item.id)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedItem &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".planet-item")
      ) {
        setSelectedItem(null)
        setTooltipPosition(null)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedItem) {
        setSelectedItem(null)
        setTooltipPosition(null)
      }
    }

    if (selectedItem) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
      if (window.innerWidth < 768) {
        document.body.style.overflow = "hidden"
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [selectedItem])

  const selectedEducationItem = allEducation.find((item) => item.id === selectedItem)

  return (
    <section id="education" className="py-16 px-6 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Formación Académica
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Mi trayectoria educativa y certificaciones profesionales
          </p>

          {/* Filters - Scrollable en móvil */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4 overflow-x-auto pb-2 px-4 md:px-0 scrollbar-hide">
              <div className="flex space-x-4 min-w-max">
                {[
                  { key: "all", label: "Todo", icon: "◆" },
                  { key: "degree", label: "Formal", icon: "🎓" },
                  { key: "certification", label: "Certificaciones", icon: "🏆" },
                  { key: "skill", label: "Cursos", icon: "⚡" },
                ].map((filterOption) => (
                  <button
                    key={filterOption.key}
                    onClick={() => {
                      setFilter(filterOption.key)
                      setSelectedItem(null)
                      setTooltipPosition(null)
                    }}
                    className={`
                      px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 whitespace-nowrap flex-shrink-0
                      ${
                        filter === filterOption.key
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                          : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                      }
                    `}
                  >
                    <span>{filterOption.icon}</span>
                    <span className="text-sm font-medium">{filterOption.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Constellation Container */}
        <div
          ref={containerRef}
          className="relative h-96 md:h-[600px] bg-slate-900/30 rounded-3xl border border-slate-700/50 overflow-hidden"
        >
          {/* Background Stars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          {/* Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {filteredEducation.map((item) =>
              item.connections.map((connectionId) => {
                const connectedItem = filteredEducation.find((edu) => edu.id === connectionId)
                if (!connectedItem) return null

                return (
                  <line
                    key={`${item.id}-${connectionId}`}
                    x1={`${item.x}%`}
                    y1={`${item.y}%`}
                    x2={`${connectedItem.x}%`}
                    y2={`${connectedItem.y}%`}
                    stroke="url(#connectionGradient)"
                    strokeWidth="1"
                    opacity="0.4"
                    className="animate-draw-line"
                  />
                )
              }),
            )}
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Education Items */}
          {filteredEducation.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-scale-in planet-item"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => handleItemClick(item)}
              >
                <div
                  className={`
                    ${getSizeClass(item.size)} rounded-full bg-gradient-to-r ${item.color} 
                    ${getGlowSize(item.size)} flex items-center justify-center
                    hover:scale-125 transition-all duration-300 animate-pulse-glow
                    ${selectedItem === item.id ? "scale-125 ring-2 ring-white/50" : ""}
                  `}
                >
                  <IconComponent className="w-1/2 h-1/2 text-white" />
                </div>
              </div>
            )
          })}

          {/* Overlay para móvil */}
          {selectedItem && window.innerWidth < 768 && (
            <div
              className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm"
              onClick={() => {
                setSelectedItem(null)
                setTooltipPosition(null)
              }}
            />
          )}

          {/* Tooltip optimizado */}
          {selectedItem && selectedEducationItem && tooltipPosition && (
            <div
              ref={tooltipRef}
              className={`
                absolute z-[1000] animate-fade-in
                ${
                  tooltipPosition.placement === "center"
                    ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    : ""
                }
              `}
              style={
                tooltipPosition.placement !== "center"
                  ? {
                      left: `${tooltipPosition.x}px`,
                      top: `${tooltipPosition.y}px`,
                    }
                  : {}
              }
            >
              <div
                className={`
                  bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl
                  ${tooltipPosition.placement === "center" ? "w-80 max-w-[90vw] max-h-[80vh] p-6" : "w-70 p-4"}
                `}
              >
                {/* Header con botón de cierre */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3 flex-1">
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-r ${selectedEducationItem.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <selectedEducationItem.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-sm leading-tight">{selectedEducationItem.name}</h3>
                  </div>
                  <button
                    className="w-6 h-6 bg-slate-800/50 hover:bg-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors flex-shrink-0 ml-2"
                    onClick={() => {
                      setSelectedItem(null)
                      setTooltipPosition(null)
                    }}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>

                {/* Contenido */}
                <div className="space-y-2">
                  <p className="text-cyan-400 text-sm font-medium">{selectedEducationItem.institution}</p>
                  <p className="text-slate-400 text-xs">{selectedEducationItem.year}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                    <span
                      className={`
                        px-2 py-1 rounded-full text-xs font-medium
                        ${
                          selectedEducationItem.type === "degree"
                            ? "bg-blue-500/20 text-blue-400"
                            : selectedEducationItem.type === "certification"
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-green-500/20 text-green-400"
                        }
                      `}
                    >
                      {selectedEducationItem.type === "degree"
                        ? "Educación Formal"
                        : selectedEducationItem.type === "certification"
                          ? "Certificación"
                          : "Curso Especializado"}
                    </span>

                    <div className="flex space-x-1">
                      {[
                        ...Array(
                          selectedEducationItem.size === "large" ? 3 : selectedEducationItem.size === "medium" ? 2 : 1,
                        ),
                      ].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center animate-fade-in-delayed">
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-slate-300 mb-4 text-center">Leyenda</h4>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <span>Educación Formal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                <span>Certificaciones</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <span>Cursos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
