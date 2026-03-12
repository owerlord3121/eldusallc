import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileCheck, Truck, Clock, AlertCircle, CheckCircle2, XCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ELDExemptionsPage() {
  const exemptions = [
    {
      title: "Short-Haul Exemption",
      icon: Clock,
      description: "Drivers operating within 150 air-mile radius who return to work location within 14 hours",
      requirements: [
        "Operate within 150 air-mile radius of work location",
        "Return to work reporting location within 14 hours",
        "Have at least 10 consecutive hours off duty before shift",
        "Do not exceed 11 hours of driving time",
      ],
      note: "Must maintain time records showing start/end times for 6 months",
    },
    {
      title: "Pre-2000 Vehicle Exemption",
      icon: Truck,
      description: "Vehicles manufactured before model year 2000 are exempt from ELD requirements",
      requirements: [
        "Vehicle engine manufactured before December 18, 1999",
        "Must still comply with all HOS regulations",
        "Paper logs or AOBRD may be used instead",
        "Vehicle VIN or engine serial number as proof",
      ],
      note: "The exemption is based on engine manufacture date, not vehicle model year",
    },
    {
      title: "Driveaway-Towaway Exemption",
      icon: Truck,
      description: "Drivers delivering vehicles as commodities (new car haulers, RV transporters)",
      requirements: [
        "Vehicle being transported is the commodity",
        "Driving vehicle from manufacturing plant or dealership",
        "Includes driveaway-towaway operations",
        "Vehicle is part of shipment being delivered",
      ],
      note: "Does not apply to regular trucking operations",
    },
    {
      title: "8-Day ELD Exemption",
      icon: Calendar,
      description: "Drivers who use RODS for 8 or fewer days within any 30-day period",
      requirements: [
        "Required to keep RODS for 8 days or less in a 30-day period",
        "Must track days when RODS are required",
        "Paper logs acceptable during RODS days",
        "Common for seasonal or part-time drivers",
      ],
      note: "If you exceed 8 days in any 30-day period, ELD becomes required",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
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
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Title */}
        <header className="mb-8 text-center sm:mb-10">
          <div className="mb-3 flex items-center justify-center gap-2">
            <FileCheck className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
              FMCSA Guide
            </span>
          </div>
          <h1 className="mb-3 text-balance text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            ELD Exemptions 2026 | Who Does Not Need an ELD
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            Complete guide to ELD exemptions under FMCSA regulations. Learn who is exempt from 
            Electronic Logging Device requirements and what alternatives are available.
          </p>
        </header>

        {/* Quick Check */}
        <div className="mb-10 rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:mb-12 sm:p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground sm:text-xl">
            <AlertCircle className="h-5 w-5 text-primary" />
            Do You Need an ELD?
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-red-500/10 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                <XCircle className="h-4 w-4 text-red-500" />
                ELD Required If:
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>You operate a CMV in interstate commerce</li>
                <li>You are required to keep RODS more than 8 days/month</li>
                <li>You operate beyond 150 air-mile radius</li>
                <li>Your vehicle was built after 2000</li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-green-500/10 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                ELD Exempt If:
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>You qualify for short-haul exemption</li>
                <li>Your vehicle was made before 2000</li>
                <li>You use RODS 8 days or less per month</li>
                <li>Driveaway-towaway operations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exemptions */}
        <section className="space-y-6">
          {exemptions.map((exemption, idx) => (
            <div key={idx} className="rounded-xl border border-border/50 bg-card p-4 sm:p-6">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground sm:text-xl">
                <exemption.icon className="h-5 w-5 text-primary" />
                {exemption.title}
              </h2>
              <p className="mb-4 text-sm text-muted-foreground sm:text-base">
                {exemption.description}
              </p>
              
              <h3 className="mb-2 text-sm font-semibold text-foreground">Requirements:</h3>
              <ul className="mb-4 space-y-2">
                {exemption.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {req}
                  </li>
                ))}
              </ul>
              
              <div className="rounded-lg bg-secondary/50 p-3">
                <p className="text-xs text-muted-foreground sm:text-sm">
                  <strong>Note:</strong> {exemption.note}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Additional Content */}
        <div className="mt-10 space-y-6 sm:mt-12">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Understanding FMCSA ELD Exemption Rules
          </h2>
          
          <div className="prose prose-sm max-w-none text-muted-foreground sm:prose-base">
            <p>
              The FMCSA ELD mandate, which went into full effect in December 2019, requires most commercial motor 
              vehicle drivers to use Electronic Logging Devices to record their Hours of Service. However, the 
              FMCSA recognizes that certain operations have unique circumstances that make ELD use impractical 
              or unnecessary.
            </p>
            
            <h3 className="mt-6 text-lg font-semibold text-foreground">Short-Haul Exemption Details</h3>
            <p>
              The short-haul exemption is the most commonly used ELD exemption. To qualify, drivers must operate 
              within a 150 air-mile radius of their normal work reporting location and return to that location 
              within 14 hours of coming on duty. Short-haul drivers are still required to keep time records 
              showing the time they report for duty, the time they are released from duty, and the total hours 
              on duty each day.
            </p>
            
            <h3 className="mt-6 text-lg font-semibold text-foreground">Pre-2000 Vehicle Exemption</h3>
            <p>
              Vehicles with engines manufactured before December 18, 1999 are exempt from the ELD requirement. 
              This exemption exists because older vehicles may not have the diagnostic ports needed to connect 
              ELD devices. However, drivers of these vehicles must still comply with all HOS regulations and 
              may use paper logs or Automatic On-Board Recording Devices (AOBRDs) if available.
            </p>
            
            <h3 className="mt-6 text-lg font-semibold text-foreground">Driveaway-Towaway Operations</h3>
            <p>
              Driveaway-towaway operations involve transporting vehicles as commodities rather than hauling 
              freight. This includes delivering new vehicles from manufacturing plants to dealerships, 
              transporting RVs, or towing vehicles for delivery. Because the vehicle itself is the cargo, 
              and these operations often involve different vehicles on each trip, ELD installation is 
              considered impractical.
            </p>
            
            <h3 className="mt-6 text-lg font-semibold text-foreground">The 8-Day Rule</h3>
            <p>
              Drivers who are required to prepare RODS for 8 or fewer days within any 30-day period are exempt 
              from using an ELD. This exemption primarily benefits occasional drivers, seasonal workers, or 
              those who only periodically operate CMVs that require HOS compliance. If a driver exceeds 8 days 
              of required RODS in any 30-day period, they must begin using an ELD.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-10 sm:mt-12">
          <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">
            ELD Exemption FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Who is exempt from ELD requirements?",
                a: "Drivers who qualify for short-haul exemption (150 air-mile radius), operators of vehicles made before 2000, driveaway-towaway drivers, and those using RODS 8 days or less per month are exempt from ELD requirements.",
              },
              {
                q: "What is the short-haul ELD exemption?",
                a: "The short-haul exemption applies to drivers who operate within 150 air-miles of their work location, return within 14 hours, and do not exceed 11 hours of driving. They must keep time records but don't need an ELD.",
              },
              {
                q: "Do pre-2000 trucks need ELD?",
                a: "No, commercial motor vehicles with engines manufactured before December 18, 1999 are exempt from the ELD mandate. Drivers can use paper logs instead.",
              },
              {
                q: "What is the 8-day ELD exemption rule?",
                a: "If you are required to keep Records of Duty Status for 8 or fewer days in any 30-day period, you are exempt from ELD requirements. Paper logs are acceptable for those days.",
              },
              {
                q: "Can I lose my ELD exemption?",
                a: "Yes. If you exceed the parameters of your exemption (e.g., driving beyond 150 miles, exceeding 8 RODS days per month), you must begin using an ELD immediately.",
              },
              {
                q: "What records must exempt drivers keep?",
                a: "Short-haul exempt drivers must keep time records showing start time, end time, and total hours worked. Other exempt drivers must maintain paper logs that comply with FMCSA regulations.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-lg border border-border/50 bg-card p-4">
                <h3 className="mb-2 font-semibold text-foreground">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-5 text-center sm:mt-12 sm:p-8">
          <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
            Not Sure If You Need an ELD?
          </h2>
          <p className="mb-4 text-sm text-muted-foreground sm:text-base">
            Our compliance experts can help determine your ELD requirements and set up the right solution.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/#contact">
              Get Free Consultation
            </Link>
          </Button>
        </section>

        {/* Related Links */}
        <section className="mt-8 sm:mt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Related Resources
          </h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/eld-rules-2026" className="text-xs text-primary hover:underline sm:text-sm">ELD Rules 2026</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/hos-calculator" className="text-xs text-primary hover:underline sm:text-sm">HOS Calculator</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/eld-violations" className="text-xs text-primary hover:underline sm:text-sm">ELD Violations</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/eld-service" className="text-xs text-primary hover:underline sm:text-sm">ELD Service</Link>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-6">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            &copy; {new Date().getFullYear()} NextLog FullService - ELD Service USA
          </Link>
        </div>
      </footer>
    </main>
  )
}
