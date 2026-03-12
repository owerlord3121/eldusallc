"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle2, Download, ClipboardList, Shield, AlertTriangle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DOTInspectionChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "DOT Inspection Checklist for Truck Drivers (2026)",
            description:
              "Complete DOT inspection checklist for truck drivers. Know what inspectors check, prepare your ELD, vehicle, and documents for a successful inspection.",
            author: {
              "@type": "Organization",
              name: "NextLog FullService",
            },
            publisher: {
              "@type": "Organization",
              name: "NextLog FullService",
              logo: {
                "@type": "ImageObject",
                url: "https://eldusallc.com/images/logo.png",
              },
            },
            datePublished: "2026-01-20",
            dateModified: "2026-03-01",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://eldusallc.com/dot-inspection-checklist",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/40 bg-card">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="NextLog FullService"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-bold text-foreground sm:text-base">
                Next<span className="text-primary">Log</span>
              </span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              Back to Blog
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          {/* Breadcrumb */}
          <nav className="mb-6 text-xs text-muted-foreground sm:text-sm">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">DOT Inspection Checklist</span>
          </nav>

          {/* Title */}
          <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            DOT Inspection Checklist for Truck Drivers (2026)
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-sm">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">DOT Compliance</span>
            <span>Updated: March 2026</span>
            <span>18 min read</span>
          </div>

          {/* Introduction */}
          <div className="prose prose-sm max-w-none sm:prose-base">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Being prepared for a DOT inspection is essential for every truck driver. Inspections can happen anytime at weigh stations, roadside, or at your carrier facility. This comprehensive checklist covers everything inspectors examine during a DOT inspection, from your ELD and logbook to brakes, lights, and safety equipment. Use this guide to prepare for inspections and maintain compliance year-round.
            </p>

            {/* Table of Contents */}
            <div className="my-8 rounded-xl border border-border/50 bg-card p-4 sm:p-6">
              <h2 className="mb-3 text-base font-semibold text-foreground sm:text-lg">Table of Contents</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#what-inspectors-check" className="hover:text-primary">1. What Inspectors Check During DOT Inspection</a></li>
                <li><a href="#eld-logbook" className="hover:text-primary">2. ELD Logbook Inspection</a></li>
                <li><a href="#brake-system" className="hover:text-primary">3. Brake System Inspection</a></li>
                <li><a href="#lights-safety" className="hover:text-primary">4. Lights and Safety Equipment</a></li>
                <li><a href="#pre-trip-checklist" className="hover:text-primary">5. Pre-Trip Inspection Checklist</a></li>
              </ul>
            </div>

            {/* Download Section */}
            <div className="my-8 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <Download className="mt-1 h-8 w-8 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Download Printable Checklist</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Get a printable PDF version of this DOT inspection checklist to keep in your cab.
                  </p>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href="/#contact">
                      Request PDF Checklist
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <section id="what-inspectors-check" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">What Inspectors Check During DOT Inspection</h2>
              
              <p className="mb-4 text-muted-foreground">
                DOT inspections are conducted according to standardized levels established by the Commercial Vehicle Safety Alliance (CVSA). Understanding these inspection levels helps you know what to expect and how to prepare.
              </p>

              <div className="my-6 space-y-4">
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-red-500/20 text-xs font-bold text-red-400">I</span>
                    <h3 className="font-semibold text-foreground">Level I - North American Standard Inspection</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The most comprehensive inspection. Includes examination of the driver (credentials, HOS, ELD) AND a complete vehicle inspection. Takes approximately 45-60 minutes. Inspectors check all safety systems, undercarriage, and documentation.
                  </p>
                </div>
                
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-orange-500/20 text-xs font-bold text-orange-400">II</span>
                    <h3 className="font-semibold text-foreground">Level II - Walk-Around Driver/Vehicle Inspection</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Similar to Level I but without going under the vehicle. Inspectors check all items visible from a walk-around plus driver credentials, ELD, and logbook. Most common inspection type at weigh stations.
                  </p>
                </div>
                
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-yellow-500/20 text-xs font-bold text-yellow-400">III</span>
                    <h3 className="font-semibold text-foreground">Level III - Driver-Only Inspection</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Focuses only on the driver. Examines CDL, medical card, HOS records, ELD data, and seatbelt use. Vehicle is not inspected unless obvious defects are observed. Quick inspection taking about 15-20 minutes.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground">
                Regardless of inspection level, drivers must always have their required documents readily accessible. Fumbling for paperwork creates a poor first impression and can lead to more thorough scrutiny. Keep all documents organized in one location in your cab.
              </p>
            </section>

            {/* Section 2 */}
            <section id="eld-logbook" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">ELD Logbook Inspection</h2>
              
              <p className="mb-4 text-muted-foreground">
                Your ELD and logbook are among the first things inspectors examine. They want to verify you are operating within Hours of Service regulations and that your ELD is functioning properly and registered with FMCSA.
              </p>

              <div className="my-6 rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                <h3 className="mb-3 font-semibold text-foreground">ELD Inspection Checklist</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    "ELD is mounted and visible to inspector",
                    "ELD is on FMCSA registered device list",
                    "Current 24-hour period logs displayed",
                    "Previous 7 days logs available",
                    "Driver logged in with correct credentials",
                    "No unidentified driving time",
                    "All logs certified by driver",
                    "Data transfer capability works (Bluetooth/USB)",
                    "ELD shows correct time zone",
                    "No malfunction indicators displayed",
                    "Annotations present for unusual events",
                    "Co-driver information accurate (if applicable)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground">
                If your ELD has malfunctioned, you must have documentation showing you reported the malfunction to your carrier within 24 hours and have been maintaining paper logs. You have 8 days to repair or replace a malfunctioning ELD. Always carry paper log forms as backup.
              </p>

              <p className="mt-4 text-muted-foreground">
                Inspectors will also verify your HOS compliance by checking available hours. Common violations include driving over 11 hours, exceeding 14-hour window, violating 30-minute break requirement, and exceeding 60/70-hour limits. Know your hours before reaching inspection points.
              </p>
            </section>

            {/* Section 3 */}
            <section id="brake-system" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Brake System Inspection</h2>
              
              <p className="mb-4 text-muted-foreground">
                Brake violations are the leading cause of out-of-service orders during DOT inspections. Inspectors conduct thorough brake examinations, especially during Level I inspections. Understanding what they check helps you maintain your brakes properly.
              </p>

              <div className="my-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <h3 className="mb-3 font-semibold text-foreground">Air Brake Checks</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Air compressor operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Air tank pressure (120-145 PSI)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Low air pressure warning (55 PSI)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Air leaks in lines and connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Slack adjuster adjustment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Pushrod stroke measurement</span>
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <h3 className="mb-3 font-semibold text-foreground">Brake Component Checks</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Brake lining thickness (min 1/4 inch)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Brake drum condition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Brake hose and tubing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Brake chamber condition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>ABS indicator light function</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                      <span>Parking brake operation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="my-6 rounded-xl border border-orange-500/30 bg-orange-500/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                  <div>
                    <h4 className="font-semibold text-foreground">Out-of-Service Criteria</h4>
                    <p className="text-sm text-muted-foreground">
                      If 20% or more of your brakes are defective, you will be placed out of service. For a typical 18-wheeler with 10 brake positions, having just 2 defective brakes triggers OOS status. Regular brake maintenance is essential.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="lights-safety" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Lights and Safety Equipment</h2>
              
              <p className="mb-4 text-muted-foreground">
                Lighting violations are common and easily preventable. A complete walk-around before every trip helps catch burned-out bulbs and damaged lenses. Inspectors check all lighting systems and required safety equipment.
              </p>

              <div className="my-6 rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                <h3 className="mb-3 font-semibold text-foreground">Required Lights (All Must Function)</h3>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    "Headlights (high/low beam)",
                    "Taillights",
                    "Brake lights",
                    "Turn signals (front & rear)",
                    "Hazard flashers",
                    "Clearance lights",
                    "Side marker lights",
                    "License plate light",
                    "Reflectors",
                    "Identification lights (3 on top)",
                    "Backup lights",
                    "ABS indicator lights",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-6 rounded-xl border border-border/50 bg-card p-4 sm:p-6">
                <h3 className="mb-3 font-semibold text-foreground">Required Safety Equipment</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Fire extinguisher (fully charged, 5 B:C or more)",
                    "Warning triangles (3 reflective triangles)",
                    "Spare fuses (if truck uses fuses)",
                    "Tire chains (where required by law)",
                    "Cargo securement devices",
                    "Wheel chocks (for specific vehicles)",
                    "First aid kit (recommended)",
                    "Accident report forms",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground">
                Fire extinguishers must be properly mounted and accessible. Check the pressure gauge monthly and have the extinguisher professionally inspected annually. The inspection tag should show the most recent service date.
              </p>
            </section>

            {/* Section 5 */}
            <section id="pre-trip-checklist" className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Pre-Trip Inspection Checklist</h2>
              
              <p className="mb-4 text-muted-foreground">
                A thorough pre-trip inspection is your first line of defense against DOT violations. Federal regulations require drivers to conduct a pre-trip inspection before operating a CMV. Document your inspection and address any defects before driving.
              </p>

              <div className="my-6 space-y-4">
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <h3 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                    <Truck className="h-5 w-5 text-primary" />
                    Tractor Inspection
                  </h3>
                  <div className="grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
                    {[
                      "Engine compartment (oil, coolant, belts, hoses)",
                      "Steering mechanism (free play, linkage)",
                      "Windshield and mirrors (clean, undamaged)",
                      "Wipers and washers functioning",
                      "Horn operation",
                      "Seat belt condition",
                      "All gauges and warning lights",
                      "Fuel level and cap",
                      "DEF level (if applicable)",
                      "Exhaust system (leaks, secure mounting)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/50" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <h3 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                    <ClipboardList className="h-5 w-5 text-primary" />
                    Coupling & Trailer
                  </h3>
                  <div className="grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
                    {[
                      "Fifth wheel properly coupled",
                      "Kingpin locked in place",
                      "Air and electrical connections secure",
                      "Landing gear fully raised",
                      "Trailer body and doors secure",
                      "Cargo properly secured",
                      "Trailer brakes functioning",
                      "Trailer lights working",
                      "Mud flaps present",
                      "License plate visible and illuminated",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/50" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <h3 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                    <Shield className="h-5 w-5 text-primary" />
                    Tires & Wheels (All Positions)
                  </h3>
                  <div className="grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
                    {[
                      "Tire pressure (check when cold)",
                      "Tread depth (min 4/32 steer, 2/32 others)",
                      "No cuts, bulges, or exposed cords",
                      "Lug nuts present and tight",
                      "No cracks in wheels or rims",
                      "Hub seals not leaking",
                      "Valve stems and caps present",
                      "Matching tires on duals",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/50" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">
                Document your pre-trip inspection using your carrier's DVIR (Driver Vehicle Inspection Report) system. Note any defects discovered and do not operate the vehicle until safety-critical defects are corrected. Keep records of previous inspections accessible in your cab.
              </p>
            </section>

            {/* CTA Section */}
            <section className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center sm:p-6">
              <Shield className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">Stay Inspection-Ready 24/7</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Our team helps you maintain compliance and prepare for DOT inspections with 24/7 monitoring.
              </p>
              <Button asChild className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">
                  Get Professional Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </section>

            {/* Related Links */}
            <section className="mt-10">
              <h2 className="mb-4 text-lg font-bold text-foreground">Related Resources</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/eld-violations" className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/40">
                  <h3 className="font-semibold text-foreground">ELD Violations List</h3>
                  <p className="text-sm text-muted-foreground">Complete guide to ELD violations and fixes</p>
                </Link>
                <Link href="/eld-rules-2026" className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/40">
                  <h3 className="font-semibold text-foreground">ELD Rules 2026</h3>
                  <p className="text-sm text-muted-foreground">Current ELD regulations and requirements</p>
                </Link>
                <Link href="/dot-audit-help" className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/40">
                  <h3 className="font-semibold text-foreground">DOT Audit Help</h3>
                  <p className="text-sm text-muted-foreground">Professional DOT audit preparation</p>
                </Link>
                <Link href="/eld-compliance" className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/40">
                  <h3 className="font-semibold text-foreground">ELD Compliance Service</h3>
                  <p className="text-sm text-muted-foreground">Full compliance management</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* Footer */}
        <footer className="border-t border-border/40 bg-card py-6">
          <div className="mx-auto max-w-4xl px-4 text-center text-xs text-muted-foreground sm:px-6">
            <p>&copy; {new Date().getFullYear()} NextLog FullService. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
