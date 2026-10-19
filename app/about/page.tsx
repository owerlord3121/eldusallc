import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Globe2, ShieldCheck, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "About NextLog FullService | ELD & Trucking Compliance Support",
  description:
    "Learn about NextLog FullService, a U.S.-focused ELD and trucking compliance support company providing 24/7 monitoring, driver assistance, DOT audit preparation, IFTA support, and multilingual service.",
  alternates: { canonical: "https://eldusallc.com/about" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/about",
    title: "About NextLog FullService",
    description:
      "24/7 ELD monitoring and trucking compliance support for carriers and owner-operators across the U.S. and Canada.",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">About NextLog</p>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              ELD support built around real trucking operations
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              NextLog FullService helps trucking companies and owner-operators manage ELD workflows, driver support, logbook issues, DOT preparation, IFTA reporting, and day-to-day compliance tasks without losing focus on freight operations.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Clock, title: "24/7 support", text: "Operational assistance for drivers and fleet teams around the clock." },
              { icon: ShieldCheck, title: "Compliance focused", text: "Support centered on HOS, ELD records, inspections, audits, and documentation readiness." },
              { icon: Globe2, title: "Multilingual team", text: "Support for fleets with drivers who prefer English, Russian, Turkish, Uzbek, or Kyrgyz." },
              { icon: Truck, title: "Fleet ready", text: "A service model designed for owner-operators as well as growing multi-truck fleets." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border/50 bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-semibold text-foreground">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">What we help with</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["ELD monitoring", "/eld-monitoring"],
                ["ELD support", "/eld-support"],
                ["Logbook assistance", "/logbook-correction"],
                ["DOT audit preparation", "/dot-audit-help"],
                ["ELD compliance", "/eld-compliance"],
                ["Trucking guides & tools", "/blog"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/40 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary">
                  {label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12 text-center">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Need help with your fleet?</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Tell us how many trucks you operate and what ELD or compliance problems you want to solve.
            </p>
            <Button className="mt-5" asChild>
              <Link href="/#contact">Contact NextLog <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
