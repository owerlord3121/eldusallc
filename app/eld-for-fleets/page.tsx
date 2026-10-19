import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BellRing, Building2, Clock, FileCheck2, Languages, ShieldCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "ELD for Trucking Fleets | 24/7 Fleet Monitoring & Compliance Support",
  description:
    "ELD support for trucking fleets with 24/7 monitoring, driver assistance, logbook workflow support, DOT audit preparation, IFTA reporting, and multilingual help.",
  alternates: { canonical: "https://eldusallc.com/eld-for-fleets" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/eld-for-fleets",
    title: "ELD Support for Trucking Fleets | NextLog FullService",
    description: "Centralized ELD and compliance support for fleet managers, dispatch teams, and drivers.",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ELD Support for Trucking Fleets",
  url: "https://eldusallc.com/eld-for-fleets",
  provider: { "@id": "https://eldusallc.com/#organization" },
  areaServed: { "@type": "Country", name: "United States" },
  audience: { "@type": "BusinessAudience", audienceType: "Trucking fleets and motor carriers" },
}

export default function FleetELDPage() {
  const capabilities = [
    { icon: Clock, title: "24/7 monitoring", text: "Continuous attention to ELD and logbook workflows across active drivers." },
    { icon: BellRing, title: "Driver follow-up", text: "Help surface missing information, unresolved log issues, and support needs before they become bigger problems." },
    { icon: ShieldCheck, title: "Compliance support", text: "Operational support around HOS, ELD records, inspections, and audit readiness." },
    { icon: FileCheck2, title: "Audit preparation", text: "Organize the ELD and logbook side of DOT audit preparation with a team that works in trucking every day." },
    { icon: Languages, title: "Multilingual support", text: "Support for diverse driver teams in English, Russian, Turkish, Uzbek, and Kyrgyz." },
    { icon: Building2, title: "Fleet-ready workflow", text: "A support model that can scale from a handful of trucks to larger multi-driver operations." },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">For motor carriers</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD Support for Trucking Fleets</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Give dispatchers, safety staff, and drivers one support layer for day-to-day ELD workflows. NextLog helps fleets stay organized, responsive, and better prepared for inspections and audits.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg"><Link href="/#contact">Discuss Your Fleet <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/eld-monitoring">See ELD Monitoring</Link></Button></div>
          </header>

          <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-5"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div><h2 className="mt-4 font-semibold text-foreground">{item.title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}
          </section>

          <section className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card p-6"><h2 className="text-xl font-bold text-foreground">For fleet managers & safety teams</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{["Reduce the amount of manual driver follow-up around ELD issues.","Keep ELD support available outside normal office hours.","Create a more consistent process for logbook and inspection readiness.","Add multilingual driver support without building a separate internal team."].map((item) => <li key={item} className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-border/50 bg-card p-6"><h2 className="text-xl font-bold text-foreground">For drivers</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{["Get support when ELD data is not syncing or a device workflow is unclear.","Receive help understanding what information is missing from the logbook.","Prepare for roadside inspections with clearer ELD procedures.","Reach a support team in a language the driver understands."].map((item) => <li key={item} className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul></div>
          </section>

          <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6 sm:p-8"><h2 className="text-xl font-bold text-foreground sm:text-2xl">Related fleet services</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[["ELD Monitoring","/eld-monitoring"],["ELD Support","/eld-support"],["DOT Audit Help","/dot-audit-help"],["ELD Compliance","/eld-compliance"],["IFTA Reporting","/ifta-reporting"],["ELD Service","/eld-service"]].map(([label, href]) => <Link key={href} href={href} className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/40 px-4 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary">{label}<ArrowRight className="h-4 w-4" /></Link>)}</div></section>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><h2 className="text-xl font-bold text-foreground">Need a support plan for your fleet?</h2><p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Tell us how many trucks and drivers you operate, what ELD you use, and what your team needs help with.</p><Button asChild className="mt-5"><Link href="/#contact">Contact NextLog</Link></Button></section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
