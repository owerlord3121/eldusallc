import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Activity, Eye, Bell, BarChart3 } from "lucide-react"
import Link from "next/link"
import { breadcrumbJsonLd } from "@/lib/site"

export const metadata: Metadata = {
  title: "ELD Monitoring 24/7 | Fleet Log Monitoring Service",
  description:
    "24/7 ELD monitoring for trucking companies: continuous log review, alerts, driver follow-up, HOS issue detection, and compliance-focused fleet support.",
  alternates: { canonical: "https://eldusallc.com/eld-monitoring" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-monitoring",
    title: "ELD Monitoring 24/7 | Fleet Log Monitoring Service",
    description:
      "Continuous ELD and logbook monitoring with alerts, driver follow-up, and compliance-focused fleet support.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Monitoring 24/7 | USA ELD",
    description: "Continuous ELD and logbook monitoring for trucking fleets.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://eldusallc.com/eld-monitoring#service",
  name: "ELD Monitoring 24/7",
  url: "https://eldusallc.com/eld-monitoring",
  provider: { "@id": "https://eldusallc.com/#organization" },
  description:
    "24/7 ELD monitoring for trucking companies including continuous log review, alerts, driver follow-up, HOS issue detection, and compliance-focused fleet support.",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  serviceType: "ELD Monitoring",
}

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "ELD Monitoring" },
])

export default function ELDMonitoringPage() {
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
              <span className="text-foreground/80">ELD Monitoring</span>
            </nav>
            <div className="text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">Continuous Fleet Oversight</p>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD Monitoring 24/7</h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground leading-relaxed sm:text-base">
                USA ELD monitors fleet electronic logs around the clock, surfaces potential issues early, follows up with drivers when attention is needed, and helps fleet teams stay organized for inspections and day-to-day compliance work.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <Link href="/#contact">Start Monitoring <ArrowRight className="h-4 w-4" /></Link>
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
            <h2 className="mb-8 text-center text-xl font-bold text-foreground sm:mb-10 sm:text-2xl">ELD Monitoring Features</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Eye, title: "24/7 Monitoring", desc: "Continuous review day and night" },
                { icon: Bell, title: "Fast Alerts", desc: "Fleet and driver follow-up when issues appear" },
                { icon: Activity, title: "Operational Visibility", desc: "Ongoing review of ELD and logbook activity" },
                { icon: BarChart3, title: "Compliance Reports", desc: "Structured information for fleet follow-up" },
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
            <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">Real-Time ELD Monitoring for Trucking Fleets</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                ELD and HOS issues can develop quickly during normal freight operations. A logging mistake, a missing detail, a device synchronization problem, or a developing HOS concern may need attention before the driver reaches an inspection.
              </p>
              <p>
                USA ELD provides continuous monitoring that keeps an eye on electronic logs throughout the day and night. Our team reviews operational ELD information and flags items that may need driver or fleet-manager follow-up.
              </p>
              <p>
                Monitoring is most useful when it leads to action. When an issue is identified, the team can contact the appropriate person, explain what requires attention, and support the next compliant step rather than simply generating another alert.
              </p>
              <p>
                Proactive review helps fleets reduce avoidable mistakes and maintain better inspection readiness. Our team has experience supporting hundreds of roadside inspections and dozens of DOT audits.
              </p>
              <p>
                Monitoring also helps safety and fleet teams spot recurring patterns, understand where drivers may need additional guidance, and keep compliance tasks from being buried inside dispatch operations.
              </p>
              <p>
                Instead of asking dispatchers to watch logs around the clock, USA ELD provides a dedicated compliance-focused workflow so dispatch can stay focused on freight while drivers still have access to support.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">ELD Monitoring Service Includes:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "24/7 log monitoring",
                  "Issue alerts and follow-up",
                  "HOS workflow review",
                  "Driver notifications",
                  "Fleet manager follow-up",
                  "Compliance reporting",
                  "Pattern review",
                  "Inspection-readiness support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <Activity className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">400+ Inspections Supported</h3>
                  <p className="text-sm text-muted-foreground">Operational experience across roadside inspection workflows</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Link href="/eld-service" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">ELD Service</Link>
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
