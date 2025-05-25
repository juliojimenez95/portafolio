"use client"

import { useEffect, useRef } from "react"

export default function Spaceship3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 200
    canvas.height = 200

    let rotation = 0
    let animationId: number

    const drawSpaceship = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Cuerpo principal de la nave
      ctx.beginPath()
      ctx.fillStyle = "#06b6d4"
      ctx.ellipse(0, 0, 40, 15, 0, 0, Math.PI * 2)
      ctx.fill()

      // Cabina
      ctx.beginPath()
      ctx.fillStyle = "#0891b2"
      ctx.ellipse(0, -5, 25, 8, 0, 0, Math.PI * 2)
      ctx.fill()

      // Alas
      ctx.beginPath()
      ctx.fillStyle = "#8b5cf6"
      ctx.moveTo(-30, 0)
      ctx.lineTo(-50, 20)
      ctx.lineTo(-40, 25)
      ctx.lineTo(-25, 10)
      ctx.closePath()
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(30, 0)
      ctx.lineTo(50, 20)
      ctx.lineTo(40, 25)
      ctx.lineTo(25, 10)
      ctx.closePath()
      ctx.fill()

      // Propulsores
      ctx.beginPath()
      ctx.fillStyle = "#f59e0b"
      ctx.ellipse(-35, 15, 5, 3, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.ellipse(35, 15, 5, 3, 0, 0, Math.PI * 2)
      ctx.fill()

      // Efectos de propulsión
      const flameIntensity = Math.sin(rotation * 10) * 0.5 + 0.5
      ctx.beginPath()
      ctx.fillStyle = `rgba(255, 100, 0, ${flameIntensity})`
      ctx.ellipse(-35, 25, 3, 8, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.ellipse(35, 25, 3, 8, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      rotation += 0.02
      animationId = requestAnimationFrame(drawSpaceship)
    }

    drawSpaceship()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="flex justify-center mb-8">
      <canvas
        ref={canvasRef}
        className="animate-float"
        style={{
          filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))",
        }}
      />
    </div>
  )
}
