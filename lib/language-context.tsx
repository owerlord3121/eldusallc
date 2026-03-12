"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Language, detectBrowserLanguage, getTranslation } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check localStorage first, then browser language
    const savedLang = localStorage.getItem("language") as Language | null
    if (savedLang && ["en", "ru", "kg", "uz", "tr"].includes(savedLang)) {
      setLanguageState(savedLang)
    } else {
      const detected = detectBrowserLanguage()
      setLanguageState(detected)
      localStorage.setItem("language", detected)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => getTranslation(language, key)

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "en", setLanguage, t: (key) => getTranslation("en", key) }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
