import { type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type SectionSpacing = 'hero' | 'lg' | 'md' | 'sm'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  fullWidth?: boolean
  alt?: boolean
  spacing?: SectionSpacing
}

const spacingClasses: Record<SectionSpacing, string> = {
  hero: 'py-20 md:py-44',
  lg: 'py-16 md:py-40',
  md: 'py-14 md:py-32',
  sm: 'py-12 md:py-28',
}

export function Section({ id, children, className = '', fullWidth, alt, spacing = 'md' }: SectionProps) {
  const { ref, isInView } = useInView(0.1)

  return (
    <div className={alt ? 'bg-void-light/60' : ''}>
      {alt && <div className="h-px bg-gradient-to-r from-transparent via-border-light/60 to-transparent" />}
      <section
        id={id}
        ref={ref}
        className={`
          ${fullWidth ? '' : 'max-w-5xl mx-auto px-6 md:px-12'}
          ${spacingClasses[spacing]}
          transition-all duration-1000 ease-out
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          ${className}
        `}
      >
        {children}
      </section>
      {alt && <div className="h-px bg-gradient-to-r from-transparent via-border-light/60 to-transparent" />}
    </div>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-5">
      <div className="w-8 h-px bg-cyan" />
      <span className="font-display text-xs tracking-[0.2em] uppercase text-cyan">
        {children}
      </span>
      <div className="w-8 h-px bg-cyan" />
    </div>
  )
}

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text mb-6 tracking-tight text-center ${className}`}>
      {children}
    </h2>
  )
}
