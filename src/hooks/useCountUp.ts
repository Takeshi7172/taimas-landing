import { useEffect, useRef, useState } from 'react'

interface CountUpOptions {
  end: number
  duration?: number
  startDelay?: number
  enabled?: boolean
}

export function useCountUp({ end, duration = 1800, startDelay = 0, enabled = true }: CountUpOptions) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!enabled || hasRun.current) return
    hasRun.current = true

    const timeout = setTimeout(() => {
      const startTime = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // easeOutCubic
        const ease = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(ease * end))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }, startDelay)

    return () => clearTimeout(timeout)
  }, [enabled, end, duration, startDelay])

  return count
}
