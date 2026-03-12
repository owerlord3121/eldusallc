import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, FileSearch, Shield, FileCheck, Award } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "DOT Audit Help | Professional DOT Audit Preparation Service",
  description:
    "Professional DOT audit help and preparation service. Complete audit support, document preparation, compliance review, and guidance through the entire DOT audit process.",
  keywords: [
    "DOT audit help",
    "DOT audit preparation",
    "DOT compliance",
    "DOT audit support",
    "trucking audit help",
    "FMCSA audit",
    "DOT inspection help",
    "compliance audit service",
  ],
  alternates: { canonical: "https://eldusallc.com/dot-audit-help" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/dot-audit-help",
    title: "DOT Audit Help | Professional DOT Audit Preparation",
    description:
      "Complete DOT audit help service. Document preparation, compliance review, and expert guidance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOT Audit Help | DOT Audit Preparation Service",
    description: "Professional DOT audit help. Complete preparation and guidance through DOT audits.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DOT Audit Help",
  provider: {
    "@type": "Organization",
    name: "NextLog FullService",
  },
  description:
    "Professional DOT audit help and preparation service. Complete audit support, document preparation, and compliance review.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "DOT Audit Preparation",
}

export default function DOTAuditHelpPage() {
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
                Audit Success Guaranteed
              </p>
              <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                DOT Audit Help
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground leading-relaxed sm:text-base">
                Facing a DOT audit can be stressful. Our expert team provides complete DOT audit help—from document preparation to guidance through the entire process. We've helped trucking companies pass over 30 DOT audits successfully.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <Link href="/#contact">
                    Get Audit Help <ArrowRight className="h-4 w-4" />
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
              Our DOT Audit Help Process
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: FileSearch, title: "Document Review", desc: "Complete review of all required documents" },
                { icon: Shield, title: "Gap Analysis", desc: "Identify compliance gaps before audit" },
                { icon: FileCheck, title: "Preparation", desc: "Organize and prepare all documentation" },
                { icon: Award, title: "Audit Support", desc: "Guide you through the entire process" },
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
              Professional DOT Audit Preparation and Support
            </h2>
            
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Receiving a DOT audit notification is one of the most stressful experiences for any trucking company. The consequences of a failed audit can be severe, including fines, out-of-service orders, and damage to your safety rating. That's why professional DOT audit help is essential for protecting your business.
              </p>
              <p>
                At NextLog FullService, we provide comprehensive DOT audit help that covers every aspect of the audit process. Our team has extensive experience with FMCSA compliance requirements and has helped trucking companies of all sizes successfully navigate DOT audits.
              </p>
              <p>
                Our DOT audit help begins with a thorough review of your current compliance status. We examine your ELD records, driver qualification files, vehicle maintenance records, drug and alcohol testing documentation, and all other areas that FMCSA auditors will scrutinize. This gap analysis identifies any issues that need to be addressed before the audit.
              </p>
              <p>
                Document preparation is a critical component of our DOT audit help service. Many companies fail audits not because of actual violations, but because they can't locate or properly present required documentation. We help you organize all necessary records and ensure they meet FMCSA requirements.
              </p>
              <p>
                During the audit itself, our DOT audit help includes guidance on what to expect and how to respond to auditor questions. We can help you understand what documentation is being requested and ensure you provide complete, accurate information. This support can make the difference between a satisfactory and unsatisfactory audit result.
              </p>
              <p>
                The best DOT audit help is preventive. Our ongoing compliance monitoring helps you maintain audit-ready status year-round. We identify and address potential issues before they become violations, so when audit time comes, you're already prepared.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">DOT Audit Areas We Help With:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "ELD/HOS compliance",
                  "Driver qualification files",
                  "Vehicle maintenance records",
                  "Drug & alcohol testing",
                  "Insurance documentation",
                  "IFTA/IRP compliance",
                  "Accident register",
                  "Safety management controls",
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
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">30+ Successful DOT Audits</h3>
                  <p className="text-sm text-muted-foreground">Our track record speaks for itself</p>
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
              <Link href="/eld-monitoring" className="rounded-full border border-border/50 bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                ELD Monitoring
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
