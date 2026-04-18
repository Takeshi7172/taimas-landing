import { translations } from './translations'
import { useLanguage } from './LanguageContext'
import type { Translations } from './translations'

export function useTranslation(): Translations {
  const { locale } = useLanguage()
  return translations[locale]
}
