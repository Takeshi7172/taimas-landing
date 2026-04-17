import { useRef, useCallback } from 'react'

interface MagneticOptions {
  strength?: number
}

export function useMagneticButton({ strength = 0.35 }: MagneticOptions = {}) {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const frameRef = useRef<number>(0)
  const currentX = useRef(0)
  const currentY = useRef(0)

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength

      cancelAnimationFrame(frameRef.current)
      const animate = () => {
        currentX.current += (dx - currentX.current) * 0.18
        currentY.current += (dy - currentY.current) * 0.18
        if (el) {
          el.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`
        }
        const dist = Math.abs(dx - currentX.current) + Math.abs(dy - currentY.current)
        if (dist > 0.1) {
          frameRef.current = requestAnimationFrame(animate)
        }
      }
      frameRef.current = requestAnimationFrame(animate)
    },
    [strength]
  )

  const onMouseLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current)
    const el = ref.current
    if (!el) return
    const relaxTo = () => {
      currentX.current *= 0.82
      currentY.current *= 0.82
      if (el) {
        el.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`
      }
      if (Math.abs(currentX.current) > 0.05 || Math.abs(currentY.current) > 0.05) {
        frameRef.current = requestAnimationFrame(relaxTo)
      } else {
        if (el) el.style.transform = 'translate(0px, 0px)'
      }
    }
    frameRef.current = requestAnimationFrame(relaxTo)
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
