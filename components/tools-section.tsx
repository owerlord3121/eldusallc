import Link from "next/link"
import { ArrowRight, Calculator, Gauge, Route, ShieldCheck } from "lucide-react"

const tools = [
  { icon: Gauge, title: "HOS Calculator", text: "Estimate remaining driving, duty-window, and cycle availability.", href: "/hos-calculator" },
  { icon: ShieldCheck, title: "ELD Exemption Guide", text: "Understand the main FMCSA exceptions and recordkeeping requirements.", href: "/eld-exemptions" },
  { icon: Calculator, title: "Cost Per Mile", text: "Estimate your true truck operating cost per mile.", href: "/cost-per-mile-calculator" },
  { icon: Route, title: "Trip Profit Calculator", text: "Check deadhead, fees, trip costs, rate per mile, and estimated profit.", href: "/trip-profit-calculator" },
]

export function ToolsSection() {
  return (
    <section className="border-y border-border/40 bg-card/40 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Built for the road</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">Free tools for drivers & owner-operators</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Useful calculators and compliance references you can use without creating an account.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group rounded-2xl border border-border/50 bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><tool.icon className="h-5 w-5 text-primary" /></div>
              <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Open <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center"><Link href="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View all trucking tools <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  )
}
