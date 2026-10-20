"use client"

import Link from "next/link"
import { ArrowRight, Check, Clock3, Languages, Radio, ShieldCheck, Truck, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { language } = useLanguage()

  const copy: Record<string, { badge: string; title: string; accent: string; text: string; primary: string; secondary: string; trust: string[] }> = {
    en: { badge: "24/7 ELD OPERATIONS", title: "Keep every driver moving.", accent: "Stay ready for DOT.", text: "Live ELD monitoring, driver support, logbook assistance and compliance workflows for owner-operators and fleets.", primary: "Talk to our team", secondary: "See services", trust: ["Transparent pricing", "5-language support", "U.S. + Canada coverage"] },
    ru: { badge: "ELD КОНТРОЛЬ 24/7", title: "Водители едут.", accent: "Вы готовы к DOT.", text: "Постоянный ELD-мониторинг, помощь водителям, работа с логбуками и compliance для owner-operators и флотов.", primary: "Связаться с нами", secondary: "Смотреть услуги", trust: ["Прозрачные цены", "Поддержка на 5 языках", "США + Канада"] },
    kg: { badge: "24/7 ELD КӨЗӨМӨЛ", title: "Айдоочулар жолдо.", accent: "Сиз DOTко даярсыз.", text: "Owner-operator жана флоттор үчүн ELD мониторинг, айдоочуларды колдоо, логбук жана compliance жардам.", primary: "Биз менен байланышуу", secondary: "Кызматтарды көрүү", trust: ["Ачык баалар", "5 тилде колдоо", "АКШ + Канада"] },
    uz: { badge: "24/7 ELD NAZORATI", title: "Haydovchilar yo'lda.", accent: "Siz DOTga tayyorsiz.", text: "Owner-operator va flotlar uchun ELD monitoringi, haydovchi yordami, logbook va compliance xizmatlari.", primary: "Biz bilan bog'lanish", secondary: "Xizmatlarni ko'rish", trust: ["Shaffof narxlar", "5 tilda yordam", "AQSh + Kanada"] },
    tr: { badge: "7/24 ELD KONTROLÜ", title: "Sürücüler yolda.", accent: "Siz DOT'a hazırsınız.", text: "Owner-operator ve filolar için canlı ELD izleme, sürücü desteği, logbook ve compliance operasyonları.", primary: "Ekibimizle konuşun", secondary: "Hizmetleri görün", trust: ["Şeffaf fiyatlandırma", "5 dilde destek", "ABD + Kanada"] },
  }

  const c = copy[language] || copy.en
  const drivers = [
    { truck: "T-218", name: "Alex M.", status: "Driving", time: "06:42" },
    { truck: "T-104", name: "Bek A.", status: "On Duty", time: "02:18" },
    { truck: "T-331", name: "Daniel K.", status: "Break", time: "00:24" },
  ]

  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[760px] lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-28 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute right-[4%] top-20 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.03fr_.97fr] lg:gap-14 lg:px-8">
        <div className="fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-accent">
            <span className="live-dot h-2 w-2 rounded-full bg-emerald-400" />
            {c.badge}
          </div>

          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
            {c.title} <span className="text-accent">{c.accent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{c.text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-12 rounded-xl bg-primary px-6 text-white shadow-xl shadow-primary/20 hover:bg-primary/90" asChild>
              <Link href="/#contact">{c.primary}<ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-xl border-border/80 bg-card/40 px-6 hover:bg-secondary/80" asChild>
              <Link href="/#services">{c.secondary}</Link>
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {c.trust.map((item) => (
              <span key={item} className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10"><Check className="h-3 w-3 text-accent" /></span>{item}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="absolute -inset-8 rounded-[40px] bg-primary/[0.06] blur-3xl" />
          <div className="surface-glass blue-glow float-soft relative overflow-hidden rounded-[26px] p-3 sm:p-4">
            <div className="rounded-[20px] border border-white/[0.06] bg-[#07111f]/95 p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Illustrative fleet view</p>
                  <h2 className="mt-1 text-base font-semibold text-foreground">Live operations</h2>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-300"><Radio className="h-3.5 w-3.5" />Online</div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"><Wifi className="h-4 w-4 text-accent" /><div className="mt-3 text-base font-semibold">Online</div><div className="mt-0.5 text-[11px] text-muted-foreground">ELD sync</div></div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"><ShieldCheck className="h-4 w-4 text-emerald-300" /><div className="mt-3 text-base font-semibold">Monitored</div><div className="mt-0.5 text-[11px] text-muted-foreground">Log review</div></div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"><Clock3 className="h-4 w-4 text-accent" /><div className="mt-3 text-base font-semibold">24/7</div><div className="mt-0.5 text-[11px] text-muted-foreground">Support</div></div>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3"><span className="text-xs font-medium text-foreground">Drivers</span><span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Wifi className="h-3 w-3 text-emerald-300" />Example data</span></div>
                {drivers.map((driver) => (
                  <div key={driver.truck} className="grid grid-cols-[56px_1fr_auto] items-center gap-3 border-b border-white/[0.05] px-4 py-3 last:border-0">
                    <div className="rounded-lg bg-primary/10 px-2 py-1.5 text-center text-[11px] font-semibold text-accent">{driver.truck}</div>
                    <div><div className="text-xs font-medium text-foreground">{driver.name}</div><div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{driver.status}</div></div>
                    <div className="text-right"><div className="text-xs font-medium text-foreground">{driver.time}</div><div className="mt-0.5 text-[10px] text-muted-foreground">remaining</div></div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-primary/15 bg-primary/[0.06] px-4 py-3">
                <div><div className="text-xs font-medium text-foreground">Compliance workflow</div><div className="mt-0.5 text-[11px] text-muted-foreground">Monitoring + driver follow-up</div></div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/10"><Check className="h-4 w-4 text-emerald-300" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/50 sm:grid-cols-4">
          {[
            ["24/7", "ELD monitoring"],
            ["5", "Support languages"],
            ["US+CA", "Service coverage"],
            ["$125", "Starting / truck"],
          ].map(([value,label]) => (
            <div key={label} className="bg-background/80 px-5 py-5 text-center backdrop-blur-sm"><div className="text-2xl font-semibold tracking-tight text-foreground">{value}</div><div className="mt-1 text-xs text-muted-foreground">{label}</div></div>
          ))}
        </div>
      </div>
    </section>
  )
}
