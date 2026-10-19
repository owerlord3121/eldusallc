import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Calculator, ClipboardCheck, FileWarning, Gauge, Route, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Trucking Tools | HOS, ELD, Cost Per Mile & Trip Profit Calculators",
  description:
    "Free trucking tools for owner-operators, fleet managers, and drivers: HOS calculator, ELD exemption guide, truck cost-per-mile calculator, trip profit calculator, DOT inspection checklist, and ELD malfunction guide.",
  alternates: { canonical: "https://eldusallc.com/tools" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/tools",
    title: "Free Trucking Tools | NextLog FullService",
    description:
      "Practical calculators and compliance resources for truck drivers, owner-operators, and fleets.",
  },
}

const tools = [
  {
    title: "HOS Calculator",
    description: "Estimate remaining driving, shift-window, and cycle availability using your current HOS values.",
    href: "/hos-calculator",
    icon: Gauge,
    tag: "Drivers",
  },
  {
    title: "ELD Exemption Guide",
    description: "Check the main FMCSA exceptions and understand when an ELD may or may not be required.",
    href: "/eld-exemptions",
    icon: ShieldCheck,
    tag: "Compliance",
  },
  {
    title: "Truck Cost Per Mile",
    description: "Turn fuel, truck payment, insurance, maintenance, deadhead, and other costs into your real CPM.",
    href: "/cost-per-mile-calculator",
    icon: Calculator,
    tag: "Owner-operators",
  },
  {
    title: "Trip Profit Calculator",
    description: "Check revenue, total miles, fuel, tolls, dispatch, factoring, and other trip costs before booking a load.",
    href: "/trip-profit-calculator",
    icon: Route,
    tag: "Owner-operators",
  },
  {
    title: "DOT Inspection Checklist",
    description: "Review driver, vehicle, documents, ELD, and roadside-inspection readiness before you roll.",
    href: "/dot-inspection-checklist",
    icon: ClipboardCheck,
    tag: "Drivers",
  },
  {
    title: "ELD Malfunction Guide",
    description: "Know the driver and carrier steps to take when an ELD malfunction affects accurate HOS records.",
    href: "/eld-malfunction",
    icon: FileWarning,
    tag: "Compliance",
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Trucking Tools",
  url: "https://eldusallc.com/tools",
  description:
    "Free trucking calculators and compliance tools for truck drivers, owner-operators, and fleet managers.",
  isPartOf: { "@id": "https://eldusallc.com/#website" },
  hasPart: tools.map((tool) => ({
    "@type": "WebPage",
    name: tool.title,
    url: `https://eldusallc.com${tool.href}`,
  })),
}

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Free trucking tools</p>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Useful tools for drivers, owner-operators, and fleets
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Fast calculators and compliance references built around real trucking workflows. No signup required.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-2xl border border-border/50 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <tool.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="rounded-full border border-border/50 bg-secondary/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {tool.tag}
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {tool.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Open tool <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">Need a human to review the situation?</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Calculators are planning aids. For ELD setup, HOS questions, logbook support, DOT preparation, or fleet monitoring, contact the NextLog team.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact NextLog <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
