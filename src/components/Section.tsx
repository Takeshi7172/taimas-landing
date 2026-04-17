import { type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

export function Section({ id, children, className = '', fullWidth }: SectionProps) {
  const { ref, isInView } = useInView(0.1)

  return (
    <section
      id={id}
      ref={ref}
      className={`
        ${fullWidth ? '' : 'max-w-6xl mx-auto px-6 md:px-10'}
        py-32 md:py-44
        transition-all duration-1000 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
    >
      {children}
    </section>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-px bg-cyan" />
      <span className="font-display text-xs tracking-[0.2em] uppercase text-cyan">
        {children}
      </span>
    </div>
  )
}

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text mb-10 tracking-tight ${className}`}>
      {children}
    </h2>
  )
}
