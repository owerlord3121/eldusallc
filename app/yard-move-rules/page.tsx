import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Info, MapPinned, ShieldCheck, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/yard-move-rules"

export const metadata: Metadata = {
  title: "Yard Move Rules | ELD Yard Move Guide 2026",
  description: "Learn how Yard Move is recorded on an ELD, why it remains on-duty time, what to do when YM was not selected, and how carrier policy affects its use.",
  alternates: { canonical: pageUrl },
  openGraph: { type: "article", url: pageUrl, title: "Yard Move Rules | USA ELD", description: "A practical guide to the ELD Yard Move special driving category.", images: ["https://eldusallc.com/opengraph-image"] },
}

const faq = [
  { q: "What duty status is Yard Move?", a: "Yard Move is a special driving category associated with on-duty not driving time rather than off-duty personal use." },
  { q: "Can a driver change normal driving to Yard Move later?", a: "No. FMCSA guidance says automatically generated driving cannot later be shortened by changing it to Yard Move. If the driver forgot to select YM, the driver can annotate the record identifying the intended start and end." },
  { q: "Does every short truck movement qualify as Yard Move?", a: "No. A short distance alone does not determine eligibility. The carrier's policy, the location, and the work being performed matter. Drivers should use YM only when authorized and appropriate for the actual movement." },
  { q: "Can a carrier disable Yard Move?", a: "The ELD special driving categories depend on carrier configuration and authorization. Drivers should follow the carrier's written policy and ELD setup." },
]

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Yard Move Rules: ELD Yard Move Guide 2026", url: pageUrl, dateModified: "2026-10-20", inLanguage: "en-US", author: { "@id": "https://eldusallc.com/#organization" }, publisher: { "@id": "https://eldusallc.com/#organization" } }
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }
const breadcrumb = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Resources", path: "/blog" }, { name: "Yard Move Rules" }])

export default function YardMoveRulesPage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <article className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">ELD special driving category</p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Yard Move Rules for ELD Drivers</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Yard Move (YM) is designed to identify certain authorized vehicle movements performed while the driver is on duty. It is not an off-duty status and it is not a way to erase automatically recorded driving after the fact.</p>

        <section className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <div className="flex gap-3"><Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h2 className="font-semibold text-foreground">The most important recording rule</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">When the carrier has enabled Yard Move, the driver should select the YM special category before the qualifying movement. If the driver forgets, FMCSA says the automatically generated driving event cannot later be shortened by converting it to YM; the driver can annotate the record to identify the intended period.</p></div></div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">How Yard Move appears on an ELD</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[{icon:Truck,title:"Driver is on duty",text:"YM is associated with work activity and on-duty not driving status, not personal off-duty use."},{icon:MapPinned,title:"Carrier authorizes the category",text:"Availability depends on carrier configuration and policy. The ELD may display a YM option only for authorized driver accounts."},{icon:CheckCircle2,title:"Record the reason",text:"Use clear remarks or annotations when required so the purpose and circumstances of the movement are understandable."}].map((item) => <div key={item.title} className="rounded-2xl border border-border/50 bg-card p-5"><item.icon className="h-5 w-5 text-primary" /><h3 className="mt-4 font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div>)}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">When should a driver consider Yard Move?</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The category is intended for appropriate on-duty movements in a yard or similar work environment when authorized by the carrier. Because FMCSA does not turn every short movement into a Yard Move automatically, drivers should not rely on distance alone.</p>
          <div className="mt-5 rounded-2xl border border-border/50 bg-card p-6">
            <h3 className="font-semibold text-foreground">Before selecting YM, confirm:</h3>
            <div className="mt-4 space-y-3">{["The movement is part of on-duty work rather than personal off-duty travel.","The carrier permits Yard Move and has enabled it in the ELD account.","The location and circumstances fit the carrier's written YM policy.","The driver selects YM before moving the vehicle rather than trying to fix normal driving afterward.","The driver exits the special category when the qualifying yard movement ends."].map((item) => <div key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}</div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Yard Move vs. Personal Conveyance</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-border/50 bg-card">
            <div className="grid grid-cols-3 border-b border-border/50 bg-secondary/40 px-4 py-3 text-xs font-semibold sm:text-sm"><span>Question</span><span className="text-center">Yard Move</span><span className="text-center">Personal Conveyance</span></div>
            {[['Duty relationship','On duty','Off duty'],['Purpose','Work-related yard movement','Authorized personal use'],['ELD category','YM / On Duty Not Driving','PC / Off Duty'],['Carrier authorization','Required by setup/policy','Required by setup/policy']].map((row) => <div key={row[0]} className="grid grid-cols-3 border-b border-border/30 px-4 py-3 text-xs last:border-b-0 sm:text-sm"><span className="text-foreground">{row[0]}</span><span className="text-center text-muted-foreground">{row[1]}</span><span className="text-center text-muted-foreground">{row[2]}</span></div>)}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Yard Move FAQ</h2>
          <div className="mt-5 space-y-3">{faq.map((item) => <div key={item.q} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold text-foreground">{item.q}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p></div>)}</div>
        </section>

        <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6">
          <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Official FMCSA references</h2></div>
          <div className="mt-4 flex flex-col gap-3 text-sm"><a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.fmcsa.dot.gov/hours-service/elds/using-elds">FMCSA: Using ELDs and special driving categories</a><a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.fmcsa.dot.gov/hours-service/elds/if-driver-forgets-indicate-start-personal-conveyance-pc-or-yard-moves-ym-can">FMCSA: missed Yard Move or PC selection</a><a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.fmcsa.dot.gov/hours-service/elds/how-will-electronic-logging-device-eld-display-screen-or-printout-reflect">FMCSA: displaying special driving categories</a></div>
        </section>

        <section className="mt-12 border-t border-border/40 pt-8">
          <h2 className="text-2xl font-bold text-foreground">Related guides</h2>
          <div className="mt-5 flex flex-wrap gap-3"><Resource href="/personal-conveyance-rules" label="Personal Conveyance" /><Resource href="/unassigned-driving-time" label="Unassigned driving" /><Resource href="/blog/how-to-fix-eld-logbook-mistakes" label="ELD corrections" /><Resource href="/eld-monitoring" label="ELD monitoring" /></div>
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
