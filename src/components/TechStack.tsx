import { motion } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'
import { useTilt } from '../hooks/useTilt'
import { useTranslation } from '../i18n/useTranslation'
import type { ReactNode } from 'react'

const stackGroups = [
  {
    label: 'Frontend',
    color: '#00F0FF',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite'],
  },
  {
    label: 'Backend',
    color: '#8B5CF6',
    items: ['FastAPI', 'Python', 'Supabase', 'PostgreSQL', 'Hono'],
  },
  {
    label: 'AI',
    color: '#FFB800',
    items: ['Claude Opus/Sonnet', 'Multi-Agent', 'RAG', 'LanceDB', 'Embeddings'],
  },
  {
    label: 'DevOps',
    color: '#06B6D4',
    items: ['Docker', 'Railway', 'Vercel', 'GitHub', 'VPS'],
  },
  {
    label: 'Marketing',
    color: '#FF6B00',
    items: ['Google Ads', 'Meta Ads', 'GA4', 'SEO', 'Yandex Metrika'],
  },
  {
    label: 'Design',
    color: '#A78BFA',
    items: ['Figma', 'After Effects', 'Photoshop', 'Canva'],
  },
]

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

export function TechStack() {
  const t = useTranslation()

  return (
    <Section id="stack" spacing="sm">
      <SectionLabel>{t.techStack.sectionLabel}</SectionLabel>
      <SectionTitle>{t.techStack.title}</SectionTitle>
      <p className="text-text-dim text-lg leading-loose max-w-2xl mx-auto text-center mb-10">
        {t.techStack.subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {stackGroups.map((group, groupIdx) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
          >
            <TiltCard className="glass rounded-xl p-6 md:p-7 glass-hover transition-all duration-500 h-full text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-1 h-5 rounded-full" style={{ backgroundColor: group.color }} />
                <h3 className="font-display font-semibold text-sm tracking-wider" style={{ color: group.color }}>
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-display text-xs px-3.5 py-2.5 rounded-md bg-void-lighter border border-border text-text-dim hover:text-text hover:border-border-light transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
