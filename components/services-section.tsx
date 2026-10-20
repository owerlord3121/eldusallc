"use client"

import { Activity, ArrowRight, FileCheck2, Headphones, ShieldCheck, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { language } = useLanguage()

  const title: Record<string, string> = {
    en: "One operations layer for your ELD workflow",
    ru: "Один центр управления вашим ELD-процессом",
    kg: "ELD ишиңиз үчүн бирдиктүү башкаруу борбору",
    uz: "ELD ish jarayoni uchun yagona boshqaruv markazi",
    tr: "ELD operasyonunuz için tek kontrol merkezi",
  }

  const subtitle: Record<string, string> = {
    en: "Less chaos for drivers. More visibility for owners. Faster response when something goes wrong.",
    ru: "Меньше хаоса для водителей. Больше контроля для владельца. Быстрее реакция на проблемы.",
    kg: "Айдоочулар үчүн азыраак башаламандык. Ээси үчүн көбүрөөк көзөмөл. Көйгөйгө тез реакция.",
    uz: "Haydovchilar uchun kamroq tartibsizlik. Egasi uchun ko'proq nazorat. Muammolarga tezkor javob.",
    tr: "Sürücüler için daha az karmaşa. İşletme için daha fazla görünürlük. Sorunlara daha hızlı müdahale.",
  }

  const features = [
    {
      icon: Activity,
      title: { en: "24/7 log monitoring", ru: "Мониторинг логов 24/7", kg: "Логдорду 24/7 көзөмөлдөө", uz: "24/7 log monitoringi", tr: "7/24 log izleme" },
      text: { en: "We watch logs continuously and flag issues before they turn into violations.", ru: "Постоянно контролируем логи и замечаем проблемы до того, как они превращаются в нарушения.", kg: "Логдорду үзгүлтүксүз текшерип, көйгөйлөрдү бузууга чейин табабыз.", uz: "Loglarni doimiy kuzatib, muammolarni buzilishlarga aylanishidan oldin aniqlaymiz.", tr: "Logları sürekli izler, sorunları ihlale dönüşmeden önce fark ederiz." },
      bullets: ["HOS review", "Sync checks", "Driver alerts"],
    },
    {
      icon: Headphones,
      title: { en: "Driver support", ru: "Поддержка водителей", kg: "Айдоочуларды колдоо", uz: "Haydovchi yordami", tr: "Sürücü desteği" },
      text: { en: "Fast help when a driver has ELD, sync, status, or inspection questions.", ru: "Быстрая помощь водителю по ELD, синхронизации, статусам и инспекциям.", kg: "ELD, синхрондоштуруу, статус жана инспекция суроолору боюнча тез жардам.", uz: "ELD, sinxronlash, status va inspeksiya savollarida tezkor yordam.", tr: "ELD, senkronizasyon, durum ve denetim sorularında hızlı destek." },
    },
    {
      icon: ShieldCheck,
      title: { en: "DOT readiness", ru: "Готовность к DOT", kg: "DOTко даярдык", uz: "DOTga tayyorgarlik", tr: "DOT hazırlığı" },
      text: { en: "Inspection and audit preparation built into the daily workflow.", ru: "Подготовка к инспекциям и аудитам встроена в ежедневную работу.", kg: "Инспекция жана аудитке даярдык күнүмдүк ишке киргизилген.", uz: "Inspeksiya va audit tayyorgarligi kundalik ish jarayoniga kiritilgan.", tr: "Denetim ve audit hazırlığı günlük iş akışına dahil edilir." },
    },
    {
      icon: FileCheck2,
      title: { en: "IFTA & documentation", ru: "IFTA и документы", kg: "IFTA жана документтер", uz: "IFTA va hujjatlar", tr: "IFTA ve dokümantasyon" },
      text: { en: "Practical support with IFTA, records, and compliance documentation.", ru: "Практическая помощь с IFTA, отчётами и compliance-документацией.", kg: "IFTA, отчеттор жана compliance документтери боюнча жардам.", uz: "IFTA, hisobotlar va compliance hujjatlari bo'yicha yordam.", tr: "IFTA, kayıtlar ve compliance dokümantasyonu için destek." },
    },
  ]

  const langKey = language as "en" | "ru" | "kg" | "uz" | "tr"

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent"><Sparkles className="h-3.5 w-3.5" />ELD operations</div>
            <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">{title[language] || title.en}</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base lg:justify-self-end">{subtitle[language] || subtitle.en}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[28px] border border-primary/20 bg-primary/[0.06] p-6 sm:p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl transition-transform duration-500 group-hover:scale-110" />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10"><Activity className="h-5 w-5 text-accent" /></div>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground">{features[0].title[langKey] || features[0].title.en}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">{features[0].text[langKey] || features[0].text.en}</p>
              <div className="mt-8 grid grid-cols-3 gap-2">
                {features[0].bullets?.map((item) => <div key={item} className="rounded-xl border border-white/[0.06] bg-background/40 px-3 py-3 text-center text-xs font-medium text-foreground">{item}</div>)}
              </div>
              <a href="#pricing" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-white">See how it works <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.slice(1).map((feature, index) => (
              <div key={feature.title.en} className={`group rounded-[24px] border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-card ${index === 2 ? "sm:col-span-2" : ""}`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary"><feature.icon className="h-5 w-5 text-accent" /></div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title[langKey] || feature.title.en}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.text[langKey] || feature.text.en}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
