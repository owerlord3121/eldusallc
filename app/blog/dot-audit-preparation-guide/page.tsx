import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle2, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "DOT Audit Preparation Guide 2026 | Complete Compliance Checklist",
  description:
    "Complete guide to preparing for DOT audits. Learn what documents you need, common audit issues, and how to pass your DOT compliance review with confidence.",
  keywords: [
    "DOT audit preparation",
    "DOT audit guide",
    "DOT compliance audit",
    "FMCSA audit preparation",
    "trucking audit checklist",
    "new entrant audit",
    "safety audit preparation",
    "DOT audit documents",
    "pass DOT audit",
    "DOT compliance review",
  ],
  alternates: { canonical: "https://eldusallc.com/blog/dot-audit-preparation-guide" },
  openGraph: {
    type: "article",
    url: "https://eldusallc.com/blog/dot-audit-preparation-guide",
    title: "DOT Audit Preparation Guide 2026 | Complete Compliance Checklist",
    description:
      "Complete guide to preparing for DOT audits with documentation requirements and common issues.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DOT Audit Preparation Guide: Everything You Need",
  description:
    "Complete guide to preparing for DOT audits including documentation requirements and common issues.",
  datePublished: "2026-02-15",
  dateModified: "2026-02-15",
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

export default function DOTAuditPreparationGuidePage() {
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
                Audits
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                February 15, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                16 min read
              </span>
            </div>
            <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              DOT Audit Preparation Guide: Everything You Need
            </h1>
            <p className="text-lg text-muted-foreground">
              DOT audits can be intimidating, but proper preparation makes all the
              difference. This comprehensive guide covers everything motor carriers
              need to know to pass their compliance review with confidence.
            </p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The Federal Motor Carrier Safety Administration (FMCSA) conducts compliance
              reviews and safety audits to ensure motor carriers operate safely and follow
              federal regulations. Whether you are facing a new entrant safety audit, a
              compliance review triggered by high CSA scores, or a focused investigation,
              understanding what to expect and how to prepare is essential.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Types of DOT Audits
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FMCSA conducts several types of audits, each with different triggers and
              focuses. Understanding which type you are facing helps you prepare
              appropriately.
            </p>

            <div className="my-6 space-y-4">
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">New Entrant Safety Audit</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Required for all new motor carriers within the first 12-18 months of
                      receiving operating authority. Evaluates basic safety management
                      controls and regulatory compliance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Compliance Review (CR)</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Comprehensive on-site examination of carrier operations. Can be triggered
                      by high CSA scores, complaints, crashes, or random selection. Results in
                      a safety rating.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Focused Investigation</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Targets specific areas of concern such as Hours of Service, drug and
                      alcohol testing, or driver qualification. Limited in scope but can
                      expand if issues are found.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-5">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Offsite Investigation</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Document review conducted at FMCSA office or remotely. Carrier submits
                      requested documentation for review. May convert to on-site if issues
                      are discovered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Essential Documentation Checklist
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Proper documentation is the foundation of DOT compliance. Auditors will
              request specific records, and failure to produce them can result in
              violations and poor safety ratings.
            </p>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Driver Qualification Files
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              You must maintain a Driver Qualification (DQ) file for every driver. These
              files must be kept for the duration of employment plus three years.
            </p>
            <div className="my-4 rounded-xl border border-border/50 bg-card p-5">
              <ul className="space-y-2">
                {[
                  "Employment application (going back 3 years for commercial driving)",
                  "Motor Vehicle Record (MVR) from each state held in past 3 years",
                  "Annual MVR review and certification",
                  "Road test certificate or equivalent",
                  "Medical examiners certificate (current)",
                  "Annual review of driving record",
                  "Previous employer safety performance history",
                  "Entry-level driver training certificate (if applicable)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Hours of Service Records
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              ELD records and supporting documents must be retained for six months.
              Auditors will review these for compliance with HOS regulations.
            </p>
            <div className="my-4 rounded-xl border border-border/50 bg-card p-5">
              <ul className="space-y-2">
                {[
                  "ELD records for all drivers (6 months)",
                  "Supporting documents (bills of lading, fuel receipts)",
                  "ELD malfunction records and paper logs",
                  "Driver certification of 7/8 day records",
                  "Unassigned driving time documentation",
                  "ELD user accounts and access records",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Drug and Alcohol Testing Records
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Carriers must maintain a comprehensive drug and alcohol testing program
              that meets all FMCSA requirements.
            </p>
            <div className="my-4 rounded-xl border border-border/50 bg-card p-5">
              <ul className="space-y-2">
                {[
                  "Pre-employment drug test results",
                  "Random testing records and selection documentation",
                  "Post-accident testing documentation",
                  "Reasonable suspicion testing records",
                  "Return-to-duty and follow-up testing (if applicable)",
                  "Consortium/third-party administrator agreement",
                  "Drug and alcohol policy signed by drivers",
                  "Clearinghouse query results (full and limited)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Vehicle Maintenance Records
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Vehicle inspection, repair, and maintenance records demonstrate your
              commitment to operating safe equipment.
            </p>
            <div className="my-4 rounded-xl border border-border/50 bg-card p-5">
              <ul className="space-y-2">
                {[
                  "Driver Vehicle Inspection Reports (DVIRs) - 3 months",
                  "Annual periodic inspection records",
                  "Maintenance and repair records",
                  "Brake inspector qualifications",
                  "Vehicle registration and insurance",
                  "Lease agreements (if applicable)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Common Audit Issues and How to Avoid Them
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Certain violations appear frequently in DOT audits. Understanding these
              common issues helps you focus your preparation efforts.
            </p>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Hours of Service Violations
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              HOS violations are among the most common findings in DOT audits. These
              include exceeding driving limits, inadequate rest breaks, and falsified
              records. Implement real-time ELD monitoring to catch and correct issues
              before they become patterns.
            </p>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Incomplete Driver Qualification Files
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Missing documents in DQ files is a frequent finding. Common missing items
              include annual MVR reviews, medical certificates, and previous employer
              inquiries. Conduct regular file audits to ensure completeness.
            </p>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Drug and Alcohol Testing Deficiencies
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Testing program deficiencies can include insufficient random testing rates,
              missing pre-employment tests, and failure to query the Clearinghouse. Work
              with a qualified consortium to ensure program compliance.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Preparing for the Audit Day
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When you receive notice of an audit, take these steps to prepare:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Organize all requested documents in advance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Conduct an internal pre-audit review</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Designate a knowledgeable person to work with the auditor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Prepare a clean, quiet workspace for the auditor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Correct any obvious deficiencies before the audit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Be honest and cooperative during the audit</span>
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              During the Audit
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              How you conduct yourself during the audit matters. Be professional,
              cooperative, and honest. Answer questions directly without volunteering
              excessive information. If you do not know the answer to a question, say
              so and offer to find the information.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Take notes during the audit about what the auditor reviews and any
              concerns they raise. This helps you understand potential findings and
              prepare your response. Ask questions if you do not understand something
              the auditor says or requests.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              After the Audit
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              After the audit, you will receive a report detailing any violations
              found. You have the right to respond to the findings and provide
              evidence of corrective actions. For compliance reviews, you may also
              receive a proposed safety rating.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Develop a corrective action plan that addresses each violation. Implement
              systemic changes to prevent recurrence. Document all corrective actions
              thoroughly. If you disagree with findings, you can request a review or
              appeal through the appropriate process.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Maintaining Ongoing Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The best audit preparation is maintaining continuous compliance. Do not
              wait until you receive an audit notice to get your house in order.
              Implement these ongoing practices:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Conduct quarterly internal compliance audits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Monitor your CSA scores monthly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Implement 24/7 ELD monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Train drivers and staff on compliance requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Use compliance management software</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Work with professional compliance services</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 sm:p-8">
            <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
              Ready for Your DOT Audit?
            </h2>
            <p className="mb-4 text-sm text-muted-foreground sm:text-base">
              Our team helps carriers prepare for and pass DOT audits with comprehensive compliance support.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Audit Preparation Help
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 border-t border-border/40 pt-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Related Articles</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/blog/dot-inspection-checklist"
                className="rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="text-sm font-medium text-foreground">DOT Inspection Checklist</span>
              </Link>
              <Link
                href="/blog/eld-violations-list"
                className="rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="text-sm font-medium text-foreground">Complete ELD Violations List</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
