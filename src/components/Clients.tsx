'use client'

import { motion } from 'motion/react'
import { Section, SectionLabel } from './Section'
import { useTilt } from '../hooks/useTilt'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'
import type { ReactNode } from 'react'

const clients = [
  {
    name: 'Elite Finance',
    niche: 'Финтех',
    city: 'Астана',
    work: 'CRM-система + лендинг для сбора заявок на кредит',
    result: 'Full-stack продукт с нуля. CRM + лендинг + Telegram бот. В production.',
    color: '#00F0FF',
  },
  {
    name: 'ПРОФБУХПЛЮС',
    niche: 'Бухгалтерия',
    city: 'Казахстан',
    work: 'SMM + Reels-контент',
    result: 'Контент-стратегия + 15 Reels/мес + SMM ведение',
    color: '#FFB800',
  },
  {
    name: 'Manara Design Studio',
    niche: 'Дизайн интерьера',
    city: 'Алматы',
    work: 'Контент-стратегия + Reels-сценарии',
    result: '10 Reels-сценариев, уникальное позиционирование с нуля',
    color: '#8B5CF6',
  },
]

const otherNiches = [
  'E-commerce',
  'Стоматология',
  'Аренда техники',
  'Образование',
  'HoReCa',
  'Строительство',
  'Недвижимость',
  'Юридические услуги',
  'Авто',
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

  return (
    <Section id="clients" alt spacing="md">
      <SectionLabel>Клиенты</SectionLabel>
      <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-text mb-8 tracking-tight text-center">
        Реальные клиенты, реальные результаты
      </h2>
      <p className="text-text-dim text-lg leading-loose max-w-2xl mx-auto text-center mb-16">
        Казахстанский бизнес. Реальные задачи. Реальный production.
      </p>

      {/* Stats strip */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl px-10 py-8 flex flex-wrap justify-center gap-10 mb-12"
      >
        <StatItem end={15} suffix="+" label="клиентов" delay={0} enabled={statsInView} />
        <StatItem end={6} suffix="" label="ниш" delay={150} enabled={statsInView} />
        <StatItem end={3} suffix="" label="города KZ" delay={300} enabled={statsInView} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <TiltCard className="glass rounded-xl p-7 md:p-8 glass-hover transition-all duration-500 h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
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
                  {client.niche}
                </span>
              </div>

              {/* Divider */}
              <div
                className="w-full h-px mb-5"
                style={{ background: `linear-gradient(90deg, ${client.color}33, transparent)` }}
              />

              {/* Work */}
              <div className="mb-4">
                <span className="font-display text-[10px] tracking-wider text-text-muted uppercase">
                  Что сделал
                </span>
                <p className="font-body text-text-dim leading-relaxed mt-1">{client.work}</p>
              </div>

              {/* Result */}
              <div>
                <span className="font-display text-[10px] tracking-wider text-text-muted uppercase">
                  Результат
                </span>
                <p className="font-body text-text-dim leading-relaxed mt-1">{client.result}</p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* More clients strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-xl px-8 py-6 mt-10"
      >
        <p className="font-body text-text-muted text-xs mb-3 text-center">Также работал с:</p>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {otherNiches.map((niche) => (
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
        Каждый проект — от стратегии до результата. Без шаблонов.
      </motion.p>
    </Section>
  )
}
