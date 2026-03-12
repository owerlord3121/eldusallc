import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Activity, Eye, Bell, BarChart3 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ELD Monitoring 24/7 | Real-Time ELD Monitoring Service",
  description:
    "24/7 real-time ELD monitoring service for trucking companies. Continuous log monitoring, instant alerts, proactive error detection, and compliance tracking.",
  keywords: [
    "ELD monitoring",
    "ELD monitoring 24/7",
    "real-time ELD monitoring",
    "ELD tracking",
    "fleet ELD monitoring",
    "log monitoring service",
    "ELD alerts",
    "continuous monitoring",
  ],
  alternates: { canonical: "https://eldusallc.com/eld-monitoring" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-monitoring",
    title: "ELD Monitoring 24/7 | Real-Time ELD Monitoring Service",
    description:
      "24/7 real-time ELD monitoring. Continuous tracking, instant alerts, proactive error detection.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Monitoring 24/7 | Real-Time Monitoring",
    description: "24/7 ELD monitoring service. Continuous tracking and proactive error detection.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ELD Monitoring 24/7",
  provider: {
    "@type": "Organization",
    name: "NextLog FullService",
  },
  description:
    "24/7 real-time ELD monitoring service for trucking companies. Continuous log monitoring, instant alerts, and proactive error detection.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "ELD Monitoring",
}

export default function ELDMonitoringPage() {
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
                Never Miss a Violation
              </p>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                ELD Monitoring 24/7
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground leading-relaxed sm:text-base">
                Our team monitors your fleet's electronic logs around the clock. We catch errors before they become violations, alert you to potential issues, and help maintain your compliance status continuously.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <Link href="/#contact">
                    Start Monitoring <ArrowRight className="h-4 w-4" />
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
              ELD Monitoring Features
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Eye, title: "24/7 Monitoring", desc: "Continuous monitoring day and night" },
                { icon: Bell, title: "Instant Alerts", desc: "Immediate notification of issues" },
                { icon: Activity, title: "Real-Time Data", desc: "Live tracking of all ELD activity" },
                { icon: BarChart3, title: "Reports", desc: "Detailed compliance reporting" },
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
              Real-Time ELD Monitoring for Trucking Fleets
            </h2>
            
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                In today's trucking industry, compliance issues can develop quickly. A driver makes a logging error, an HOS violation occurs, or a technical problem affects the ELD—and you may not know about it until an inspector finds it. That's why continuous ELD monitoring is essential for modern trucking operations.
              </p>
              <p>
                NextLog FullService provides 24/7 ELD monitoring that keeps watch over your fleet's electronic logs every minute of every day. Our experienced team reviews ELD data in real-time, identifying errors, potential violations, and compliance issues as they happen.
              </p>
              <p>
                Our ELD monitoring service goes beyond passive observation. When we detect a problem, we take immediate action. We contact drivers to help them correct errors, alert fleet managers to developing issues, and provide guidance on resolving problems before they become official violations.
              </p>
              <p>
                The proactive nature of our ELD monitoring has helped trucking companies dramatically reduce their violation rates. By catching and correcting issues early, we prevent the citations and fines that result from failed inspections. Our monitoring has helped clients pass over 400 inspections successfully.
              </p>
              <p>
                ELD monitoring also provides valuable insights into your fleet's operations. We track patterns in HOS usage, identify drivers who may need additional training, and provide reports that help you optimize your operations. This data-driven approach makes your fleet more efficient while maintaining compliance.
              </p>
              <p>
                Many trucking companies try to manage ELD monitoring internally, but the reality is that effective monitoring requires dedicated attention around the clock. Your dispatch team has other priorities. Our ELD monitoring service provides focused, expert attention to your electronic logs 24/7, freeing your team to focus on moving freight.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">ELD Monitoring Service Includes:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "24/7 real-time monitoring",
                  "Instant error alerts",
                  "HOS violation prevention",
                  "Driver notifications",
                  "Fleet manager alerts",
                  "Compliance reporting",
                  "Pattern analysis",
                  "Performance insights",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <Activity className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">400+ Inspections Passed</h3>
                  <p className="text-sm text-muted-foreground">Thanks to our proactive ELD monitoring</p>
                </div>
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
