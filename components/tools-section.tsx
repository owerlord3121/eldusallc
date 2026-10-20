import Link from "next/link"
import { ArrowUpRight, Calculator, Gauge, Route, ShieldCheck } from "lucide-react"

const tools = [
  { icon: Gauge, title: "HOS Calculator", text: "Estimate remaining driving, duty-window and cycle availability.", href: "/hos-calculator" },
  { icon: ShieldCheck, title: "ELD Exemption Guide", text: "Understand the main FMCSA exceptions and recordkeeping rules.", href: "/eld-exemptions" },
  { icon: Calculator, title: "Cost Per Mile", text: "Calculate your true truck operating cost per mile.", href: "/cost-per-mile-calculator" },
  { icon: Route, title: "Trip Profit Calculator", text: "Check rate, deadhead, trip costs and estimated profit.", href: "/trip-profit-calculator" },
]

export function ToolsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Driver utilities</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">Useful tools. No signup.</h2></div>
          <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white">Browse all tools <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="mt-9 divide-y divide-border/60 overflow-hidden rounded-[26px] border border-border/60 bg-card/60">
          {tools.map((tool, index) => (
            <Link key={tool.href} href={tool.href} className="group grid gap-4 px-5 py-5 transition-colors hover:bg-white/[0.025] sm:grid-cols-[50px_1fr_auto] sm:items-center sm:px-7 sm:py-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary"><tool.icon className="h-5 w-5 text-accent" /></div>
              <div><div className="font-semibold text-foreground group-hover:text-accent">{tool.title}</div><div className="mt-1 text-sm text-muted-foreground">{tool.text}</div></div>
              <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-accent sm:flex"><ArrowUpRight className="h-4 w-4" /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
