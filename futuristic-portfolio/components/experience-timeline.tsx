"use client"

import { useState } from "react"
import { Calendar, MapPin, TrendingUp, Code, Award } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Movlife (Freelance)",
    role: "Desarrollador Web - Soporte",
    period: "2024 - Presente",
    location: "Medellín, Colombia",
    description: "Soporte freelance para el adecuado funcionamiento del sitio web de la empresa",
    achievements: [
      "Mantenimiento y optimización del sitio web",
      "Resolución de incidencias técnicas",
      "Implementación de mejoras continuas",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    icon: "🚀",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    company: "Smart Solution",
    role: "Desarrollador de Web",
    period: "01/11/2024",
    location: "Medellín, Colombia",
    description:
      "Desarrollo de funcionalidades de manejo de bases de datos (MySQL y SQL), así como desarrollo de componentes gráficos en páginas de sede",
    achievements: [
      "Desarrollo de sistemas de control para clientes y proveedores",
      "Creación de APIs para farmacia",
      "Integración con servicios de terceros",
      "Desarrollo de sistemas de alerta para la gestión",
    ],
    technologies: ["PHP", "MySQL", "SQL", "JavaScript", "HTML", "CSS"],
    icon: "💡",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    company: "Causaefecto",
    role: "Desarrollador de Software",
    period: "10/08/2021",
    location: "Medellín, Colombia",
    description:
      "Creación de un software que permitía realizar las entregas por ordenes y manejo de resultados en base de datos",
    achievements: [
      "Desarrollo de software de gestión de entregas",
      "Implementación de base de datos eficiente",
      "Optimización de procesos de entrega",
    ],
    technologies: ["Java", "MySQL", "Base de Datos"],
    icon: "🌱",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    company: "CESDE",
    role: "Desarrollador de Software",
    period: "2/06/2021",
    location: "Medellín, Colombia",
    description: "Creación de software para la gestión de inventarios",
    achievements: ["Desarrollo de sistema de inventarios", "Gestión de base de datos", "Interfaz de usuario intuitiva"],
    technologies: ["Java", "MySQL", "Swing"],
    icon: "📊",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    company: "Interacpedia (Impercap)",
    role: "Asesor Externo de Finanzas Digitales",
    period: "30/12/2020",
    location: "Medellín, Colombia",
    description: "Asesoría en finanzas digitales y manejo de plataformas financieras",
    achievements: [
      "Asesoría especializada en finanzas digitales",
      "Capacitación en plataformas digitales",
      "Soporte técnico a clientes",
    ],
    technologies: ["Finanzas Digitales", "Plataformas Web", "Asesoría"],
    icon: "💰",
    color: "from-indigo-500 to-purple-600",
  },
]

export default function ExperienceTimeline() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software
          </p>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="relative hidden md:block">
          {/* Timeline Line - Solo visible en desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 opacity-30" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-16 animate-slide-in ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} shadow-lg animate-pulse-glow`} />
              </div>

              {/* Experience Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div
                  className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer transform hover:scale-102 hover:-translate-y-1"
                  onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{exp.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-slate-400 text-sm mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-600/50 rounded-full text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-slate-800/50 border border-slate-600/50 rounded-full text-xs text-slate-400">
                        +{exp.technologies.length - 3} más
                      </span>
                    )}
                  </div>

                  {selectedExperience === exp.id && (
                    <div className="mt-4 pt-4 border-t border-slate-700/50 animate-fade-in">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        Logros Principales
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-slate-300 flex items-start">
                            <TrendingUp className="w-3 h-3 mr-2 mt-1 text-green-400 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
                          <Code className="w-4 h-4 mr-1" />
                          Tecnologías Utilizadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600/50 rounded text-xs text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Centered Layout */}
        <div className="block md:hidden space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div
                className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer transform hover:scale-102"
                onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
              >
                {/* Header con icono y empresa */}
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center mr-4 shadow-lg`}
                  >
                    <span className="text-xl">{exp.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                </div>

                {/* Información básica */}
                <div className="flex flex-col space-y-2 mb-4 text-sm text-slate-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{exp.description}</p>

                {/* Tecnologías principales */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-800/50 border border-slate-600/50 rounded-full text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-800/50 border border-slate-600/50 rounded-full text-xs text-slate-400">
                      +{exp.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Botón para expandir */}
                <button className="w-full text-center text-cyan-400 text-sm font-medium py-2 border-t border-slate-700/50 hover:text-cyan-300 transition-colors">
                  {selectedExperience === exp.id ? "Ver menos" : "Ver detalles"}
                </button>

                {/* Contenido expandido */}
                {selectedExperience === exp.id && (
                  <div className="mt-4 pt-4 border-t border-slate-700/50 animate-fade-in">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        Logros Principales
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-slate-300 flex items-start">
                            <TrendingUp className="w-3 h-3 mr-2 mt-1 text-green-400 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-1" />
                        Todas las Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600/50 rounded text-xs text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
