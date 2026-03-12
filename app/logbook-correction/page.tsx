import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, FileEdit, Search, AlertTriangle, CheckCheck } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Logbook Correction | Professional ELD Logbook Correction Service",
  description:
    "Professional logbook correction service for trucking companies. Daily log reviews, error correction, HOS compliance, and violation prevention by ELD experts.",
  keywords: [
    "logbook correction",
    "ELD logbook correction",
    "logbook help",
    "log correction service",
    "HOS correction",
    "driver logbook service",
    "ELD log correction",
    "trucking logbook help",
  ],
  alternates: { canonical: "https://eldusallc.com/logbook-correction" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/logbook-correction",
    title: "Logbook Correction | Professional ELD Logbook Correction",
    description:
      "Daily logbook reviews and error correction service. Prevent violations before inspections.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logbook Correction | ELD Logbook Correction Service",
    description: "Professional logbook correction service. Daily reviews, error correction, violation prevention.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logbook Correction Service",
  provider: {
    "@type": "Organization",
    name: "NextLog FullService",
  },
  description:
    "Professional logbook correction service for trucking companies. Daily log reviews, error correction, and HOS compliance assistance.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "Logbook Correction",
}

export default function LogbookCorrectionPage() {
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
                Error-Free Compliance
              </p>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Logbook Correction
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground leading-relaxed sm:text-base">
                Our expert team reviews your driver logs daily, identifies errors, and helps correct them before they become costly violations. Keep your fleet compliant with professional logbook correction service.
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
              Our Logbook Correction Process
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Search, title: "Daily Review", desc: "We review every logbook entry daily" },
                { icon: AlertTriangle, title: "Error Detection", desc: "Identify HOS violations and mistakes" },
                { icon: FileEdit, title: "Correction", desc: "Help drivers fix errors properly" },
                { icon: CheckCheck, title: "Verification", desc: "Confirm compliance before submission" },
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
              Professional Logbook Correction for Trucking Companies
            </h2>
            
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Accurate logbook entries are essential for trucking compliance, but many drivers struggle with the complexities of Hours of Service (HOS) regulations. At NextLog FullService, our logbook correction service helps ensure your drivers' electronic logs are accurate and compliant with all federal regulations.
              </p>
              <p>
                Our logbook correction process begins with daily reviews of all driver logs. Our experienced team examines each entry for potential errors, including improper duty status changes, missing information, timing violations, and HOS rule infractions. When we identify an issue, we immediately notify the driver and help them make the necessary corrections.
              </p>
              <p>
                The key to effective logbook correction is catching errors early. Many violations that result in fines during DOT inspections could have been prevented with proper log review. Our logbook correction service acts as a safety net, identifying problems before they become costly issues.
              </p>
              <p>
                Common logbook errors we help correct include incorrect duty status selections, improper use of personal conveyance or yard moves, missing required annotations, and inaccurate location information. Our team is trained to spot these issues and guide drivers through the correction process.
              </p>
              <p>
                Our logbook correction service also includes education. We don't just fix errors—we help drivers understand what they did wrong and how to avoid similar mistakes in the future. This training approach leads to fewer errors over time and improved overall compliance.
              </p>
              <p>
                Many trucking companies underestimate the importance of professional logbook correction until they face a DOT audit or receive violations during a roadside inspection. Don't wait for problems to occur. Our proactive logbook correction service helps you stay ahead of compliance issues.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">Logbook Errors We Help Correct:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Duty status errors",
                  "Missing log entries",
                  "Timing violations",
                  "HOS rule infractions",
                  "Improper annotations",
                  "Location errors",
                  "Personal conveyance misuse",
                  "Unidentified driving time",
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
              <Link href="/eld-monitoring" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                ELD Monitoring
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
