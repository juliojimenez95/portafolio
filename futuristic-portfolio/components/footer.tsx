"use client"

import { Github, Linkedin, Mail, Twitter, Heart, Rocket } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:juliojimenezgarcia@gmail.com", label: "Email" },
  ]

  return (
    <footer className="relative bg-slate-950/50 border-t border-slate-800/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Rocket className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Julio César Jiménez
              </h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Tecnólogo en desarrollo de software apasionado por crear experiencias digitales excepcionales. Siempre
              explorando nuevas tecnologías y metodologías para construir el futuro.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Sobre Mí", href: "#about" },
                { label: "Proyectos", href: "#projects" },
                { label: "Habilidades", href: "#skills" },
                { label: "Experiencia", href: "#experience" },
                { label: "Formación", href: "#education" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-slate-400">Email</p>
                <a
                  href="mailto:juliojimenezgarcia@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  juliojimenezgarcia@gmail.com
                </a>
              </div>
              <div className="text-sm">
                <p className="text-slate-400">Teléfono</p>
                <a href="tel:+573058061865" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +57 305 806 1865
                </a>
              </div>
              <div className="text-sm">
                <p className="text-slate-400">Ubicación</p>
                <p className="text-slate-300">Medellín, Antioquia</p>
              </div>
              <div className="text-sm">
                <p className="text-slate-400">Disponibilidad</p>
                <p className="text-green-400">Disponible para proyectos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-slate-400 mb-4 md:mb-0">
              <span>© {currentYear} Julio César Jiménez García. Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              <span>y mucho café ☕</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </footer>
  )
}
