"use client"

import { CheckCircle2, DollarSign, Gauge, Globe2, Languages } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhyChooseSection() {
  const { language } = useLanguage()

  const title: Record<string, string> = {
    en: "Compliance should feel controlled — not reactive",
    ru: "Compliance должен быть под контролем, а не в режиме пожара",
    kg: "Compliance шашылыш эмес, көзөмөлдөнгөн болушу керек",
    uz: "Compliance favqulodda emas, nazorat ostida bo'lishi kerak",
    tr: "Compliance sürekli kriz değil, kontrol altında olmalı",
  }

  const text: Record<string, string> = {
    en: "We build daily routines around monitoring, driver communication and documentation so problems are handled before they become expensive.",
    ru: "Мы выстраиваем ежедневный контроль логов, связь с водителями и работу с документами так, чтобы проблемы решались до штрафов и инспекций.",
    kg: "Логдорду, айдоочулар менен байланышты жана документтерди күн сайын көзөмөлдөп, көйгөйлөрдү алдын ала чечебиз.",
    uz: "Loglar, haydovchilar bilan aloqa va hujjatlarni kundalik nazorat qilib, muammolarni oldindan hal qilamiz.",
    tr: "Logları, sürücü iletişimini ve dokümantasyonu günlük olarak yöneterek sorunları büyümeden çözeriz.",
  }

  const outcomes: Record<string, string[]> = {
    en: ["Cleaner logbook workflows", "Faster driver follow-up", "Better inspection readiness"],
    ru: ["Чище работа с логбуками", "Быстрее помощь водителям", "Лучше готовность к инспекциям"],
    kg: ["Таза логбук процесси", "Айдоочуларга тез жардам", "Инспекцияга жакшы даярдык"],
    uz: ["Toza logbook jarayoni", "Haydovchiga tez yordam", "Inspeksiyaga yaxshi tayyorgarlik"],
    tr: ["Daha düzenli log süreçleri", "Daha hızlı sürücü desteği", "Daha iyi denetim hazırlığı"],
  }

  const metrics = [
    { icon: Gauge, value: "24/7", label: "Monitoring" },
    { icon: Languages, value: "5", label: "Support languages" },
    { icon: Globe2, value: "US+CA", label: "Coverage" },
    { icon: DollarSign, value: "$125", label: "Starting / truck" },
  ]

  return (
    <section id="why" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] border border-border/60 bg-card/75">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Operational discipline</p>
              <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">{title[language] || title.en}</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{text[language] || text.en}</p>
              <div className="mt-7 space-y-3">
                {(outcomes[language] || outcomes.en).map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /></span>{item}</div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border/50 lg:border-l lg:border-border/60">
              {metrics.map((item) => (
                <div key={item.label} className="flex min-h-[170px] flex-col justify-between bg-background/55 p-6 sm:min-h-[190px] sm:p-8">
                  <item.icon className="h-5 w-5 text-accent" />
                  <div><div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{item.value}</div><div className="mt-1 text-xs text-muted-foreground sm:text-sm">{item.label}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
