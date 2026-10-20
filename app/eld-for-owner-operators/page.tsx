import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, CheckCircle2, Clock, ExternalLink, Headphones, ShieldCheck, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/eld-for-owner-operators"

export const metadata: Metadata = {
  title: "ELD for Owner Operators 2026 | Pricing, Support & Buying Guide",
  description:
    "ELD for owner-operators from USA ELD: pricing from $125/month with 24/7 monitoring, logbook support, IFTA assistance, DOT preparation, and a practical 2026 buying guide.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "ELD for Owner Operators 2026 | USA ELD",
    description: "Compare the real cost, support, FMCSA status, IFTA, and workflow considerations owner-operators should review before choosing an ELD.",
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

const faq = [
  {
    q: "How much does ELD service cost for an owner-operator?",
    a: "USA ELD starts at $125 per truck per month in the 1–20 truck tier. This is positioned as ELD + Full Service rather than a bare ELD subscription, so carriers should compare the included support scope as well as the monthly price.",
  },
  {
    q: "What should an owner-operator compare before choosing an ELD?",
    a: "Compare the exact FMCSA-listed device, hardware or activation cost, monthly rate, contract terms, IFTA and DVIR capabilities, inspection workflow, malfunction procedures, data transfer methods, and the quality and availability of support.",
  },
  {
    q: "How do I verify that an ELD is registered with FMCSA?",
    a: "Check the exact device name, provider, model, and ELD identifier on the current FMCSA Registered ELDs list. Do not rely only on an old sales page, screenshot, or third-party list because device status can change.",
  },
  {
    q: "Is the cheapest ELD always the best choice for an owner-operator?",
    a: "Not necessarily. A lower monthly fee can be attractive, but the real cost also depends on hardware, activation, contract length, support, IFTA or reporting needs, and how much time the driver spends resolving logbook and device issues alone.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

const breadcrumb = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "ELD for Owner Operators" }])

export default function OwnerOperatorELDPage() {
  const benefits = [
    { icon: Clock, title: "24/7 ELD support", text: "Get help when a log, device, sync, or driver workflow needs attention." },
    { icon: ShieldCheck, title: "Compliance focused", text: "Support around HOS, inspections, documentation, and ELD procedures." },
    { icon: Headphones, title: "Human assistance", text: "Work with a support team instead of solving every ELD issue alone on the road." },
    { icon: Calculator, title: "Free trucking tools", text: "Use HOS, cost-per-mile, trip-profit, and ELD exemption resources from one place." },
  ]

  const buyingChecklist = [
    { title: "FMCSA registration status", text: "Verify the exact device on the current FMCSA Registered ELDs list before onboarding." },
    { title: "True monthly and annual cost", text: "Compare recurring fees together with hardware, activation, replacement, and other required costs." },
    { title: "Contract and cancellation terms", text: "Know the commitment length, renewal rules, and what happens if you need to switch systems." },
    { title: "IFTA and reporting workflow", text: "Decide whether you need mileage, fuel-tax, DVIR, document, or other back-office support in addition to HOS." },
    { title: "Roadside inspection workflow", text: "Make sure the driver understands display and data-transfer procedures before an inspection happens." },
    { title: "Human support availability", text: "A low monthly price matters less if you lose hours trying to resolve device, sync, or logbook issues alone." },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">2026 owner-operator ELD guide</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Buying checklist</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">How to choose the best ELD for an owner-operator</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">The best fit is not automatically the lowest advertised monthly fee. Compare the complete operating cost and the workflow you will actually use on the road.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{buyingChecklist.map((item) => <article key={item.title} className="rounded-xl border border-border/50 bg-card p-4"><h3 className="font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div>
            <a href="https://eld.fmcsa.dot.gov/List" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Check the official FMCSA Registered ELDs list <ExternalLink className="h-4 w-4" /></a>
          </section>

          <section className="mt-12 grid gap-4 md:grid-cols-3">
            <Link href="/eld-cost" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">ELD Cost Guide</h3><p className="mt-2 text-sm text-muted-foreground">Understand monthly ELD cost, service scope, and fleet pricing.</p></Link>
            <Link href="/cost-per-mile-calculator" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">Cost Per Mile Calculator</h3><p className="mt-2 text-sm text-muted-foreground">Estimate your real truck operating CPM.</p></Link>
            <Link href="/hos-calculator" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">HOS Calculator</h3><p className="mt-2 text-sm text-muted-foreground">Estimate the most restrictive HOS limit from current values.</p></Link>
          </section>

          <section className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Owner-operator FAQ</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">Questions drivers ask before choosing an ELD</h2>
            <div className="mt-5 space-y-3">{faq.map((item) => <article key={item.q} className="rounded-2xl border border-border/50 bg-card p-5"><h3 className="font-semibold text-foreground">{item.q}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p></article>)}</div>
          </section>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><h2 className="text-xl font-bold text-foreground">One truck or a growing small fleet?</h2><p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Tell us your current setup and the ELD problems you want removed from your daily operation.</p><Button asChild className="mt-5"><Link href="/#contact">Talk to USA ELD</Link></Button></section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
