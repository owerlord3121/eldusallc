"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Clock, Globe, FileCheck } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t, language } = useLanguage()

  const painPoints: Record<string, string[]> = {
    en: ["Constant errors in your logbooks?", "Drivers don't know how to use ELD properly?", "Stressed about DOT audits?", "Current service responds too slowly?"],
    ru: ["Постоянные ошибки в логбуках?", "Водители не знают, как правильно использовать ELD?", "Стресс перед DOT аудитом?", "Текущий сервис отвечает слишком долго?"],
    kg: ["Логбуктарда дайыма каталар барбы?", "Айдоочулар ELD кантип колдонууну билишпейби?", "DOT аудитинен стресс барбы?", "Учурдагы сервис өтө жай жооп береби?"],
    uz: ["Logbuklarda doimiy xatolar bormi?", "Haydovchilar ELD dan qanday foydalanishni bilmaydilarmi?", "DOT auditidan oldin stress bormi?", "Hozirgi xizmat juda sekin javob beradimi?"],
    tr: ["Logbuklarda surekli hatalar mi var?", "Suruculer ELD'yi nasil kullanacaklarini bilmiyor mu?", "DOT denetiminden once stres mi?", "Mevcut hizmet cok yavas mi cevap veriyor?"],
  }

  const solution: Record<string, string> = {
    en: "We solve these problems professionally and systematically.",
    ru: "Мы решаем эти проблемы профессионально и системно.",
    kg: "Биз бул көйгөйлөрдү профессионалдуу жана системалуу чечебиз.",
    uz: "Biz bu muammolarni professional va tizimli hal qilamiz.",
    tr: "Bu sorunlari profesyonel ve sistematik olarak cozuyoruz.",
  }

  const inspectionsText: Record<string, string> = {
    en: "Inspections Passed",
    ru: "Пройденных инспекций",
    kg: "Өткөрүлгөн текшерүүлөр",
    uz: "O'tilgan tekshiruvlar",
    tr: "Gecilen denetimler",
  }

  const languageSupportText: Record<string, string> = {
    en: "Support in 5 Languages",
    ru: "Поддержка на 5 языках",
    kg: "5 тилде колдоо",
    uz: "5 tilda qo'llab-quvvatlash",
    tr: "5 Dilde Destek",
  }

  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl sm:h-[520px] sm:w-[760px]" />
        <div className="absolute top-20 left-[12%] h-[220px] w-[220px] rounded-full bg-accent/8 blur-3xl sm:h-[320px] sm:w-[320px]" />
        <div className="absolute top-28 right-[10%] h-[170px] w-[170px] rounded-full bg-red-500/5 blur-3xl sm:h-[260px] sm:w-[260px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 rounded-3xl border border-primary/15 bg-card/30 px-5 py-3 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:mb-6 sm:px-7 sm:py-4">
            <Image src="/images/usa-eld-logo.svg" alt="USA ELD" width={340} height={92} priority className="h-auto w-[240px] drop-shadow-xl sm:w-[320px]" />
          </div>

          <h1 className="mb-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="sr-only">USA ELD - ELD Service USA - </span>
            {t("hero.title")} <span className="text-primary">{t("hero.subtitle")}</span>
          </h1>

          <div className="mb-5 flex flex-col items-center gap-1.5 sm:mb-6 sm:gap-2">
            {(painPoints[language] || painPoints.en).map((point) => <p key={point} className="text-sm text-muted-foreground leading-relaxed sm:text-base">{point}</p>)}
          </div>

          <p className="mb-6 max-w-xl text-pretty text-base font-medium text-accent sm:mb-8 sm:text-lg">{solution[language] || solution.en}</p>

          <div className="mb-8 flex w-full max-w-sm flex-col items-center gap-3 sm:mb-10 sm:max-w-none sm:flex-row sm:justify-center">
            <Button size="lg" className="w-full gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] sm:w-auto" asChild>
              <a href="#contact">{t("hero.cta")}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </Button>
            <Button size="lg" variant="outline" className="w-full gap-2 border-primary/20 bg-secondary/60 text-foreground hover:bg-secondary hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] sm:w-auto" asChild>
              <a href="#services">{t("nav.services")}</a>
            </Button>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-2 gap-4 text-xs text-muted-foreground sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 sm:text-sm">
            <div className="flex items-center justify-center gap-2 rounded-xl bg-secondary/55 px-4 py-2.5 border border-primary/10 shadow-sm shadow-primary/5 transition-all duration-200 hover:bg-secondary hover:border-primary/30"><ShieldCheck className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" /><span className="text-center text-foreground/90">400+ {inspectionsText[language] || inspectionsText.en}</span></div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-secondary/55 px-4 py-2.5 border border-primary/10 shadow-sm shadow-primary/5 transition-all duration-200 hover:bg-secondary hover:border-primary/30"><FileCheck className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" /><span className="text-center text-foreground/90">30+ {t("why.audits")}</span></div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-secondary/55 px-4 py-2.5 border border-primary/10 shadow-sm shadow-primary/5 transition-all duration-200 hover:bg-secondary hover:border-primary/30"><Clock className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" /><span className="text-center text-foreground/90">{t("hero.stats.support")} 24/7</span></div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-secondary/55 px-4 py-2.5 border border-primary/10 shadow-sm shadow-primary/5 transition-all duration-200 hover:bg-secondary hover:border-primary/30"><Globe className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" /><span className="text-center text-foreground/90">{languageSupportText[language] || languageSupportText.en}</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
