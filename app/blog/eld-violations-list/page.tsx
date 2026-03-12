import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete ELD Violations List 2026 | All FMCSA Violations & Penalties",
  description:
    "Comprehensive list of all ELD violations in 2026, including violation codes, severity weights, and penalties. Learn how to avoid ELD violations and protect your CSA score.",
  keywords: [
    "ELD violations list",
    "ELD violation codes",
    "FMCSA violations",
    "ELD penalties",
    "HOS violations",
    "CSA score violations",
    "ELD compliance violations",
    "trucking violations",
    "logbook violations",
    "driver violations list",
  ],
  alternates: { canonical: "https://eldusallc.com/blog/eld-violations-list" },
  openGraph: {
    type: "article",
    url: "https://eldusallc.com/blog/eld-violations-list",
    title: "Complete ELD Violations List 2026 | All FMCSA Violations & Penalties",
    description:
      "Comprehensive list of all ELD violations in 2026, including violation codes, severity weights, and penalties.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complete ELD Violations List: What Every Driver Must Know",
  description:
    "Comprehensive guide to all ELD violations, penalty points, and how to avoid them.",
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  author: {
    "@type": "Organization",
    name: "NextLog FullService",
  },
  publisher: {
    "@type": "Organization",
    name: "NextLog FullService",
    url: "https://eldusallc.com",
  },
}

export default function ELDViolationsListPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="py-16 sm:py-20 lg:py-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-8 border-b border-border/40 pb-8">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Compliance
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                March 1, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                12 min read
              </span>
            </div>
            <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Complete ELD Violations List: What Every Driver Must Know
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding ELD violations is critical for every commercial driver and fleet manager.
              This comprehensive guide covers all violation types, severity weights, and proven
              strategies to maintain compliance.
            </p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The Electronic Logging Device (ELD) mandate has fundamentally changed how trucking
              companies and drivers track Hours of Service (HOS). While ELDs have simplified
              record-keeping, they have also introduced a new category of potential violations that
              can significantly impact your Compliance, Safety, Accountability (CSA) score and
              operating authority.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Understanding ELD Violation Categories
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Federal Motor Carrier Safety Administration (FMCSA) categorizes ELD violations
              into several distinct groups. Each category carries different severity weights that
              affect your CSA score differently. Understanding these categories is the first step
              toward maintaining compliance.
            </p>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Form and Manner Violations
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Form and manner violations occur when your ELD records do not meet the required format
              or contain incomplete information. These violations typically carry lower severity
              weights but can accumulate quickly if not addressed. Common form and manner violations
              include missing driver signatures, incomplete shipping document information, and
              failure to include required annotations.
            </p>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Hours of Service Violations
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              HOS violations remain the most serious category of ELD-related infractions. These
              violations directly relate to driver fatigue regulations designed to keep roads safe.
              The 11-hour driving limit violation occurs when a driver exceeds the maximum allowed
              driving time after 10 consecutive hours off duty. Similarly, the 14-hour on-duty
              violation happens when driving occurs beyond 14 hours after coming on duty.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Complete List of ELD Violations and Codes
            </h2>

            <div className="my-6 overflow-x-auto rounded-xl border border-border/50 bg-card">
              <table className="w-full text-sm">
                <thead className="border-b border-border/50 bg-secondary/50">
                  <tr>
                    <th className="p-3 text-left font-semibold text-foreground">Violation Code</th>
                    <th className="p-3 text-left font-semibold text-foreground">Description</th>
                    <th className="p-3 text-left font-semibold text-foreground">Severity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  <tr>
                    <td className="p-3 text-muted-foreground">395.8(a)</td>
                    <td className="p-3 text-muted-foreground">No ELD or AOBRD installed</td>
                    <td className="p-3 text-primary font-medium">10 points</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">395.8(a)(1)</td>
                    <td className="p-3 text-muted-foreground">ELD not registered with FMCSA</td>
                    <td className="p-3 text-primary font-medium">5 points</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">395.22(a)</td>
                    <td className="p-3 text-muted-foreground">No ELD instruction sheet</td>
                    <td className="p-3 text-primary font-medium">1 point</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">395.22(b)</td>
                    <td className="p-3 text-muted-foreground">No ELD user manual</td>
                    <td className="p-3 text-primary font-medium">1 point</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">395.24(c)</td>
                    <td className="p-3 text-muted-foreground">Driver not properly trained on ELD</td>
                    <td className="p-3 text-primary font-medium">2 points</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">395.26(a)</td>
                    <td className="p-3 text-muted-foreground">ELD malfunction not reported</td>
                    <td className="p-3 text-primary font-medium">3 points</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">395.26(c)</td>
                    <td className="p-3 text-muted-foreground">Paper logs not kept during ELD malfunction</td>
                    <td className="p-3 text-primary font-medium">5 points</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">395.3(a)(1)</td>
                    <td className="p-3 text-muted-foreground">Exceeding 11-hour driving limit</td>
                    <td className="p-3 text-primary font-medium">7 points</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">395.3(a)(2)</td>
                    <td className="p-3 text-muted-foreground">Exceeding 14-hour on-duty limit</td>
                    <td className="p-3 text-primary font-medium">7 points</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">395.3(b)</td>
                    <td className="p-3 text-muted-foreground">Violating 60/70 hour rule</td>
                    <td className="p-3 text-primary font-medium">7 points</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              ELD Malfunction Violations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When your ELD experiences a malfunction, specific protocols must be followed to avoid
              violations. The driver must note the malfunction on the ELD or on paper logs,
              reconstruct the record of duty status for the current 24-hour period and the previous
              7 consecutive days, and continue to manually prepare records of duty status until the
              ELD is serviced and back in compliance.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The motor carrier must correct the malfunction within 8 days of discovering it. Failure
              to repair or replace a malfunctioning ELD within this timeframe results in additional
              violations. During the malfunction period, drivers must maintain paper logs that meet
              all FMCSA requirements.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Data Transfer Violations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              ELDs must be capable of transferring data to authorized safety officials upon request.
              Data transfer violations occur when the ELD cannot properly transmit records via
              wireless web services, email, or USB 2.0. Drivers should regularly verify that their
              ELD can successfully complete data transfers to avoid being cited during roadside
              inspections.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              How ELD Violations Affect Your CSA Score
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The CSA program uses violation severity weights to calculate BASIC (Behavior Analysis
              and Safety Improvement Categories) scores. ELD and HOS violations fall under the Hours
              of Service Compliance BASIC, which is one of seven categories monitored by FMCSA.
              High scores in this category can trigger interventions ranging from warning letters
              to investigations.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Violations remain on your record for 24 months from the inspection date. The most
              recent violations carry more weight through time-weighted calculations. This means a
              violation from last month affects your score more than one from 18 months ago.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Strategies to Avoid ELD Violations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Prevention is always better than dealing with violations after they occur. Implement
              these proven strategies to maintain compliance:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Conduct pre-trip ELD checks to verify proper functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Keep your ELD user manual and instruction sheet in the vehicle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Review your logs daily before certifying</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Understand and properly use status annotations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Maintain backup paper logs in case of ELD malfunction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Use professional ELD monitoring services for 24/7 compliance oversight</span>
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              What to Do If You Receive an ELD Violation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you receive an ELD violation during a roadside inspection, remain calm and
              professional. Request a copy of the inspection report and review it carefully. You
              have the right to submit a DataQs challenge if you believe the violation was issued
              in error. Document everything and contact your fleet manager or compliance team
              immediately.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For carriers, addressing violations promptly demonstrates a commitment to safety.
              Implement corrective actions, provide additional driver training if needed, and
              document all steps taken to prevent future violations. This documentation can be
              valuable during DOT audits.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Professional ELD Compliance Support
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Managing ELD compliance across a fleet requires constant vigilance. Professional ELD
              monitoring services can identify potential violations before they become problems.
              These services typically include real-time log monitoring, automatic violation alerts,
              and expert support to help resolve issues quickly.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              At NextLog FullService, we provide comprehensive ELD monitoring and compliance support
              24/7. Our team of experts monitors your drivers logs in real-time, identifies
              potential violations, and helps correct issues before they result in citations during
              inspections.
            </p>
          </div>

          <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 sm:p-8">
            <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
              Need Help Avoiding ELD Violations?
            </h2>
            <p className="mb-4 text-sm text-muted-foreground sm:text-base">
              Our 24/7 ELD monitoring service catches potential violations before they become problems.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 border-t border-border/40 pt-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Related Articles</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/blog/how-to-fix-eld-logbook-mistakes"
                className="rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="text-sm font-medium text-foreground">How to Fix ELD Logbook Mistakes</span>
              </Link>
              <Link
                href="/blog/dot-inspection-checklist"
                className="rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="text-sm font-medium text-foreground">DOT Inspection Checklist</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
