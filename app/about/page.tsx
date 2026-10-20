import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, ExternalLink, Globe2, Mail, MapPin, Phone, ShieldCheck, Truck } from "lucide-react"
import { breadcrumbJsonLd, siteConfig } from "@/lib/site"

const pageUrl = "https://eldusallc.com/about"

export const metadata: Metadata = {
  title: "About USA ELD | ELD & Trucking Compliance Support",
  description:
    "Learn about USA ELD LLC, a U.S.-focused ELD and trucking compliance support company providing 24/7 monitoring, driver assistance, DOT audit preparation, IFTA support, and multilingual service.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "About USA ELD LLC",
    description:
      "24/7 ELD monitoring and trucking compliance support for carriers and owner-operators across the U.S. and Canada.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
}

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${pageUrl}#about`,
  url: pageUrl,
  name: "About USA ELD LLC",
  about: { "@id": `${siteConfig.url}/#organization` },
  mainEntity: { "@id": `${siteConfig.url}/#organization` },
}

const breadcrumb = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About USA ELD" }])

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">About USA ELD LLC</p>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              ELD support built around real trucking operations
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              USA ELD LLC helps trucking companies and owner-operators manage ELD workflows, driver support, logbook issues, DOT preparation, IFTA reporting, and day-to-day compliance tasks without losing focus on freight operations.
            </p>
          </div>

          <section className="mt-10 rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h2 className="font-semibold text-foreground">USA ELD LLC</h2><p className="mt-1 text-sm leading-relaxed text-muted-foreground">30 N Gould St Ste R<br />Sheridan, WY 82801, USA</p></div></div>
              <div className="space-y-3 text-sm">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Phone className="h-4 w-4 text-primary" />{siteConfig.phoneDisplay}</a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail className="h-4 w-4 text-primary" />{siteConfig.email}</a>
                <div className="flex items-center gap-2 text-muted-foreground"><Globe2 className="h-4 w-4 text-primary" />United States & Canada</div>
              </div>
            </div>
          </section>

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

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Regulatory transparency</p>
            <h2 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">We use FMCSA as the regulatory source of truth</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">USA ELD LLC is a private company and is not the Federal Motor Carrier Safety Administration or another government agency. Our educational compliance content is designed to help drivers and carriers understand workflows, but official FMCSA rules, guidance, and the current Registered ELDs list remain the controlling sources.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="https://eld.fmcsa.dot.gov/List" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary">FMCSA Registered ELDs <ExternalLink className="h-4 w-4" /></a>
              <a href="https://www.fmcsa.dot.gov/hours-service/elds" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary">FMCSA ELD Guidance <ExternalLink className="h-4 w-4" /></a>
            </div>
          </section>

          <section className="mt-12 text-center">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Need help with your fleet?</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Tell us how many trucks you operate and what ELD or compliance problems you want to solve.
            </p>
            <Button className="mt-5" asChild>
              <Link href="/#contact">Contact USA ELD <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
