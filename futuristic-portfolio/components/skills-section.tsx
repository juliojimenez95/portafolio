"use client"

import { Monitor, Server, Database, GitBranch, BarChart3, Globe } from "lucide-react"

const skillCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
  },
  {
    id: 2,
    title: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    skills: ["PHP", "Laravel", "Java", "Python", "Node.js", "APIs REST"],
  },
  {
    id: 3,
    title: "Bases de Datos",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: ["MySQL", "SQL", "Bases de Datos Relacionales", "Bases de Datos No Relacionales"],
  },
  {
    id: 4,
    title: "Herramientas",
    icon: GitBranch,
    color: "from-orange-500 to-red-500",
    skills: ["Git", "GitHub", "Control de Versiones", "Testing"],
  },
  {
    id: 5,
    title: "Análisis de Datos",
    icon: BarChart3,
    color: "from-indigo-500 to-purple-500",
    skills: ["Excel", "Power Pivot", "Power BI", "Análisis de Datos"],
  },
  {
    id: 6,
    title: "Idiomas & Otros",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    skills: ["Inglés B1", "Lógica de Programación", "Trabajo en Equipo", "Resolución de Problemas"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Mis{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas y escalables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={category.id} className="group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="group/skill"
                        style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                      >
                        <div className="px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-sm text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-700/50 transition-all duration-300 text-center">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Nivel de experiencia</span>
                      <span className="text-cyan-400 font-medium">
                        {index < 3 ? "Avanzado" : index < 5 ? "Intermedio" : "Básico-Intermedio"}
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-slate-800/50 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${index < 3 ? 85 + Math.random() * 10 : index < 5 ? 70 + Math.random() * 15 : 60 + Math.random() * 20}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
