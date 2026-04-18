import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { useTranslation } from '../i18n/useTranslation'
import { useLanguage } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/translations'

const NAV_IDS = ['why', 'journey', 'projects', 'aura', 'stack', 'about'] as const
const LOCALES: Locale[] = ['ru', 'kz', 'en']

function ContactButton({ label }: { label: string }) {
  const { ref, onMouseMove, onMouseLeave } = useMagneticButton({ strength: 0.4 })
  return (
    <a
      ref={ref}
      href="https://t.me/secr_co"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="ml-2 px-4 py-2 bg-cyan/10 border border-cyan/30 text-cyan font-display text-xs tracking-wider rounded-lg hover:bg-cyan/20 transition-all will-change-transform"
    >
      {label}
    </a>
  )
}

interface LanguageSwitcherProps {
  className?: string
}

function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {LOCALES.map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`font-display text-[10px] tracking-wider px-2 py-1 rounded transition-colors ${
            locale === lang
              ? 'text-cyan bg-cyan/10'
              : 'text-text-muted hover:text-text'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection()
  const t = useTranslation()

  const links = [
    { href: '#why', label: t.nav.links.why, id: 'why' },
    { href: '#journey', label: t.nav.links.journey, id: 'journey' },
    { href: '#projects', label: t.nav.links.projects, id: 'projects' },
    { href: '#aura', label: t.nav.links.aura, id: 'aura' },
    { href: '#stack', label: t.nav.links.stack, id: 'stack' },
    { href: '#about', label: t.nav.links.about, id: 'about' },
  ] satisfies { href: string; label: string; id: typeof NAV_IDS[number] }[]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg tracking-tight text-text hover:text-cyan transition-colors">
          T<span className="text-cyan">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-display text-xs tracking-wider transition-colors ${
                active === link.id ? 'text-cyan' : 'text-text-dim hover:text-cyan'
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-cyan"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <LanguageSwitcher className="ml-2" />
          <ContactButton label={t.nav.contact} />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-5 h-px bg-text transition-all ${mobileOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`w-5 h-px bg-text transition-all ${mobileOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-void-light/95 backdrop-blur-xl border-b border-border px-6 py-6 space-y-4"
        >
          <LanguageSwitcher className="mb-2" />
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block font-display text-sm tracking-wider transition-colors ${
                active === link.id ? 'text-cyan' : 'text-text-dim hover:text-cyan'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://t.me/secr_co"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 bg-cyan text-void font-display text-sm tracking-wider rounded-lg"
          >
            {t.nav.writeTelegram}
          </a>
          <a
            href="https://wa.me/77054443231"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 border border-border-light text-text font-display text-sm tracking-wider rounded-lg hover:border-green-500/50 hover:text-green-400 transition-all"
          >
            {t.nav.whatsapp}
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
