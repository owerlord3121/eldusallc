"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Calculator, Clock, AlertTriangle, CheckCircle2, Info, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HOSCalculatorPage() {
  const [drivingHours, setDrivingHours] = useState(0)
  const [windowHours, setWindowHours] = useState(0)
  const [cycleHours, setCycleHours] = useState(0)
  const [cycleType, setCycleType] = useState<"60" | "70">("70")

  const result = useMemo(() => {
    const drive = Math.max(0, 11 - drivingHours)
    const window = Math.max(0, 14 - windowHours)
    const cycleLimit = cycleType === "70" ? 70 : 60
    const cycle = Math.max(0, cycleLimit - cycleHours)
    return { drive, window, cycle, effective: Math.min(drive, window, cycle) }
  }, [drivingHours, windowHours, cycleHours, cycleType])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2"><Calculator className="h-5 w-5 text-primary" /><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Free driver tool</span></div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">HOS Calculator for Property-Carrying Drivers</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Enter the values shown by your ELD to estimate the most restrictive remaining limit across the 11-hour driving rule, 14-hour driving window, and 60/70-hour cycle.</p>
          </header>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <section className="rounded-2xl border border-border/50 bg-card p-5 sm:p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground"><Calculator className="h-5 w-5 text-primary" />Current HOS values</h2>
              <div className="mt-5 space-y-4">
                <div><Label htmlFor="driving">Driving used since last qualifying 10-hour break</Label><Input id="driving" type="number" min="0" max="11" step="0.25" value={drivingHours} onChange={(e) => setDrivingHours(Math.min(11, Math.max(0, Number(e.target.value) || 0)))} className="mt-1.5" /></div>
                <div><Label htmlFor="window">Hours elapsed in current 14-hour driving window</Label><Input id="window" type="number" min="0" max="14" step="0.25" value={windowHours} onChange={(e) => setWindowHours(Math.min(14, Math.max(0, Number(e.target.value) || 0)))} className="mt-1.5" /></div>
                <div><Label htmlFor="cycle">Cycle hours currently used</Label><Input id="cycle" type="number" min="0" max={cycleType === "70" ? 70 : 60} step="0.25" value={cycleHours} onChange={(e) => setCycleHours(Math.min(cycleType === "70" ? 70 : 60, Math.max(0, Number(e.target.value) || 0)))} className="mt-1.5" /></div>
                <div><Label>Cycle</Label><div className="mt-2 flex gap-2"><Button type="button" size="sm" variant={cycleType === "60" ? "default" : "outline"} onClick={() => { setCycleType("60"); setCycleHours((v) => Math.min(v, 60)) }}>60 hours / 7 days</Button><Button type="button" size="sm" variant={cycleType === "70" ? "default" : "outline"} onClick={() => setCycleType("70")}>70 hours / 8 days</Button></div></div>
              </div>
              <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4"><div className="flex gap-3"><Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" /><p className="text-xs leading-relaxed text-muted-foreground">Planning aid only. Your ELD, duty-status history, recaps, exemptions, adverse-driving conditions, qualifying sleeper-berth splits, and other applicable rules can change actual availability. Do not use this calculator to override your ELD.</p></div></div>
            </section>

            <section className="space-y-3">
              <ResultCard icon={Clock} title="11-hour driving limit" value={result.drive} warningAt={2} />
              <ResultCard icon={AlertTriangle} title="14-hour driving window" value={result.window} warningAt={2} />
              <ResultCard icon={Truck} title={`${cycleType}-hour cycle`} value={result.cycle} warningAt={8} />
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Most restrictive estimate</p><p className={`mt-2 text-4xl font-bold ${result.effective <= 2 ? "text-red-500" : "text-foreground"}`}>{result.effective.toFixed(2)} h</p><p className="mt-2 text-xs text-muted-foreground">Before considering exceptions or special provisions.</p></div>
            </section>
          </div>

          <section className="mt-12 grid gap-4 md:grid-cols-2">
            <InfoCard title="11-hour driving limit" text="A property-carrying driver may drive up to 11 hours after 10 consecutive hours off duty, subject to the other HOS limits." />
            <InfoCard title="14-hour driving window" text="Driving generally must be completed within the 14-hour window after coming on duty following 10 consecutive hours off duty. Qualifying sleeper-berth splits and the adverse-driving-conditions provision can affect how the rule applies." />
            <InfoCard title="30-minute break" text="A driver subject to the rule must take a 30-minute non-driving break after 8 cumulative hours of driving without at least a 30-minute interruption, unless an exception applies." />
            <InfoCard title="60/70-hour cycle" text="A driver may not drive after 60 hours on duty in 7 consecutive days or 70 hours in 8 consecutive days, depending on the carrier's operating schedule. A qualifying 34-hour restart can begin a new cycle." />
          </section>

          <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Important HOS exceptions and provisions</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p><strong className="text-foreground">Sleeper berth:</strong> qualifying split sleeper periods can be paired when the regulatory requirements are met; neither qualifying period counts against the 14-hour driving window.</p>
              <p><strong className="text-foreground">Adverse driving conditions:</strong> when the regulatory definition is met, the driving limit and driving window can be extended by up to 2 hours.</p>
              <p><strong className="text-foreground">Short-haul:</strong> qualifying short-haul operations have separate time-record requirements and may not be required to use an ELD.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Driver resources</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm"><Link href="/eld-exemptions" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">ELD Exemption Guide</Link><Link href="/dot-inspection-checklist" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">DOT Inspection Checklist</Link><Link href="/eld-malfunction" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">ELD Malfunction Guide</Link><Link href="/tools" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">All Tools</Link></div>
          </section>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><CheckCircle2 className="mx-auto h-7 w-7 text-primary" /><h2 className="mt-3 text-xl font-bold text-foreground">Need ELD or HOS support?</h2><p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">NextLog provides 24/7 ELD monitoring and driver support for trucking companies and owner-operators.</p><Button asChild className="mt-5"><Link href="/#contact">Contact NextLog</Link></Button></section>
        </div>
      </section>
      <Footer />
    </main>
  )
}

function ResultCard({ icon: Icon, title, value, warningAt }: { icon: typeof Clock; title: string; value: number; warningAt: number }) {
  const warning = value <= warningAt
  return <Card className={warning ? "border-red-500/40" : "border-border/50"}><CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-sm"><Icon className={`h-4 w-4 ${warning ? "text-red-500" : "text-primary"}`} />{title}</CardTitle></CardHeader><CardContent><p className={`text-2xl font-bold ${warning ? "text-red-500" : "text-foreground"}`}>{value.toFixed(2)} hours left</p></CardContent></Card>
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return <div className="rounded-xl border border-border/50 bg-card p-5"><h2 className="font-semibold text-foreground">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>
}
