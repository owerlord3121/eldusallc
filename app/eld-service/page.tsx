import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Truck, Clock, Shield, HeadphonesIcon } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ELD Service USA | Professional ELD Service for Trucking Companies",
  description:
    "Professional ELD service in USA for trucking companies. Complete ELD solutions including monitoring, logbook support, DOT compliance, and 24/7 driver assistance.",
  keywords: [
    "ELD service",
    "ELD service USA",
    "ELD for trucking",
    "trucking ELD service",
    "ELD provider USA",
    "best ELD service",
    "ELD solutions",
    "commercial ELD service",
  ],
  alternates: { canonical: "https://eldusallc.com/eld-service" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-service",
    title: "ELD Service USA | Professional ELD Service for Trucking",
    description:
      "Complete ELD service for trucking companies. 24/7 monitoring, logbook support, DOT compliance assistance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Service USA | Professional ELD Service",
    description:
      "Complete ELD service for trucking companies. 24/7 monitoring, logbook support, DOT compliance.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ELD Service USA",
  provider: {
    "@type": "Organization",
    name: "NextLog FullService",
  },
  description:
    "Professional ELD service in USA for trucking companies. Complete ELD solutions including monitoring, logbook support, DOT compliance, and 24/7 driver assistance.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "ELD Service",
}

export default function ELDServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        
        <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
                Professional ELD Solutions
              </p>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                ELD Service USA
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground leading-relaxed sm:text-base">
                NextLog FullService provides comprehensive ELD service for trucking companies across the United States. Our professional team ensures your fleet stays compliant with all federal ELD regulations while maximizing operational efficiency.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <Link href="/#contact">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
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
            <h2 className="mb-8 text-center text-xl font-bold text-foreground sm:mb-10 sm:text-2xl">
              Why Choose Our ELD Service?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock ELD monitoring and support" },
                { icon: Shield, title: "DOT Compliant", desc: "Full compliance with FMCSA regulations" },
                { icon: HeadphonesIcon, title: "Multi-language", desc: "Support in 5 languages for your drivers" },
                { icon: Truck, title: "Fleet Ready", desc: "Scalable solutions for any fleet size" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border/50 bg-secondary p-5 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">
              Comprehensive ELD Service for Trucking Companies
            </h2>
            
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Electronic Logging Devices (ELD) are mandatory for most commercial motor vehicle operators in the United States. At NextLog FullService, we provide complete ELD service that goes beyond just hardware. Our ELD service USA includes professional monitoring, driver support, logbook management, and full DOT compliance assistance.
              </p>
              <p>
                Our ELD service is designed specifically for trucking companies that need reliable, hassle-free compliance solutions. Whether you operate a single truck or manage a large fleet, our scalable ELD service adapts to your needs. We understand the challenges of the trucking industry and provide ELD solutions that keep your drivers on the road and your business running smoothly.
              </p>
              <p>
                What sets our ELD service apart is our commitment to 24/7 support. When your drivers encounter issues with their electronic logs, they need immediate assistance. Our multilingual support team is available around the clock to help resolve any ELD-related problems quickly and efficiently.
              </p>
              <p>
                Choosing the right ELD service provider is crucial for your trucking operations. With NextLog FullService, you get a partner that understands ELD regulations inside and out. We stay current with all FMCSA rule changes and proactively communicate updates that affect your fleet. Our ELD service has helped trucking companies pass over 400 inspections and more than 30 DOT audits.
              </p>
              <p>
                Our ELD service includes daily logbook reviews, error correction, Hours of Service (HOS) optimization, and comprehensive reporting. We identify potential compliance issues before they become problems, saving you time, money, and the stress of unexpected violations.
              </p>
              <p>
                Ready to experience professional ELD service? Contact NextLog FullService today to learn how our ELD solutions can benefit your trucking company. We offer flexible pricing starting at $110-$150 per truck per month, with volume discounts available for larger fleets.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">Our ELD Service Includes:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "24/7 ELD monitoring",
                  "Daily logbook reviews",
                  "Error correction service",
                  "DOT compliance support",
                  "IFTA reporting",
                  "Driver training assistance",
                  "Multi-language support",
                  "Dedicated account manager",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Link href="/eld-monitoring" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                ELD Monitoring
              </Link>
              <Link href="/eld-support" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                ELD Support
              </Link>
              <Link href="/logbook-correction" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                Logbook Correction
              </Link>
              <Link href="/dot-audit-help" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                DOT Audit Help
              </Link>
              <Link href="/eld-compliance" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                ELD Compliance
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
