"use client"

import { useMemo, useState } from "react"
import type { ChangeEvent } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calculator, DollarSign, Fuel, Truck, Wrench } from "lucide-react"

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 })

export default function CostPerMileCalculatorPage() {
  const [monthlyMiles, setMonthlyMiles] = useState(10000)
  const [fuelCost, setFuelCost] = useState(4500)
  const [truckPayment, setTruckPayment] = useState(2500)
  const [insurance, setInsurance] = useState(1800)
  const [maintenance, setMaintenance] = useState(1200)
  const [otherCosts, setOtherCosts] = useState(1000)

  const result = useMemo(() => {
    const total = fuelCost + truckPayment + insurance + maintenance + otherCosts
    const cpm = monthlyMiles > 0 ? total / monthlyMiles : 0
    return { total, cpm }
  }, [monthlyMiles, fuelCost, truckPayment, insurance, maintenance, otherCosts])

  const numberInput = (setter: (value: number) => void) => (event: ChangeEvent<HTMLInputElement>) => {
    setter(Math.max(0, Number(event.target.value) || 0))
  }

  const fields = [
    ["Monthly miles", monthlyMiles, setMonthlyMiles, "mi", Truck],
    ["Fuel", fuelCost, setFuelCost, "$", Fuel],
    ["Truck payment / lease", truckPayment, setTruckPayment, "$", DollarSign],
    ["Insurance", insurance, setInsurance, "$", DollarSign],
    ["Maintenance & tires", maintenance, setMaintenance, "$", Wrench],
    ["Other fixed / variable costs", otherCosts, setOtherCosts, "$", Calculator],
  ] as const

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Owner-operator tool</p>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">Truck Cost Per Mile Calculator</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Estimate your operating cost per mile from monthly miles and major truck expenses. Use it as a planning tool when setting rate targets or reviewing load profitability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-2xl border border-border/50 bg-card p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-foreground">Monthly operating inputs</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {fields.map(([label, value, setter, suffix, Icon]) => (
                  <label key={label} className="block">
                    <span className="mb-1.5 flex items-center gap-2 text-xs font-medium text-muted-foreground"><Icon className="h-4 w-4 text-primary" />{label}</span>
                    <div className="flex items-center rounded-lg border border-border/60 bg-background px-3">
                      {suffix === "$" && <span className="text-sm text-muted-foreground">$</span>}
                      <input
                        type="number"
                        min="0"
                        step="100"
                        value={value}
                        onChange={numberInput(setter)}
                        className="w-full bg-transparent px-2 py-3 text-sm text-foreground outline-none"
                      />
                      {suffix === "mi" && <span className="text-sm text-muted-foreground">mi</span>}
                    </div>
                  </label>
                ))}
              </div>
            </section>

            <aside className="rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Estimated monthly cost</p>
              <p className="mt-2 text-3xl font-bold text-foreground">{money.format(result.total)}</p>
              <div className="my-6 h-px bg-border/60" />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Cost per mile</p>
              <p className="mt-2 text-4xl font-bold text-foreground">{money.format(result.cpm)}<span className="text-base font-medium text-muted-foreground"> / mi</span></p>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                This is a simplified planning estimate. Add driver pay, taxes, permits, trailer costs, tolls, parking, deadhead impact, and other expenses that apply to your operation.
              </p>
            </aside>
          </div>

          <section className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border/50 bg-card p-4"><h2 className="font-semibold text-foreground">Know your floor</h2><p className="mt-1 text-sm text-muted-foreground">A load rate below your real cost per mile can lose money even when gross revenue looks strong.</p></div>
            <div className="rounded-xl border border-border/50 bg-card p-4"><h2 className="font-semibold text-foreground">Include deadhead</h2><p className="mt-1 text-sm text-muted-foreground">Use total operating miles, not only loaded miles, when estimating the real cost of a trip.</p></div>
            <div className="rounded-xl border border-border/50 bg-card p-4"><h2 className="font-semibold text-foreground">Review monthly</h2><p className="mt-1 text-sm text-muted-foreground">Fuel, maintenance, insurance, and finance costs move over time, so your CPM should be updated regularly.</p></div>
          </section>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/trip-profit-calculator" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">Trip Profit Calculator</Link>
            <Link href="/tools" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">All trucking tools</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
