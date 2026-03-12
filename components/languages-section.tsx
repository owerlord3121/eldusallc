"use client"

import { useLanguage } from "@/lib/language-context"

const languages = [
  { name: "English", flag: "EN" },
  { name: "Русский", flag: "RU" },
  { name: "Türkçe", flag: "TR" },
  { name: "Кыргызча", flag: "KG" },
  { name: "O'zbek", flag: "UZ" },
]

export function LanguagesSection() {
  const { language } = useLanguage()

  const title: Record<string, string> = {
    en: "We work in 5 languages",
    ru: "Работаем на 5 языках",
    kg: "5 тилде иштейбиз",
    uz: "5 tilda ishlaymiz",
    tr: "5 dilde calisiyoruz",
  }

  const subtitle: Record<string, string> = {
    en: "Multilingual",
    ru: "Мультиязычность",
    kg: "Көп тилдүүлүк",
    uz: "Ko'p tillilik",
    tr: "Cok dilli",
  }

  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 text-center sm:mb-6">
          <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-primary sm:mb-2 sm:text-sm">
            {subtitle[language] || subtitle.en}
          </p>
          <h2 className="text-balance text-lg font-bold text-foreground sm:text-xl md:text-2xl">
            {title[language] || title.en}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center gap-2 rounded-full border border-border/50 bg-card px-3 py-2 sm:gap-2.5 sm:px-5 sm:py-2.5"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary sm:h-7 sm:w-7 sm:text-xs">
                {lang.flag}
              </span>
              <span className="text-xs font-medium text-foreground sm:text-sm">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
