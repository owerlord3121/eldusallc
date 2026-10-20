import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, ArrowRight, CheckCircle2, ExternalLink, Search, ShieldAlert } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { breadcrumbJsonLd } from "@/lib/site"

const pageUrl = "https://eldusallc.com/revoked-eld-list"

export const metadata: Metadata = {
  title: "FMCSA Revoked ELD List 2026 | How to Check Your ELD",
  description:
    "Learn how to check whether your ELD is still on the FMCSA Registered Devices List, what a revoked ELD means, and what carriers should do after FMCSA removes a device.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "FMCSA Revoked ELD List 2026 | What Carriers Should Do",
    description: "How to verify ELD registration, understand FMCSA revocation notices, and prepare to replace a revoked device.",
    images: ["https://eldusallc.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCSA Revoked ELD List 2026 | USA ELD",
    description: "Check your ELD registration status and understand the carrier steps after an FMCSA revocation.",
    images: ["https://eldusallc.com/twitter-image"],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "FMCSA Revoked ELD List 2026: How to Check Your ELD",
  description: "A practical guide for motor carriers and drivers on checking FMCSA ELD registration status and responding to device revocation.",
  url: pageUrl,
  mainEntityOfPage: pageUrl,
  datePublished: "2026-10-20",
  dateModified: "2026-10-20",
  author: { "@id": "https://eldusallc.com/#organization" },
  publisher: { "@id": "https://eldusallc.com/#organization" },
  image: ["https://eldusallc.com/opengraph-image"],
}

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "FMCSA Revoked ELD List" },
])

export default function RevokedELDPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="pt-24 pb-14 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link><span>/</span><span className="text-foreground/80">Revoked ELD List</span>
          </nav>

          <header className="text-center">
            <div className="flex items-center justify-center gap-2"><ShieldAlert className="h-5 w-5 text-primary" /><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FMCSA ELD status guide</span></div>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">FMCSA Revoked ELD List 2026: Check Your Device</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">An ELD can be registered when you buy it and later be removed by FMCSA. Carriers should verify device status regularly instead of assuming an old registration is still valid.</p>
          </header>

          <section className="mt-10 rounded-3xl border border-red-500/25 bg-red-500/5 p-6 sm:p-8">
            <div className="flex gap-3"><AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-red-400" /><div><h2 className="text-xl font-bold text-foreground">Why this matters</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">FMCSA has removed multiple ELDs from the Registered Devices List during 2026. Revocation notices generally give carriers a transition period to stop using the device and move to a registered ELD. After the applicable deadline, continued use can be treated as operating without a registered ELD and may lead to an out-of-service action.</p></div></div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">How to check whether your ELD is still registered</h2>
            <div className="mt-5 space-y-3">
              {[
                "Open the official FMCSA ELD website — not a reseller's old product page.",
                "Search the Registered ELDs list for the exact device name, model, provider, and ELD identifier.",
                "Check FMCSA News and Events for recent removals and enforcement dates.",
                "If the device appears on the Revoked Devices list, read the specific notice because replacement deadlines are notice-specific.",
              ].map((item, index) => <div key={item} className="flex gap-3 rounded-2xl border border-border/50 bg-card p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{index + 1}</span><p className="text-sm leading-relaxed text-muted-foreground">{item}</p></div>)}
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outline"><a href="https://eld.fmcsa.dot.gov/List" target="_blank" rel="noopener noreferrer"><Search className="mr-2 h-4 w-4" />FMCSA Registered ELD List <ExternalLink className="ml-2 h-3.5 w-3.5" /></a></Button>
              <Button asChild variant="outline"><a href="https://eld.fmcsa.dot.gov/Support/NewsAndEvents" target="_blank" rel="noopener noreferrer">FMCSA ELD News <ExternalLink className="ml-2 h-3.5 w-3.5" /></a></Button>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-border/50 bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">What to do if FMCSA revokes your ELD</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Read the exact FMCSA notice and note the effective replacement deadline.",
                "Follow the notice's temporary recordkeeping instructions while transitioning.",
                "Select a replacement from the current Registered ELDs list.",
                "Preserve required historical records and supporting documents during the changeover.",
                "Train drivers on the replacement system before the enforcement deadline.",
                "Confirm data-transfer and roadside-inspection procedures on the replacement device.",
              ].map((item) => <div key={item} className="flex gap-2 rounded-xl border border-border/40 bg-background/40 p-4 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>)}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">Do not rely on a static third-party “approved ELD” list</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">ELD providers self-certify and register devices with FMCSA, and FMCSA can later remove devices that do not meet requirements. That means an old blog post, screenshot, sales page, or PDF can become outdated. The current FMCSA list should be the final source when verifying device status.</p>
          </section>

          <section className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link href="/eld-malfunction" className="rounded-2xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">ELD Malfunction Guide</h3><p className="mt-2 text-sm text-muted-foreground">A malfunction is different from an FMCSA revocation. Learn the driver and carrier workflow.</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Read guide <ArrowRight className="h-4 w-4" /></span></Link>
            <Link href="/eld-compliance" className="rounded-2xl border border-border/50 bg-card p-5 hover:border-primary/40"><h3 className="font-semibold text-foreground">ELD Compliance</h3><p className="mt-2 text-sm text-muted-foreground">Review ELD and HOS compliance support for your fleet.</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">See compliance support <ArrowRight className="h-4 w-4" /></span></Link>
          </section>

          <section className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">Changing ELD systems after a revocation?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">USA ELD can help organize driver onboarding, monitoring, logbook workflows, and inspection readiness during an ELD transition.</p>
            <Button asChild className="mt-5"><Link href="/#contact">Talk to USA ELD</Link></Button>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
