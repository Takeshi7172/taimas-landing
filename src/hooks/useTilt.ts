import { useRef, useCallback } from 'react'

interface TiltOptions {
  maxDeg?: number
  glare?: boolean
}

export function useTilt({ maxDeg = 5, glare = true }: TiltOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const glareRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number>(0)
  const currentRX = useRef(0)
  const currentRY = useRef(0)
  const targetRX = useRef(0)
  const targetRY = useRef(0)
  const isAnimating = useRef(false)

  const ensureGlare = useCallback(() => {
    if (!glare || !ref.current) return
    if (!glareRef.current) {
      const g = document.createElement('div')
      g.style.cssText = `
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        z-index: 5;
        opacity: 0;
        transition: opacity 0.3s ease;
        background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%);
      `
      ref.current.style.position = 'relative'
      ref.current.style.overflow = 'hidden'
      ref.current.appendChild(g)
      glareRef.current = g
    }
  }, [glare])

  const startLoop = useCallback(() => {
    if (isAnimating.current) return
    isAnimating.current = true
    const loop = () => {
      currentRX.current += (targetRX.current - currentRX.current) * 0.15
      currentRY.current += (targetRY.current - currentRY.current) * 0.15
      const el = ref.current
      if (el) {
        el.style.transform = `perspective(800px) rotateX(${currentRX.current}deg) rotateY(${currentRY.current}deg) scale3d(1.01, 1.01, 1.01)`
      }
      const dist =
        Math.abs(targetRX.current - currentRX.current) +
        Math.abs(targetRY.current - currentRY.current)
      if (dist > 0.02) {
        frameRef.current = requestAnimationFrame(loop)
      } else {
        isAnimating.current = false
      }
    }
    frameRef.current = requestAnimationFrame(loop)
  }, [])

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return
      ensureGlare()
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      targetRY.current = (px - 0.5) * maxDeg * 2
      targetRX.current = -(py - 0.5) * maxDeg * 2
      if (glareRef.current) {
        glareRef.current.style.opacity = '1'
        glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.07) 0%, transparent 60%)`
      }
      startLoop()
    },
    [maxDeg, ensureGlare, startLoop]
  )

  const onMouseLeave = useCallback(() => {
    targetRX.current = 0
    targetRY.current = 0
    if (glareRef.current) glareRef.current.style.opacity = '0'
    startLoop()
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.transform = ''
      }
      currentRX.current = 0
      currentRY.current = 0
      cancelAnimationFrame(frameRef.current)
      isAnimating.current = false
    }, 600)
  }, [startLoop])

  return { ref, onMouseMove, onMouseLeave }
}
