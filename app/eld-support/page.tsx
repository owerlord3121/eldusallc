import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, HeadphonesIcon, Clock, Globe, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ELD Support 24/7 | Professional ELD Support for Trucking",
  description:
    "24/7 ELD support for trucking companies. Professional driver assistance, logbook help, technical support, and compliance guidance in multiple languages.",
  keywords: [
    "ELD support",
    "ELD support 24/7",
    "ELD support trucking",
    "ELD driver support",
    "ELD help",
    "ELD assistance",
    "trucking ELD support",
    "ELD technical support",
  ],
  alternates: { canonical: "https://eldusallc.com/eld-support" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-support",
    title: "ELD Support 24/7 | Professional ELD Support for Trucking",
    description:
      "Round-the-clock ELD support for trucking companies. Multi-language assistance for drivers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Support 24/7 | Professional ELD Support",
    description: "24/7 ELD support for trucking companies. Multi-language driver assistance.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ELD Support 24/7",
  provider: {
    "@type": "Organization",
    name: "NextLog FullService",
  },
  description:
    "24/7 ELD support for trucking companies. Professional driver assistance, logbook help, technical support, and compliance guidance.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "ELD Support",
}

export default function ELDSupportPage() {
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
                Round-the-Clock Assistance
              </p>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                ELD Support 24/7
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground leading-relaxed sm:text-base">
                Get professional ELD support whenever you need it. Our dedicated team provides round-the-clock assistance to drivers and fleet managers in multiple languages, ensuring your operations never stop.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <Link href="/#contact">
                    Get Support <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <a href="https://t.me/nextlogfullservice" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/40 bg-card py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-xl font-bold text-foreground sm:mb-10 sm:text-2xl">
              ELD Support Features
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Clock, title: "24/7 Availability", desc: "Support available any time, day or night" },
                { icon: Globe, title: "5 Languages", desc: "English, Russian, Turkish, Uzbek, Kyrgyz" },
                { icon: HeadphonesIcon, title: "Live Assistance", desc: "Real human support, not automated" },
                { icon: MessageCircle, title: "Multi-Channel", desc: "Phone, Telegram, and online support" },
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
              Professional ELD Support for Trucking Companies
            </h2>
            
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                In the trucking industry, problems don't wait for business hours. That's why NextLog FullService provides comprehensive ELD support 24 hours a day, 7 days a week. Our ELD support team is always ready to help your drivers resolve issues quickly, keeping your fleet moving and compliant.
              </p>
              <p>
                Our ELD support goes beyond basic troubleshooting. We provide complete assistance with logbook entries, Hours of Service questions, compliance concerns, and technical issues. Whether your driver is confused about a rule interpretation or experiencing a device malfunction, our ELD support specialists have the expertise to help.
              </p>
              <p>
                One of the key advantages of our ELD support is multilingual assistance. We understand that many trucking companies employ drivers from diverse backgrounds. Our support team speaks English, Russian, Turkish, Uzbek, and Kyrgyz, ensuring clear communication and effective problem resolution for all your drivers.
              </p>
              <p>
                Our ELD support isn't just reactive—it's proactive. We monitor your fleet's ELD data continuously, identifying potential issues before they become violations. When we spot a problem, we reach out to help resolve it. This proactive ELD support approach has helped our clients maintain exceptional compliance records.
              </p>
              <p>
                The quality of ELD support can make or break your compliance efforts. Many trucking companies have experienced the frustration of waiting on hold for hours or dealing with support representatives who don't understand the trucking industry. With NextLog FullService, you get expert ELD support from professionals who specialize in trucking compliance.
              </p>
              <p>
                Our ELD support team undergoes continuous training on the latest FMCSA regulations and ELD requirements. We stay current with rule changes and can provide guidance on how new regulations affect your operations. This expertise ensures you always receive accurate, up-to-date ELD support.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">Our ELD Support Services:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "24/7 live phone support",
                  "Telegram instant messaging",
                  "Logbook entry assistance",
                  "HOS rule clarification",
                  "Technical troubleshooting",
                  "Compliance guidance",
                  "DOT inspection preparation",
                  "Multi-language communication",
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
              <Link href="/eld-monitoring" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                ELD Monitoring
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
