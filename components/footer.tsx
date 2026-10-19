"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const serviceLinks = [
    { href: "/eld-service", label: "ELD Service" },
    { href: "/eld-support", label: "ELD Support" },
    { href: "/eld-monitoring", label: "ELD Monitoring" },
    { href: "/logbook-correction", label: "Logbook Assistance" },
    { href: "/dot-audit-help", label: "DOT Audit Help" },
    { href: "/eld-compliance", label: "ELD Compliance" },
  ]

  const resourceLinks = [
    { href: "/blog", label: "ELD Guides" },
    { href: "/eld-rules-2026", label: "ELD Rules 2026" },
    { href: "/eld-violations", label: "ELD Violations" },
    { href: "/dot-inspection-checklist", label: "DOT Checklist" },
    { href: "/eld-malfunction", label: "ELD Malfunction Guide" },
  ]

  const toolLinks = [
    { href: "/tools", label: "All Trucking Tools" },
    { href: "/hos-calculator", label: "HOS Calculator" },
    { href: "/eld-exemptions", label: "ELD Exemption Guide" },
    { href: "/cost-per-mile-calculator", label: "Cost Per Mile Calculator" },
    { href: "/trip-profit-calculator", label: "Trip Profit Calculator" },
  ]

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/images/nextlog.png" alt="NextLog FullService logo" width={34} height={34} className="rounded-full" />
              <span className="font-bold text-foreground">Next<span className="text-primary">Log</span> FullService</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              24/7 ELD monitoring, driver assistance, DOT audit preparation, IFTA support, and trucking compliance resources for carriers and owner-operators.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
            <Link href="/about" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">About NextLog</Link>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Services</h2>
            <nav aria-label="ELD services" className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {serviceLinks.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>)}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Resources</h2>
            <nav aria-label="Trucking resources" className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {resourceLinks.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>)}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Free Tools</h2>
            <nav aria-label="Trucking tools" className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {toolLinks.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>)}
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-5 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} NextLog FullService. {t("footer.rights")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools" className="transition-colors hover:text-primary">Tools</Link>
            <a href="/#pricing" className="transition-colors hover:text-primary">{t("nav.pricing")}</a>
            <a href="/#faq" className="transition-colors hover:text-primary">{t("nav.faq")}</a>
            <a href="/#contact" className="transition-colors hover:text-primary">{t("nav.contact")}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
