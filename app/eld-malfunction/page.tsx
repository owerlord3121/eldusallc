import Link from "next/link"
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, FileText, ShieldCheck, Wrench } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { breadcrumbJsonLd } from "@/lib/site"

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/blog" },
  { name: "ELD Malfunction Guide" },
])

const driverSteps = [
  "Notify the motor carrier of the malfunction within 24 hours.",
  "If accurate HOS recording or presentation is affected, reconstruct any required RODS that are not otherwise available and use paper logs or another compliant recording method.",
  "Keep the malfunction and paper-record workflow documented while the ELD is being repaired or replaced.",
  "Follow the carrier's and ELD provider's troubleshooting instructions for diagnostic events and malfunctions.",
]

const carrierSteps = [
  "Start repair, replacement, or service immediately after discovering the malfunction or receiving the driver's notice.",
  "Ensure affected drivers use the required alternate RODS method while accurate ELD recording is unavailable.",
  "Complete repair, replacement, or service within the normal 8-day period unless FMCSA grants an extension.",
  "If more time is genuinely required, submit the extension request within 5 days after the driver's notification and include the information required by 49 CFR 395.34.",
]

export default function ELDMalfunctionPage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <article className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FMCSA ELD guide</p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">What to Do When an ELD Malfunctions</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">An ELD malfunction is not the same thing as permission to stop recording Hours of Service. Drivers and carriers have specific notification, alternate-record, repair, and documentation responsibilities under 49 CFR 395.34.</p>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          <Stat value="24 hours" label="Driver notice to carrier" />
          <Stat value="8 days" label="Normal repair / replacement period" />
          <Stat value="5 days" label="Window to request an extension" />
        </section>

        <section className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
          <div className="flex gap-3"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" /><div><h2 className="font-semibold text-foreground">Do not confuse a diagnostic event with permission to ignore the log</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Some ELD problems generate data diagnostic events; others meet the malfunction criteria. Follow the device instructions and carrier procedure, and preserve accurate HOS records while the issue is being resolved.</p></div></div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <div className="flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Driver checklist</h2></div>
            <div className="mt-5 space-y-4">{driverSteps.map((step) => <Step key={step} text={step} />)}</div>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <div className="flex items-center gap-2"><Wrench className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Carrier checklist</h2></div>
            <div className="mt-5 space-y-4">{carrierSteps.map((step) => <Step key={step} text={step} />)}</div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">What records should the driver have during the malfunction?</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>If the malfunction prevents the ELD from accurately recording or presenting HOS data, the driver must use the alternate recordkeeping process required by the rule. That can include reconstructing the current 24-hour period and previous records that are not otherwise retrievable, then maintaining compliant paper RODS until the ELD is back in service.</p>
            <p>Drivers should also keep the required ELD information packet available in the vehicle, including instructions for malfunction reporting and recordkeeping procedures.</p>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">The 8-day rule has an extension process</h2></div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The normal deadline is 8 days, but FMCSA permits a motor carrier to request additional time. The request must be sent to the FMCSA Division Administrator for the State of the carrier's principal place of business within 5 days after the driver notifies the carrier.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The extension request should identify the carrier and representative, the affected ELDs, malfunction dates and locations, and the good-faith steps already taken to repair, replace, or service the units, including why additional time is needed.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Common mistakes during an ELD malfunction</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Driver fails to notify the carrier within 24 hours","Carrier waits several days before starting repair or replacement","Paper RODS are incomplete or do not cover the required period","The fleet assumes an internet or sync problem automatically means the ELD may be ignored","The 8-day deadline approaches but no extension request is submitted in time","Drivers continue on paper beyond the allowed period without proof of an FMCSA extension"].map((item) => <div key={item} className="rounded-xl border border-border/50 bg-card p-4 text-sm leading-relaxed text-muted-foreground">{item}</div>)}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6">
          <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Official FMCSA references</h2></div>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a href="https://www.fmcsa.dot.gov/regulations/hours-service/elds/eld-malfunctions-and-data-diagnostic-events-faqs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA: ELD Malfunctions and Data Diagnostic Events FAQs</a>
            <a href="https://eld.fmcsa.dot.gov/support" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA: ELD malfunction extension requests</a>
            <a href="https://eld.fmcsa.dot.gov/FAQ/Topics?name=ELD_Malfunctions_and_Data_Diagnostic_Events" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FMCSA ELD FAQ: malfunctions and diagnostics</a>
          </div>
        </section>

        <section className="mt-12 border-t border-border/40 pt-8">
          <h2 className="text-2xl font-bold text-foreground">Related USA ELD resources</h2>
          <div className="mt-5 flex flex-wrap gap-3"><Resource href="/dot-inspection-checklist" label="DOT inspection checklist" /><Resource href="/unassigned-driving-time" label="Unassigned driving" /><Resource href="/blog/how-to-fix-eld-logbook-mistakes" label="ELD corrections" /><Resource href="/eld-support" label="24/7 ELD support" /></div>
          <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">Contact USA ELD <ArrowRight className="h-4 w-4" /></Link>
        </section>
      </article>
      <Footer />
    </main>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl border border-border/50 bg-card p-5 text-center"><div className="text-2xl font-bold text-foreground">{value}</div><div className="mt-1 text-xs text-muted-foreground">{label}</div></div>
}

function Step({ text }: { text: string }) {
  return <div className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{text}</span></div>
}

function Resource({ href, label }: { href: string; label: string }) {
  return <Link href={href} className="rounded-lg border border-border/60 px-4 py-2 text-sm text-foreground transition hover:border-primary/40 hover:text-primary">{label}</Link>
}
