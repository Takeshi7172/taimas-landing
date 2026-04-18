import { motion } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'
import { useTranslation } from '../i18n/useTranslation'

export function About() {
  const t = useTranslation()
  const a = t.about

  const details = [
    { label: a.details.age.label, value: a.details.age.value, sub: '' },
    { label: a.details.location.label, value: a.details.location.value, sub: '' },
    { label: a.details.education.label, value: a.details.education.value, sub: a.details.education.sub },
  ]

  const languages = [
    { name: a.languages.russian.name, level: a.languages.russian.level, pct: 100 },
    { name: a.languages.kazakh.name, level: a.languages.kazakh.level, pct: 100 },
    { name: a.languages.english.name, level: a.languages.english.level, pct: 55 },
  ]

  const philosophy = [
    { dotColor: 'bg-cyan', title: a.philosophy.marketerWhoCode.title, text: a.philosophy.marketerWhoCode.text },
    { dotColor: 'bg-amber', title: a.philosophy.aiMultiplier.title, text: a.philosophy.aiMultiplier.text },
    { dotColor: 'bg-lavender', title: a.philosophy.qualityDefault.title, text: a.philosophy.qualityDefault.text },
    { dotColor: 'bg-cyan', title: a.philosophy.buildInPublic.title, text: a.philosophy.buildInPublic.text },
    { dotColor: 'bg-amber', title: a.philosophy.oneVsTeam.title, text: a.philosophy.oneVsTeam.text },
  ]

  return (
    <Section id="about" spacing="md">
      <SectionLabel>{a.sectionLabel}</SectionLabel>
      <SectionTitle>{a.title}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12">
        {/* Left: details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-6 md:p-10"
        >
          <h3 className="font-display font-semibold text-sm tracking-wider text-cyan mb-6 text-center">{a.dataLabel}</h3>
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

          <h3 className="font-display font-semibold text-sm tracking-wider text-amber mt-10 mb-8 text-center">{a.languagesLabel}</h3>
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
          <h3 className="font-display font-semibold text-sm tracking-wider text-lavender mb-6 text-center">{a.approachLabel}</h3>
          <div className="space-y-8">
            {philosophy.map((item) => (
              <div key={item.title}>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                  <span className="font-display text-sm font-semibold text-text">{item.title}</span>
                </div>
                <p className="font-body text-text-dim text-[15px] leading-loose text-center">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
