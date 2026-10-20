import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, CircleX, Info, Route, ShieldCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/personal-conveyance-rules"

export const metadata: Metadata = {
  title: "Personal Conveyance Rules | ELD & FMCSA Guide 2026",
  description: "Understand FMCSA personal conveyance rules, when PC may be used, when it should not be used, and how to record authorized personal use on an ELD.",
  alternates: { canonical: pageUrl },
  openGraph: { type: "article", url: pageUrl, title: "Personal Conveyance Rules | USA ELD", description: "A practical guide to personal conveyance and ELD recording under FMCSA guidance.", images: ["https://eldusallc.com/opengraph-image"] },
}

const faq = [
  { q: "What is personal conveyance?", a: "Personal conveyance is off-duty movement of a commercial motor vehicle for personal use when the driver is relieved from work and responsibility for performing work for the motor carrier." },
  { q: "Can a loaded truck be used for personal conveyance?", a: "FMCSA guidance says a CMV may be laden during personal conveyance if the movement is truly personal and is not transporting the load for the commercial benefit of the carrier at that time. A carrier may adopt a more restrictive policy." },
  { q: "Can missed PC be changed later?", a: "Automatically recorded driving generally cannot later be shortened by changing it to Personal Conveyance. If PC was not selected at the start or end, FMCSA guidance allows an annotation identifying the intended PC period." },
  { q: "Can a carrier prohibit personal conveyance?", a: "Yes. Motor carriers may set policies that are more restrictive than FMCSA guidance, including prohibiting PC or limiting its use." },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Personal Conveyance Rules: ELD & FMCSA Guide 2026",
  url: pageUrl,
  dateModified: "2026-10-20",
  inLanguage: "en-US",
  author: { "@id": "https://eldusallc.com/#organization" },
  publisher: { "@id": "https://eldusallc.com/#organization" },
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }
const breadcrumb = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Resources", path: "/blog" }, { name: "Personal Conveyance Rules" }])

export default function PersonalConveyanceRulesPage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <article className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">ELD & HOS guide</p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Personal Conveyance Rules for Truck Drivers</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Personal Conveyance (PC) is not a way to extend available driving hours. It is a method of recording authorized personal use of a commercial motor vehicle while the driver is genuinely off duty.</p>

        <section className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <div className="flex gap-3"><Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h2 className="font-semibold text-foreground">Core FMCSA test</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">The driver must be relieved from work and responsibility for performing work for the motor carrier. The reason for moving the CMV matters more than whether the vehicle is loaded or empty.</p></div></div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Examples that may qualify as Personal Conveyance</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Travel from en-route lodging to a restaurant or personal activity while off duty","A permitted commute between a terminal or work site and the driver's residence","Travel to the first nearby reasonable safe location for required rest after loading or unloading","Moving a CMV at the request of a safety official during an off-duty period","Transporting personal property while otherwise off duty","Authorized travel home after completing work at an off-site location"].map((item) => <div key={item} className="flex gap-3 rounded-xl border border-border/50 bg-card p-4 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Movements that should not be treated as PC</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Moving the truck to improve the carrier's operational position for the next load","Driving closer to a shipper, receiver, terminal, or scheduled business destination for commercial benefit","Using PC simply because normal HOS driving time is exhausted","An on-duty yard movement made as part of loading, unloading, staging, or other work","Any movement the carrier has not authorized under its PC policy","Using PC in a way that prevents the driver from receiving the required restorative rest"].map((item) => <div key={item} className="flex gap-3 rounded-xl border border-border/50 bg-card p-4 text-sm leading-relaxed text-muted-foreground"><CircleX className="mt-0.5 h-4 w-4 shrink-0 text-red-400" /><span>{item}</span></div>)}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6">
          <div className="flex items-center gap-2"><Route className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">How PC is recorded on an ELD</h2></div>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>If the carrier has enabled authorized personal use in the driver's ELD account, the driver may select the Personal Conveyance special driving category before the movement.</p>
            <p>If the carrier has not configured that category, FMCSA guidance describes recording the authorized personal use as Off Duty with annotations marking the beginning and end of the period.</p>
            <p><strong className="text-foreground">Important:</strong> if a driver forgets to select PC, automatically recorded driving generally cannot later be converted to PC to shorten driving time. The record can be annotated to explain the intended period.</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Carrier policy still matters</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">FMCSA allows carriers to establish limits that are more restrictive than federal guidance. A carrier can prohibit PC, set distance restrictions, or impose other conditions. Drivers should know the carrier's written policy before using the special category.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Personal Conveyance FAQ</h2>
          <div className="mt-5 space-y-3">{faq.map((item) => <div key={item.q} className="rounded-xl border border-border/50 bg-card p-5"><h3 className="font-semibold text-foreground">{item.q}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p></div>)}</div>
        </section>

        <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6">
          <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold text-foreground">Official sources</h2></div>
          <div className="mt-4 flex flex-col gap-3 text-sm"><a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.fmcsa.dot.gov/regulations/hours-service/personal-conveyance">FMCSA Personal Conveyance guidance</a><a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.fmcsa.dot.gov/hours-service/elds/if-driver-permitted-use-commercial-motor-vehicle-cmv-personal-reasons-how-must">FMCSA: recording authorized personal use on an ELD</a><a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.fmcsa.dot.gov/hours-service/elds/if-driver-forgets-indicate-start-personal-conveyance-pc-or-yard-moves-ym-can">FMCSA: missed PC or Yard Move selection</a></div>
        </section>

        <section className="mt-12 border-t border-border/40 pt-8">
          <h2 className="text-2xl font-bold text-foreground">Related guides</h2>
          <div className="mt-5 flex flex-wrap gap-3"><Resource href="/yard-move-rules" label="Yard Move rules" /><Resource href="/unassigned-driving-time" label="Unassigned driving" /><Resource href="/eld-violations" label="ELD violations" /><Resource href="/hos-calculator" label="HOS calculator" /></div>
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
