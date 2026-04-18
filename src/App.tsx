import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from './i18n'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { WhyMe } from './components/WhyMe'
import { Journey } from './components/Journey'
import { Projects } from './components/Projects'
import { AuraSystem } from './components/AuraSystem'
import { TechStack } from './components/TechStack'
import { Clients } from './components/Clients'
import { Comparison } from './components/Comparison'
import { About } from './components/About'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { useCursorGlow } from './hooks/useCursorGlow'

const BOOT_DURATION = 1400

function App() {
  const [booted, setBooted] = useState(false)
  const t = useTranslation()
  useCursorGlow()

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), BOOT_DURATION)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* Boot overlay */}
      <AnimatePresence>
        {!booted && (
          <motion.div
            key="boot"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 z-[9000] bg-void flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-display text-xs tracking-[0.4em] text-cyan uppercase"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                {t.app.systemBoot}
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="noise scanline"
      >
        <Nav />
        <Hero />
        <WhyMe />
        <Journey />
        <div className="h-10 md:h-16" aria-hidden />
        <Projects />
        <AuraSystem />
        <div className="h-10 md:h-16" aria-hidden />
        <TechStack />
        <Clients />
        <div className="h-10 md:h-16" aria-hidden />
        <Comparison />
        <About />
        <FAQ />
        <Footer />
      </motion.div>
    </>
  )
}

export default App
