import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Truck, Clock, Shield, HeadphonesIcon } from "lucide-react"
import Link from "next/link"
import { breadcrumbJsonLd, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "ELD Service USA | 24/7 Support for Trucking Fleets",
  description:
    "Professional ELD service for trucking companies in the USA: 24/7 monitoring, logbook support, DOT compliance assistance, IFTA support, and multilingual driver help.",
  alternates: { canonical: "https://eldusallc.com/eld-service" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-service",
    title: "ELD Service USA | 24/7 Support for Trucking Fleets",
    description:
      "Professional ELD service with 24/7 monitoring, logbook support, DOT compliance assistance, and multilingual driver help.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Service USA | USA ELD",
    description:
      "Professional ELD service with 24/7 monitoring, logbook support, and DOT compliance assistance.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://eldusallc.com/eld-service#service",
  name: "ELD Service USA",
  url: "https://eldusallc.com/eld-service",
  provider: { "@id": "https://eldusallc.com/#organization" },
  description:
    "Professional ELD service for trucking companies including 24/7 monitoring, logbook support, DOT compliance assistance, IFTA support, and multilingual driver help.",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  serviceType: "Electronic Logging Device support and fleet compliance service",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "125",
    description: "1–20 truck plan: $125 per truck per month. Lower per-truck rates are available for larger fleets.",
    url: "https://eldusallc.com/#pricing",
  },
}

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "ELD Service USA" },
])

export default function ELDServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground/80">ELD Service</span>
            </nav>
            <div className="text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">Professional ELD Solutions</p>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD Service USA</h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground leading-relaxed sm:text-base">
                USA ELD provides comprehensive ELD service for trucking companies across the United States and Canada. Our team helps fleets stay on top of electronic logs, driver support, HOS workflows, inspections, and day-to-day compliance tasks.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <Link href="/#contact">Get Started <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/40 bg-card py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-xl font-bold text-foreground sm:mb-10 sm:text-2xl">Why Choose Our ELD Service?</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock ELD monitoring and support" },
                { icon: Shield, title: "Compliance Focus", desc: "Support built around FMCSA and HOS workflows" },
                { icon: HeadphonesIcon, title: "Multi-language", desc: "Support in 5 languages for your drivers" },
                { icon: Truck, title: "Fleet Ready", desc: "Scalable support for owner-operators and fleets" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border/50 bg-secondary p-5 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">Comprehensive ELD Service for Trucking Companies</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Electronic Logging Devices are required for many commercial motor vehicle operations in the United States. USA ELD provides a complete service layer around ELD workflows: monitoring, driver assistance, logbook review, inspection readiness, DOT audit preparation, and IFTA support.
              </p>
              <p>
                Our service is built for trucking companies that need reliable compliance support without adding more work to dispatch or safety staff. Whether you operate one truck or a growing fleet, the workflow scales with your operation.
              </p>
              <p>
                Drivers often need help at the moment an ELD issue happens. Our multilingual team supports common device, synchronization, logbook, and inspection-readiness questions so drivers and fleet managers can resolve issues faster.
              </p>
              <p>
                We keep our guidance aligned with current FMCSA requirements and help fleets organize the records and workflows that matter during roadside inspections and audits. USA ELD has experience supporting hundreds of inspections and dozens of DOT audits.
              </p>
              <p>
                Our ELD service includes regular logbook review, HOS workflow monitoring, driver follow-up, compliance reporting, and practical operational support designed to reduce avoidable errors before they become bigger problems.
              </p>
              <p>
                Pricing is transparent: the 1–20 truck plan is $125 per truck per month, with lower per-truck rates for larger fleets. <Link href="/#pricing" className="font-medium text-primary hover:underline">See current pricing</Link> or contact USA ELD for a fleet quote.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">Our ELD Service Includes:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "24/7 ELD monitoring",
                  "Regular logbook reviews",
                  "Driver ELD assistance",
                  "DOT compliance support",
                  "IFTA reporting support",
                  "Inspection readiness",
                  "Multi-language support",
                  "Fleet workflow assistance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Link href="/eld-monitoring" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">ELD Monitoring</Link>
              <Link href="/eld-support" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">ELD Support</Link>
              <Link href="/logbook-correction" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">Logbook Assistance</Link>
              <Link href="/dot-audit-help" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">DOT Audit Help</Link>
              <Link href="/eld-compliance" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">ELD Compliance</Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
