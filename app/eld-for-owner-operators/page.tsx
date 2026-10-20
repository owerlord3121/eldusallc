import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, CheckCircle2, Clock, Headphones, ShieldCheck, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/eld-for-owner-operators"

export const metadata: Metadata = {
  title: "ELD for Owner Operators | 24/7 ELD & Logbook Support",
  description:
    "USA ELD for owner-operators: ELD + Full Service from $125/month with 24/7 monitoring, driver support, logbook assistance, DOT preparation, IFTA support, and trucking tools.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "ELD for Owner Operators | USA ELD",
    description: "Practical ELD monitoring and compliance support for independent truckers and small fleets.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "ELD Support for Owner Operators",
  url: pageUrl,
  provider: { "@id": "https://eldusallc.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  audience: { "@type": "Audience", audienceType: "Owner-operators and small trucking fleets" },
  offers: { "@type": "Offer", priceCurrency: "USD", price: "125", url: "https://eldusallc.com/eld-pricing", description: "Starting price for the 1–20 truck ELD + Full Service tier." },
}

const breadcrumb = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "ELD for Owner Operators" }])

export default function OwnerOperatorELDPage() {
  const benefits = [
    { icon: Clock, title: "24/7 ELD support", text: "Get help when a log, device, sync, or driver workflow needs attention." },
    { icon: ShieldCheck, title: "Compliance focused", text: "Support around HOS, inspections, documentation, and ELD procedures." },
    { icon: Headphones, title: "Human assistance", text: "Work with a support team instead of solving every ELD issue alone on the road." },
    { icon: Calculator, title: "Free trucking tools", text: "Use HOS, cost-per-mile, trip-profit, and ELD exemption resources from one place." },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">For independent truckers</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD for Owner-Operators with 24/7 Support</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">USA ELD combines the ELD workflow with human monitoring and compliance support so an owner-operator can spend less time chasing logbook and device problems.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg"><Link href="/#contact">Get ELD Support <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/eld-pricing">See Pricing</Link></Button></div>
          </header>

          <section className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-5"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div><h2 className="mt-4 font-semibold text-foreground">{item.title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}
          </section>

          <section className="mt-12 grid gap-6 rounded-2xl border border-border/50 bg-card p-6 sm:p-8 lg:grid-cols-[1fr_.75fr] lg:items-center">
            <div><div className="flex items-center gap-3"><Truck className="h-6 w-6 text-primary" /><h2 className="text-xl font-bold text-foreground sm:text-2xl">What is included for an owner-operator?</h2></div><div className="mt-5 grid gap-3 sm:grid-cols-2">{["ELD device + setup assistance","24/7 ELD monitoring","Logbook assistance","HOS workflow support","DOT inspection and audit preparation","IFTA reporting support","Support in 5 languages","Driver troubleshooting"].map((item) => <div key={item} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>)}</div></div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center"><p className="text-xs font-semibold uppercase tracking-wider text-primary">1–20 truck tier</p><p className="mt-2 text-4xl font-bold text-foreground">$125</p><p className="mt-1 text-xs text-muted-foreground">per truck / month</p><Link href="/eld-pricing" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Full pricing <ArrowRight className="h-4 w-4" /></Link></div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">What should an owner-operator compare when choosing an ELD?</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{["Device reliability and supported data transfer","Real human support when the driver is on the road","Transparent monthly cost and contract terms","How logbook and unidentified-driving issues are handled","Inspection and malfunction procedures","Whether the service helps beyond basic log recording"].map((item) => <div key={item} className="rounded-xl border border-border/50 bg-card p-4 text-sm leading-relaxed text-muted-foreground">{item}</div>)}</div>
          </section>

          <section className="mt-12 grid gap-4 md:grid-cols-3">
            <Link href="/cost-per-mile-calculator" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">Cost Per Mile Calculator</h3><p className="mt-2 text-sm text-muted-foreground">Estimate your real truck operating CPM.</p></Link>
            <Link href="/trip-profit-calculator" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">Trip Profit Calculator</h3><p className="mt-2 text-sm text-muted-foreground">Check load profitability including deadhead and fees.</p></Link>
            <Link href="/hos-calculator" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">HOS Calculator</h3><p className="mt-2 text-sm text-muted-foreground">Estimate the most restrictive HOS limit from current values.</p></Link>
          </section>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><h2 className="text-xl font-bold text-foreground">One truck or a growing small fleet?</h2><p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Tell us your current setup and the ELD problems you want removed from your daily operation.</p><Button asChild className="mt-5"><Link href="/#contact">Talk to USA ELD</Link></Button></section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
