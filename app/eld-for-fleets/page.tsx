import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BellRing, Building2, CheckCircle2, Clock, FileCheck2, Languages, ShieldCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/eld-for-fleets"

export const metadata: Metadata = {
  title: "ELD for Small Fleets & Trucking Fleets | 24/7 Support",
  description:
    "ELD for small fleets and trucking companies: 24/7 monitoring, driver support, logbook workflows, DOT audit preparation, IFTA support, multilingual assistance, and volume pricing.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "ELD for Small Fleets & Trucking Fleets | USA ELD",
    description: "Centralized ELD monitoring and compliance support for small fleets, fleet managers, safety teams, dispatchers, and drivers.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "ELD Support for Small Fleets and Trucking Fleets",
  url: pageUrl,
  provider: { "@id": "https://eldusallc.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  audience: { "@type": "BusinessAudience", audienceType: "Small trucking fleets and motor carriers" },
  offers: { "@type": "Offer", priceCurrency: "USD", price: "125", url: "https://eldusallc.com/eld-pricing", description: "Starting rate for fleets with 1–20 trucks." },
}

const breadcrumb = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "ELD for Small Fleets" }])

export default function FleetELDPage() {
  const capabilities = [
    { icon: Clock, title: "24/7 monitoring", text: "Continuous attention to ELD and logbook workflows across active drivers." },
    { icon: BellRing, title: "Driver follow-up", text: "Surface missing information, unidentified driving, sync issues, and support needs earlier." },
    { icon: ShieldCheck, title: "Compliance support", text: "Operational support around HOS, ELD records, inspections, and audit readiness." },
    { icon: FileCheck2, title: "Audit preparation", text: "Organize the ELD and logbook side of DOT and safety-audit preparation." },
    { icon: Languages, title: "Multilingual support", text: "Support in English, Russian, Turkish, Uzbek, and Kyrgyz for diverse driver teams." },
    { icon: Building2, title: "Fleet-ready workflow", text: "A support model that scales from a few trucks to larger multi-driver operations." },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">For small fleets & motor carriers</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD for Small Fleets with 24/7 Driver Support</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Small fleets usually do not have a large safety department. USA ELD gives dispatch, owners, safety staff, and drivers one support layer for monitoring, logbook workflows, inspections, and everyday ELD problems.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg"><Link href="/#contact">Discuss Your Fleet <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/eld-pricing">Fleet Pricing</Link></Button></div>
          </header>

          <section className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Why small fleets need a different setup</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">1–20 trucks creates real safety workload without enterprise staff</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Going from one truck to five or ten means more unidentified driving, more driver onboarding, more log review, more inspection exposure, and more follow-up. The goal is not a bigger dashboard — it is a repeatable workflow your team can actually manage every day.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {["One place for driver ELD support","Faster follow-up on recurring log issues","Support outside normal office hours","Clearer inspection and audit readiness"].map((item) => <div key={item} className="flex gap-2 rounded-xl border border-border/40 bg-background/50 p-3 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>)}
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-5"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div><h2 className="mt-4 font-semibold text-foreground">{item.title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}
          </section>

          <section className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card p-6"><h2 className="text-xl font-bold text-foreground">For fleet managers & safety teams</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{["Reduce manual driver follow-up around recurring ELD issues.","Keep ELD support available outside normal office hours.","Create a consistent workflow for logbook, unidentified-driving, and inspection readiness.","Add multilingual driver support without building a separate internal team.","Prepare the ELD side of audits with traceable, accurate records rather than last-minute edits."].map((item) => <li key={item} className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-border/50 bg-card p-6"><h2 className="text-xl font-bold text-foreground">For drivers</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{["Get support when ELD data is not syncing or a device workflow is unclear.","Receive help understanding missing logbook information and carrier requests.","Prepare for roadside inspections with clearer ELD procedures.","Reach a support team in a language the driver understands.","Get guidance on malfunction, Personal Conveyance, Yard Move, and unidentified-driving workflows."].map((item) => <li key={item} className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul></div>
          </section>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-wider text-primary">Volume pricing</p><h2 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">Small-fleet pricing starts at $125 per truck</h2><p className="mt-2 max-w-2xl text-sm text-muted-foreground">Published pricing is $125 per truck for 1–20 trucks, $115 for 21–40, $100 for 41–100, and custom pricing above 100 trucks. See the <Link href="/eld-cost" className="font-medium text-primary hover:underline">ELD cost guide</Link> for what full-service pricing includes.</p></div><Button asChild variant="outline"><Link href="/eld-pricing">View Pricing <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">What should a small fleet compare before choosing an ELD?</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["Total monthly + hardware cost","Contract length and cancellation terms","How quickly drivers can be onboarded","Support hours and response process","Unassigned-driving workflow","Inspection data-transfer process","IFTA and reporting needs","Hardware replacement policy","Whether you need software only or human monitoring"].map((item) => <div key={item} className="rounded-xl border border-border/50 bg-card p-4 text-sm text-muted-foreground">{item}</div>)}</div>
          </section>

          <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6 sm:p-8"><h2 className="text-xl font-bold text-foreground sm:text-2xl">Related fleet services</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[["ELD Monitoring","/eld-monitoring"],["ELD Support","/eld-support"],["ELD Cost Guide","/eld-cost"],["DOT Audit Help","/dot-audit-help"],["ELD Compliance","/eld-compliance"],["IFTA Reporting","/ifta-reporting"],["Unassigned Driving","/unassigned-driving-time"],["Personal Conveyance","/personal-conveyance-rules"],["Yard Move Rules","/yard-move-rules"]].map(([label, href]) => <Link key={href} href={href} className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/40 px-4 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary">{label}<ArrowRight className="h-4 w-4" /></Link>)}</div></section>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><h2 className="text-xl font-bold text-foreground">Need a support plan for your small fleet?</h2><p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Tell us how many trucks and drivers you operate, what ELD setup you use, and where your team needs support.</p><Button asChild className="mt-5"><Link href="/#contact">Contact USA ELD</Link></Button></section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
