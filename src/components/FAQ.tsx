'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Section, SectionLabel, SectionTitle } from './Section'
import { useTranslation } from '../i18n/useTranslation'

interface FAQItemProps {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <div
        className={`glass rounded-xl transition-all duration-500 overflow-hidden ${
          isOpen ? 'border border-cyan/30 shadow-[0_0_24px_#00F0FF12]' : 'glass-hover border border-transparent'
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 rounded-xl"
          aria-expanded={isOpen}
        >
          <span className="font-display font-semibold text-sm md:text-base text-text leading-snug pr-2">
            {question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-300 ${
              isOpen ? 'border-cyan/50 text-cyan bg-cyan/10' : 'border-border-light text-text-muted'
            }`}
            aria-hidden
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 pb-5">
                <div className="h-px bg-gradient-to-r from-cyan/20 via-border/30 to-transparent mb-4" />
                <p className="font-body text-sm md:text-[15px] text-text-dim leading-loose">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export function FAQ() {
  const t = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <Section id="faq" spacing="md">
      <SectionLabel>{t.faq.sectionLabel}</SectionLabel>
      <SectionTitle>{t.faq.title}</SectionTitle>
      <p className="text-text-dim text-lg leading-loose max-w-2xl mx-auto text-center mb-12">
        {t.faq.subtitle}
      </p>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {t.faq.items.map((item, i) => (
          <FAQItem
            key={i}
            question={item.question}
            answer={item.answer}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </Section>
  )
}
