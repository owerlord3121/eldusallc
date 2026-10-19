import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, FileSpreadsheet, Fuel, Map, ShieldCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "IFTA Reporting Service for Trucking Companies | NextLog FullService",
  description:
    "IFTA reporting support for trucking companies and owner-operators. Organize mileage and fuel data, review records, and prepare quarterly IFTA reporting with NextLog FullService.",
  alternates: { canonical: "https://eldusallc.com/ifta-reporting" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/ifta-reporting",
    title: "IFTA Reporting Service | NextLog FullService",
    description: "Quarterly IFTA reporting support for owner-operators and trucking fleets.",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IFTA Reporting Support",
  url: "https://eldusallc.com/ifta-reporting",
  provider: { "@id": "https://eldusallc.com/#organization" },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "IFTA reporting support for trucking companies",
}

export default function IFTAReportingPage() {
  const steps = [
    { icon: Map, title: "Mileage review", text: "Organize jurisdiction mileage from the records available for the reporting period." },
    { icon: Fuel, title: "Fuel data", text: "Collect and review fuel purchase information needed for the IFTA calculation workflow." },
    { icon: Calculator, title: "Quarter calculation", text: "Prepare the mileage-and-fuel inputs used for quarterly IFTA reporting." },
    { icon: FileSpreadsheet, title: "Reporting package", text: "Keep a clearer reporting package and supporting records for your files." },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Quarterly fuel-tax workflow</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">IFTA Reporting Support for Trucking Companies</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Turn scattered mileage and fuel records into a cleaner quarterly IFTA reporting workflow. NextLog helps owner-operators and fleets organize the data and reporting process.</p>
            <Button asChild size="lg" className="mt-6"><Link href="/#contact">Ask About IFTA Support <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </header>

          <section className="mt-12 grid gap-4 sm:grid-cols-2">
            {steps.map((item) => <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-5"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div><h2 className="mt-4 font-semibold text-foreground">{item.title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}
          </section>

          <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6 sm:p-8"><h2 className="text-xl font-bold text-foreground sm:text-2xl">What to keep organized</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{["Trip and jurisdiction mileage records","Fuel receipts and purchase records","Vehicle and unit information","Quarterly reporting period records","Prior IFTA filings when relevant","Supporting records required by your jurisdiction"].map((item) => <div key={item} className="flex gap-2 rounded-lg border border-border/40 bg-secondary/40 px-4 py-3 text-sm text-muted-foreground"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>)}</div></section>

          <section className="mt-12 grid gap-5 lg:grid-cols-2"><div className="rounded-2xl border border-border/50 bg-card p-6"><h2 className="text-lg font-semibold text-foreground">For owner-operators</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Spend less time sorting mileage and fuel records at the end of the quarter. Keep your IFTA workflow connected to the same operational support team handling your ELD needs.</p><Link href="/eld-for-owner-operators" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">Owner-operator ELD support <ArrowRight className="h-4 w-4" /></Link></div><div className="rounded-2xl border border-border/50 bg-card p-6"><h2 className="text-lg font-semibold text-foreground">For fleets</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Create a repeatable process across multiple units and reporting periods instead of rebuilding the quarter from scratch every time.</p><Link href="/eld-for-fleets" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">Fleet ELD support <ArrowRight className="h-4 w-4" /></Link></div></section>

          <div className="mt-12 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm leading-relaxed text-muted-foreground">IFTA requirements, filing methods, deadlines, and record-retention rules can vary by jurisdiction and situation. NextLog provides operational reporting support; carriers remain responsible for their filings and tax obligations.</div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
