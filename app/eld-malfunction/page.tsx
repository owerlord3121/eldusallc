"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, AlertCircle, Clock, FileText, Phone, CheckCircle2, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ELDMalfunctionPage() {
  const faqs = [
    {
      question: "What counts as an ELD malfunction?",
      answer: "An ELD malfunction is any failure of the device to record, retain, or display required data accurately. This includes: failure to record engine hours, vehicle miles, or location; inability to print or transfer data; screen display issues; or failure to sync with the vehicle's ECM. Diagnostic and malfunction indicators on the ELD alert drivers to these issues."
    },
    {
      question: "How long can I drive with a malfunctioning ELD?",
      answer: "Per FMCSA regulations (49 CFR 395.34), you can continue operating for up to 8 days after discovering an ELD malfunction, provided you maintain accurate paper logs. However, the carrier must ensure the ELD is repaired, replaced, or serviced within those 8 days. If not fixed within 8 days, you cannot operate the vehicle."
    },
    {
      question: "Do I need to notify my carrier about ELD malfunction?",
      answer: "Yes, you must notify your motor carrier of the ELD malfunction within 24 hours. Document the malfunction by noting it in the 'remarks' section of your paper log. The carrier is responsible for ensuring the ELD is repaired or replaced within 8 days."
    },
    {
      question: "What if the ELD malfunctions during a roadside inspection?",
      answer: "If your ELD malfunctions during an inspection, show the inspector your paper logs and documentation of the malfunction. Explain when the malfunction occurred and that you've notified your carrier. Having proper paper logs prevents an Out of Service order."
    },
    {
      question: "Can I be cited for ELD malfunction?",
      answer: "You can be cited if you don't have proper documentation of the malfunction, fail to maintain paper logs during the malfunction period, don't notify your carrier within 24 hours, or continue operating beyond 8 days with a malfunctioning ELD. Proper documentation protects you from violations."
    },
    {
      question: "How do I switch from ELD to paper logs during malfunction?",
      answer: "When your ELD malfunctions: 1) Note the date, time, and nature of the malfunction in your remarks, 2) Reconstruct your records for the current 24-hour period on paper, 3) Continue keeping paper logs until the ELD is repaired, 4) Keep the paper logs in your possession for inspection."
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border/40 bg-card py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
              ELD Compliance Guide
            </span>
          </div>
          <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            ELD Malfunction Guide | What Truck Drivers Must Do
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base leading-relaxed max-w-3xl">
            Complete guide on handling ELD malfunctions. Learn FMCSA rules, how long you can drive without a working 
            ELD, paper log requirements, and when to contact ELD support.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm sm:prose-base max-w-none">
            
            {/* What is ELD Malfunction */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <AlertCircle className="h-5 w-5 text-primary" />
                What is an ELD Malfunction?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                An ELD malfunction occurs when your Electronic Logging Device fails to function as required by FMCSA 
                regulations. This can include hardware failures, software errors, connectivity issues, or any condition 
                that prevents the ELD from accurately recording and displaying your hours of service data.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under 49 CFR 395.34, when a malfunction occurs, the ELD must record the malfunction and alert the 
                driver. Common signs of ELD malfunction include:
              </p>

              <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6 mt-6">
                <h3 className="font-semibold text-foreground mb-3">Signs of ELD Malfunction:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span><strong>Malfunction indicator</strong> - Warning light or message on ELD display</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span><strong>Data not recording</strong> - Engine hours, miles, or location not updating</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span><strong>Display issues</strong> - Screen blank, frozen, or showing errors</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span><strong>Transfer failure</strong> - Unable to print or transfer data to inspector</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span><strong>Connection lost</strong> - ELD not communicating with vehicle ECM</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How Long Can You Drive Without ELD */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <Clock className="h-5 w-5 text-primary" />
                How Long Can You Drive Without a Working ELD?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                According to FMCSA regulations (49 CFR 395.34), when an ELD malfunctions, a driver may continue 
                to operate the commercial motor vehicle for up to <strong>8 days</strong> after the malfunction is 
                discovered. However, there are important conditions you must follow:
              </p>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-3">8-Day Malfunction Period Requirements:</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">1</span>
                    <span>Notify your motor carrier of the malfunction <strong>within 24 hours</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">2</span>
                    <span>Reconstruct your record of duty status for the current 24-hour period and previous 7 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">3</span>
                    <span>Continue to maintain <strong>paper logs</strong> until the ELD is repaired or replaced</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">4</span>
                    <span>Carrier must ensure the ELD is repaired, replaced, or serviced <strong>within 8 days</strong></span>
                  </li>
                </ol>
              </div>

              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4 sm:p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  Important Warning
                </h3>
                <p className="text-sm text-muted-foreground">
                  If the ELD is not repaired or replaced within 8 days, you <strong>cannot operate</strong> the 
                  commercial motor vehicle. Operating beyond the 8-day period with a malfunctioning ELD is a 
                  violation that can result in being placed Out of Service.
                </p>
              </div>
            </section>

            {/* Paper Logs During Malfunction */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <FileText className="h-5 w-5 text-primary" />
                Paper Logs During ELD Malfunction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When your ELD malfunctions, you must maintain accurate paper records of duty status (RODS). 
                Your paper logs must meet the same requirements as your electronic logs and include all required 
                information.
              </p>

              <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-3">Paper Log Requirements:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Graph grid showing all duty status changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Date and time of each status change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Location (city, state, highway) at each change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Total miles driven today</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Truck and trailer numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Carrier name and address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Driver signature</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>Remarks noting the ELD malfunction</strong></span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                <h3 className="font-semibold text-foreground mb-3">Sample Malfunction Notation:</h3>
                <div className="rounded-lg bg-secondary/50 p-4 font-mono text-xs sm:text-sm text-muted-foreground">
                  <p>"ELD malfunction discovered at [TIME] on [DATE].</p>
                  <p>Nature of malfunction: [DESCRIPTION].</p>
                  <p>Carrier notified on [DATE] at [TIME].</p>
                  <p>Maintaining paper logs per 49 CFR 395.34."</p>
                </div>
              </div>
            </section>

            {/* FMCSA Rules */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <FileText className="h-5 w-5 text-primary" />
                FMCSA Rules for ELD Malfunctions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Federal Motor Carrier Safety Administration has specific regulations governing ELD malfunctions 
                under 49 CFR Part 395. Understanding these rules helps you stay compliant and avoid violations.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-2">49 CFR 395.34(a) - Driver Requirements</h3>
                  <p className="text-sm text-muted-foreground">
                    The driver must note the malfunction, reconstruct driving records, and continue manually 
                    recording duty status until the ELD is repaired or replaced.
                  </p>
                </div>
                
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-2">49 CFR 395.34(b) - Carrier Notification</h3>
                  <p className="text-sm text-muted-foreground">
                    Driver must notify the motor carrier of the ELD malfunction within 24 hours of discovery.
                  </p>
                </div>
                
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-2">49 CFR 395.34(c) - Carrier Requirements</h3>
                  <p className="text-sm text-muted-foreground">
                    The motor carrier must correct, repair, replace, or service the malfunctioning ELD within 
                    8 days of discovering or being notified of the malfunction.
                  </p>
                </div>
                
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-2">49 CFR 395.34(d) - Extension Request</h3>
                  <p className="text-sm text-muted-foreground">
                    A motor carrier may request an extension from FMCSA if repairs cannot be completed within 
                    8 days. The extension must be requested before the 8-day period expires.
                  </p>
                </div>
              </div>
            </section>

            {/* When to Contact ELD Support */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <Phone className="h-5 w-5 text-primary" />
                When to Contact ELD Support
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional ELD support can help you navigate malfunctions quickly and ensure you stay compliant. 
                Here's when you should reach out:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Immediately Contact Support When:</h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span>ELD shows malfunction indicator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span>Device won't power on or connect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span>Data transfer failing during inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span>Approaching 8-day repair deadline</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">How ELD Support Helps:</h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span>Remote troubleshooting 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span>Paper log assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span>Coordinating repairs/replacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span>Documentation for inspections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10 sm:mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl mb-4">
                <HelpCircle className="h-5 w-5 text-primary" />
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="rounded-xl border border-border/50 bg-card px-4 last:border-b"
                  >
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center sm:p-8">
            <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
              ELD Not Working? Get 24/7 Support
            </h2>
            <p className="mb-5 text-sm text-muted-foreground sm:text-base">
              Our ELD support team is available around the clock to help you troubleshoot malfunctions, 
              maintain compliance, and get back on the road quickly.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
                <Link href="/#contact">
                  Contact ELD Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="tel:+13075350021">Call +1 (307) 535-0021</a>
              </Button>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-10 border-t border-border/40 pt-8">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Related Resources:</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/eld-support" className="rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                ELD Support USA
              </Link>
              <Link href="/logbook-correction" className="rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                Logbook Correction
              </Link>
              <Link href="/dot-violations" className="rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                DOT Violations Guide
              </Link>
              <Link href="/eld-violations" className="rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                ELD Violations List
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-6">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-semibold text-foreground hover:text-primary">
            NextLog FullService
          </Link>
          <p className="mt-2 text-xs text-muted-foreground">
            Professional ELD Service USA | 24/7 Support
          </p>
        </div>
      </footer>
    </main>
  )
}
