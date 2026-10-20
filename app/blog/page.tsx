import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, Clock, FileCheck2, Route } from "lucide-react"

export const metadata: Metadata = {
  title: "ELD Resources for Truck Drivers & Fleets | FMCSA Guides & Tools",
  description:
    "ELD and trucking compliance resources for drivers, owner-operators, and fleets: current ELD rules, Personal Conveyance, Yard Move, unassigned driving, DOT guides, HOS tools, and audit preparation.",
  alternates: { canonical: "https://eldusallc.com/blog" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/blog",
    title: "ELD Resources for Truck Drivers & Fleets | USA ELD",
    description: "Practical ELD, HOS, DOT, compliance, and owner-operator resources.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELD Resources for Truck Drivers & Fleets | USA ELD",
    description: "Practical ELD, HOS, DOT, compliance, and owner-operator resources.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

const guides = [
  {
    href: "/eld-rules-2026",
    title: "ELD Rules 2026: FMCSA Requirements",
    description: "Current overview of ELD requirements, HOS limits, exceptions, inspections, and malfunction procedures.",
    category: "Regulations",
    updated: "Updated Oct 2026",
  },
  {
    href: "/personal-conveyance-rules",
    title: "Personal Conveyance Rules",
    description: "Understand when authorized personal use may be recorded as off duty and how PC should be recorded on an ELD.",
    category: "HOS",
    updated: "Updated Oct 2026",
  },
  {
    href: "/yard-move-rules",
    title: "Yard Move Rules",
    description: "Learn how the Yard Move special driving category works, when to select it, and what to do if YM was missed.",
    category: "ELD",
    updated: "Updated Oct 2026",
  },
  {
    href: "/unassigned-driving-time",
    title: "Unassigned Driving Time",
    description: "Driver and carrier responsibilities for unidentified ELD driving, assignment, annotations, and record retention.",
    category: "Logbooks",
    updated: "Updated Oct 2026",
  },
  {
    href: "/eld-violations",
    title: "ELD Violations Guide",
    description: "Understand common ELD and logbook violations, what creates risk, and how to improve compliance workflows.",
    category: "Compliance",
    updated: "2026 guide",
  },
  {
    href: "/dot-inspection-checklist",
    title: "DOT Inspection Checklist",
    description: "Driver, vehicle, document, and ELD readiness checklist for roadside inspections.",
    category: "Inspections",
    updated: "Driver checklist",
  },
  {
    href: "/eld-malfunction",
    title: "ELD Malfunction Guide",
    description: "What drivers and carriers should do when an ELD malfunction affects accurate Hours of Service records.",
    category: "ELD Support",
    updated: "Practical guide",
  },
  {
    href: "/blog/how-to-fix-eld-logbook-mistakes",
    title: "How to Handle ELD Logbook Mistakes",
    description: "FMCSA-aligned process for eligible ELD corrections, annotations, unassigned driving, and recertification.",
    category: "Logbooks",
    updated: "Updated Oct 2026",
  },
  {
    href: "/blog/dot-audit-preparation-guide",
    title: "DOT Safety Audit Preparation Guide",
    description: "Organize driver, ELD, supporting, vehicle, insurance, and recordkeeping documents before a safety audit.",
    category: "Audits",
    updated: "Updated Oct 2026",
  },
]

const tools = [
  { href: "/hos-calculator", title: "HOS Calculator", description: "Estimate the most restrictive remaining HOS limit from current ELD values.", icon: Clock },
  { href: "/cost-per-mile-calculator", title: "Cost Per Mile", description: "Estimate monthly truck operating cost per mile.", icon: Calculator },
  { href: "/trip-profit-calculator", title: "Trip Profit", description: "Check load revenue, deadhead, fees, and estimated trip profit.", icon: Route },
  { href: "/eld-exemptions", title: "ELD Exception Guide", description: "Review common FMCSA exceptions to the ELD requirement.", icon: FileCheck2 },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-14 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2"><BookOpen className="h-5 w-5 text-primary" /><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">USA ELD Resources</span></div>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD, DOT & Trucking Compliance Resources</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Practical guides and calculators for truck drivers, owner-operators, fleet managers, and safety teams. Compliance guides link back to official FMCSA resources where applicable.</p>
          </header>

          <section className="mt-12">
            <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-wider text-primary">Free tools</p><h2 className="mt-1 text-2xl font-bold text-foreground">Useful before and during the trip</h2></div><Link href="/tools" className="hidden text-sm font-medium text-primary hover:underline sm:inline">All tools</Link></div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => <Link key={tool.href} href={tool.href} className="group rounded-2xl border border-border/50 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"><tool.icon className="h-5 w-5 text-primary" /><h3 className="mt-4 font-semibold text-foreground group-hover:text-primary">{tool.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.description}</p></Link>)}
            </div>
          </section>

          <section className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Guides</p>
            <h2 className="mt-1 text-2xl font-bold text-foreground">ELD & compliance knowledge base</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {guides.map((guide) => (
                <article key={guide.href} className="group rounded-2xl border border-border/50 bg-card p-5 transition-colors hover:border-primary/40 sm:p-6">
                  <Link href={guide.href} className="block">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{guide.category}</span><span>{guide.updated}</span></div>
                    <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors group-hover:text-primary sm:text-xl">{guide.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{guide.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link href="/eld-for-owner-operators" className="rounded-2xl border border-primary/20 bg-primary/5 p-6 hover:border-primary/40"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Owner-operators</p><h2 className="mt-2 text-xl font-bold text-foreground">ELD support built for independent truckers</h2><p className="mt-2 text-sm text-muted-foreground">See support and tools designed around one-truck and small-fleet workflows.</p></Link>
            <Link href="/eld-for-fleets" className="rounded-2xl border border-primary/20 bg-primary/5 p-6 hover:border-primary/40"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Fleet managers</p><h2 className="mt-2 text-xl font-bold text-foreground">Centralized ELD support for fleets</h2><p className="mt-2 text-sm text-muted-foreground">Explore monitoring, driver follow-up, multilingual support, and compliance workflows.</p></Link>
          </section>
        </div>
      </section>
    </main>
  )
}
