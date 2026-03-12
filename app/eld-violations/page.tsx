"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, FileText, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ELDViolationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ELD Violations List (2026 Guide)",
            description:
              "Complete guide to ELD violations for truck drivers. Learn about common violations, how to fix logbook errors, and avoid DOT inspection issues.",
            author: {
              "@type": "Organization",
              name: "NextLog FullService",
            },
            publisher: {
              "@type": "Organization",
              name: "NextLog FullService",
              logo: {
                "@type": "ImageObject",
                url: "https://eldusallc.com/images/logo.png",
              },
            },
            datePublished: "2026-01-15",
            dateModified: "2026-03-01",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://eldusallc.com/eld-violations",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/40 bg-card">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="NextLog FullService"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-bold text-foreground sm:text-base">
                Next<span className="text-primary">Log</span>
              </span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              Back to Blog
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          {/* Breadcrumb */}
          <nav className="mb-6 text-xs text-muted-foreground sm:text-sm">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">ELD Violations List</span>
          </nav>

          {/* Title */}
          <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            ELD Violations List (2026 Guide)
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-sm">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">ELD Compliance</span>
            <span>Updated: March 2026</span>
            <span>15 min read</span>
          </div>

          {/* Introduction */}
          <div className="prose prose-sm max-w-none sm:prose-base">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Understanding ELD violations is crucial for every truck driver and fleet manager in 2026. The Federal Motor Carrier Safety Administration (FMCSA) enforces strict regulations regarding Electronic Logging Devices, and violations can result in significant fines, out-of-service orders, and negative impacts on your CSA scores. This comprehensive guide covers all ELD violations, explains how to fix common logbook errors, and provides strategies to help drivers stay compliant.
            </p>

            {/* Table of Contents */}
            <div className="my-8 rounded-xl border border-border/50 bg-card p-4 sm:p-6">
              <h2 className="mb-3 text-base font-semibold text-foreground sm:text-lg">Table of Contents</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#common-violations" className="hover:text-primary">1. Most Common ELD Violations</a></li>
                <li><a href="#form-manner" className="hover:text-primary">2. Logbook Form and Manner Violations</a></li>
                <li><a href="#fix-errors" className="hover:text-primary">3. How to Fix ELD Logbook Errors</a></li>
                <li><a href="#dot-checks" className="hover:text-primary">4. DOT Inspection ELD Checks</a></li>
                <li><a href="#avoid-violations" className="hover:text-primary">5. How Drivers Can Avoid Violations</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="common-violations" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Most Common ELD Violations</h2>
              
              <p className="mb-4 text-muted-foreground">
                ELD violations fall into several categories, each with different severity levels and consequences. Understanding these violations helps drivers and carriers take proactive steps to maintain compliance. Here are the most frequently cited ELD violations during DOT roadside inspections:
              </p>

              {/* Violations Table */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="px-3 py-2 text-left font-semibold text-foreground sm:px-4 sm:py-3">Violation Code</th>
                      <th className="px-3 py-2 text-left font-semibold text-foreground sm:px-4 sm:py-3">Description</th>
                      <th className="px-3 py-2 text-left font-semibold text-foreground sm:px-4 sm:py-3">Severity</th>
                      <th className="px-3 py-2 text-left font-semibold text-foreground sm:px-4 sm:py-3">Fine Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="px-3 py-2 font-mono text-primary sm:px-4 sm:py-3">395.8(a)</td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">No ELD or RODS</td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3"><span className="rounded bg-red-500/20 px-2 py-0.5 text-red-400">Critical</span></td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">$1,000 - $16,000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-3 py-2 font-mono text-primary sm:px-4 sm:py-3">395.8(e)</td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">Falsified logs</td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3"><span className="rounded bg-red-500/20 px-2 py-0.5 text-red-400">Critical</span></td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">$2,750 - $16,000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-3 py-2 font-mono text-primary sm:px-4 sm:py-3">395.22</td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">ELD not registered with FMCSA</td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3"><span className="rounded bg-orange-500/20 px-2 py-0.5 text-orange-400">High</span></td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">$500 - $5,000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-3 py-2 font-mono text-primary sm:px-4 sm:py-3">395.24(c)</td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">ELD malfunction not reported</td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3"><span className="rounded bg-orange-500/20 px-2 py-0.5 text-orange-400">High</span></td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">$500 - $5,000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-3 py-2 font-mono text-primary sm:px-4 sm:py-3">395.8(k)</td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">Missing driver annotations</td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3"><span className="rounded bg-yellow-500/20 px-2 py-0.5 text-yellow-400">Medium</span></td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">$250 - $2,500</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-3 py-2 font-mono text-primary sm:px-4 sm:py-3">395.26</td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">Improper ELD data transfer</td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3"><span className="rounded bg-yellow-500/20 px-2 py-0.5 text-yellow-400">Medium</span></td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">$250 - $2,500</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-mono text-primary sm:px-4 sm:py-3">395.30</td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">ELD not mounted properly</td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3"><span className="rounded bg-green-500/20 px-2 py-0.5 text-green-400">Low</span></td>
                      <td className="px-3 py-2 text-muted-foreground sm:px-4 sm:py-3">$100 - $1,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground">
                The most serious violations, such as operating without an ELD or falsifying logs, can result in out-of-service orders that prevent you from driving until the issue is resolved. These violations also significantly impact your CSA (Compliance, Safety, Accountability) scores, which can affect your ability to find loads and maintain contracts with shippers.
              </p>
            </section>

            {/* Section 2 */}
            <section id="form-manner" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Logbook Form and Manner Violations</h2>
              
              <p className="mb-4 text-muted-foreground">
                Form and manner violations relate to how information is recorded and displayed in your ELD logbook. While these may seem minor, they can accumulate and create serious compliance issues. The FMCSA requires specific information to be recorded in a particular format.
              </p>

              <div className="my-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-400" />
                    <h3 className="font-semibold text-foreground">Common Form Violations</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>- Missing driver name or employee ID</li>
                    <li>- Incorrect or missing vehicle information</li>
                    <li>- Wrong carrier name or USDOT number</li>
                    <li>- Missing 24-hour period starting time</li>
                    <li>- Incomplete shipping document numbers</li>
                    <li>- Missing co-driver information</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    <h3 className="font-semibold text-foreground">Common Manner Violations</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>- Duty status changes not properly recorded</li>
                    <li>- Missing location descriptions</li>
                    <li>- Incomplete remarks or annotations</li>
                    <li>- Graph grid not accurate within 15 minutes</li>
                    <li>- Missing total hours calculation</li>
                    <li>- Unsigned or uncertified logs</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground">
                Each duty status change must include the time, location (city and state or highway location), and the new status. Location descriptions must be accurate enough that an inspector can verify your position. For example, stating "I-80, mile marker 245, NE" is acceptable, while "somewhere in Nebraska" would be a violation.
              </p>

              <p className="mt-4 text-muted-foreground">
                Drivers must also certify their logs at the end of each 24-hour period. Failing to certify, or certifying logs that contain errors, can result in additional violations. The ELD should automatically prompt drivers to certify, but it remains the driver responsibility to ensure this is completed.
              </p>
            </section>

            {/* Section 3 */}
            <section id="fix-errors" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">How to Fix ELD Logbook Errors</h2>
              
              <p className="mb-4 text-muted-foreground">
                When errors occur in your ELD logs, they must be corrected promptly and properly. The FMCSA allows edits to ELD records, but these must be done according to specific guidelines to maintain compliance and avoid accusations of falsification.
              </p>

              <div className="my-6 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6">
                <h3 className="mb-3 font-semibold text-foreground">Step-by-Step Error Correction Process</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
                    <span><strong className="text-foreground">Identify the Error:</strong> Review your logs within 24 hours of completing your driving period to catch mistakes early.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
                    <span><strong className="text-foreground">Request Edit (Driver):</strong> Use your ELD to propose an edit to the incorrect entry. The original data is preserved.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
                    <span><strong className="text-foreground">Add Annotation:</strong> Provide a detailed explanation for why the edit is being made. Be specific and accurate.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">4</span>
                    <span><strong className="text-foreground">Carrier Review:</strong> Your carrier must review and either accept or reject the proposed edit.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">5</span>
                    <span><strong className="text-foreground">Driver Confirmation:</strong> Once accepted, confirm and re-certify the corrected log.</span>
                  </li>
                </ol>
              </div>

              <p className="text-muted-foreground">
                Important: The ELD must retain the original, unedited data along with any edits. This creates an audit trail that inspectors can review. Attempting to delete or hide original data is considered falsification and carries severe penalties. All edits should be legitimate corrections, not attempts to hide HOS violations.
              </p>

              <p className="mt-4 text-muted-foreground">
                Common legitimate reasons for edits include: correcting a wrong duty status (selected On-Duty when meant Off-Duty), fixing location information errors, adding missing annotations for personal conveyance or yard moves, and correcting times when the ELD clock was inaccurate.
              </p>
            </section>

            {/* Section 4 */}
            <section id="dot-checks" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">DOT Inspection ELD Checks</h2>
              
              <p className="mb-4 text-muted-foreground">
                During a DOT roadside inspection, officers will thoroughly examine your ELD and logs. Understanding what they look for helps you prepare and ensure compliance before you encounter an inspection.
              </p>

              <div className="my-6 space-y-4">
                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">ELD Registration Verification</h3>
                    <p className="text-sm text-muted-foreground">Inspectors verify your ELD is on the FMCSA registered ELD list. Using an unregistered or revoked ELD is equivalent to having no ELD at all.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Current Day Plus Last 7 Days</h3>
                    <p className="text-sm text-muted-foreground">You must be able to display logs for the current 24-hour period plus the previous 7 consecutive days. Missing any days is a violation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Data Transfer Capability</h3>
                    <p className="text-sm text-muted-foreground">Your ELD must transfer data via Bluetooth or USB (telematic methods). If electronic transfer fails, you must provide a printout or display.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Unidentified Driving Time</h3>
                    <p className="text-sm text-muted-foreground">Inspectors check for unassigned driving time. Excessive unidentified driving suggests the ELD is not being used properly or drivers are avoiding logging time.</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">
                If your ELD malfunctions during an inspection, you must be able to demonstrate that you reported the malfunction to your carrier within 24 hours and that you have been maintaining paper logs since the malfunction occurred. You have 8 days to repair or replace a malfunctioning ELD.
              </p>
            </section>

            {/* Section 5 */}
            <section id="avoid-violations" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">How Drivers Can Avoid Violations</h2>
              
              <p className="mb-4 text-muted-foreground">
                Prevention is always better than correction. Following these best practices will help you maintain compliant logs and avoid violations during inspections.
              </p>

              <div className="my-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Start each trip with a properly functioning ELD",
                  "Verify your ELD is on the FMCSA registered list",
                  "Log in before moving the vehicle",
                  "Change duty status immediately when status changes",
                  "Add annotations for any unusual circumstances",
                  "Review and certify logs daily",
                  "Keep backup paper logs in case of ELD failure",
                  "Report malfunctions to carrier within 24 hours",
                  "Understand HOS rules to avoid violations",
                  "Use personal conveyance correctly and document it",
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground">
                Working with a professional ELD service like NextLog FullService provides 24/7 monitoring and support. Our team reviews your logs daily, catches errors before they become violations, and helps you prepare for DOT audits. With over 400 inspections passed and 30+ successful DOT audits, we understand what it takes to maintain compliance.
              </p>
            </section>

            {/* CTA Section */}
            <section className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center sm:p-6">
              <Shield className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">Need Help With ELD Compliance?</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Our team monitors your logs 24/7 and helps you avoid violations before they happen.
              </p>
              <Button asChild className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">
                  Get Professional Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </section>

            {/* Related Links */}
            <section className="mt-10">
              <h2 className="mb-4 text-lg font-bold text-foreground">Related Resources</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/eld-rules-2026" className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/40">
                  <h3 className="font-semibold text-foreground">ELD Rules 2026</h3>
                  <p className="text-sm text-muted-foreground">Complete guide to current ELD regulations</p>
                </Link>
                <Link href="/dot-inspection-checklist" className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/40">
                  <h3 className="font-semibold text-foreground">DOT Inspection Checklist</h3>
                  <p className="text-sm text-muted-foreground">Prepare for your next roadside inspection</p>
                </Link>
                <Link href="/eld-service" className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/40">
                  <h3 className="font-semibold text-foreground">ELD Service USA</h3>
                  <p className="text-sm text-muted-foreground">Professional ELD monitoring and support</p>
                </Link>
                <Link href="/logbook-correction" className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/40">
                  <h3 className="font-semibold text-foreground">Logbook Correction Service</h3>
                  <p className="text-sm text-muted-foreground">Expert help fixing logbook errors</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* Footer */}
        <footer className="border-t border-border/40 bg-card py-6">
          <div className="mx-auto max-w-4xl px-4 text-center text-xs text-muted-foreground sm:px-6">
            <p>&copy; {new Date().getFullYear()} NextLog FullService. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
