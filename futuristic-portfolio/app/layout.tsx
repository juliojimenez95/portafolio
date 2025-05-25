import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alex Rivera - Full Stack Developer",
  description:
    "Portfolio futurista de Alex Rivera, desarrollador Full Stack especializado en React, Node.js y arquitecturas cloud.",
  keywords: "desarrollador, full stack, react, nodejs, portfolio, futurista",
  authors: [{ name: "Alex Rivera" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
