"use client"

import {
  TrendingUp,
  AlertTriangle,
  FileCheck,
  ShieldCheck,
  DollarSign,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhyChooseSection() {
  const { language } = useLanguage()

  const title: Record<string, string> = {
    en: "DOT Audit Preparation",
    ru: "Подготовка к DOT аудиту",
    kg: "DOT аудитке даярдык",
    uz: "DOT auditga tayyorgarlik",
    tr: "DOT Denetim Hazirligi",
  }

  const subtitle: Record<string, string> = {
    en: "Results",
    ru: "Результат",
    kg: "Жыйынтык",
    uz: "Natija",
    tr: "Sonuc",
  }

  const results = [
    { 
      icon: TrendingUp, 
      text: {
        en: "More miles driven",
        ru: "Больше пройденных миль",
        kg: "Көбүрөөк жүрүлгөн миль",
        uz: "Ko'proq bosib o'tilgan mil",
        tr: "Daha fazla kat edilen mil",
      }
    },
    { 
      icon: AlertTriangle, 
      text: {
        en: "Fewer violations",
        ru: "Меньше нарушений",
        kg: "Азыраак бузуулар",
        uz: "Kamroq buzilishlar",
        tr: "Daha az ihlal",
      }
    },
    { 
      icon: FileCheck, 
      text: {
        en: "Clean logbooks",
        ru: "Чистые логбуки",
        kg: "Таза логбуктар",
        uz: "Toza logbuklar",
        tr: "Temiz logbuklar",
      }
    },
    { 
      icon: ShieldCheck, 
      text: {
        en: "Protection during DOT audits",
        ru: "Защиту во время DOT проверки",
        kg: "DOT текшерүүдө коргоо",
        uz: "DOT tekshiruvida himoya",
        tr: "DOT denetiminde koruma",
      }
    },
    { 
      icon: DollarSign, 
      text: {
        en: "Increased company profit",
        ru: "Рост прибыли компании",
        kg: "Компаниянын кирешесинин өсүшү",
        uz: "Kompaniya foydasi o'sishi",
        tr: "Sirket kari artisi",
      }
    },
  ]

  return (
    <section id="why" className="border-y border-border/40 bg-card py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
            {subtitle[language] || subtitle.en}
          </p>
          <h2 className="mb-2 text-balance text-xl font-bold text-foreground sm:mb-3 sm:text-2xl md:text-3xl">
            {title[language] || title.en}
          </h2>
        </div>

        <div className="mx-auto grid max-w-3xl gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.text.en}
              className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-secondary p-3 transition-all hover:border-primary/40 sm:gap-3 sm:p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-9 sm:w-9">
                <item.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground sm:text-sm">
                {item.text[language as keyof typeof item.text] || item.text.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
