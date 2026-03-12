"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calculator, Clock, AlertTriangle, CheckCircle2, Info, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HOSCalculatorPage() {
  const [drivingHours, setDrivingHours] = useState<number>(0)
  const [onDutyHours, setOnDutyHours] = useState<number>(0)
  const [cycleHours, setCycleHours] = useState<number>(0)
  const [cycleType, setCycleType] = useState<"60" | "70">("70")

  const remaining11Hour = Math.max(0, 11 - drivingHours)
  const remaining14Hour = Math.max(0, 14 - onDutyHours)
  const remainingCycle = Math.max(0, (cycleType === "70" ? 70 : 60) - cycleHours)
  const effectiveRemaining = Math.min(remaining11Hour, remaining14Hour, remainingCycle)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="NextLog FullService"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-bold text-foreground sm:text-base">
              Next<span className="text-primary">Log</span>
            </span>
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Title */}
        <header className="mb-8 text-center sm:mb-10">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
              Free Tool
            </span>
          </div>
          <h1 className="mb-3 text-balance text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            HOS Calculator | FMCSA Hours of Service Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            Free Hours of Service calculator for truck drivers. Calculate your remaining driving hours, 
            on-duty time, and cycle hours to stay FMCSA compliant.
          </p>
        </header>

        {/* Calculator Tool */}
        <div className="mb-10 rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:mb-12 sm:p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground sm:mb-6 sm:text-xl">
            <Calculator className="h-5 w-5 text-primary" />
            HOS Hours Calculator
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="driving" className="text-sm text-foreground">
                  Hours Driven Today
                </Label>
                <Input
                  id="driving"
                  type="number"
                  min="0"
                  max="11"
                  step="0.5"
                  value={drivingHours}
                  onChange={(e) => setDrivingHours(Math.min(11, Math.max(0, parseFloat(e.target.value) || 0)))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="onduty" className="text-sm text-foreground">
                  Total On-Duty Hours Today
                </Label>
                <Input
                  id="onduty"
                  type="number"
                  min="0"
                  max="14"
                  step="0.5"
                  value={onDutyHours}
                  onChange={(e) => setOnDutyHours(Math.min(14, Math.max(0, parseFloat(e.target.value) || 0)))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="cycle" className="text-sm text-foreground">
                  Cycle Hours Used (7/8 days)
                </Label>
                <Input
                  id="cycle"
                  type="number"
                  min="0"
                  max="70"
                  step="0.5"
                  value={cycleHours}
                  onChange={(e) => setCycleHours(Math.min(70, Math.max(0, parseFloat(e.target.value) || 0)))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-sm text-foreground">Cycle Type</Label>
                <div className="mt-1 flex gap-2">
                  <Button
                    variant={cycleType === "60" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCycleType("60")}
                  >
                    60/7 Day
                  </Button>
                  <Button
                    variant={cycleType === "70" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCycleType("70")}
                  >
                    70/8 Day
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Card className={remaining11Hour <= 2 ? "border-red-500/50" : "border-green-500/50"}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    11-Hour Driving Limit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-2xl font-bold ${remaining11Hour <= 2 ? "text-red-500" : "text-green-500"}`}>
                    {remaining11Hour.toFixed(1)} hours left
                  </p>
                </CardContent>
              </Card>

              <Card className={remaining14Hour <= 2 ? "border-red-500/50" : "border-green-500/50"}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    14-Hour On-Duty Limit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-2xl font-bold ${remaining14Hour <= 2 ? "text-red-500" : "text-green-500"}`}>
                    {remaining14Hour.toFixed(1)} hours left
                  </p>
                </CardContent>
              </Card>

              <Card className={remainingCycle <= 10 ? "border-red-500/50" : "border-green-500/50"}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Truck className="h-4 w-4" />
                    {cycleType}/{ cycleType === "70" ? "8" : "7" } Day Cycle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-2xl font-bold ${remainingCycle <= 10 ? "text-red-500" : "text-green-500"}`}>
                    {remainingCycle.toFixed(1)} hours left
                  </p>
                </CardContent>
              </Card>

              <div className="rounded-lg bg-card p-3 text-center">
                <p className="text-xs text-muted-foreground">Effective Driving Time</p>
                <p className={`text-3xl font-bold ${effectiveRemaining <= 2 ? "text-red-500" : "text-primary"}`}>
                  {effectiveRemaining.toFixed(1)} hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="prose prose-sm max-w-none sm:prose-base">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl">
            <Clock className="h-5 w-5 text-primary" />
            Understanding the 11-Hour Driving Rule
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The FMCSA 11-hour driving rule is one of the most important Hours of Service regulations for commercial 
            motor vehicle drivers. Under this rule, you may drive a maximum of 11 hours after 10 consecutive hours 
            off duty. This limit applies to all CMV drivers who are required to maintain a Record of Duty Status (RODS).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The 11-hour rule is designed to prevent fatigued driving, which is a leading cause of truck accidents. 
            Once you have driven for 11 hours, you must take a 10-hour off-duty period before you can drive again. 
            This rule cannot be extended under any circumstances, and violations can result in significant fines 
            and CSA points.
          </p>

          <h2 className="mt-8 flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl">
            <AlertTriangle className="h-5 w-5 text-primary" />
            The 14-Hour On-Duty Rule Explained
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The 14-hour rule limits your total on-duty window to 14 consecutive hours after coming on duty following 
            10 consecutive hours off duty. This is often called the "14-hour window" or "driving window." Once this 
            window closes, you cannot drive again until you have another 10 consecutive hours off duty.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Important: The 14-hour clock cannot be stopped or paused. Even if you take a break, your 14-hour window 
            continues to run. This is why proper trip planning is essential. Many drivers mistakenly think that taking 
            breaks will extend their driving window, but this is not the case under FMCSA regulations.
          </p>

          <h2 className="mt-8 flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl">
            <Info className="h-5 w-5 text-primary" />
            60/7 and 70/8 Day Cycle Rules
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The cycle rules limit the total number of hours you can work over a 7 or 8 day period. If your carrier 
            operates every day of the week, you follow the 70-hour/8-day rule. If your carrier does not operate 
            every day, you follow the 60-hour/7-day rule.
          </p>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li><strong>60/7 Day Rule:</strong> You cannot drive after being on duty 60 hours in any 7 consecutive days</li>
            <li><strong>70/8 Day Rule:</strong> You cannot drive after being on duty 70 hours in any 8 consecutive days</li>
            <li><strong>34-Hour Restart:</strong> You can reset your cycle by taking 34 consecutive hours off duty</li>
          </ul>

          <h2 className="mt-8 flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            30-Minute Break Requirement
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Drivers using the short-haul exception who drive within a 150 air-mile radius are not required to take 
            the 30-minute break. However, all other CMV drivers must take a 30-minute break when they have driven 
            for a period of 8 cumulative hours without at least a 30-minute interruption.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The break can be satisfied by any non-driving period of 30 consecutive minutes, including on-duty 
            not driving, off-duty, sleeper berth, or any combination of these. This flexibility allows drivers 
            to use fueling stops, loading/unloading time, or rest breaks to satisfy the requirement.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mt-10 sm:mt-12">
          <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">
            HOS Calculator FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How do I calculate my remaining driving hours?",
                a: "Subtract your current driving hours from 11 (the maximum allowed). For example, if you've driven 6 hours, you have 5 hours remaining. Also check your 14-hour window and cycle hours."
              },
              {
                q: "What happens if I exceed the 11-hour driving limit?",
                a: "Exceeding the 11-hour limit is a serious HOS violation that can result in fines up to $16,000 per violation, CSA points, and being placed out of service until you complete a 10-hour break."
              },
              {
                q: "Can I pause my 14-hour clock by taking a break?",
                a: "No, the 14-hour clock cannot be paused or stopped. It runs continuously from the time you come on duty until 14 hours have passed, regardless of breaks taken."
              },
              {
                q: "What is the 34-hour restart rule?",
                a: "The 34-hour restart allows you to reset your 60/70-hour cycle by taking 34 consecutive hours off duty. After completing the restart, you begin a new 7 or 8 day cycle."
              },
              {
                q: "Do I need an ELD to track my HOS?",
                a: "Most commercial drivers are required to use an ELD to track their Hours of Service. Exceptions include drivers using the short-haul exception, drivers of vehicles manufactured before 2000, and driveaway-towaway operations."
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-lg border border-border/50 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-5 text-center sm:mt-12 sm:p-8">
          <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
            Need Help With HOS Compliance?
          </h2>
          <p className="mb-4 text-sm text-muted-foreground sm:text-base">
            Our team provides 24/7 ELD monitoring and logbook support to keep you compliant.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/#contact">
              Get ELD Support
            </Link>
          </Button>
        </section>

        {/* Related Links */}
        <section className="mt-8 sm:mt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Related Resources
          </h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/eld-violations" className="text-xs text-primary hover:underline sm:text-sm">ELD Violations List</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/eld-rules-2026" className="text-xs text-primary hover:underline sm:text-sm">ELD Rules 2026</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/eld-exemptions" className="text-xs text-primary hover:underline sm:text-sm">ELD Exemptions</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/logbook-correction" className="text-xs text-primary hover:underline sm:text-sm">Logbook Correction</Link>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-6">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            &copy; {new Date().getFullYear()} NextLog FullService - ELD Service USA
          </Link>
        </div>
      </footer>
    </main>
  )
}
