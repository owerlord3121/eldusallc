import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Minus, ShieldCheck, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { breadcrumbJsonLd } from "@/lib/site"

export const metadata: Metadata = {
  title: "ELD Pricing | ELD Service Cost for Owner-Operators & Fleets",
  description:
    "USA ELD pricing starts at $125 per truck per month for 1–20 trucks. Compare what is included in ELD + Full Service and see fleet volume pricing.",
  alternates: { canonical: "https://eldusallc.com/eld-pricing" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-pricing",
    title: "ELD Pricing | USA ELD",
    description:
      "Compare USA ELD plans for owner-operators and fleets. ELD + Full Service starts at $125 per truck per month.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Pricing | USA ELD",
    description: "ELD + Full Service plans starting at $125 per truck per month.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

const plans = [
  { trucks: "1–20 trucks", price: "$125", note: "per truck / month" },
  { trucks: "21–40 trucks", price: "$115", note: "per truck / month" },
  { trucks: "41–100 trucks", price: "$100", note: "per truck / month" },
  { trucks: "101+ trucks", price: "Custom", note: "fleet quote" },
]

const features = [
  "ELD device + setup assistance",
  "24/7 ELD and logbook monitoring",
  "Driver support in 5 languages",
  "HOS and compliance workflow support",
  "IFTA reporting support",
  "DOT audit and inspection preparation",
]

const comparison = [
  { label: "ELD device / connection", basic: true, full: true },
  { label: "Basic log recording", basic: true, full: true },
  { label: "24/7 human monitoring", basic: false, full: true },
  { label: "Driver follow-up and support", basic: false, full: true },
  { label: "Logbook review assistance", basic: false, full: true },
  { label: "DOT audit / inspection preparation", basic: false, full: true },
  { label: "IFTA reporting support", basic: false, full: true },
  { label: "Support in 5 languages", basic: false, full: true },
]

const faq = [
  {
    q: "How much does USA ELD cost?",
    a: "USA ELD starts at $125 per truck per month for 1–20 trucks. The rate is $115 for 21–40 trucks and $100 for 41–100 trucks. Fleets with more than 100 trucks receive custom pricing.",
  },
  {
    q: "Is this price only for an ELD device?",
    a: "No. USA ELD is positioned as ELD + Full Service. The plan combines the ELD workflow with 24/7 monitoring, driver support, logbook assistance, compliance workflow support, IFTA support, and audit or inspection preparation.",
  },
  {
    q: "Do larger fleets receive a lower per-truck rate?",
    a: "Yes. Published per-truck pricing decreases at the 21-truck and 41-truck tiers, and fleets above 100 trucks can request custom pricing.",
  },
  {
    q: "Can owner-operators use USA ELD?",
    a: "Yes. The first pricing tier covers fleets from 1 to 20 trucks, including owner-operators and small carriers.",
  },
]

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://eldusallc.com/eld-pricing#service",
  name: "USA ELD - ELD + Full Service",
  url: "https://eldusallc.com/eld-pricing",
  provider: { "@id": "https://eldusallc.com/#organization" },
  serviceType: "ELD monitoring and trucking compliance support",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  offers: [
    { "@type": "Offer", name: "1–20 truck plan", priceCurrency: "USD", price: "125", url: "https://eldusallc.com/eld-pricing" },
    { "@type": "Offer", name: "21–40 truck plan", priceCurrency: "USD", price: "115", url: "https://eldusallc.com/eld-pricing" },
    { "@type": "Offer", name: "41–100 truck plan", priceCurrency: "USD", price: "100", url: "https://eldusallc.com/eld-pricing" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "ELD Pricing" },
])

export default function ELDPricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 pb-14 sm:pt-28 lg:pt-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground/80">ELD Pricing</span>
            </nav>

            <header className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Transparent fleet pricing</p>
              <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD + Full Service Pricing</h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                USA ELD combines the ELD workflow with 24/7 monitoring and human support. Pricing decreases as the number of active trucks grows.
              </p>
            </header>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan, index) => (
                <div key={plan.trucks} className={`relative rounded-2xl border p-5 ${index === 0 ? "border-primary/40 bg-primary/8 shadow-lg shadow-primary/10" : "border-border/50 bg-card"}`}>
                  {index === 0 && <span className="absolute -top-2.5 right-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">Start here</span>}
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><Truck className="h-4 w-4 text-primary" />{plan.trucks}</div>
                  <div className="mt-5 text-3xl font-bold tracking-tight text-foreground">{plan.price}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{plan.note}</div>
                </div>
              ))}
            </div>

            <section className="mt-10 grid gap-6 rounded-3xl border border-border/50 bg-card p-6 sm:p-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What is included</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">More than basic ELD access</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  The published rate is for our service model around the ELD, not a bare software subscription. Your fleet gets operational support designed to reduce avoidable ELD and compliance problems.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{feature}</span></div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <ShieldCheck className="h-7 w-7 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Need pricing for your fleet?</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Tell us how many trucks you operate and what kind of ELD support your team needs.</p>
                <Button asChild className="mt-5 w-full"><Link href="/#contact">Get a fleet quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </section>

            <section className="mt-14">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Understand the difference</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">Basic ELD vs. USA ELD Full Service</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Low-cost ELD subscriptions can be suitable when a carrier already has its own safety and support team. USA ELD is designed for fleets that want the device workflow plus ongoing human monitoring and compliance support.</p>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border/50 bg-card">
                <div className="grid grid-cols-[1.4fr_.7fr_.7fr] border-b border-border/50 bg-secondary/40 px-4 py-3 text-xs font-semibold sm:px-6 sm:text-sm">
                  <span>Capability</span><span className="text-center">Basic ELD</span><span className="text-center text-primary">USA ELD</span>
                </div>
                {comparison.map((row) => (
                  <div key={row.label} className="grid grid-cols-[1.4fr_.7fr_.7fr] items-center border-b border-border/30 px-4 py-3 last:border-b-0 sm:px-6">
                    <span className="text-xs text-foreground sm:text-sm">{row.label}</span>
                    <span className="flex justify-center">{row.basic ? <CheckCircle2 className="h-4 w-4 text-muted-foreground" /> : <Minus className="h-4 w-4 text-muted-foreground/50" />}</span>
                    <span className="flex justify-center"><CheckCircle2 className="h-4 w-4 text-primary" /></span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Comparison describes the service scope, not every third-party ELD product. Features and pricing vary by provider.</p>
            </section>

            <section className="mt-14 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <h2 className="text-2xl font-bold text-foreground">How much does ELD service cost?</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  USA ELD starts at $125 per truck per month for fleets with 1–20 trucks. The rate is $115 per truck for 21–40 trucks and $100 per truck for 41–100 trucks. Fleets above 100 trucks receive custom pricing based on fleet size and support needs.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Review our <Link href="/eld-service" className="font-medium text-primary hover:underline">ELD service</Link>, <Link href="/eld-monitoring" className="font-medium text-primary hover:underline">24/7 monitoring</Link>, <Link href="/eld-support" className="font-medium text-primary hover:underline">driver support</Link>, and <Link href="/eld-for-owner-operators" className="font-medium text-primary hover:underline">owner-operator solution</Link> before choosing a plan.
                </p>
              </div>
              <div className="space-y-3">
                {faq.map((item) => (
                  <div key={item.q} className="rounded-2xl border border-border/50 bg-card p-5">
                    <h3 className="font-semibold text-foreground">{item.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
