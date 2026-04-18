import { motion } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'
import { useTilt } from '../hooks/useTilt'
import { useTranslation } from '../i18n/useTranslation'
import type { ReactNode } from 'react'

type AccentKey = 'cyan' | 'amber' | 'lavender'

const accentColors: Record<AccentKey, { border: string; glow: string; icon: string; bg: string }> = {
  cyan: {
    border: 'group-hover:border-cyan/40',
    glow: 'group-hover:shadow-[0_0_40px_#00F0FF22]',
    icon: 'text-cyan',
    bg: 'bg-cyan/10',
  },
  amber: {
    border: 'group-hover:border-amber/40',
    glow: 'group-hover:shadow-[0_0_40px_#FFB80022]',
    icon: 'text-amber',
    bg: 'bg-amber/10',
  },
  lavender: {
    border: 'group-hover:border-lavender/40',
    glow: 'group-hover:shadow-[0_0_40px_#8B5CF622]',
    icon: 'text-lavender',
    bg: 'bg-lavender/10',
  },
}

const cardIcons: ReactNode[] = [
  (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
]

const cardAccents: AccentKey[] = ['cyan', 'amber', 'lavender', 'cyan']

interface TiltCardProps {
  children: ReactNode
  className?: string
}

function TiltCard({ children, className = '' }: TiltCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ maxDeg: 5 })
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

export function WhyMe() {
  const t = useTranslation()

  const cards = [
    { key: 'aiMultiplier' as const, accent: cardAccents[0], icon: cardIcons[0] },
    { key: 'marketingDna' as const, accent: cardAccents[1], icon: cardIcons[1] },
    { key: 'fullVision' as const, accent: cardAccents[2], icon: cardIcons[2] },
    { key: 'abThinking' as const, accent: cardAccents[3], icon: cardIcons[3] },
  ]

  return (
    <Section id="why" spacing="md">
      <SectionLabel>{t.whyMe.sectionLabel}</SectionLabel>
      <SectionTitle>{t.whyMe.title}</SectionTitle>
      <p className="text-text-dim text-lg leading-loose max-w-2xl mx-auto text-center mb-12">
        {t.whyMe.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, i) => {
          const colors = accentColors[card.accent]
          const cardT = t.whyMe.cards[card.key]
          return (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <TiltCard
                className={`group glass rounded-2xl p-8 md:p-10 transition-all duration-500 ${colors.border} ${colors.glow} cursor-default`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 ${colors.icon}`}>
                    {card.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg tracking-wide text-text mb-4">{cardT.title}</h3>
                  <p className="font-body text-[15px] text-text-dim leading-loose">{cardT.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
