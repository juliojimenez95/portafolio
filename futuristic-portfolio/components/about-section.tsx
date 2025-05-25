"use client"

import { Download, MapPin, Mail, Clock, Phone } from "lucide-react"

export default function AboutSection() {
  const personalInfo = [
    {
      label: "Nombre:",
      value: "Julio César Jiménez García",
      icon: null,
    },
    {
      label: "Ubicación:",
      value: "Medellín, Antioquia",
      icon: MapPin,
    },
    {
      label: "Email:",
      value: "juliojimenezgarcia@gmail.com",
      icon: Mail,
    },
    {
      label: "Teléfono:",
      value: "+57 305 806 1865",
      icon: Phone,
    },
    {
      label: "Disponibilidad:",
      value: "Freelance / Tiempo completo",
      icon: Clock,
    },
  ]

  const handleDownloadCV = () => {
    // Aquí puedes agregar la lógica para descargar el CV
    console.log("Descargando CV...")
  }

  return (
    <section id="about" className="py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Sobre <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen/Placeholder */}
          <div className="animate-slide-in">
            <div className="relative">
              <div className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="aspect-square bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-600/50">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Julio César Jiménez García"
                    className="w-full h-full object-cover rounded-xl opacity-80"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Contenido */}
          <div className="animate-fade-in-delayed">
            <h3 className="text-3xl font-bold text-white mb-6">Tecnólogo en Desarrollo de Software</h3>

            <div className="space-y-6 mb-8">
              <p className="text-slate-300 leading-relaxed">
                Tecnólogo en desarrollo de software de 29 años, con dos años y medio de experiencia como desarrollador
                web. He participado en proyectos de desarrollo web y creación de APIs utilizando PHP (Laravel),
                JavaScript, Java y Python.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Cuento con habilidades en lógica de programación, manejo de bases de datos relacionales (MySQL, SQL) y
                no relacionales, además de un nivel B1 en inglés. Me considero una persona que le gusta aprender,
                trabajar en equipo y enfrentar retos que me permitan crecer personal y profesionalmente.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Tengo interés en continuar mi carrera en el desarrollo de software, aprovechando mi experiencia en
                Laravel, Node.js y Python. También cuento con conocimientos en análisis de datos utilizando Excel, Power
                Pivot y Power BI.
              </p>
            </div>

            {/* Información Personal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {personalInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {IconComponent ? (
                        <IconComponent className="w-5 h-5 text-cyan-400 mt-0.5" />
                      ) : (
                        <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-0.5"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-medium">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Botón Descargar CV */}
            <button
              onClick={handleDownloadCV}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Descargar CV
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-delayed-2">
          {[
            { number: "15+", label: "Proyectos Completados" },
            { number: "2.5+", label: "Años de Experiencia" },
            { number: "10+", label: "Tecnologías Dominadas" },
            { number: "100%", label: "Compromiso y Dedicación" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="backdrop-blur-md bg-slate-900/30 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <h4 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h4>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
