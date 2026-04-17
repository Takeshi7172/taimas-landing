import { useEffect, useState } from 'react'

const SECTION_IDS = ['why', 'journey', 'projects', 'aura', 'stack', 'about']

export function useActiveSection() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const handleIntersect = (id: string) => (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(id)
        }
      }
    }

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (!el) continue
      const obs = new IntersectionObserver(handleIntersect(id), {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      })
      obs.observe(el)
      observers.push(obs)
    }

    return () => {
      for (const obs of observers) obs.disconnect()
    }
  }, [])

  return active
}
