import { Building2, Clock3, Globe2, ShieldCheck, Languages } from "lucide-react"

const items = [
  { icon: Building2, value: "USA ELD LLC", label: "U.S. company" },
  { icon: Clock3, value: "24/7", label: "driver support" },
  { icon: Globe2, value: "50 states + Canada", label: "coverage" },
  { icon: Languages, value: "5 languages", label: "multilingual team" },
  { icon: ShieldCheck, value: "400+", label: "inspections supported" },
]

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-2 pb-6 sm:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-primary/10 bg-card/55 shadow-xl shadow-black/10 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => (
            <div key={item.value} className={`flex items-center gap-3 px-4 py-4 sm:px-5 ${index > 0 ? "border-t border-border/50 sm:border-t-0 lg:border-l" : ""} ${index === 2 ? "sm:border-t lg:border-t-0" : ""}`}>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/8"><item.icon className="h-4 w-4 text-accent" /></div>
              <div className="min-w-0"><div className="truncate text-sm font-semibold text-foreground">{item.value}</div><div className="text-[11px] text-muted-foreground">{item.label}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
