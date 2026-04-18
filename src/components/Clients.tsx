'use client'

import { motion } from 'motion/react'
import { Section, SectionLabel } from './Section'
import { useTilt } from '../hooks/useTilt'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'
import { useTranslation } from '../i18n/useTranslation'
import type { ReactNode } from 'react'

type ClientKey = 'eliteFinance' | 'profbuh' | 'manara'

const clientsMeta: { key: ClientKey; name: string; city: string; color: string }[] = [
  { key: 'eliteFinance', name: 'Elite Finance', city: 'Астана', color: '#00F0FF' },
  { key: 'profbuh', name: 'ПРОФБУХПЛЮС', city: 'Казахстан', color: '#FFB800' },
  { key: 'manara', name: 'Manara Design Studio', city: 'Алматы', color: '#8B5CF6' },
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

interface StatItemProps {
  end: number
  suffix: string
  label: string
  delay: number
  enabled: boolean
}

function StatItem({ end, suffix, label, delay, enabled }: StatItemProps) {
  const count = useCountUp({ end, duration: 1600, startDelay: delay, enabled })
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-display font-bold text-3xl text-text">
        {count}
        {suffix}
      </span>
      <span className="font-body text-sm text-text-muted">{label}</span>
    </div>
  )
}

export function Clients() {
  const { ref: statsRef, isInView: statsInView } = useInView(0.3)
  const t = useTranslation()

  return (
    <Section id="clients" alt spacing="md">
      <SectionLabel>{t.clients.sectionLabel}</SectionLabel>
      <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-text mb-8 tracking-tight text-center">
        {t.clients.title}
      </h2>
      <p className="text-text-dim text-lg leading-loose max-w-2xl mx-auto text-center mb-16">
        {t.clients.subtitle}
      </p>

      {/* Stats strip */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl px-6 py-6 md:px-10 md:py-8 flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
      >
        <StatItem end={20} suffix="+" label={t.clients.stats.clients} delay={0} enabled={statsInView} />
        <StatItem end={6} suffix="" label={t.clients.stats.niches} delay={150} enabled={statsInView} />
        <StatItem end={3} suffix="" label={t.clients.stats.cities} delay={300} enabled={statsInView} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientsMeta.map((client, i) => {
          const clientT = t.clients.clientDetails[client.key]
          return (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <TiltCard className="glass rounded-xl p-7 md:p-8 glass-hover transition-all duration-500 h-full text-center">
                {/* Header */}
                <div className="flex flex-col items-center gap-2 mb-5">
                  <div>
                    <h3 className="font-display font-bold text-lg text-text">{client.name}</h3>
                    <span className="font-body text-sm text-text-muted">{client.city}</span>
                  </div>
                  <span
                    className="font-display text-[10px] tracking-widest px-2.5 py-1 rounded-md border"
                    style={{
                      borderColor: `${client.color}44`,
                      color: client.color,
                      backgroundColor: `${client.color}10`,
                    }}
                  >
                    {clientT.niche}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="w-full h-px mb-5"
                  style={{ background: `linear-gradient(90deg, ${client.color}33, transparent)` }}
                />

                {/* Work */}
                <div className="mb-4 text-center">
                  <span className="font-display text-[10px] tracking-wider text-text-muted uppercase">
                    {t.clients.whatDone}
                  </span>
                  <p className="font-body text-text-dim leading-relaxed mt-1">{clientT.work}</p>
                </div>

                {/* Result */}
                <div className="text-center">
                  <span className="font-display text-[10px] tracking-wider text-text-muted uppercase">
                    {t.clients.result}
                  </span>
                  <p className="font-body text-text-dim leading-relaxed mt-1">{clientT.result}</p>
                </div>
              </TiltCard>
            </motion.div>
          )
        })}
      </div>

      {/* More clients strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-xl px-8 py-6 mt-10"
      >
        <p className="font-body text-text-muted text-xs mb-3 text-center">{t.clients.alsoWorkedWith}</p>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {t.clients.otherNiches.map((niche) => (
            <span
              key={niche}
              className="font-body text-xs text-text-muted px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5"
            >
              {niche}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="font-body text-text-muted text-sm text-center mt-16"
      >
        {t.clients.bottomText}
      </motion.p>
    </Section>
  )
}
