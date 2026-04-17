import { motion } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'

const steps = [
  {
    year: '2022',
    title: 'Графический дизайн',
    desc: 'Начал с визуала. Figma, Photoshop, брендинг.',
    tags: ['Figma', 'Photoshop', 'Illustrator'],
    color: '#8B5CF6',
  },
  {
    year: '2023',
    title: 'Моушн дизайн',
    desc: 'After Effects, анимация, видео-контент для брендов.',
    tags: ['After Effects', 'Premiere Pro', 'Motion'],
    color: '#A78BFA',
  },
  {
    year: '2023',
    title: 'Таргетированная реклама',
    desc: 'Facebook Ads, Instagram Ads. Первые бюджеты, первые результаты.',
    tags: ['Meta Ads', 'Instagram', 'Targeting'],
    color: '#00F0FF',
  },
  {
    year: '2024',
    title: 'Google Ads + Аналитика',
    desc: 'Performance маркетинг. GA4, отслеживание конверсий, оптимизация.',
    tags: ['Google Ads', 'GA4', 'GTM'],
    color: '#06B6D4',
  },
  {
    year: '2025',
    title: 'Vibe Coding',
    desc: 'Next.js, React, TypeScript. От идеи до production за дни, не месяцы.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    color: '#FFB800',
  },
  {
    year: '2026',
    title: 'AI Architecture',
    desc: '30+ AI-агентов. Система AURA. Оркестрация dev, marketing, sales.',
    tags: ['Claude', 'RAG', 'Multi-Agent', 'AURA'],
    color: '#FF6B00',
  },
]

export function Journey() {
  return (
    <Section id="journey">
      <SectionLabel>Путь</SectionLabel>
      <SectionTitle>
        <span className="gradient-text">Эволюция</span>
      </SectionTitle>
      <p className="text-text-dim text-lg leading-loose max-w-2xl mb-16">
        От пикселей до AI-систем. Каждый этап — фундамент для следующего.
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
          <div className="timeline-line w-full h-full opacity-40" />
        </div>

        {steps.map((step, i) => {
          const isLeft = i % 2 === 0
          return (
            <motion.div
              key={`${step.year}-${step.title}`}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative flex items-start mb-20 last:mb-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Dot on the line */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 z-10 bg-void" style={{ borderColor: step.color, boxShadow: `0 0 12px ${step.color}66` }} />

              {/* Content card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className="glass rounded-xl p-7 md:p-8 glass-hover transition-all duration-500">
                  <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span
                      className="font-display font-bold text-sm tracking-wider"
                      style={{ color: step.color }}
                    >
                      {step.year}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-text mb-3">{step.title}</h3>
                  <p className="font-body text-text-dim mb-5">{step.desc}</p>
                  <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    {step.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
