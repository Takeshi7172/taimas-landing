import { motion } from 'motion/react'
import { useMagneticButton } from '../hooks/useMagneticButton'

function TelegramButton() {
  const { ref, onMouseMove, onMouseLeave } = useMagneticButton({ strength: 0.3 })
  return (
    <a
      ref={ref}
      href="https://t.me/secr_co"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan text-void font-display font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_#00F0FF44] will-change-transform"
    >
      TELEGRAM
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    </a>
  )
}

function GithubButton() {
  const { ref, onMouseMove, onMouseLeave } = useMagneticButton({ strength: 0.3 })
  return (
    <a
      ref={ref}
      href="https://github.com/Takeshi7172"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="inline-flex items-center gap-2 px-8 py-4 border border-border-light text-text font-display font-medium text-sm tracking-wider rounded-lg transition-all duration-300 hover:border-cyan-dim hover:text-cyan will-change-transform"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      GITHUB
    </a>
  )
}

export function Footer() {
  return (
    <footer className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="mesh-orb w-[500px] h-[500px] bg-cyan/10 bottom-[-20%] left-[30%]" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* CTA heading */}
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text mb-6 tracking-tight">
            Готов ловить вайб
            <br />
            <span className="gradient-text">твоего продукта</span>
          </h2>

          <p className="font-body text-lg text-text-dim max-w-xl mx-auto mb-12">
            Напиши — и я покажу на деле, а не на словах.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <TelegramButton />
            <GithubButton />
          </div>

          {/* Bottom links */}
          <div className="flex items-center justify-center gap-8">
            <a href="#" className="font-display text-xs tracking-wider text-text-muted hover:text-cyan transition-colors">
              @taimasai
            </a>
            <span className="text-border">|</span>
            <a href="https://github.com/Takeshi7172" target="_blank" rel="noopener noreferrer" className="font-display text-xs tracking-wider text-text-muted hover:text-cyan transition-colors">
              github.com/Takeshi7172
            </a>
          </div>

          {/* Built with badge */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <span className="font-display text-[10px] tracking-[0.3em] text-text-muted uppercase">
              Built with AI in <span className="text-cyan">{'<'}1 hour</span> — это и есть vibe coding
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
