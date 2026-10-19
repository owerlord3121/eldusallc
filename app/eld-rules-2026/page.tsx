import Link from "next/link"
import { AlertTriangle, CheckCircle2, Clock, FileText, ShieldCheck, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const updated = "October 20, 2026"

export default function ELDRules2026Page() {
  const hosRules = [
    ["11-hour driving limit", "A property-carrying driver may drive up to 11 hours after 10 consecutive hours off duty, subject to the other HOS limits."],
    ["14-hour driving window", "Driving generally must be completed within the 14-hour window after coming on duty following 10 consecutive hours off duty. Qualifying sleeper-berth splits and the adverse-driving-conditions provision can affect how the rule applies."],
    ["30-minute break", "A driver subject to the property-carrying rule must take a 30-minute non-driving break after 8 cumulative hours of driving without at least a 30-minute interruption, unless an exception applies."],
    ["60/70-hour limit", "A driver may not drive after 60 hours on duty in 7 consecutive days or 70 hours in 8 consecutive days, depending on the carrier's operating schedule. A qualifying 34-hour restart can begin a new cycle."],
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "ELD Rules 2026: FMCSA Requirements for Truck Drivers and Carriers",
        description: "Current 2026 overview of ELD requirements, HOS limits, ELD exceptions, roadside inspection readiness, malfunction procedures, and recordkeeping.",
        mainEntityOfPage: "https://eldusallc.com/eld-rules-2026",
        dateModified: "2026-10-20",
        author: { "@type": "Organization", name: "NextLog FullService" },
        publisher: { "@type": "Organization", name: "NextLog FullService", logo: { "@type": "ImageObject", url: "https://eldusallc.com/images/logo.png" } },
      }) }} />

      <article className="mx-auto max-w-4xl px-4 pt-24 pb-14 sm:px-6 sm:pt-28 lg:pt-32">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground"><Link href="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span><Link href="/blog" className="hover:text-primary">Resources</Link><span className="mx-2">/</span><span className="text-foreground">ELD Rules 2026</span></nav>

        <header className="border-b border-border/40 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FMCSA / ELD reference</p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD Rules 2026: What Drivers & Carriers Need to Know</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">A practical overview of the core federal ELD and Hours of Service rules for property-carrying operations, including common exceptions, inspection readiness, and malfunction procedures.</p>
          <p className="mt-4 text-xs text-muted-foreground">Updated: {updated}</p>
        </header>

        <section className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
          <div className="flex gap-3"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" /><div><h2 className="font-semibold text-foreground">Use the current rule, not a social-media shortcut</h2><p className="mt-1 text-sm leading-relaxed text-muted-foreground">ELD compliance depends on the driver's actual duty history, operation, exceptions, vehicle, and device. This guide is educational; the ELD record and applicable FMCSA regulations control.</p></div></div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-foreground">Who generally needs an ELD?</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">The ELD requirement generally applies to drivers who are required to prepare records of duty status under the federal HOS rules, unless an exception applies. The device must meet the technical requirements and be on FMCSA's registered ELD list.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold text-foreground">Common situations where ELD is required</h3><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Driver is required to maintain RODS.</li><li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />No short-haul or other ELD exception applies.</li><li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />The 8-days-in-30 exception is exceeded.</li></ul></div>
            <div className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold text-foreground">Common ELD exceptions</h3><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li>Qualifying short-haul operations using time records.</li><li>RODS required on no more than 8 days in any rolling 30-day period.</li><li>Qualifying driveaway-towaway operations.</li><li>Pre-2000 model-year vehicles; certain later vehicles with pre-2000 engines may also qualify under FMCSA guidance.</li></ul><Link href="/eld-exemptions" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">Read the ELD exception guide</Link></div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Core property-carrying HOS limits</h2>
          <div className="mt-5 space-y-4">
            {hosRules.map(([title, text]) => <div key={title} className="rounded-xl border border-border/50 bg-card p-5"><div className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /><h3 className="font-semibold text-foreground">{title}</h3></div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
          </div>
          <div className="mt-5 rounded-xl border border-border/50 bg-secondary/40 p-5"><h3 className="font-semibold text-foreground">Sleeper-berth split</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Drivers may split the required 10 hours off duty when one qualifying period is at least 7 consecutive hours in the sleeper berth and the other qualifying period is at least 2 hours, with the paired periods totaling at least 10 hours. When properly paired, neither qualifying period counts against the 14-hour driving window.</p></div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">What an ELD record needs to support</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">An ELD automatically records required events and data while drivers and carriers remain responsible for accurate driver accounts, duty statuses, annotations, certifications, vehicle information, shipping information when required, and proper handling of unidentified driving records.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">{["Correct driver account and carrier information","Vehicle/unit information","Accurate duty-status changes","Required location and engine/vehicle data","Daily log certification","Supporting annotations where needed","Proper treatment of unidentified driving","Ability to display or transfer records during an inspection"].map((item) => <div key={item} className="flex gap-2 rounded-lg border border-border/40 bg-card px-4 py-3 text-sm text-muted-foreground"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>)}</div>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/50 bg-card p-6"><div className="flex items-center gap-2"><Truck className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Roadside inspection readiness</h2></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">A driver should know how to display the current and previous required RODS, initiate the supported ELD data-transfer method, and provide the information an authorized safety official requests. Keep the required ELD information packet available in the vehicle.</p><Link href="/dot-inspection-checklist" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">DOT inspection checklist</Link></div>
          <div className="rounded-2xl border border-border/50 bg-card p-6"><div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">ELD malfunction</h2></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">When an ELD malfunctions, the driver and carrier have specific notification, reconstruction, paper-RODS, repair/replacement, and documentation obligations. The exact response depends on the malfunction and whether accurate RODS can still be produced.</p><Link href="/eld-malfunction" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">ELD malfunction guide</Link></div>
        </section>

        <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8"><h2 className="text-xl font-bold text-foreground">Useful next steps</h2><div className="mt-5 flex flex-wrap gap-3 text-sm"><Link href="/hos-calculator" className="rounded-lg border border-border/60 bg-background px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">HOS Calculator</Link><Link href="/eld-violations" className="rounded-lg border border-border/60 bg-background px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">ELD Violations Guide</Link><Link href="/eld-compliance" className="rounded-lg border border-border/60 bg-background px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">ELD Compliance Support</Link><Link href="/tools" className="rounded-lg border border-border/60 bg-background px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">All Trucking Tools</Link></div></section>
      </article>
      <Footer />
    </main>
  )
}
