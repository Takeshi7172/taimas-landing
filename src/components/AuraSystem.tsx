import { motion } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'
import { useTilt } from '../hooks/useTilt'
import type { ReactNode } from 'react'

const agentTeams = [
  {
    name: 'Dev Team',
    color: '#00F0FF',
    agents: ['frontend-lead', 'backend-lead', 'supabase-dba', 'bot-lead', 'debugger', 'code-reviewer', 'test-engineer'],
  },
  {
    name: 'Marketing Team',
    color: '#FFB800',
    agents: ['content-writer', 'seo-specialist', 'social-media-manager', 'ads-specialist', 'voice-writer'],
  },
  {
    name: 'Operations',
    color: '#8B5CF6',
    agents: ['project-manager', 'knowledge-manager', 'optimizer', 'research-analyst'],
  },
  {
    name: 'Meta System',
    color: '#FF6B00',
    agents: ['agent-architect', 'agent-designer', 'agent-optimizer', 'swarm-coordinator'],
  },
]

interface DataFlowLineProps {
  color: string
  delay: number
}

function DataFlowLine({ color, delay }: DataFlowLineProps) {
  return (
    <div className="relative w-px h-12 overflow-hidden" style={{ background: `${color}22` }}>
      <motion.div
        className="absolute top-0 w-full rounded-full"
        style={{ background: `linear-gradient(180deg, transparent, ${color}, transparent)`, height: '40%' }}
        animate={{ y: ['-100%', '300%'] }}
        transition={{ duration: 1.4, delay, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

interface TiltCardProps {
  children: ReactNode
  className?: string
  color?: string
}

function TiltTeamCard({ children, className = '' }: TiltCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ maxDeg: 4 })
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

export function AuraSystem() {
  return (
    <Section id="aura">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="mesh-orb w-[600px] h-[600px] bg-cyan/8 top-[20%] left-[-10%]" style={{ animationDelay: '-3s' }} />
        <div className="mesh-orb w-[400px] h-[400px] bg-lavender/8 bottom-[10%] right-[-5%]" style={{ animationDelay: '-8s' }} />
      </div>

      <SectionLabel>Секретное оружие</SectionLabel>
      <SectionTitle>AURA System</SectionTitle>
      <p className="text-text-dim text-lg max-w-3xl mb-6">
        Я построил AI-систему из <span className="text-cyan font-semibold">30+ специализированных агентов</span>.
        Она оркестрирует разработку, маркетинг, продажи и операции.
      </p>
      <p className="text-text-dim text-lg max-w-3xl mb-16">
        <span className="text-amber">Вот почему я могу делать 7-10 лендингов в день.</span>
      </p>

      {/* Orchestrator visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Central Jarvis node */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div
              className="w-28 h-28 rounded-2xl border-2 border-cyan/60 bg-void-light flex items-center justify-center relative z-10"
              style={{ boxShadow: '0 0 40px #00F0FF22, inset 0 0 20px #00F0FF08' }}
            >
              <div className="text-center">
                <div className="font-display font-bold text-cyan text-lg">JARVIS</div>
                <div className="font-display text-[10px] text-text-muted tracking-wider">ORCHESTRATOR</div>
              </div>
            </div>
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-2xl border border-cyan/20 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 rounded-2xl border border-cyan/10 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          </div>
        </div>

        {/* Animated connection lines */}
        <div className="flex justify-center gap-3 mb-8">
          {agentTeams.map((team, i) => (
            <DataFlowLine key={team.name} color={team.color} delay={i * 0.35} />
          ))}
        </div>

        {/* Agent teams grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {agentTeams.map((team, teamIdx) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: teamIdx * 0.1 }}
            >
              <TiltTeamCard className="glass rounded-xl p-5 md:p-6 glass-hover transition-all duration-500 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: team.color, boxShadow: `0 0 8px ${team.color}66` }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: teamIdx * 0.5 }}
                  />
                  <h3 className="font-display font-semibold text-sm tracking-wider" style={{ color: team.color }}>
                    {team.name}
                  </h3>
                </div>
                <div className="space-y-2">
                  {team.agents.map((agent, agentIdx) => (
                    <motion.div
                      key={agent}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: teamIdx * 0.1 + agentIdx * 0.05 }}
                      className="flex items-center gap-2 group/agent"
                    >
                      <span className="font-display text-[10px] sm:text-xs text-text-muted group-hover/agent:text-text-dim transition-colors">@</span>
                      <span className="font-display text-xs sm:text-sm text-text-dim group-hover/agent:text-text transition-colors">{agent}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-border/50">
                  <span className="font-display text-[10px] tracking-wider text-text-muted">
                    {team.agents.length} AGENTS
                  </span>
                </div>
              </TiltTeamCard>
            </motion.div>
          ))}
        </div>

        {/* Total count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-void-light">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-display text-sm text-text-dim">
              <span className="text-cyan font-semibold">30+</span> агентов работают как единая система
            </span>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}
