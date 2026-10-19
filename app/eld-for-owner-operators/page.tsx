import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, Clock, Headphones, ShieldCheck, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "ELD for Owner Operators | 24/7 ELD & Logbook Support",
  description:
    "ELD support for owner-operators: 24/7 monitoring, driver assistance, logbook support, HOS guidance, DOT preparation, and practical trucking tools from NextLog FullService.",
  alternates: { canonical: "https://eldusallc.com/eld-for-owner-operators" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-for-owner-operators",
    title: "ELD for Owner Operators | NextLog FullService",
    description: "Practical ELD and compliance support built for independent truckers and small fleets.",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ELD Support for Owner Operators",
  url: "https://eldusallc.com/eld-for-owner-operators",
  provider: { "@id": "https://eldusallc.com/#organization" },
  areaServed: { "@type": "Country", name: "United States" },
  audience: { "@type": "Audience", audienceType: "Owner-operators and small trucking fleets" },
}

export default function OwnerOperatorELDPage() {
  const benefits = [
    { icon: Clock, title: "24/7 ELD support", text: "Get help when a log, device, sync, or driver workflow needs attention." },
    { icon: ShieldCheck, title: "Compliance focused", text: "Support around HOS, inspection readiness, documentation, and ELD procedures." },
    { icon: Headphones, title: "Human assistance", text: "Work with a support team instead of trying to solve every ELD issue alone on the road." },
    { icon: Calculator, title: "Free trucking tools", text: "Use HOS, cost-per-mile, trip-profit, and ELD exemption resources from one place." },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">For independent truckers</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD Support for Owner-Operators</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Run the truck without spending your whole day fighting logbook, ELD, and compliance issues. NextLog helps owner-operators manage the operational side of ELD with 24/7 support.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg"><Link href="/#contact">Get ELD Support <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/tools">Free Owner-Operator Tools</Link></Button></div>
          </header>

          <section className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-5"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div><h2 className="mt-4 font-semibold text-foreground">{item.title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}
          </section>

          <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3"><Truck className="h-6 w-6 text-primary" /><h2 className="text-xl font-bold text-foreground sm:text-2xl">What an owner-operator can use NextLog for</h2></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["ELD monitoring and driver support","Logbook issue assistance","HOS and compliance workflow support","DOT inspection and audit preparation","IFTA reporting support","Driver training and ELD troubleshooting"].map((item) => <div key={item} className="rounded-lg border border-border/40 bg-secondary/40 px-4 py-3 text-sm text-foreground">{item}</div>)}
            </div>
          </section>

          <section className="mt-12 grid gap-4 md:grid-cols-3">
            <Link href="/cost-per-mile-calculator" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">Cost Per Mile Calculator</h3><p className="mt-2 text-sm text-muted-foreground">Estimate your real truck operating CPM.</p></Link>
            <Link href="/trip-profit-calculator" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">Trip Profit Calculator</h3><p className="mt-2 text-sm text-muted-foreground">Check load profitability including deadhead and fees.</p></Link>
            <Link href="/hos-calculator" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">HOS Calculator</h3><p className="mt-2 text-sm text-muted-foreground">Estimate the most restrictive HOS limit from your current values.</p></Link>
          </section>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><h2 className="text-xl font-bold text-foreground">One truck or a growing small fleet?</h2><p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Tell us your current ELD setup and the problems you want to remove from your daily operation.</p><Button asChild className="mt-5"><Link href="/#contact">Talk to NextLog</Link></Button></section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
