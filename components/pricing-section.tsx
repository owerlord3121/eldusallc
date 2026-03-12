"use client"

import { useState, useMemo } from "react"
import { Truck, CheckCircle2, MessageCircle, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/lib/language-context"

const PRICE_TIERS = [
  { min: 1, max: 20, price: 150 },
  { min: 21, max: 40, price: 130 },
  { min: 41, max: 100, price: 110 },
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
    en: [
      "ELD device + setup",
      "24/7 logbook monitoring",
      "Driver support in 4 languages",
      "DOT Compliance",
      "IFTA reporting",
      "DOT audit preparation",
    ],
    ru: [
      "ELD устройство + настройка",
      "Мониторинг логбуков 24/7",
      "Поддержка водителей на 4 языках",
      "DOT Compliance",
      "IFTA отчётность",
      "Подготовка к аудитам DOT",
    ],
    kg: [
      "ELD түзмөк + орнотуу",
      "24/7 логбук мониторинги",
      "4 тилде айдоочуларды колдоо",
      "DOT Compliance",
      "IFTA отчёттуулук",
      "DOT аудитке даярдык",
    ],
    uz: [
      "ELD qurilma + sozlash",
      "24/7 logbuk monitoringi",
      "4 tilda haydovchilarni qo'llab-quvvatlash",
      "DOT Compliance",
      "IFTA hisobotlar",
      "DOT auditga tayyorgarlik",
    ],
    tr: [
      "ELD cihaz + kurulum",
      "7/24 logbuk izleme",
      "4 dilde surucu destegi",
      "DOT Uyumlulugu",
      "IFTA raporlama",
      "DOT denetim hazirligi",
    ],
  }

  const includedText: Record<string, string> = {
    en: "What's included",
    ru: "Что входит в стоимость",
    kg: "Нарк эмнени камтыйт",
    uz: "Narxga nima kiradi",
    tr: "Fiyata neler dahil",
  }

  const orderText: Record<string, string> = {
    en: "Order Service",
    ru: "Оставить заявку",
    kg: "Арыз калтыруу",
    uz: "Ariza qoldirish",
    tr: "Siparis Ver",
  }

  const discussText: Record<string, string> = {
    en: "Discuss Terms",
    ru: "Обсудить условия",
    kg: "Шарттарды талкуулоо",
    uz: "Shartlarni muhokama qilish",
    tr: "Sartlari Gorusun",
  }

  return (
    <section id="pricing" className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
            {t("pricing.title")}
          </p>
          <h2 className="mb-2 text-balance text-xl font-bold text-foreground sm:mb-3 sm:text-2xl md:text-3xl">
            ELD + Full Service
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-xs text-muted-foreground leading-relaxed sm:text-sm">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card p-4 shadow-lg sm:p-6 md:p-8">
          <div className="mb-6 flex items-center justify-center gap-2 sm:mb-8">
            <Calculator className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm font-semibold text-foreground sm:text-base">{t("pricing.select")}</span>
          </div>

          <div className="mb-6 px-1 sm:mb-8 sm:px-2">
            <Slider
              value={truckCount}
              onValueChange={setTruckCount}
              min={1}
              max={300}
              step={1}
              className="w-full"
            />
            
            <div className="mt-2 flex justify-between text-[10px] text-muted-foreground sm:mt-3 sm:text-xs">
              <span>1</span>
              <span>20</span>
              <span>40</span>
              <span>100</span>
              <span>300+</span>
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border/30 bg-secondary/50 p-4 text-center sm:p-5">
              <div className="mb-1 text-xs text-muted-foreground sm:text-sm">{t("pricing.trucks")}:</div>
              <div className="flex items-center justify-center gap-2">
                <Truck className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                <span className="text-2xl font-bold text-primary sm:text-3xl">{currentTrucks}</span>
              </div>
              <div className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{getTierLabel(currentTrucks)}</div>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-center sm:p-5">
              <div className="mb-1 text-xs text-muted-foreground sm:text-sm">{t("pricing.price")}:</div>
              {isNegotiable ? (
                <>
                  <div className="text-xl font-bold text-primary sm:text-2xl">{t("pricing.individual")}</div>
                  <div className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{t("pricing.contact")}</div>
                </>
              ) : (
                <>
                  <div className="text-2xl font-bold text-primary sm:text-3xl">${pricePerTruck}</div>
                  <div className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{t("pricing.perTruck")}</div>
                </>
              )}
            </div>
          </div>

          {!isNegotiable && totalPrice && (
            <div className="mt-3 rounded-xl border border-border/30 bg-secondary/30 p-3 text-center sm:mt-4 sm:p-4">
              <span className="text-xs text-muted-foreground sm:text-sm">{t("pricing.total")}: </span>
              <span className="text-lg font-bold text-foreground sm:text-xl">${totalPrice.toLocaleString('en-US')}</span>
            </div>
          )}

          <div className="mt-5 sm:mt-6">
            <Button
              asChild
              size="lg"
              className="w-full gap-2 bg-primary text-sm text-primary-foreground hover:bg-primary/90 sm:text-base"
            >
              <a href="https://t.me/nextlogfullservice" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                {isNegotiable ? (discussText[language] || discussText.en) : (orderText[language] || orderText.en)}
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border/50 bg-card p-4 sm:mt-8 sm:p-6">
          <h3 className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:mb-4 sm:text-sm">
            {includedText[language] || includedText.en}
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            {(features[language] || features.en).map((feature) => (
              <div key={feature} className="flex items-center gap-1.5 text-xs text-muted-foreground sm:gap-2 sm:text-sm">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-center text-[10px] text-muted-foreground sm:mt-6 sm:grid-cols-4 sm:text-xs">
          <div className="rounded-lg bg-secondary/50 p-2">
            <div className="font-medium text-foreground">{(tierLabels[language] || tierLabels.en)[0]}</div>
            <div className="text-primary">$150{t("pricing.perTruck")}</div>
          </div>
          <div className="rounded-lg bg-secondary/50 p-2">
            <div className="font-medium text-foreground">{(tierLabels[language] || tierLabels.en)[1]}</div>
            <div className="text-primary">$130{t("pricing.perTruck")}</div>
          </div>
          <div className="rounded-lg bg-secondary/50 p-2">
            <div className="font-medium text-foreground">{(tierLabels[language] || tierLabels.en)[2]}</div>
            <div className="text-primary">$110{t("pricing.perTruck")}</div>
          </div>
          <div className="rounded-lg bg-secondary/50 p-2">
            <div className="font-medium text-foreground">{(tierLabels[language] || tierLabels.en)[3]}</div>
            <div className="text-primary">{t("pricing.negotiable")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
