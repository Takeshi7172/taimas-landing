import { motion } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'
import { useTranslation } from '../i18n/useTranslation'

interface RowProps {
  criterion: string
  agency: string
  freelancer: string
  me: string
  index: number
}

function ComparisonRow({ criterion, agency, freelancer, me, index }: RowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0 rounded-xl overflow-hidden md:rounded-none md:overflow-visible"
    >
      {/* Mobile card layout */}
      <div className="glass rounded-xl p-4 md:hidden flex flex-col gap-3">
        <p className="font-display font-semibold text-sm text-text tracking-wide">{criterion}</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col gap-1">
            <span className="font-display text-[9px] tracking-widest uppercase text-text-muted">Агентство</span>
            <span className="font-body text-xs text-text-dim leading-snug">{agency}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-[9px] tracking-widest uppercase text-text-muted">Фрилансер</span>
            <span className="font-body text-xs text-text-dim leading-snug">{freelancer}</span>
          </div>
          <div className="flex flex-col gap-1 rounded-lg bg-cyan/5 border border-cyan/20 px-1 py-1">
            <span className="font-display text-[9px] tracking-widest uppercase text-cyan">Я + AURA</span>
            <span className="font-body text-xs text-cyan/90 leading-snug font-medium">{me}</span>
          </div>
        </div>
      </div>

      {/* Desktop table layout */}
      <div className="hidden md:flex items-center px-5 py-4 border-b border-border/30 bg-void-light/30">
        <span className="font-display font-semibold text-sm text-text tracking-wide">{criterion}</span>
      </div>
      <div className="hidden md:flex items-center px-5 py-4 border-b border-border/30 border-l border-l-border/20">
        <span className="font-body text-sm text-text-dim">{agency}</span>
      </div>
      <div className="hidden md:flex items-center px-5 py-4 border-b border-border/30 border-l border-l-border/20">
        <span className="font-body text-sm text-text-dim">{freelancer}</span>
      </div>
      <div className="hidden md:flex items-center px-5 py-4 border-b border-cyan/20 border-l border-l-cyan/20 bg-cyan/5">
        <span className="font-body text-sm text-cyan font-medium">{me}</span>
      </div>
    </motion.div>
  )
}

export function Comparison() {
  const t = useTranslation()

  return (
    <Section id="comparison" alt spacing="md">
      <SectionLabel>{t.comparison.sectionLabel}</SectionLabel>
      <SectionTitle>{t.comparison.title}</SectionTitle>
      <p className="text-text-dim text-lg leading-loose max-w-2xl mx-auto text-center mb-12">
        {t.comparison.subtitle}
      </p>

      <div className="w-full overflow-hidden">
        {/* Desktop header row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="hidden md:grid grid-cols-4 rounded-t-xl overflow-hidden"
        >
          <div className="px-5 py-3 bg-void-light/60 border-b-2 border-border/40">
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-text-muted">
              {t.comparison.columns.criterion}
            </span>
          </div>
          <div className="px-5 py-3 bg-void-light/60 border-b-2 border-border/40 border-l border-l-border/20">
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-text-muted">
              {t.comparison.columns.agency}
            </span>
          </div>
          <div className="px-5 py-3 bg-void-light/60 border-b-2 border-border/40 border-l border-l-border/20">
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-text-muted">
              {t.comparison.columns.freelancer}
            </span>
          </div>
          <div className="px-5 py-3 bg-cyan/10 border-b-2 border-cyan/40 border-l border-l-cyan/30 shadow-[0_0_20px_#00F0FF18]">
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-cyan">
              {t.comparison.columns.me}
            </span>
          </div>
        </motion.div>

        {/* Rows */}
        <div className="flex flex-col gap-3 md:gap-0">
          {t.comparison.rows.map((row, i) => (
            <ComparisonRow
              key={row.criterion}
              criterion={row.criterion}
              agency={row.agency}
              freelancer={row.freelancer}
              me={row.me}
              index={i}
            />
          ))}
        </div>

        {/* Desktop bottom rounded cap */}
        <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-border-light/40 to-transparent mt-0" />
      </div>
    </Section>
  )
}
