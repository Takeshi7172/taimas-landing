import { motion } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'
import { useTilt } from '../hooks/useTilt'
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
  return (
    <Section id="stack">
      <SectionLabel>Инструменты</SectionLabel>
      <SectionTitle>Tech Stack</SectionTitle>
      <p className="text-text-dim text-lg max-w-2xl mb-16">
        Полный стек от дизайна до деплоя. Маркетинг + разработка + AI в одном человеке.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {stackGroups.map((group, groupIdx) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
          >
            <TiltCard className="glass rounded-xl p-6 glass-hover transition-all duration-500 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-5 rounded-full" style={{ backgroundColor: group.color }} />
                <h3 className="font-display font-semibold text-sm tracking-wider" style={{ color: group.color }}>
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-display text-xs px-3 py-2 rounded-md bg-void-lighter border border-border text-text-dim hover:text-text hover:border-border-light transition-all duration-300 cursor-default"
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
