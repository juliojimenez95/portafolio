"use client"

import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Panel de control para visualización de datos con gráficos interactivos y reportes en tiempo real.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "D3.js", "Firebase"],
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "App de Gestión de Tareas",
    description:
      "Aplicación para gestionar tareas con funcionalidades de arrastrar y soltar, recordatorios y colaboración.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Redux", "Express", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Mis{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-800/50 border border-slate-600/50 rounded text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3">
                    <a
                      href={project.codeUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-sm text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                    <a
                      href={project.demoUrl}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-sm text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
