"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, AlertTriangle, FileWarning, Clock, Shield, Phone, CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DOTViolationsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border/40 bg-card py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
              DOT Compliance Guide
            </span>
          </div>
          <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            DOT Violations Guide for Truck Drivers | ELD Logbook & HOS Violations
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base leading-relaxed max-w-3xl">
            Complete guide to understanding DOT violations, how they affect your CSA score, and what you can do to fix 
            and prevent ELD logbook and HOS violations. Stay compliant and avoid costly fines.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm sm:prose-base max-w-none">
            
            {/* What are DOT Violations */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <FileWarning className="h-5 w-5 text-primary" />
                What Are DOT Violations?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DOT violations are infractions of Federal Motor Carrier Safety Administration (FMCSA) regulations 
                that govern commercial motor vehicle (CMV) operations in the United States. These violations are 
                recorded during roadside inspections, compliance reviews, and DOT audits.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every DOT violation affects your Compliance, Safety, Accountability (CSA) score. A high CSA score 
                can lead to increased inspections, intervention from FMCSA, and potential loss of operating authority. 
                Understanding these violations is the first step to avoiding them.
              </p>
              
              <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6 mt-6">
                <h3 className="font-semibold text-foreground mb-3">DOT Violation Categories:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>Hours of Service (HOS)</strong> - Driving time limits, required breaks, and rest periods</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>ELD/Logbook</strong> - Electronic logging device malfunctions and record-keeping errors</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>Vehicle Maintenance</strong> - Brakes, tires, lights, and safety equipment defects</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>Driver Fitness</strong> - Medical certificates, CDL status, and qualifications</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>Hazardous Materials</strong> - Placarding, documentation, and handling requirements</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Most Common Violations */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Most Common DOT Violations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                According to FMCSA data, these are the most frequently cited violations during roadside inspections. 
                Being aware of these can help you focus your compliance efforts where they matter most.
              </p>

              {/* Logbook Violations */}
              <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6 mb-4">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-500">1</span>
                  Logbook & ELD Violations
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>395.8(a)</strong> - Driver not in possession of required ELD records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>395.8(e)</strong> - False record of duty status (log falsification)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>395.22(a)</strong> - ELD not registered with FMCSA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>395.24(c)</strong> - ELD malfunction - no proper documentation</span>
                  </li>
                </ul>
              </div>

              {/* HOS Violations */}
              <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6 mb-4">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 text-xs font-bold text-orange-500">2</span>
                  Hours of Service (HOS) Violations
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    <span><strong>395.3(a)(1)</strong> - Exceeding 11-hour driving limit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    <span><strong>395.3(a)(2)</strong> - Exceeding 14-hour on-duty limit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    <span><strong>395.3(a)(3)(ii)</strong> - 30-minute break violation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    <span><strong>395.3(b)</strong> - Exceeding 60/70-hour limit</span>
                  </li>
                </ul>
              </div>

              {/* ELD Malfunction Violations */}
              <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10 text-xs font-bold text-yellow-500">3</span>
                  ELD Malfunction Violations
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span><strong>395.34(a)</strong> - ELD malfunction - driver failed to reconstruct logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span><strong>395.34(c)</strong> - ELD malfunction - carrier failed to repair within 8 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span><strong>395.26(c)</strong> - No ELD instruction sheet in vehicle</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How to Fix ELD Violations */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <Shield className="h-5 w-5 text-primary" />
                How to Fix ELD Violations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you've received an ELD or logbook violation, taking immediate corrective action is crucial. Here's 
                a step-by-step guide to fixing your violations and preventing future issues.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-2">Step 1: Review the Violation Report</h3>
                  <p className="text-sm text-muted-foreground">
                    Carefully examine the inspection report to understand exactly what was cited. Note the violation 
                    code, severity weight, and any comments from the inspector.
                  </p>
                </div>
                
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-2">Step 2: Correct the Log Error</h3>
                  <p className="text-sm text-muted-foreground">
                    Use your ELD's edit function to correct any errors. Add detailed annotations explaining the 
                    correction. Always be honest - falsifying logs results in much more severe penalties.
                  </p>
                </div>
                
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-2">Step 3: Request DataQs Review</h3>
                  <p className="text-sm text-muted-foreground">
                    If you believe the violation was issued in error, you can challenge it through the FMCSA DataQs 
                    system. Provide documentation supporting your case within 3 years of the violation date.
                  </p>
                </div>
                
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-2">Step 4: Implement Prevention Measures</h3>
                  <p className="text-sm text-muted-foreground">
                    Work with your carrier or an <Link href="/eld-support" className="text-primary hover:underline">ELD support service</Link> to 
                    implement monitoring and alerts that prevent similar violations in the future.
                  </p>
                </div>
              </div>
            </section>

            {/* How to Avoid Out Of Service */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <Clock className="h-5 w-5 text-primary" />
                How to Avoid Out Of Service (OOS)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                An Out of Service order stops you from driving until the violation is corrected. This means lost 
                time, lost money, and a significant impact on your CSA score. Here's how to avoid OOS orders:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">DO:</h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                      <span>Keep current logs available for 7 days + today</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                      <span>Report ELD malfunctions immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                      <span>Take required 10-hour breaks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                      <span>Keep ELD instruction sheet in cab</span>
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">DON'T:</h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-red-500 mt-0.5 shrink-0" />
                      <span>Drive past 11-hour limit (3+ hours = OOS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-red-500 mt-0.5 shrink-0" />
                      <span>Falsify logbook records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-red-500 mt-0.5 shrink-0" />
                      <span>Drive without required 10-hour off-duty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-red-500 mt-0.5 shrink-0" />
                      <span>Ignore ELD malfunction warnings</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-6">
                <h3 className="font-semibold text-foreground mb-2">OOS Criteria for HOS Violations:</h3>
                <p className="text-sm text-muted-foreground">
                  You will be placed Out of Service if you exceed the driving limit by <strong>3 or more hours</strong>, 
                  have no record of duty status (no logs), or have falsified your logbook. The OOS order remains 
                  in effect until you have taken the required rest break.
                </p>
              </div>
            </section>

            {/* How ELD Support Can Help */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <Phone className="h-5 w-5 text-primary" />
                How ELD Support Can Help
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional ELD support services like NextLog FullService provide 24/7 monitoring and assistance 
                to help drivers stay compliant and avoid violations before they happen.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Real-Time Monitoring</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Our team monitors your logs 24/7 and alerts you before you approach HOS limits or make 
                    common errors that lead to violations.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Logbook Correction</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Professional <Link href="/logbook-correction" className="text-primary hover:underline">logbook correction service</Link> to 
                    fix errors properly with correct annotations.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">DOT Audit Preparation</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Complete <Link href="/dot-audit-help" className="text-primary hover:underline">DOT audit preparation</Link> including 
                    document review and compliance check.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Violation Prevention</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Proactive alerts and driver coaching to prevent violations and keep your CSA score clean.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center sm:p-8">
            <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
              Need Help With DOT Violations?
            </h2>
            <p className="mb-5 text-sm text-muted-foreground sm:text-base">
              Contact our 24/7 ELD support team for professional assistance with logbook corrections, 
              violation prevention, and DOT audit preparation.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
                <Link href="/#contact">
                  Get ELD Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/eld-support">Learn About Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-10 border-t border-border/40 pt-8">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Related Resources:</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/logbook-correction" className="rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                Logbook Correction
              </Link>
              <Link href="/eld-support" className="rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                ELD Support
              </Link>
              <Link href="/dot-audit-help" className="rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                DOT Audit Help
              </Link>
              <Link href="/eld-violations" className="rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                ELD Violations List
              </Link>
              <Link href="/blog/eld-violations-list" className="rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                Complete Violations Guide
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-6">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-semibold text-foreground hover:text-primary">
            NextLog FullService
          </Link>
          <p className="mt-2 text-xs text-muted-foreground">
            Professional ELD Service USA | 24/7 Support
          </p>
        </div>
      </footer>
    </main>
  )
}
