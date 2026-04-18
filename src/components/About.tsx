import { motion } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'

const details = [
  { label: 'Возраст', value: '29 лет', sub: '06.09.1996' },
  { label: 'Локация', value: 'Казахстан', sub: '' },
  { label: 'Образование', value: 'Менеджмент', sub: 'высшее' },
]

const languages = [
  { name: 'Русский', level: 'Носитель', pct: 100 },
  { name: 'Казахский', level: 'Носитель', pct: 100 },
  { name: 'Английский', level: 'Intermediate', pct: 55 },
]

export function About() {
  return (
    <Section id="about" spacing="md">
      <SectionLabel>Обо мне</SectionLabel>
      <SectionTitle>Человек за системой</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12">
        {/* Left: details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-6 md:p-10"
        >
          <h3 className="font-display font-semibold text-sm tracking-wider text-cyan mb-6 text-center">ДАННЫЕ</h3>
          <div className="space-y-6">
            {details.map((d) => (
              <div key={d.label} className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-4">
                <span className="font-display text-sm text-text-muted shrink-0">{d.label}</span>
                <div className="text-right min-w-0">
                  <span className="font-body text-text font-medium">{d.value}</span>
                  {d.sub && (
                    <span className="font-body text-xs text-text-muted ml-2">({d.sub})</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-display font-semibold text-sm tracking-wider text-amber mt-10 mb-8 text-center">ЯЗЫКИ</h3>
          <div className="space-y-6">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display text-sm text-text">{lang.name}</span>
                  <span className="font-display text-xs text-text-muted">{lang.level}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-void-lighter overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{
                      background: lang.pct === 100
                        ? 'linear-gradient(90deg, #00F0FF, #8B5CF6)'
                        : 'linear-gradient(90deg, #FFB800, #FF6B00)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: philosophy */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass rounded-xl p-6 md:p-10"
        >
          <h3 className="font-display font-semibold text-sm tracking-wider text-lavender mb-6 text-center">ПОДХОД</h3>
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                <span className="font-display text-sm font-semibold text-text">Маркетолог который кодит</span>
              </div>
              <p className="font-body text-text-dim text-[15px] leading-loose text-center">
                Не просто кодер — маркетолог с 4-летним опытом. Понимаю воронки, конверсии, A/B тесты.
                Каждый лендинг строю с точки зрения результата, не красоты ради красоты.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                <span className="font-display text-sm font-semibold text-text">AI как мультипликатор</span>
              </div>
              <p className="font-body text-text-dim text-[15px] leading-loose text-center">
                Не использую AI как костыль. Построил целую систему оркестрации из 30+ агентов.
                Каждый агент — специалист в своей области. Вместе — непобедимая команда.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-lavender" />
                <span className="font-display text-sm font-semibold text-text">Качество по умолчанию</span>
              </div>
              <p className="font-body text-text-dim text-[15px] leading-loose text-center">
                TypeScript strict, SEO, Schema.org, аналитика — это не опции. Это мой стандарт на каждом проекте, независимо от бюджета.
                Каждый сайт готов к работе с первого деплоя.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                <span className="font-display text-sm font-semibold text-text">Build in public</span>
              </div>
              <p className="font-body text-text-dim text-[15px] leading-loose text-center">
                Открытый GitHub. Реальные продукты. Не пустые слова — код который можно посмотреть.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                <span className="font-display text-sm font-semibold text-text">Один вместо штата</span>
              </div>
              <p className="font-body text-text-dim text-[15px] leading-loose text-center">
                Не агентство с менеджерами и координаторами. Один человек с AI-системой из 31 агента.
                Это не просто слова — это реальные проекты в production и отработанная на деле система.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
