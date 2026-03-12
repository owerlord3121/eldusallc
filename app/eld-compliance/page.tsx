import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Shield, Scale, FileText, AlertCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ELD Compliance | ELD Compliance Service for Trucking Companies",
  description:
    "Complete ELD compliance service for trucking companies. FMCSA regulation compliance, HOS management, ELD mandate support, and ongoing compliance monitoring.",
  keywords: [
    "ELD compliance",
    "ELD compliance service",
    "FMCSA compliance",
    "HOS compliance",
    "ELD mandate",
    "trucking compliance",
    "ELD regulations",
    "compliance management",
  ],
  alternates: { canonical: "https://eldusallc.com/eld-compliance" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-compliance",
    title: "ELD Compliance | ELD Compliance Service for Trucking",
    description:
      "Complete ELD compliance service. FMCSA regulations, HOS management, ongoing monitoring.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Compliance | ELD Compliance Service",
    description: "Complete ELD compliance service for trucking. FMCSA regulations and HOS management.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ELD Compliance Service",
  provider: {
    "@type": "Organization",
    name: "NextLog FullService",
  },
  description:
    "Complete ELD compliance service for trucking companies. FMCSA regulation compliance, HOS management, and ongoing compliance monitoring.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "ELD Compliance",
}

export default function ELDCompliancePage() {
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
                Stay Compliant, Stay on the Road
              </p>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                ELD Compliance
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground leading-relaxed sm:text-base">
                Navigating ELD compliance requirements doesn't have to be complicated. Our expert team ensures your trucking company meets all FMCSA regulations, from Hours of Service rules to electronic logging device requirements.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <Link href="/#contact">
                    Get Compliant <ArrowRight className="h-4 w-4" />
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
              ELD Compliance Areas
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: FileText, title: "ELD Mandate", desc: "Full compliance with federal ELD requirements" },
                { icon: Scale, title: "HOS Rules", desc: "Hours of Service regulation compliance" },
                { icon: Shield, title: "FMCSA Regs", desc: "All FMCSA safety regulations covered" },
                { icon: AlertCircle, title: "Violation Prevention", desc: "Proactive monitoring to prevent violations" },
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
              Complete ELD Compliance Management for Trucking Companies
            </h2>
            
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                ELD compliance is not optional for most commercial motor vehicle operators in the United States. Since the ELD mandate took effect, trucking companies must use registered electronic logging devices and maintain accurate records of driver hours. At NextLog FullService, we provide comprehensive ELD compliance services to ensure your fleet meets all federal requirements.
              </p>
              <p>
                Our ELD compliance service covers every aspect of electronic logging regulations. We help trucking companies understand and implement the ELD mandate requirements, maintain proper Hours of Service (HOS) compliance, and prepare for DOT inspections and audits.
              </p>
              <p>
                Staying current with ELD compliance can be challenging as regulations change. The FMCSA periodically updates HOS rules and ELD requirements, and trucking companies must adapt quickly to remain compliant. Our team monitors regulatory changes and proactively communicates updates that affect your operations.
              </p>
              <p>
                Many ELD compliance violations occur not from intentional rule-breaking, but from misunderstanding complex regulations. Our compliance experts help your drivers and managers understand the rules, reducing errors and violations. We provide ongoing training and support to keep your entire team informed about ELD compliance requirements.
              </p>
              <p>
                Our ELD compliance service includes daily monitoring of your fleet's electronic logs. We identify potential violations before they become official, giving you the opportunity to make corrections. This proactive approach has helped our clients maintain excellent compliance records and avoid costly fines.
              </p>
              <p>
                The consequences of ELD compliance failures can be severe. Violations can result in fines, out-of-service orders, and negative impacts on your safety rating. Serious or repeated violations can even threaten your operating authority. Professional ELD compliance support from NextLog FullService helps protect your business from these risks.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">Our ELD Compliance Service Includes:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "ELD mandate compliance",
                  "HOS rule management",
                  "Daily compliance monitoring",
                  "Regulation updates",
                  "Driver education",
                  "Violation prevention",
                  "Audit preparation",
                  "Compliance reporting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Link href="/eld-service" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                ELD Service
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
              <Link href="/eld-monitoring" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                ELD Monitoring
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
