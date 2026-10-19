import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Website Disclaimer",
  description: "Website terms, informational-use disclaimer, and service limitations for NextLog FullService.",
  alternates: { canonical: "https://eldusallc.com/terms" },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 pt-24 pb-14 sm:px-6 sm:pt-28 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Terms & Website Disclaimer</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: October 20, 2026</p>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section><h2 className="text-xl font-semibold text-foreground">Website information</h2><p className="mt-2">The information, guides, calculators, and checklists on this website are provided for general informational and planning purposes. They are not a substitute for the current federal or state regulations, official agency guidance, your ELD record, or professional legal or tax advice.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">Compliance responsibility</h2><p className="mt-2">Motor carriers and drivers remain responsible for complying with applicable FMCSA, DOT, Hours of Service, ELD, IFTA, tax, licensing, and recordkeeping requirements. A calculator result or website article should not be used to override an ELD, safety official, official regulation, or agency instruction.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">Service scope</h2><p className="mt-2">Specific services, pricing, support scope, response expectations, and responsibilities are determined by the arrangement agreed with each customer. Website descriptions are general and may not describe every limitation or customer-specific term.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">No guaranteed outcome</h2><p className="mt-2">Compliance support, monitoring, training, or audit preparation cannot guarantee that a driver or carrier will avoid violations, pass an inspection or audit, or receive a particular regulatory outcome.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">Third-party services and links</h2><p className="mt-2">The site may reference or link to third-party services, agencies, ELD providers, messaging platforms, or other websites. NextLog FullService does not control third-party content, availability, policies, or systems.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">Contact</h2><p className="mt-2">Questions about these terms can be sent through our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.</p></section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
