import { useEffect, useRef } from 'react'

export function useCursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = document.createElement('div')
    el.id = 'cursor-glow'
    el.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,240,255,0.06) 0%, rgba(0,240,255,0.02) 40%, transparent 70%);
      pointer-events: none;
      z-index: 1;
      transform: translate(-50%, -50%);
      will-change: transform;
      transition: opacity 0.3s ease;
    `
    document.body.appendChild(el)
    glowRef.current = el

    let raf: number
    let mouseX = -1000
    let mouseY = -1000

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const tick = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
      }
      raf = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      el.remove()
      glowRef.current = null
    }
  }, [])
}
