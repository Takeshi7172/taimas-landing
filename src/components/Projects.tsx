import { motion } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'
import { useTilt } from '../hooks/useTilt'
import { useTranslation } from '../i18n/useTranslation'

type ProjectKey = 'elfin' | 'instrumental' | 'mycheck' | 'aura'

const projectsMeta: {
  key: ProjectKey
  name: string
  type: string
  tags: string[]
  status: 'LIVE' | 'IN DEV'
  url: string
  gradient: string
  accentColor: string
}[] = [
  {
    key: 'elfin',
    name: 'elfin.kz',
    type: 'CRM + Landing',
    tags: ['FastAPI', 'Next.js', 'aiogram', 'PostgreSQL', 'Vercel'],
    status: 'LIVE',
    url: 'https://elfin.kz',
    gradient: 'from-cyan/20 to-lavender/10',
    accentColor: '#00F0FF',
  },
  {
    key: 'instrumental',
    name: 'instrumental.kz',
    type: 'E-Commerce',
    tags: ['Next.js 15', 'SSG', 'SEO', 'Schema.org', 'GA4'],
    status: 'LIVE',
    url: 'https://instrumental.kz',
    gradient: 'from-amber/20 to-cyan/10',
    accentColor: '#FFB800',
  },
  {
    key: 'mycheck',
    name: 'mycheck.kz',
    type: 'Fintech Landing',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind', 'shadcn/ui'],
    status: 'LIVE',
    url: '#',
    gradient: 'from-lavender/20 to-amber/10',
    accentColor: '#8B5CF6',
  },
  {
    key: 'aura',
    name: 'AURA Analytics',
    type: 'SaaS Platform',
    tags: ['Next.js 16', 'Supabase', 'Recharts', 'Windsor.ai', 'RLS'],
    status: 'IN DEV',
    url: '#',
    gradient: 'from-cyan/15 to-amber/15',
    accentColor: '#06B6D4',
  },
]

interface ProjectCardInnerProps {
  project: typeof projectsMeta[number]
  description: string
}

function ProjectCardInner({ project, description }: ProjectCardInnerProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ maxDeg: 4 })

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group glass rounded-2xl overflow-hidden transition-all duration-500 glass-hover block h-full"
      style={{ willChange: 'transform' }}
    >
      {/* Browser chrome gradient header */}
      <div className={`h-40 relative bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Subtle diagonal stripe pattern for depth */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              ${project.accentColor} 0px,
              ${project.accentColor} 1px,
              transparent 1px,
              transparent 12px
            )`,
          }}
        />
        {/* Inner vignette gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 60%, ${project.accentColor}18 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-50" />

        {/* macOS window dots */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>

        {/* Browser url bar hint */}
        <div className="absolute top-2.5 left-12 right-12 h-4 rounded bg-void/30 border border-white/5 flex items-center px-2">
          <span className="font-display text-[8px] text-white/30 tracking-wider truncate">{project.url === '#' ? 'localhost:3000' : project.url}</span>
        </div>

        {/* Simulated page layout lines */}
        <div className="absolute bottom-4 left-5 right-5 space-y-1.5 opacity-20">
          <div className="h-1.5 rounded-full" style={{ backgroundColor: project.accentColor, width: '55%' }} />
          <div className="h-1 rounded-full bg-white/40" style={{ width: '80%' }} />
          <div className="h-1 rounded-full bg-white/30" style={{ width: '65%' }} />
        </div>

        {/* Rotating code symbol */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-50 transition-opacity duration-500 mt-2">
          <motion.span
            className="font-display text-4xl font-bold tracking-tighter"
            style={{ color: project.accentColor }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            whileHover={{ rotate: 0 }}
          >
            {'</>'}
          </motion.span>
        </div>

        {/* Status badge */}
        <div className="absolute top-10 right-4">
          <span
            className={`font-display text-[10px] tracking-widest px-3 py-1 rounded-full border ${
              project.status === 'LIVE'
                ? 'border-cyan/50 text-cyan bg-cyan/10'
                : 'border-amber/50 text-amber bg-amber/10'
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex flex-col items-center gap-1 mb-3">
          <h3 className="font-display font-bold text-xl text-text group-hover:text-cyan transition-colors">
            {project.name}
          </h3>
          <span className="font-display text-xs text-text-muted tracking-wider">{project.type}</span>
        </div>
        <p className="font-body text-text-dim mb-5 leading-relaxed text-center">{description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const t = useTranslation()

  return (
    <Section id="projects" spacing="md">
      <SectionLabel>{t.projects.sectionLabel}</SectionLabel>
      <SectionTitle>{t.projects.title}</SectionTitle>
      <p className="text-text-dim text-lg leading-loose max-w-2xl mx-auto text-center mb-12">
        {t.projects.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projectsMeta.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="block"
          >
            <ProjectCardInner
              project={project}
              description={t.projects.items[project.key].description}
            />
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
