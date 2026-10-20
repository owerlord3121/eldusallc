import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, DollarSign, Headphones, Server, ShieldCheck, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/eld-cost"

export const metadata: Metadata = {
  title: "ELD Cost 2026 | How Much Does an ELD Cost Per Month?",
  description:
    "How much does an ELD cost in 2026? Learn the difference between device, subscription, setup, support, and full-service ELD costs. USA ELD Full Service starts at $125 per truck/month.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "ELD Cost 2026 | Monthly ELD Cost Explained",
    description:
      "Understand ELD hardware, monthly subscription, support, setup, and full-service costs before choosing a provider.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Cost 2026 | USA ELD",
    description: "A practical breakdown of ELD device, subscription, support, and full-service costs.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

const costParts = [
  {
    icon: Server,
    title: "ELD hardware",
    text: "Some providers charge separately for the physical device, cable, replacement hardware, or shipping. Others bundle hardware into the service.",
  },
  {
    icon: DollarSign,
    title: "Monthly subscription",
    text: "Basic ELD plans usually charge a recurring per-truck subscription. The number shown in an ad may not include support, reporting, or other services.",
  },
  {
    icon: Headphones,
    title: "Human support",
    text: "24/7 monitoring, driver assistance, logbook review, inspection help, and multilingual support are a different service layer from simple ELD access.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance operations",
    text: "Audit preparation, IFTA support, HOS workflow assistance, and documentation review can reduce the amount of internal safety-office work a carrier handles alone.",
  },
]

const faq = [
  {
    q: "How much does an ELD cost per month?",
    a: "There is no single market-wide ELD price. Providers may charge separately for hardware, software, activation, support, contracts, or additional fleet features. Compare total monthly and upfront cost instead of only the advertised subscription price.",
  },
  {
    q: "How much does USA ELD cost?",
    a: "USA ELD Full Service starts at $125 per truck per month for 1–20 trucks, $115 for 21–40 trucks, and $100 for 41–100 trucks. Fleets above 100 trucks receive custom pricing.",
  },
  {
    q: "Why is full-service ELD support more expensive than a basic ELD subscription?",
    a: "A basic subscription primarily gives access to the ELD system. Full-service support can add 24/7 monitoring, driver assistance, logbook workflows, compliance support, IFTA assistance, and audit or inspection preparation.",
  },
  {
    q: "What should I compare before choosing an ELD provider?",
    a: "Compare total cost, contract length, hardware terms, replacement policy, support hours, data-transfer capability, driver usability, IFTA needs, and whether your company already has an internal safety team to handle daily ELD issues.",
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ELD Cost 2026: How Much Does an ELD Cost Per Month?",
  description: "A practical breakdown of ELD hardware, monthly subscription, support, and full-service costs for owner-operators and trucking fleets.",
  url: pageUrl,
  mainEntityOfPage: pageUrl,
  datePublished: "2026-10-20",
  dateModified: "2026-10-20",
  author: { "@id": "https://eldusallc.com/#organization" },
  publisher: { "@id": "https://eldusallc.com/#organization" },
  image: ["https://eldusallc.com/opengraph-image"],
}

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "ELD Cost" },
])

export default function ELDCostPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="pt-24 pb-14 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link><span>/</span><span className="text-foreground/80">ELD Cost</span>
          </nav>

          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">2026 ELD cost guide</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">How Much Does an ELD Cost Per Month?</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">The cheapest advertised monthly fee is not always the real operating cost. Compare hardware, subscription, contract terms, support, and the work your own safety team still has to do.</p>
          </header>

          <section className="mt-10 rounded-3xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">USA ELD Full Service</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">Starting at $125 per truck / month</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">Our published price is for ELD + Full Service, not a bare software subscription. It includes the ELD workflow, 24/7 monitoring, driver support, logbook assistance, compliance workflows, IFTA support, and audit or inspection preparation.</p>
              </div>
              <Button asChild size="lg"><Link href="/eld-pricing">See all pricing <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">What makes up the real ELD cost?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Two providers can advertise very different monthly prices because they are selling different scopes of service. Break the quote into these components before comparing.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {costParts.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-5 sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-3xl border border-border/50 bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">Basic ELD cost vs. full-service ELD cost</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A basic ELD can be the right choice when the carrier already has staff to monitor logs, answer drivers, review unidentified driving, prepare audit files, and handle IFTA or documentation internally. Full service moves more of that daily workload to an outside support team.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/50 bg-background/50 p-5">
                <h3 className="font-semibold text-foreground">Basic ELD subscription</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {["ELD system access", "Electronic log recording", "Standard provider features", "Carrier handles most daily monitoring and follow-up"].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />{item}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
                <h3 className="font-semibold text-foreground">USA ELD Full Service</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {["ELD device + setup assistance", "24/7 monitoring", "Driver support in 5 languages", "Logbook and unidentified-driving workflows", "DOT inspection and audit preparation", "IFTA reporting support"].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-foreground">Example: estimate your total fleet cost</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[{ fleet: "10 trucks", rate: "$125", total: "$1,250/mo" }, { fleet: "30 trucks", rate: "$115", total: "$3,450/mo" }, { fleet: "60 trucks", rate: "$100", total: "$6,000/mo" }].map((item) => (
                <div key={item.fleet} className="rounded-2xl border border-border/50 bg-card p-5 text-center">
                  <Truck className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-3 font-semibold text-foreground">{item.fleet}</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">{item.rate}</p>
                  <p className="text-xs text-muted-foreground">per truck</p>
                  <div className="my-3 h-px bg-border/50" />
                  <p className="text-sm font-semibold text-primary">{item.total}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Examples use USA ELD published pricing and are illustrative. Custom fleet pricing may differ for 101+ trucks.</p>
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Questions to ask before signing an ELD contract</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {["Is hardware included or billed separately?", "Is there an activation or setup fee?", "What is the contract length and cancellation policy?", "What happens if the device fails and needs replacement?", "Is support available 24/7 or only during business hours?", "Who reviews unidentified driving and recurring log problems?", "Are IFTA and audit-preparation services included or extra?"].map((item) => <li key={item} className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
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

          <section className="mt-14 rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">Compare the service, not only the sticker price</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">If you already have a safety department, a basic ELD may be enough. If your drivers need constant operational support, compare the cost of that internal workload with a full-service model.</p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild><Link href="/eld-pricing">View USA ELD pricing</Link></Button>
              <Button asChild variant="outline"><Link href="/#contact">Get a fleet quote</Link></Button>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
