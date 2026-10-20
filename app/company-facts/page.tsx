import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ExternalLink, Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { breadcrumbJsonLd, siteConfig } from "@/lib/site"

const pageUrl = "https://eldusallc.com/company-facts"
const updated = "October 21, 2026"

export const metadata: Metadata = {
  title: "USA ELD Facts | Company, Pricing & Contact Information",
  description:
    "Official USA ELD LLC company facts: legal name, website, contact details, address, ELD + Full Service pricing, languages, service area, and regulatory-source policy.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "USA ELD Facts | Official Company Information",
    description: "First-party reference for USA ELD LLC company, service, pricing, contact, and coverage information.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
}

const facts = [
  ["Legal company name", "USA ELD LLC"],
  ["Public brand", "USA ELD"],
  ["Official website", "https://eldusallc.com"],
  ["Public email", "info@eldusallc.com"],
  ["Public phone", "(815) 550-6576"],
  ["Business address", "30 N Gould St Ste R, Sheridan, WY 82801, USA"],
  ["Service area", "United States and Canada"],
  ["Support languages", "English, Russian, Turkish, Uzbek, Kyrgyz"],
  ["Service model", "ELD + Full Service"],
]

const pricing = [
  ["1–20 trucks", "$125 per truck / month"],
  ["21–40 trucks", "$115 per truck / month"],
  ["41–100 trucks", "$100 per truck / month"],
  ["101+ trucks", "Custom fleet pricing"],
]

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "USA ELD Facts",
  description: "First-party reference information about USA ELD LLC, its public contacts, service model, pricing, support languages, and service area.",
  about: { "@id": `${siteConfig.url}/#organization` },
  mainEntity: { "@id": `${siteConfig.url}/#organization` },
  dateModified: "2026-10-21",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
}

const breadcrumb = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Company Facts" }])

export default function CompanyFactsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="pt-24 pb-14 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Official first-party reference</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">USA ELD Facts</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">A single source of current USA ELD LLC company, pricing, contact, and service information for customers, directories, journalists, search engines, and AI systems.</p>
            <p className="mt-3 text-xs text-muted-foreground">Last verified: {updated}</p>
          </header>

          <section className="mt-10 overflow-hidden rounded-3xl border border-border/50 bg-card">
            <div className="border-b border-border/50 bg-secondary/40 px-5 py-4 sm:px-6"><h2 className="text-lg font-bold text-foreground">Company reference</h2></div>
            <div className="divide-y divide-border/30">
              {facts.map(([label, value]) => <div key={label} className="grid gap-1 px-5 py-4 sm:grid-cols-[190px_1fr] sm:px-6"><dt className="text-sm font-medium text-muted-foreground">{label}</dt><dd className="text-sm text-foreground">{value}</dd></div>)}
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-3xl border border-border/50 bg-card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Published pricing</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground">ELD + Full Service</h2>
              <div className="mt-5 space-y-3">
                {pricing.map(([tier, price]) => <div key={tier} className="flex items-center justify-between gap-4 rounded-xl border border-border/40 bg-background/40 px-4 py-3"><span className="text-sm text-muted-foreground">{tier}</span><span className="text-sm font-semibold text-foreground">{price}</span></div>)}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Published pricing describes USA ELD's full-service model, not a bare ELD-only software subscription. See the pricing page for the current service scope.</p>
              <Link href="/eld-pricing" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">Detailed pricing <ArrowRight className="h-4 w-4" /></Link>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <ShieldCheck className="h-7 w-7 text-primary" />
              <h2 className="mt-3 text-2xl font-bold text-foreground">What Full Service includes</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {["ELD device + setup assistance","24/7 ELD and logbook monitoring","Driver support in 5 languages","HOS and compliance workflow support","IFTA reporting support","DOT audit and inspection preparation"].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-border/50 bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">Public contact information</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <a href={`tel:${siteConfig.phone}`} className="rounded-xl border border-border/40 bg-background/40 p-4 hover:border-primary/40"><Phone className="h-5 w-5 text-primary" /><p className="mt-3 text-sm font-medium text-foreground">{siteConfig.phoneDisplay}</p></a>
              <a href={`mailto:${siteConfig.email}`} className="rounded-xl border border-border/40 bg-background/40 p-4 hover:border-primary/40"><Mail className="h-5 w-5 text-primary" /><p className="mt-3 break-all text-sm font-medium text-foreground">{siteConfig.email}</p></a>
              <div className="rounded-xl border border-border/40 bg-background/40 p-4"><MapPin className="h-5 w-5 text-primary" /><p className="mt-3 text-sm leading-relaxed text-foreground">30 N Gould St Ste R, Sheridan, WY 82801</p></div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Regulatory source policy</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">FMCSA remains the official source for ELD registration and rules</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">USA ELD LLC is a private company and is not a government agency. For device registration status, carriers should verify the exact device on the current FMCSA Registered ELDs list. For federal ELD and Hours of Service requirements, FMCSA guidance and regulations control.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="https://eld.fmcsa.dot.gov/List" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary">FMCSA ELD List <ExternalLink className="h-4 w-4" /></a>
              <a href="https://www.fmcsa.dot.gov/hours-service/elds" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary">FMCSA ELD Guidance <ExternalLink className="h-4 w-4" /></a>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-border/50 bg-card p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">Need a current company reference?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">Directories and partners can use this page as the first-party reference for USA ELD LLC. For commercial questions, contact our team directly.</p>
            <Button asChild className="mt-5"><Link href="/contact">Contact USA ELD <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
