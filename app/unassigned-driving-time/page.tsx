import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, ArrowRight, CheckCircle2, FileCheck2, ShieldCheck, UserCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/unassigned-driving-time"

export const metadata: Metadata = {
  title: "Unassigned Driving Time | ELD Rules & Carrier Guide 2026",
  description: "Learn what unassigned or unidentified ELD driving time means, what drivers must review, what carriers must do, and how long unidentified records must be retained.",
  alternates: { canonical: pageUrl },
  openGraph: { type: "article", url: pageUrl, title: "Unassigned Driving Time | USA ELD", description: "A practical FMCSA guide to unidentified driving records, driver review, carrier assignment, and annotations.", images: ["https://eldusallc.com/opengraph-image"] },
}

const faq = [
  { q: "What is unassigned driving time?", a: "It is vehicle movement recorded by the ELD when the driving event is not associated with an authenticated driver account. The ELD keeps this under the unidentified driver profile until it is reviewed and handled." },
  { q: "What must a driver do when prompted with unassigned driving?", a: "The driver must review the unassigned driving presented by the ELD. If the driving belongs to that driver, the driver should add it to their record. If it does not belong to them, they should not claim it." },
  { q: "What must the carrier do with unidentified driving?", a: "FMCSA says the motor carrier must either assign the driving record to the appropriate driver or annotate the record to explain why it remains unassigned." },
  { q: "How long are unidentified driving records retained?", a: "Motor carriers must retain unidentified driving records for at least six months from the date of receipt as part of their HOS ELD records." },
]

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Unassigned Driving Time: ELD Rules & Carrier Guide 2026", url: pageUrl, dateModified: "2026-10-20", inLanguage: "en-US", author: { "@id": "https://eldusallc.com/#organization" }, publisher: { "@id": "https://eldusallc.com/#organization" } }
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }
const breadcrumb = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Resources", path: "/blog" }, { name: "Unassigned Driving Time" }])

export default function UnassignedDrivingTimePage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <article className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">ELD compliance guide</p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Unassigned Driving Time on an ELD</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Unassigned driving is not something a carrier should simply delete or ignore. It is ELD-recorded vehicle movement that must be reviewed, assigned to the correct driver when appropriate, or explained with an annotation when it legitimately remains unidentified.</p>

        <section className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
          <div className="flex gap-3"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" /><div><h2 className="font-semibold text-foreground">Why it matters</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">FMCSA requires drivers and carriers to address unidentified driving records. A recurring backlog can point to login problems, device workflow issues, vehicle moves by non-driver personnel, or weak fleet procedures.</p></div></div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">How unassigned driving is created</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["A CMV moves while no driver is authenticated in the ELD","A driver starts moving before logging in","A driver is logged into the wrong vehicle or account workflow","A shop, yard, maintenance, or other authorized movement occurs without the correct ELD attribution","A team-driving assignment is incorrect","A device or operational process leaves movement under the unidentified profile"].map((item) => <div key={item} className="rounded-xl border border-border/50 bg-card p-4 text-sm leading-relaxed text-muted-foreground">{item}</div>)}
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <div className="flex items-center gap-2"><UserCheck className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Driver responsibility</h2></div>
            <div className="mt-4 space-y-3">{["Review unassigned driving records presented by the ELD at login.","Accept driving that actually belongs to the driver.","Do not accept movement that belongs to another driver or another legitimate source.","Review the resulting RODS and certify accurate records as required."].map((item) => <div key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}</div>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <div className="flex items-center gap-2"><FileCheck2 className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Carrier responsibility</h2></div>
            <div className="mt-4 space-y-3">{["Investigate unidentified driving instead of leaving it unresolved.","Assign the record to the appropriate driver when the driver can be identified.","If the record legitimately remains unassigned, annotate why.","Retain unidentified driving records for at least six months and make them available to authorized safety officials."].map((item) => <div key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}</div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">A clean fleet workflow for unidentified driving</h2>
          <div className="mt-5 space-y-3">{["Review new unidentified driving daily instead of waiting until an inspection or audit.","Match the timestamp, truck, location, dispatch activity, driver assignment, maintenance activity, and other supporting records.","Send a proposed assignment only when evidence supports the correct driver.","Use factual annotations when legitimate shop, yard, maintenance, or other movement remains unidentified.","Track repeated causes and fix the workflow: driver login training, vehicle assignment, ELD connectivity, or internal yard procedures."].map((item,index) => <div key={item} className="flex gap-3 rounded-xl border border-border/50 bg-card p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{index+1}</span><p className="pt-1 text-sm leading-relaxed text-muted-foreground">{item}</p></div>)}</div>
        </section>

        <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <h2 className="text-xl font-bold text-foreground">Do not solve unassigned driving by falsifying another driver's log</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The goal is accurate attribution, not making the unidentified list disappear. Automatically recorded driving retains its audit trail. Assign only when the record belongs to that driver; otherwise document why it remains unidentified.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Unassigned Driving FAQ</h2>
          <div className="mt-5 space-y-3">{faq.map((item) => <div key={item.q} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold text-foreground">{item.q}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p></div>)}</div>
        </section>

        <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6">
          <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Official FMCSA references</h2></div>
          <div className="mt-4 flex flex-col gap-3 text-sm"><a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" href="https://eld.fmcsa.dot.gov/FAQ/Topics?name=Unidentified_Driving_Time">FMCSA ELD FAQ: Unidentified Driving Time</a><a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" href="https://eld.fmcsa.dot.gov/FAQ/Topics?name=Recording_HOS_data">FMCSA ELD FAQ: Recording HOS Data</a><a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.fmcsa.dot.gov/hours-service/elds/editing-and-annotations">FMCSA: Editing and Annotations</a></div>
        </section>

        <section className="mt-12 border-t border-border/40 pt-8">
          <h2 className="text-2xl font-bold text-foreground">Related guides</h2>
          <div className="mt-5 flex flex-wrap gap-3"><Resource href="/blog/how-to-fix-eld-logbook-mistakes" label="ELD corrections" /><Resource href="/personal-conveyance-rules" label="Personal Conveyance" /><Resource href="/yard-move-rules" label="Yard Move rules" /><Resource href="/eld-monitoring" label="ELD monitoring" /></div>
          <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">Get ELD support <ArrowRight className="h-4 w-4" /></Link>
        </section>
      </article>
      <Footer />
    </main>
  )
}

function Resource({ href, label }: { href: string; label: string }) {
  return <Link href={href} className="rounded-lg border border-border/60 px-4 py-2 text-sm text-foreground transition hover:border-primary/40 hover:text-primary">{label}</Link>
}
