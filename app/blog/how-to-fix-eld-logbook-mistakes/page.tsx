import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, FileCheck2 } from "lucide-react"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/blog/how-to-fix-eld-logbook-mistakes"

export const metadata: Metadata = {
  title: "How to Fix ELD Logbook Mistakes | FMCSA-Compliant Editing Guide",
  description:
    "Learn how ELD logbook corrections, annotations, carrier edit requests, unassigned driving time, and recertification work under FMCSA rules.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Fix ELD Logbook Mistakes | USA ELD",
    description: "A practical guide to compliant ELD corrections, annotations, unassigned driving time, and recertification.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fix ELD Logbook Mistakes | USA ELD",
    description: "A practical guide to compliant ELD corrections and annotations.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${pageUrl}#article`,
  mainEntityOfPage: pageUrl,
  url: pageUrl,
  headline: "How to Fix ELD Logbook Mistakes: FMCSA-Compliant Editing Guide",
  description: "A practical guide to ELD corrections, annotations, carrier edit requests, unassigned driving time, and recertification.",
  inLanguage: "en-US",
  articleSection: "ELD Logbooks",
  isAccessibleForFree: true,
  image: ["https://eldusallc.com/opengraph-image"],
  datePublished: "2026-02-20",
  dateModified: "2026-10-20",
  author: { "@id": "https://eldusallc.com/#organization" },
  publisher: { "@id": "https://eldusallc.com/#organization" },
}

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/blog" },
  { name: "ELD Logbook Mistakes" },
])

const correctionSteps = [
  "Review the original event and confirm what actually happened.",
  "Use only the edit or reassignment functions your ELD and FMCSA rules allow.",
  "Add a clear annotation explaining the reason for the change.",
  "Review any carrier-proposed edit before accepting or rejecting it.",
  "Recertify and resubmit the RODS when an accepted correction requires it.",
]

export default function HowToFixELDLogbookMistakesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="py-16 sm:py-20 lg:py-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>

          <header className="border-b border-border/40 pb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-sm">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">ELD Logbooks</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />Updated October 20, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />8 min read</span>
            </div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How to Fix ELD Logbook Mistakes</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              ELD records can be corrected in limited situations, but an edit does not erase the original record. The safest workflow is to preserve the audit trail, explain every allowed change, and keep automatically recorded driving time intact.
            </p>
          </header>

          <div className="mt-8 space-y-10">
            <section className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <div>
                  <h2 className="font-semibold text-foreground">The rule that matters most</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Automatically recorded driving time while the CMV is in motion generally cannot be changed to non-driving time. FMCSA also requires the ELD to retain the original record and the edit history. Corrections must never be used to conceal actual driving or create false HOS records.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Edit vs. annotation: what is the difference?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                An <strong className="text-foreground">edit</strong> changes an eligible ELD record without overwriting the original. An <strong className="text-foreground">annotation</strong> is a note that explains the event, update, or correction. FMCSA guidance says edits must include an annotation explaining why the change was made.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Both drivers and authorized carrier staff can participate in limited corrections. Carrier staff may propose edits, but the driver must review the proposed change and confirm or reject it as part of the certification process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">A practical correction workflow</h2>
              <div className="mt-5 space-y-3">
                {correctionSteps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-xl border border-border/50 bg-card p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{index + 1}</span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Common ELD mistakes and the compliant response</h2>
              <div className="mt-5 grid gap-4">
                <GuideCard
                  title="Wrong non-driving duty status"
                  text="If an eligible non-driving period was entered incorrectly, review the event, make the allowed correction, add a specific annotation, and recertify when required. The annotation should state what activity actually occurred and why the original status was wrong."
                />
                <GuideCard
                  title="Unassigned driving time"
                  text="When a driver logs in, the driver must review unassigned driving presented by the ELD. Time that belongs to the driver should be accepted into the driver's record. Time that does not belong to the driver should not be claimed. The carrier must either assign unidentified driving to the correct driver or annotate why it remains unassigned."
                />
                <GuideCard
                  title="Carrier proposes an edit"
                  text="A carrier-side change is not a hidden rewrite. The proposed correction and its annotation remain part of the ELD record, and the driver reviews the proposal during certification."
                />
                <GuideCard
                  title="Missed Personal Conveyance or Yard Move selection"
                  text="Do not simply convert automatically recorded driving into non-driving time. FMCSA guidance allows annotations to identify the intended start and end of a special driving category when it was not selected correctly. Follow the ELD's supported workflow and the carrier's written policy."
                />
                <GuideCard
                  title="Missing trailer, shipping, or supporting information"
                  text="Correct eligible manual information using the ELD's normal edit workflow and make the explanation specific enough that a safety official can understand why the record changed."
                />
              </div>
            </section>

            <section className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="flex items-center gap-2"><FileCheck2 className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Good annotations are factual and specific</h2></div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p><strong className="text-foreground">Better:</strong> “Changed Off Duty to On Duty Not Driving — pre-trip inspection at terminal.”</p>
                <p><strong className="text-foreground">Better:</strong> “Accepted unassigned driving — vehicle moved before driver login.”</p>
                <p><strong className="text-foreground">Weak:</strong> “Fixed log.”</p>
                <p><strong className="text-foreground">Weak:</strong> “Changed status.”</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Records are retained after corrections</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                FMCSA requires motor carriers to retain RODS and supporting documents for six months. The ELD edit history matters because the original event is not supposed to disappear when an allowed correction is made. That is why a consistent review-and-annotation process is more defensible than trying to make a log “look clean.”
              </p>
            </section>

            <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h2 className="text-xl font-bold text-foreground">Official FMCSA references</h2>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a href="https://www.fmcsa.dot.gov/hours-service/elds/editing-and-annotations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA: Editing and Annotations</a>
                <a href="https://www.fmcsa.dot.gov/regulations/hours-service/elds/can-user-edit-or-change-automatically-recorded-driving-time-has-been" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA: Automatically recorded driving time guidance</a>
                <a href="https://eld.fmcsa.dot.gov/FAQ/Topics?name=Recording_HOS_data" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA ELD FAQ: Recording HOS data</a>
              </div>
            </section>

            <section className="border-t border-border/40 pt-8">
              <h2 className="text-2xl font-bold text-foreground">Related USA ELD resources</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <ResourceLink href="/logbook-correction" label="Logbook assistance" />
                <ResourceLink href="/eld-monitoring" label="24/7 ELD monitoring" />
                <ResourceLink href="/eld-violations" label="ELD violations guide" />
                <ResourceLink href="/dot-inspection-checklist" label="DOT inspection checklist" />
              </div>
              <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">
                Contact USA ELD <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          </div>
        </article>
      </main>
    </>
  )
}

function GuideCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border/50 bg-card p-5">
      <div className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h3 className="font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div></div>
    </div>
  )
}

function ResourceLink({ href, label }: { href: string; label: string }) {
  return <Link href={href} className="flex items-center justify-between rounded-xl border border-border/50 bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"><span>{label}</span><ArrowRight className="h-4 w-4" /></Link>
}
