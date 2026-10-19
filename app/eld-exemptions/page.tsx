import Link from "next/link"
import { CalendarDays, CheckCircle2, Clock3, FileText, Info, ShieldCheck, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const exceptions = [
  {
    icon: Clock3,
    title: "Qualifying short-haul operations",
    text: "Drivers who meet the short-haul exception can use time records instead of RODS and therefore may not need an ELD for those operations.",
    details: [
      "Property-carrying short-haul operations generally use a 150 air-mile radius.",
      "The driver must return to the normal work reporting location and be released within the applicable 14-hour period.",
      "The carrier must maintain the required time records.",
    ],
  },
  {
    icon: CalendarDays,
    title: "8 days or fewer of RODS in any 30 days",
    text: "A driver who is required to keep records of duty status on no more than 8 days within any rolling 30-day period can qualify for the ELD exception.",
    details: [
      "The 30-day period is rolling, not simply a calendar month.",
      "Paper RODS may still be required on days when RODS are required.",
      "Once the driver exceeds the exception threshold, ELD requirements can apply.",
    ],
  },
  {
    icon: Truck,
    title: "Pre-2000 model-year vehicles or engines",
    text: "FMCSA guidance generally uses the vehicle model year indicated by the VIN. A pre-2000 vehicle is excepted from the ELD requirement.",
    details: [
      "A later-model vehicle may also qualify when the installed engine predates model year 2000.",
      "Motor carriers should retain documentation of engine or motor changes at the principal place of business.",
      "The HOS rules still apply even when the ELD requirement does not.",
    ],
  },
  {
    icon: FileText,
    title: "Driveaway-towaway operations",
    text: "Certain driveaway-towaway operations are excepted when the vehicle being driven is the commodity being delivered, or when the vehicle being transported is a motorhome or recreational-vehicle trailer under the applicable rule.",
    details: [
      "The exception is tied to the nature of the driveaway-towaway operation.",
      "It is not a general exception for ordinary freight-hauling operations.",
      "Other HOS and recordkeeping requirements can still apply.",
    ],
  },
]

export default function ELDExemptionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FMCSA reference guide</span></div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">ELD Exemptions & Exceptions in 2026</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">A practical overview of the most common situations where a driver may not be required to use an ELD. The underlying Hours of Service and recordkeeping rules can still apply.</p>
          </header>

          <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-6">
            <div className="flex gap-3"><Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" /><div><h2 className="font-semibold text-foreground">Exception does not mean “no HOS rules”</h2><p className="mt-1 text-sm leading-relaxed text-muted-foreground">An operation can be excepted from the ELD requirement while still being subject to Hours of Service, paper RODS, time records, supporting documents, or other FMCSA rules. Verify the exact facts of your operation before relying on an exception.</p></div></div>
          </div>

          <section className="mt-10 grid gap-5 md:grid-cols-2">
            {exceptions.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-5 sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div>
                <h2 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail) => <li key={detail} className="flex gap-2 text-sm leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{detail}</span></li>)}
                </ul>
              </article>
            ))}
          </section>

          <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Quick decision check</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/50 bg-secondary/40 p-4"><h3 className="font-semibold text-foreground">You likely need an ELD when...</h3><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li>You are required to keep RODS and no ELD exception applies.</li><li>You exceed the 8-days-in-30 exception.</li><li>Your operation no longer meets the short-haul exception.</li><li>Your vehicle and engine do not qualify for the pre-2000 exception.</li></ul></div>
              <div className="rounded-xl border border-border/50 bg-secondary/40 p-4"><h3 className="font-semibold text-foreground">You may qualify for an exception when...</h3><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li>You meet the short-haul time-record exception.</li><li>You need RODS on no more than 8 days in a rolling 30-day period.</li><li>You operate a qualifying pre-2000 vehicle or engine.</li><li>You perform a qualifying driveaway-towaway operation.</li></ul></div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Related driver tools</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm"><Link href="/hos-calculator" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">HOS Calculator</Link><Link href="/dot-inspection-checklist" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">DOT Inspection Checklist</Link><Link href="/eld-malfunction" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">ELD Malfunction Guide</Link><Link href="/tools" className="rounded-lg border border-border/60 px-4 py-2 text-foreground hover:border-primary/40 hover:text-primary">All Tools</Link></div>
          </section>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><h2 className="text-xl font-bold text-foreground">Not sure whether an exception applies?</h2><p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">Tell us how you operate, what vehicle you run, and how often you need RODS. We can help you identify the right compliance workflow.</p><Button asChild className="mt-5"><Link href="/#contact">Ask NextLog</Link></Button></section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
