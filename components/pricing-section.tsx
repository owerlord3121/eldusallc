"use client"

import { useState, useMemo } from "react"
import { Truck, CheckCircle2, MessageCircle, Calculator, ArrowRight, BadgeCheck, Headphones, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/lib/language-context"

const PRICE_TIERS = [
  { min: 1, max: 20, price: 125 },
  { min: 21, max: 40, price: 115 },
  { min: 41, max: 100, price: 100 },
  { min: 101, max: 300, price: null },
]

function getPriceForTrucks(trucks: number): number | null {
  const tier = PRICE_TIERS.find((t) => trucks >= t.min && trucks <= t.max)
  return tier?.price ?? null
}

export function PricingSection() {
  const [truckCount, setTruckCount] = useState([10])
  const { t, language } = useLanguage()
  const currentTrucks = truckCount[0]
  const pricePerTruck = useMemo(() => getPriceForTrucks(currentTrucks), [currentTrucks])
  const totalPrice = pricePerTruck ? pricePerTruck * currentTrucks : null
  const isNegotiable = currentTrucks > 100

  const tierLabels: Record<string, string[]> = {
    en: ["1-20 trucks", "21-40 trucks", "41-100 trucks", "101-300+ trucks"],
    ru: ["1-20 траков", "21-40 траков", "41-100 траков", "101-300+ траков"],
    kg: ["1-20 трак", "21-40 трак", "41-100 трак", "101-300+ трак"],
    uz: ["1-20 trak", "21-40 trak", "41-100 trak", "101-300+ trak"],
    tr: ["1-20 tir", "21-40 tir", "41-100 tir", "101-300+ tir"],
  }

  const getTierLabel = (trucks: number): string => {
    const labels = tierLabels[language] || tierLabels.en
    if (trucks <= 20) return labels[0]
    if (trucks <= 40) return labels[1]
    if (trucks <= 100) return labels[2]
    return labels[3]
  }

  const features: Record<string, string[]> = {
    en: ["ELD device + setup", "24/7 logbook monitoring", "Driver support in 5 languages", "DOT compliance support", "IFTA reporting", "DOT audit preparation"],
    ru: ["ELD устройство + настройка", "Мониторинг логбуков 24/7", "Поддержка водителей на 5 языках", "DOT compliance", "IFTA отчётность", "Подготовка к аудитам DOT"],
    kg: ["ELD түзмөк + орнотуу", "24/7 логбук мониторинги", "5 тилде айдоочуларды колдоо", "DOT compliance", "IFTA отчёттуулук", "DOT аудитке даярдык"],
    uz: ["ELD qurilma + sozlash", "24/7 logbuk monitoringi", "5 tilda haydovchilarni qo'llab-quvvatlash", "DOT compliance", "IFTA hisobotlar", "DOT auditga tayyorgarlik"],
    tr: ["ELD cihaz + kurulum", "7/24 logbuk izleme", "5 dilde surucu destegi", "DOT uyumlulugu", "IFTA raporlama", "DOT denetim hazirligi"],
  }

  const includedText: Record<string, string> = {
    en: "Included in every plan", ru: "Входит в каждый тариф", kg: "Ар бир тарифке кирет", uz: "Har bir tarifga kiradi", tr: "Her plana dahildir",
  }

  const orderText: Record<string, string> = {
    en: "Get started", ru: "Подключиться", kg: "Баштоо", uz: "Boshlash", tr: "Baslayin",
  }

  const discussText: Record<string, string> = {
    en: "Talk to our team", ru: "Обсудить условия", kg: "Шарттарды талкуулоо", uz: "Shartlarni muhokama qilish", tr: "Sartlari gorusun",
  }

  const startingText: Record<string, string> = {
    en: "Starting from", ru: "Стоимость от", kg: "Баасы", uz: "Narxi", tr: "Baslangic fiyati",
  }

  return (
    <section id="pricing" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent"><BadgeCheck className="h-3.5 w-3.5" />Simple pricing</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">ELD + Full Service</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{t("pricing.subtitle")}</p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-primary/15 bg-card/70 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10"><Calculator className="h-5 w-5 text-accent" /></div>
                <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Fleet calculator</p><h3 className="mt-0.5 text-lg font-semibold text-foreground">{t("pricing.select")}</h3></div>
              </div>

              <div className="mt-8">
                <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-xs text-muted-foreground">{t("pricing.trucks")}</p><div className="mt-1 flex items-center gap-2"><Truck className="h-5 w-5 text-primary" /><span className="text-4xl font-bold tracking-tight text-foreground">{currentTrucks}</span></div></div><div className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-accent">{getTierLabel(currentTrucks)}</div></div>
                <Slider value={truckCount} onValueChange={setTruckCount} min={1} max={300} step={1} className="w-full" />
                <div className="mt-3 flex justify-between text-[11px] text-muted-foreground"><span>1</span><span>20</span><span>40</span><span>100</span><span>300+</span></div>
              </div>

              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{includedText[language] || includedText.en}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(features[language] || features.en).map((feature) => <div key={feature} className="flex items-start gap-2.5 text-sm text-foreground/85"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{feature}</span></div>)}
                </div>
              </div>
            </div>

            <div className="relative border-t border-primary/10 bg-[linear-gradient(145deg,rgba(47,128,255,.14),rgba(7,17,31,.2)_45%,rgba(94,179,255,.05))] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="absolute right-5 top-5 rounded-full border border-primary/15 bg-background/40 px-3 py-1.5 text-[11px] font-medium text-accent backdrop-blur">No hidden fees</div>
              <div className="flex h-full flex-col justify-between">
                <div className="pt-10 lg:pt-6">
                  <p className="text-sm font-medium text-muted-foreground">{startingText[language] || startingText.en}</p>
                  {isNegotiable ? <><div className="mt-2 text-4xl font-bold tracking-tight text-foreground">{t("pricing.individual")}</div><p className="mt-2 text-sm text-muted-foreground">{t("pricing.contact")}</p></> : <><div className="mt-2 flex items-end gap-2"><span className="text-6xl font-bold tracking-[-0.05em] text-foreground">${pricePerTruck}</span><span className="pb-2 text-sm text-muted-foreground">{t("pricing.perTruck")}</span></div>{totalPrice && <div className="mt-5 rounded-2xl border border-primary/10 bg-background/30 p-4 backdrop-blur"><p className="text-xs text-muted-foreground">{t("pricing.total")}</p><p className="mt-1 text-2xl font-semibold text-foreground">${totalPrice.toLocaleString("en-US")}<span className="ml-1 text-sm font-normal text-muted-foreground">/ month</span></p></div>}</>}
                </div>

                <div className="mt-8">
                  <div className="mb-5 grid grid-cols-2 gap-3 text-xs text-muted-foreground"><div className="flex items-center gap-2"><Headphones className="h-4 w-4 text-accent" />24/7 support</div><div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" />Compliance help</div></div>
                  <Button asChild size="lg" className="group w-full rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90">
                    <a href="https://t.me/nextlogfullservice" target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" />{isNegotiable ? (discussText[language] || discussText.en) : (orderText[language] || orderText.en)}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 text-center text-[11px] text-muted-foreground sm:grid-cols-4">
          <div className="rounded-xl border border-border/50 bg-card/45 p-3"><div className="font-medium text-foreground">{(tierLabels[language] || tierLabels.en)[0]}</div><div className="mt-1 text-accent">$125{t("pricing.perTruck")}</div></div>
          <div className="rounded-xl border border-border/50 bg-card/45 p-3"><div className="font-medium text-foreground">{(tierLabels[language] || tierLabels.en)[1]}</div><div className="mt-1 text-accent">$115{t("pricing.perTruck")}</div></div>
          <div className="rounded-xl border border-border/50 bg-card/45 p-3"><div className="font-medium text-foreground">{(tierLabels[language] || tierLabels.en)[2]}</div><div className="mt-1 text-accent">$100{t("pricing.perTruck")}</div></div>
          <div className="rounded-xl border border-border/50 bg-card/45 p-3"><div className="font-medium text-foreground">{(tierLabels[language] || tierLabels.en)[3]}</div><div className="mt-1 text-accent">{t("pricing.negotiable")}</div></div>
        </div>
      </div>
    </section>
  )
}
