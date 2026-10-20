import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { breadcrumbJsonLd } from "@/lib/site"

export const metadata: Metadata = {
  title: "ELD Pricing | ELD Service Cost for Owner-Operators & Fleets",
  description:
    "USA ELD pricing starts at $125 per truck per month for 1–20 trucks, with lower per-truck rates for larger fleets. Compare current ELD + Full Service plans.",
  alternates: { canonical: "https://eldusallc.com/eld-pricing" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-pricing",
    title: "ELD Pricing | USA ELD",
    description:
      "Compare current USA ELD plans for owner-operators and fleets. Plans start at $125 per truck per month.",
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
  { trucks: "101+ trucks", price: "Custom", note: "contact us for fleet pricing" },
]

const features = [
  "ELD device + setup assistance",
  "24/7 ELD and logbook monitoring",
  "Driver support in 5 languages",
  "HOS and compliance workflow support",
  "IFTA reporting support",
  "DOT audit and inspection preparation",
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

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "ELD Pricing" },
])

export default function ELDPricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 pb-14 sm:pt-28 lg:pt-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground/80">ELD Pricing</span>
            </nav>

            <header className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Simple fleet pricing</p>
              <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD Service Pricing</h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Current USA ELD pricing for owner-operators and fleets. The per-truck rate decreases as your fleet grows.
              </p>
            </header>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan, index) => (
                <div key={plan.trucks} className={`rounded-2xl border p-5 ${index === 0 ? "border-primary/40 bg-primary/8 shadow-lg shadow-primary/10" : "border-border/50 bg-card"}`}>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><Truck className="h-4 w-4 text-primary" />{plan.trucks}</div>
                  <div className="mt-5 text-3xl font-bold tracking-tight text-foreground">{plan.price}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{plan.note}</div>
                </div>
              ))}
            </div>

            <section className="mt-10 grid gap-6 rounded-3xl border border-border/50 bg-card p-6 sm:p-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Included</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">ELD + Full Service in one plan</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Pricing is designed around the number of active trucks so smaller carriers can start without a large fleet commitment and larger fleets receive a lower per-truck rate.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{feature}</span></div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-sm font-semibold text-foreground">Need pricing for your fleet?</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Tell us how many trucks you operate and what kind of ELD support you need.</p>
                <Button asChild className="mt-5 w-full"><Link href="/#contact">Get a fleet quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </section>

            <section className="mt-12 max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground">How much does ELD service cost?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                USA ELD currently starts at $125 per truck per month for fleets with 1–20 trucks. The rate is $115 per truck for 21–40 trucks and $100 per truck for 41–100 trucks. Fleets above 100 trucks receive custom pricing based on fleet size and support needs.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                If you want to understand what is included before choosing a plan, review our <Link href="/eld-service" className="font-medium text-primary hover:underline">ELD service</Link>, <Link href="/eld-monitoring" className="font-medium text-primary hover:underline">24/7 monitoring</Link>, and <Link href="/eld-support" className="font-medium text-primary hover:underline">driver support</Link> pages.
              </p>
            </section>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
