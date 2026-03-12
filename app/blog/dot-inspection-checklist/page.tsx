import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "DOT Inspection Checklist 2026 | Complete Driver & Vehicle Guide",
  description:
    "Complete DOT inspection checklist for truck drivers. Vehicle, driver, and ELD inspection requirements. Be prepared for any roadside inspection with this comprehensive guide.",
  keywords: [
    "DOT inspection checklist",
    "DOT inspection requirements",
    "roadside inspection checklist",
    "truck inspection checklist",
    "CVSA inspection",
    "Level 1 inspection",
    "driver inspection checklist",
    "vehicle inspection requirements",
    "pre-trip inspection checklist",
    "DOT compliance checklist",
  ],
  alternates: { canonical: "https://eldusallc.com/blog/dot-inspection-checklist" },
  openGraph: {
    type: "article",
    url: "https://eldusallc.com/blog/dot-inspection-checklist",
    title: "DOT Inspection Checklist 2026 | Complete Driver & Vehicle Guide",
    description:
      "Complete DOT inspection checklist for truck drivers. Vehicle, driver, and ELD inspection requirements.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DOT Inspection Checklist: Complete Driver Guide",
  description:
    "Step-by-step DOT inspection checklist covering vehicle, driver, and ELD requirements.",
  datePublished: "2026-02-25",
  dateModified: "2026-02-25",
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

export default function DOTInspectionChecklistPage() {
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
                Inspections
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                February 25, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                14 min read
              </span>
            </div>
            <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              DOT Inspection Checklist: Complete Driver Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              Being prepared for a DOT inspection can mean the difference between a clean
              report and costly violations. This comprehensive checklist covers everything
              you need to know to pass any level of roadside inspection.
            </p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Department of Transportation (DOT) roadside inspections are a routine part of
              commercial trucking. The Commercial Vehicle Safety Alliance (CVSA) conducts
              millions of inspections annually to ensure trucks and drivers meet federal
              safety standards. Understanding what inspectors look for and being properly
              prepared helps you pass inspections confidently and avoid violations that
              impact your CSA score.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Understanding DOT Inspection Levels
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              CVSA has established eight levels of inspections, each with different scopes
              and requirements. Understanding these levels helps you know what to expect
              during any roadside stop.
            </p>

            <div className="my-6 space-y-4">
              <div className="rounded-xl border border-border/50 bg-card p-4">
                <h4 className="font-semibold text-foreground">Level I: Full Inspection</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  The most comprehensive inspection covering all aspects of the driver and
                  vehicle. Includes complete vehicle examination, driver credentials, and
                  ELD/log review. Takes approximately 45-60 minutes.
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-4">
                <h4 className="font-semibold text-foreground">Level II: Walk-Around Inspection</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Driver credentials and ELD review plus a walk-around examination of the
                  vehicle. Does not require the driver to go under the vehicle. Takes
                  approximately 30 minutes.
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-4">
                <h4 className="font-semibold text-foreground">Level III: Driver-Only Inspection</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Focuses solely on driver credentials, ELD records, and Hours of Service
                  compliance. No vehicle examination required. Takes approximately 15-20 minutes.
                </p>
              </div>
            </div>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Driver Documentation Checklist
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Having all required documents readily accessible speeds up the inspection
              process and demonstrates professionalism. Keep these items organized and
              within easy reach:
            </p>

            <div className="my-6 rounded-xl border border-border/50 bg-card p-5">
              <h4 className="mb-4 font-semibold text-foreground">Required Driver Documents</h4>
              <ul className="space-y-2">
                {[
                  "Valid Commercial Drivers License (CDL) with proper endorsements",
                  "Medical Examiners Certificate (MEC) - must be current",
                  "Skill Performance Evaluation (SPE) Certificate if applicable",
                  "Current ELD records (last 7 days + current day)",
                  "ELD instruction sheet and user manual",
                  "Blank paper logs for ELD malfunction backup",
                  "Bills of lading or shipping papers",
                  "Hazmat documentation if transporting hazardous materials",
                  "Proof of periodic inspection (annual inspection sticker)",
                  "Vehicle registration and insurance documentation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              ELD and Hours of Service Inspection
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              ELD inspection is a critical component of most roadside inspections. Inspectors
              will verify your ELD is functioning properly, registered with FMCSA, and that
              your Hours of Service records are accurate and compliant.
            </p>

            <div className="my-6 rounded-xl border border-border/50 bg-card p-5">
              <h4 className="mb-4 font-semibold text-foreground">ELD Inspection Points</h4>
              <ul className="space-y-2">
                {[
                  "ELD is on the FMCSA registered devices list",
                  "ELD displays required information on demand",
                  "Data can be transferred via Bluetooth, email, or USB",
                  "Current days log is accurate and certified",
                  "Previous 7 days logs are available and certified",
                  "No unassigned driving time or unexplained edits",
                  "Proper use of special driving categories if applicable",
                  "30-minute break compliance after 8 hours driving",
                  "11-hour driving limit compliance",
                  "14-hour on-duty window compliance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Vehicle Inspection Checklist
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The vehicle inspection covers mechanical condition, safety equipment, and
              load securement. This checklist follows the standard CVSA Level I inspection
              procedure. Many of these items should be verified during your daily pre-trip
              inspection.
            </p>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Brake System
            </h3>
            <div className="my-4 rounded-xl border border-border/50 bg-card p-5">
              <ul className="space-y-2">
                {[
                  "Service brake operation and adjustment",
                  "Parking brake operation",
                  "Brake lines and hoses - no leaks, cracks, or chafing",
                  "Brake drums and rotors condition",
                  "Brake pads/shoes with adequate lining",
                  "Air brake system pressure and low pressure warning",
                  "Pushrod travel within limits",
                  "ABS system functioning (warning light check)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Tires and Wheels
            </h3>
            <div className="my-4 rounded-xl border border-border/50 bg-card p-5">
              <ul className="space-y-2">
                {[
                  "Tire tread depth (minimum 4/32 on steer, 2/32 on drive/trailer)",
                  "Tire inflation - no flat or underinflated tires",
                  "No bulges, cuts, or exposed cords",
                  "Wheel fasteners tight and not missing",
                  "No cracked or damaged rims",
                  "Hub oil seals not leaking",
                  "Matching tires on dual assemblies",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Lights and Electrical
            </h3>
            <div className="my-4 rounded-xl border border-border/50 bg-card p-5">
              <ul className="space-y-2">
                {[
                  "Headlights - high and low beam operational",
                  "Tail lights and brake lights functioning",
                  "Turn signals front, rear, and side",
                  "Clearance and marker lights",
                  "Reflectors and reflective tape",
                  "License plate light",
                  "Hazard warning flashers",
                  "Backup lights (if equipped)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-6 mb-3 text-lg font-semibold text-foreground">
              Coupling and Trailer
            </h3>
            <div className="my-4 rounded-xl border border-border/50 bg-card p-5">
              <ul className="space-y-2">
                {[
                  "Fifth wheel properly secured and lubricated",
                  "Kingpin and apron in good condition",
                  "Safety chains/cables properly connected",
                  "Air and electrical lines secure, no damage",
                  "Landing gear fully raised and secure",
                  "Trailer frame and body condition",
                  "Doors and latches operational",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Load Securement Requirements
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Proper load securement is essential for safety and compliance. The cargo
              securement rules in 49 CFR Part 393 specify requirements for different
              types of cargo. General requirements include:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Cargo must be firmly immobilized or secured</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Minimum working load limit requirements met</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Tiedowns in good condition with no damage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Header boards, blocking, and bracing adequate</span>
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              What Happens If You Fail an Inspection
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If violations are discovered during an inspection, the severity determines
              the outcome. Minor violations result in a warning or citation, while serious
              violations can result in the driver or vehicle being placed out of service.
              Out-of-service violations mean you cannot continue driving until the issue
              is corrected.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All violations are recorded and affect your CSA score. The inspection report
              becomes part of your safety record for 24 months. You have the right to
              challenge inaccurate violations through the DataQs system.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Tips for a Successful Inspection
            </h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Conduct thorough pre-trip inspections daily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Keep all documents organized and easily accessible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Be courteous and professional with inspectors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Know your rights but cooperate fully</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Address any mechanical issues immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span>Use 24/7 ELD monitoring to catch log issues before inspections</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 sm:p-8">
            <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
              Be Inspection-Ready 24/7
            </h2>
            <p className="mb-4 text-sm text-muted-foreground sm:text-base">
              Our team monitors your ELD logs around the clock to catch potential violations before inspections do.
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
                href="/blog/eld-violations-list"
                className="rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="text-sm font-medium text-foreground">Complete ELD Violations List</span>
              </Link>
              <Link
                href="/blog/dot-audit-preparation-guide"
                className="rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="text-sm font-medium text-foreground">DOT Audit Preparation Guide</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
