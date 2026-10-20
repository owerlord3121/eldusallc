"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Language, detectBrowserLanguage, getTranslation } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const correctedCopy: Partial<Record<Language, Record<string, string>>> = {
  en: {
    "lang.title": "Support in 5 Languages",
    "contact.coverage": "Coverage: all 50 US states + Canada. 24/7 support in 5 languages.",
  },
  ru: {
    "lang.title": "Поддержка на 5 языках",
    "contact.coverage": "Покрытие: все 50 штатов США + Канада. Поддержка 24/7 на 5 языках.",
  },
  kg: {
    "lang.title": "5 тилде колдоо",
    "contact.coverage": "Камтуу: АКШнын бардык 50 штаты + Канада. 5 тилде 24/7 колдоо.",
  },
  uz: {
    "lang.title": "5 tilda qo'llab-quvvatlash",
    "contact.coverage": "Qamrov: AQShning barcha 50 shtati + Kanada. 5 tilda 24/7 yordam.",
  },
  tr: {
    "lang.title": "5 Dilde Destek",
    "contact.coverage": "Kapsama: ABD'nin 50 eyaleti + Kanada. 5 dilde 7/24 destek.",
  },
}

const routeLanguages: Record<string, Language> = {
  ru: "ru",
  tr: "tr",
  uz: "uz",
  ky: "kg",
}

function translate(lang: Language, key: string) {
  return correctedCopy[lang]?.[key] ?? getTranslation(lang, key)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const segment = pathname.split("/").filter(Boolean)[0]
    const routeLanguage = segment ? routeLanguages[segment] : undefined

    if (routeLanguage) {
      setLanguageState(routeLanguage)
      localStorage.setItem("language", routeLanguage)
    } else {
      const savedLang = localStorage.getItem("language") as Language | null
      if (savedLang && ["en", "ru", "kg", "uz", "tr"].includes(savedLang)) {
        setLanguageState(savedLang)
      } else {
        const detected = detectBrowserLanguage()
        setLanguageState(detected)
        localStorage.setItem("language", detected)
      }
    }
    setMounted(true)
  }, [pathname])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => translate(language, key)

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "en", setLanguage, t: (key) => translate("en", key) }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
