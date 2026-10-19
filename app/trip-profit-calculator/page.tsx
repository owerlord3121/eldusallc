"use client"

import { useMemo, useState } from "react"
import type { ChangeEvent } from "react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calculator, DollarSign, Fuel, MapPin, Route, WalletCards } from "lucide-react"

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 })

type Field = {
  label: string
  value: number
  setter: (value: number) => void
  suffix: "$" | "mi"
  icon: LucideIcon
}

export default function TripProfitCalculatorPage() {
  const [loadRevenue, setLoadRevenue] = useState(3000)
  const [loadedMiles, setLoadedMiles] = useState(1000)
  const [deadheadMiles, setDeadheadMiles] = useState(120)
  const [fuelCost, setFuelCost] = useState(650)
  const [tollsParking, setTollsParking] = useState(100)
  const [dispatchPercent, setDispatchPercent] = useState(5)
  const [factoringPercent, setFactoringPercent] = useState(2.5)
  const [otherCosts, setOtherCosts] = useState(150)

  const result = useMemo(() => {
    const totalMiles = loadedMiles + deadheadMiles
    const dispatch = loadRevenue * dispatchPercent / 100
    const factoring = loadRevenue * factoringPercent / 100
    const totalCosts = fuelCost + tollsParking + dispatch + factoring + otherCosts
    const profit = loadRevenue - totalCosts
    const revenuePerLoadedMile = loadedMiles > 0 ? loadRevenue / loadedMiles : 0
    const revenuePerAllMile = totalMiles > 0 ? loadRevenue / totalMiles : 0
    const profitPerAllMile = totalMiles > 0 ? profit / totalMiles : 0
    return { totalMiles, totalCosts, profit, revenuePerLoadedMile, revenuePerAllMile, profitPerAllMile }
  }, [loadRevenue, loadedMiles, deadheadMiles, fuelCost, tollsParking, dispatchPercent, factoringPercent, otherCosts])

  const numberInput = (setter: (value: number) => void) => (event: ChangeEvent<HTMLInputElement>) => {
    setter(Math.max(0, Number(event.target.value) || 0))
  }

  const fields: Field[] = [
    { label: "Load revenue", value: loadRevenue, setter: setLoadRevenue, suffix: "$", icon: DollarSign },
    { label: "Loaded miles", value: loadedMiles, setter: setLoadedMiles, suffix: "mi", icon: Route },
    { label: "Deadhead miles", value: deadheadMiles, setter: setDeadheadMiles, suffix: "mi", icon: MapPin },
    { label: "Fuel cost", value: fuelCost, setter: setFuelCost, suffix: "$", icon: Fuel },
    { label: "Tolls & parking", value: tollsParking, setter: setTollsParking, suffix: "$", icon: WalletCards },
    { label: "Other trip costs", value: otherCosts, setter: setOtherCosts, suffix: "$", icon: Calculator },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Owner-operator tool</p>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">Truck Trip Profit Calculator</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Estimate a load before you book it. Include deadhead, fuel, tolls, parking, dispatch, factoring, and other trip costs to see approximate profit and rate per mile.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-2xl border border-border/50 bg-card p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-foreground">Load inputs</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {fields.map((field) => {
                  const Icon = field.icon
                  return (
                    <label key={field.label} className="block">
                      <span className="mb-1.5 flex items-center gap-2 text-xs font-medium text-muted-foreground"><Icon className="h-4 w-4 text-primary" />{field.label}</span>
                      <div className="flex items-center rounded-lg border border-border/60 bg-background px-3">
                        {field.suffix === "$" && <span className="text-sm text-muted-foreground">$</span>}
                        <input type="number" min="0" value={field.value} onChange={numberInput(field.setter)} className="w-full bg-transparent px-2 py-3 text-sm text-foreground outline-none" />
                        {field.suffix === "mi" && <span className="text-sm text-muted-foreground">mi</span>}
                      </div>
                    </label>
                  )
                })}
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Dispatch fee</span>
                  <div className="flex items-center rounded-lg border border-border/60 bg-background px-3"><input type="number" min="0" max="100" step="0.5" value={dispatchPercent} onChange={numberInput(setDispatchPercent)} className="w-full bg-transparent px-2 py-3 text-sm text-foreground outline-none" /><span className="text-sm text-muted-foreground">%</span></div>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Factoring fee</span>
                  <div className="flex items-center rounded-lg border border-border/60 bg-background px-3"><input type="number" min="0" max="100" step="0.5" value={factoringPercent} onChange={numberInput(setFactoringPercent)} className="w-full bg-transparent px-2 py-3 text-sm text-foreground outline-none" /><span className="text-sm text-muted-foreground">%</span></div>
                </label>
              </div>
            </section>

            <aside className="rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Estimated trip profit</p>
              <p className={`mt-2 text-4xl font-bold ${result.profit >= 0 ? "text-foreground" : "text-red-500"}`}>{money.format(result.profit)}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border/50 bg-background/50 p-3"><p className="text-[11px] text-muted-foreground">All miles</p><p className="mt-1 text-lg font-semibold text-foreground">{result.totalMiles.toFixed(0)} mi</p></div>
                <div className="rounded-xl border border-border/50 bg-background/50 p-3"><p className="text-[11px] text-muted-foreground">Trip costs</p><p className="mt-1 text-lg font-semibold text-foreground">{money.format(result.totalCosts)}</p></div>
                <div className="rounded-xl border border-border/50 bg-background/50 p-3"><p className="text-[11px] text-muted-foreground">Gross / loaded mi</p><p className="mt-1 text-lg font-semibold text-foreground">{money.format(result.revenuePerLoadedMile)}</p></div>
                <div className="rounded-xl border border-border/50 bg-background/50 p-3"><p className="text-[11px] text-muted-foreground">Gross / all mi</p><p className="mt-1 text-lg font-semibold text-foreground">{money.format(result.revenuePerAllMile)}</p></div>
              </div>
              <div className="mt-3 rounded-xl border border-primary/20 bg-primary/10 p-4"><p className="text-xs text-muted-foreground">Profit per all mile</p><p className="mt-1 text-2xl font-bold text-foreground">{money.format(result.profitPerAllMile)} / mi</p></div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">This calculator is a planning estimate. It does not include every fixed cost, tax, payroll item, maintenance reserve, or opportunity cost. Compare the result with your own cost-per-mile figure.</p>
            </aside>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/cost-per-mile-calculator" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">Cost Per Mile Calculator</Link>
            <Link href="/tools" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">All trucking tools</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
