import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { useMagneticButton } from '../hooks/useMagneticButton'

const TYPED_TEXT = 'Создаю лендинги со скоростью мысли.'
const TYPING_DELAY = 1200

function TypedSubtitle() {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [done, setDone] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1
        setDisplayed(TYPED_TEXT.slice(0, indexRef.current))
        if (indexRef.current >= TYPED_TEXT.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, 38)
      return () => clearInterval(interval)
    }, TYPING_DELAY)

    return () => clearTimeout(startTimeout)
  }, [])

  useEffect(() => {
    if (done) return
    const blink = setInterval(() => setShowCursor((p) => !p), 530)
    return () => clearInterval(blink)
  }, [done])

  return (
    <span className="text-text">
      {displayed}
      <span
        className="inline-block w-0.5 h-5 bg-cyan ml-0.5 align-middle"
        style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
      />
    </span>
  )
}

const stats = [
  { end: 30, suffix: '+', label: 'AI-агентов' },
  { end: 5, suffix: '', label: 'продуктов' },
  { end: 4, suffix: '', label: 'года опыта' },
  { end: 3, suffix: '', label: 'клиента' },
]

function StatCounter({ end, suffix, label, delay }: { end: number; suffix: string; label: string; delay: number }) {
  const { ref, isInView } = useInView(0.5)
  const count = useCountUp({ end, duration: 1600, startDelay: delay, enabled: isInView })

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-2xl md:text-4xl text-cyan mb-1">
        {count}
        {suffix}
      </div>
      <div className="font-body text-xs md:text-sm text-text-muted uppercase tracking-wider">{label}</div>
    </div>
  )
}

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
      className="group relative inline-flex items-center gap-2 px-8 py-4 bg-cyan text-void font-display font-semibold text-sm tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_#00F0FF44] will-change-transform"
    >
      <span className="relative z-10">НАПИСАТЬ В TELEGRAM</span>
      <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
      className="inline-flex items-center gap-2 px-8 py-4 border border-border-light text-text font-display font-medium text-sm tracking-wider rounded-lg transition-all duration-300 hover:border-cyan-dim hover:text-cyan hover:shadow-[0_0_20px_#00F0FF22] will-change-transform"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      GITHUB
    </a>
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const orb3Y = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg absolute inset-0" />

      {/* Gradient mesh orbs — parallax */}
      <motion.div
        className="mesh-orb w-[500px] h-[500px] bg-cyan/20 top-[-10%] left-[-10%]"
        style={{ y: orb1Y, animationDelay: '0s' }}
      />
      <motion.div
        className="mesh-orb w-[600px] h-[600px] bg-lavender/15 bottom-[-15%] right-[-10%]"
        style={{ y: orb2Y, animationDelay: '-5s' }}
      />
      <motion.div
        className="mesh-orb w-[300px] h-[300px] bg-amber/10 top-[30%] right-[20%]"
        style={{ y: orb3Y, animationDelay: '-10s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-display text-xs tracking-wider text-cyan">OPEN TO WORK</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter mb-8"
        >
          <span className="text-text">ТАЙМ</span>
          <span className="gradient-text">АС</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mb-10"
        >
          <span className="font-display text-xl md:text-2xl lg:text-3xl font-light tracking-wide">
            <span className="text-cyan">VIBE CODER</span>
            <span className="text-text-muted mx-3">&</span>
            <span className="text-amber">AI ARCHITECT</span>
          </span>
        </motion.div>

        {/* Subtitle with typing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-text-dim max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          4 года в маркетинге. От графического дизайна до AI-системы из 30+ агентов.
          <br />
          <TypedSubtitle />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <TelegramButton />
          <GithubButton />
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-16 glass rounded-2xl px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-sm md:max-w-none mx-auto"
        >
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} {...stat} delay={i * 150} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border-light flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-cyan"
          />
        </div>
      </motion.div>
    </section>
  )
}
