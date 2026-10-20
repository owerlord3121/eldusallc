"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const serviceLinks = [
    { href: "/eld-service", label: "ELD Service" },
    { href: "/eld-pricing", label: "ELD Pricing" },
    { href: "/eld-cost", label: "ELD Cost Guide" },
    { href: "/eld-support", label: "ELD Support" },
    { href: "/eld-monitoring", label: "ELD Monitoring" },
    { href: "/logbook-correction", label: "Logbook Assistance" },
    { href: "/dot-audit-help", label: "DOT Audit Help" },
    { href: "/eld-compliance", label: "ELD Compliance" },
    { href: "/ifta-reporting", label: "IFTA Reporting" },
  ]

  const resourceLinks = [
    { href: "/eld-for-owner-operators", label: "For Owner-Operators" },
    { href: "/eld-for-fleets", label: "For Small Fleets" },
    { href: "/blog", label: "ELD Guides" },
    { href: "/eld-rules-2026", label: "ELD Rules 2026" },
    { href: "/revoked-eld-list", label: "Revoked ELD List" },
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
            <Link href="/" className="inline-flex items-center">
              <Image src="/images/usa-eld-logo.svg" alt="USA ELD" width={165} height={44} className="h-10 w-auto" />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">24/7 ELD monitoring, driver assistance, DOT audit preparation, IFTA support, and trucking compliance resources for carriers and owner-operators.</p>
            <p className="mt-3 text-xs text-muted-foreground">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm"><Link href="/about" className="font-medium text-primary hover:underline">About USA ELD</Link><Link href="/contact" className="font-medium text-primary hover:underline">Contact</Link></div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Services</h2>
            <nav aria-label="ELD services" className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">{serviceLinks.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>)}</nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Solutions & Resources</h2>
            <nav aria-label="Trucking resources" className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">{resourceLinks.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>)}</nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Free Tools</h2>
            <nav aria-label="Trucking tools" className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">{toolLinks.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>)}</nav>
          </div>
        </div>

        <nav aria-label="Languages" className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-border/40 pt-5 text-xs text-muted-foreground sm:justify-start">
          <Link href="/" hrefLang="en" className="transition-colors hover:text-primary">English</Link>
          <Link href="/ru" hrefLang="ru" className="transition-colors hover:text-primary">Русский</Link>
          <Link href="/tr" hrefLang="tr" className="transition-colors hover:text-primary">Türkçe</Link>
          <Link href="/uz" hrefLang="uz" className="transition-colors hover:text-primary">O'zbekcha</Link>
          <Link href="/ky" hrefLang="ky" className="transition-colors hover:text-primary">Кыргызча</Link>
        </nav>

        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-5 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} USA ELD LLC. {t("footer.rights")}</p>
          <div className="flex flex-wrap justify-center gap-4"><Link href="/tools" className="transition-colors hover:text-primary">Tools</Link><Link href="/contact" className="transition-colors hover:text-primary">Contact</Link><Link href="/privacy" className="transition-colors hover:text-primary">Privacy</Link><Link href="/terms" className="transition-colors hover:text-primary">Terms</Link></div>
        </div>
      </div>
    </footer>
  )
}
