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
    { href: "/hos-calculator", label: "HOS Calculator" },
    { href: "/eld-exemptions", label: "ELD Exemptions" },
    { href: "/dot-inspection-checklist", label: "DOT Checklist" },
    { href: "/eld-malfunction", label: "ELD Malfunction Guide" },
  ]

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/nextlog.png"
                alt="NextLog FullService logo"
                width={34}
                height={34}
                className="rounded-full"
              />
              <span className="font-bold text-foreground">
                Next<span className="text-primary">Log</span> FullService
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              24/7 ELD monitoring, driver assistance, DOT audit preparation, IFTA support, and trucking compliance resources for carriers and owner-operators.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Services</h2>
            <nav aria-label="ELD services" className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Resources</h2>
            <nav aria-label="Trucking resources" className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {resourceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>
              ))}
              <Link href="/about" className="transition-colors hover:text-primary">About NextLog</Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-5 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} NextLog FullService. {t("footer.rights")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#services" className="transition-colors hover:text-primary">{t("nav.services")}</a>
            <a href="/#pricing" className="transition-colors hover:text-primary">{t("nav.pricing")}</a>
            <a href="/#faq" className="transition-colors hover:text-primary">{t("nav.faq")}</a>
            <a href="/#contact" className="transition-colors hover:text-primary">{t("nav.contact")}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
