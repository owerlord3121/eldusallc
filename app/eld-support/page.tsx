import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, HeadphonesIcon, Clock, Globe, MessageCircle } from "lucide-react"
import Link from "next/link"
import { breadcrumbJsonLd, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "ELD Support 24/7 | Driver & Fleet Assistance",
  description:
    "24/7 ELD support for trucking companies: driver assistance, logbook help, technical troubleshooting, HOS workflow guidance, and multilingual support.",
  alternates: { canonical: "https://eldusallc.com/eld-support" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-support",
    title: "ELD Support 24/7 | Driver & Fleet Assistance",
    description:
      "Round-the-clock ELD support for drivers and fleet teams with multilingual assistance and compliance-focused guidance.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Support 24/7 | USA ELD",
    description: "24/7 ELD support for trucking companies and drivers.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://eldusallc.com/eld-support#service",
  name: "ELD Support 24/7",
  url: "https://eldusallc.com/eld-support",
  provider: { "@id": "https://eldusallc.com/#organization" },
  description:
    "24/7 ELD support for trucking companies including driver assistance, logbook help, technical troubleshooting, HOS workflow guidance, and multilingual support.",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  serviceType: "ELD Support",
}

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "ELD Support" },
])

export default function ELDSupportPage() {
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
              <span className="text-foreground/80">ELD Support</span>
            </nav>
            <div className="text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">Round-the-Clock Assistance</p>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD Support 24/7</h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground leading-relaxed sm:text-base">
                Get professional ELD support whenever your drivers or fleet team need it. USA ELD provides round-the-clock assistance in five languages for common logbook, HOS, device, synchronization, and inspection-readiness questions.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <Link href="/#contact">Get Support <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Telegram</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/40 bg-card py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-xl font-bold text-foreground sm:mb-10 sm:text-2xl">ELD Support Features</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Clock, title: "24/7 Availability", desc: "Support available any time, day or night" },
                { icon: Globe, title: "5 Languages", desc: "English, Russian, Turkish, Uzbek, Kyrgyz" },
                { icon: HeadphonesIcon, title: "Live Assistance", desc: "Real team support for practical ELD issues" },
                { icon: MessageCircle, title: "Multi-Channel", desc: "Phone, Telegram, and online support" },
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
            <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">Professional ELD Support for Trucking Companies</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Trucking operations do not stop after normal business hours. USA ELD provides 24/7 ELD support so drivers and fleet managers can get help when logbook, HOS, device, or inspection questions come up on the road.
              </p>
              <p>
                Support goes beyond basic troubleshooting. We assist with eligible logbook workflows, Hours of Service questions, device or synchronization problems, inspection readiness, and practical compliance procedures.
              </p>
              <p>
                Clear communication matters. Our support team works in English, Russian, Turkish, Uzbek, and Kyrgyz so fleets with multilingual drivers can get help without unnecessary delays or misunderstandings.
              </p>
              <p>
                Our support is also connected to monitoring. When the team identifies a potential issue, we can help the driver or fleet manager understand what needs attention before the problem becomes more difficult to resolve.
              </p>
              <p>
                USA ELD focuses on trucking operations and compliance workflows rather than generic technical support. That means the person helping your driver understands the context around electronic logs, HOS, roadside inspections, and fleet documentation.
              </p>
              <p>
                We continuously review FMCSA guidance and operational procedures so the support we provide stays aligned with current requirements and common inspection scenarios.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">Our ELD Support Services:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "24/7 live support",
                  "Telegram instant messaging",
                  "Logbook workflow assistance",
                  "HOS rule guidance",
                  "Technical troubleshooting",
                  "Compliance support",
                  "DOT inspection preparation",
                  "Multi-language communication",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Link href="/eld-service" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">ELD Service</Link>
              <Link href="/eld-monitoring" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">ELD Monitoring</Link>
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
