import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, ClipboardCheck, Clock, FileText, ShieldCheck, Truck } from "lucide-react"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/blog/dot-audit-preparation-guide"

export const metadata: Metadata = {
  title: "DOT Safety Audit Preparation Guide 2026 | Carrier Checklist",
  description:
    "Prepare for an FMCSA safety audit with a practical checklist covering driver files, ELD/RODS, supporting documents, vehicles, insurance, drug and alcohol requirements, and recordkeeping.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "DOT Safety Audit Preparation Guide 2026 | USA ELD",
    description: "A practical FMCSA safety-audit preparation checklist for motor carriers and new entrants.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DOT Safety Audit Preparation Guide 2026 | USA ELD",
    description: "A practical FMCSA safety-audit preparation checklist for motor carriers.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${pageUrl}#article`,
  mainEntityOfPage: pageUrl,
  url: pageUrl,
  headline: "DOT Safety Audit Preparation Guide 2026: Carrier Checklist",
  description: "A practical FMCSA safety-audit preparation checklist covering driver, ELD, vehicle, insurance, and recordkeeping documents.",
  inLanguage: "en-US",
  articleSection: "DOT Audits",
  isAccessibleForFree: true,
  image: ["https://eldusallc.com/opengraph-image"],
  datePublished: "2026-02-15",
  dateModified: "2026-10-20",
  author: { "@id": "https://eldusallc.com/#organization" },
  publisher: { "@id": "https://eldusallc.com/#organization" },
}

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/blog" },
  { name: "DOT Safety Audit Preparation" },
])

const documentGroups = [
  {
    title: "Driver records",
    icon: FileText,
    items: [
      "Current driver list and required driver qualification records",
      "Commercial driver licensing records and applicable medical qualification documentation",
      "Records of duty status (RODS) and supporting documents",
      "Required drug and alcohol program records when applicable",
    ],
  },
  {
    title: "ELD and Hours of Service",
    icon: Clock,
    items: [
      "Accessible RODS for the periods requested by the auditor",
      "Supporting documents that can be matched to drivers and trips",
      "A working ELD data-transfer process and current ELD instructions",
      "A process for unidentified driving, edits, annotations, and driver certification",
    ],
  },
  {
    title: "Vehicles and maintenance",
    icon: Truck,
    items: [
      "Vehicle and trailer list with identifying information",
      "Periodic inspection and maintenance records",
      "Documentation showing safety defects are addressed",
      "Required records for any out-of-service repairs",
    ],
  },
  {
    title: "Carrier records",
    icon: ShieldCheck,
    items: [
      "Required proof of insurance or financial responsibility",
      "Accident register when applicable",
      "Operating and safety-management procedures relevant to the audit",
      "Hazardous-materials records when the operation is subject to those rules",
    ],
  },
]

const preAuditSteps = [
  "Confirm the exact audit type, deadline, requested period, and submission method in the FMCSA notice.",
  "Create one folder structure that mirrors the auditor's document request instead of sending a mixed document dump.",
  "Check driver names, unit numbers, dates, locations, and times across RODS and supporting documents for obvious mismatches.",
  "Test ELD data transfer before the deadline and keep your ELD user instructions available.",
  "Review unidentified driving, missing certifications, diagnostic events, and unresolved log issues before submission.",
  "Keep copies of exactly what was submitted and when it was submitted.",
]

export default function DOTAuditPreparationGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="py-16 sm:py-20 lg:py-24">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>

          <header className="border-b border-border/40 pb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-sm">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">DOT Audits</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />Updated October 20, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />10 min read</span>
            </div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">DOT Safety Audit Preparation Guide 2026</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A safety audit is a records-based review of whether a motor carrier has basic safety-management controls. Good preparation means organized, complete, internally consistent records—not last-minute cosmetic changes to ELD data.
            </p>
          </header>

          <div className="mt-8 space-y-10">
            <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex gap-3"><ClipboardCheck className="mt-0.5 h-6 w-6 shrink-0 text-primary" /><div><h2 className="text-xl font-bold text-foreground">New Entrant carriers should prepare early</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">FMCSA states that new entrant motor carriers must undergo a Safety Audit within the first 12 months of operations. The audit may be conducted at the carrier's business or electronically, depending on the notice and selection.</p></div></div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Documents commonly reviewed in a safety audit</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">The exact request depends on the carrier and audit scope. Organize records by category so the auditor can trace a driver, vehicle, trip, and supporting document without guessing.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {documentGroups.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-border/50 bg-card p-5">
                    <div className="flex items-center gap-2"><group.icon className="h-5 w-5 text-primary" /><h3 className="font-semibold text-foreground">{group.title}</h3></div>
                    <div className="mt-4 space-y-3">{group.items.map((item) => <div key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">ELD and RODS preparation</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>Motor carriers generally must retain RODS and supporting documents for six months. Supporting documents can include bills of lading, dispatch or trip records, qualifying expense receipts, electronic mobile communications, and payroll or settlement records.</p>
                <p>Before an audit, verify that the records requested can actually be produced and matched. Driver name or identifying information, date, location, time, vehicle assignment, and trip context should make sense together.</p>
                <p>Do not “clean up” automatically recorded driving to make the file look better. ELD corrections must follow FMCSA edit, annotation, certification, and audit-trail rules.</p>
              </div>
            </section>

            <section className="rounded-2xl border border-border/50 bg-card p-6">
              <h2 className="text-xl font-bold text-foreground">Pre-audit workflow</h2>
              <div className="mt-5 space-y-3">
                {preAuditSteps.map((step, index) => (
                  <div key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{index + 1}</span>
                    <p className="pt-1 text-sm leading-relaxed text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Test ELD transfer before the auditor needs it</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                FMCSA audit guidance specifically addresses situations where a required ELD is in use but logs cannot be transferred electronically. Carriers should keep the software current, follow the ELD instructions, and contact the ELD provider when transfer fails. Waiting until the audit deadline to discover a transfer problem creates unnecessary risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Common preparation mistakes</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Sending incomplete RODS or missing supporting documents",
                  "Leaving unidentified driving unresolved without an explanation",
                  "Submitting documents with inconsistent driver, vehicle, date, or location data",
                  "Assuming an ELD screenshot is the same as the requested electronic transfer",
                  "Waiting until the due date to test access to historical records",
                  "Making unsupported log edits instead of documenting the real record",
                ].map((item) => <div key={item} className="rounded-xl border border-border/50 bg-card p-4 text-sm leading-relaxed text-muted-foreground">{item}</div>)}
              </div>
            </section>

            <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h2 className="text-xl font-bold text-foreground">Official FMCSA references</h2>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a href="https://ai.fmcsa.dot.gov/NewEntrant/SafetyAudits.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA New Entrant: Safety Audits</a>
                <a href="https://ai.fmcsa.dot.gov/NewEntrant/MC/Overview.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA Safety Audit Guide: document overview</a>
                <a href="https://eld.fmcsa.dot.gov/FAQ/Topics?name=Recording_HOS_data" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA ELD FAQ: RODS and supporting documents</a>
                <a href="https://www.fmcsa.dot.gov/hours-service/elds/editing-and-annotations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA: ELD Editing and Annotations</a>
              </div>
            </section>

            <section className="border-t border-border/40 pt-8">
              <h2 className="text-2xl font-bold text-foreground">Prepare your ELD side before the audit</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">USA ELD can help organize the ELD, logbook, and supporting-document side of audit preparation. We do not guarantee an audit result; the carrier remains responsible for complete and accurate compliance records.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <ResourceLink href="/dot-audit-help" label="DOT audit support" />
                <ResourceLink href="/eld-compliance" label="ELD compliance" />
                <ResourceLink href="/dot-inspection-checklist" label="DOT inspection checklist" />
                <ResourceLink href="/blog/how-to-fix-eld-logbook-mistakes" label="ELD correction guide" />
              </div>
              <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">Contact USA ELD <ArrowRight className="h-4 w-4" /></Link>
            </section>
          </div>
        </article>
      </main>
    </>
  )
}

function ResourceLink({ href, label }: { href: string; label: string }) {
  return <Link href={href} className="flex items-center justify-between rounded-xl border border-border/50 bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"><span>{label}</span><ArrowRight className="h-4 w-4" /></Link>
}
