"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const seoLinks = [
    { href: "/eld-service", label: "ELD Service" },
    { href: "/eld-support", label: "ELD Support" },
    { href: "/eld-monitoring", label: "ELD Monitoring" },
    { href: "/logbook-correction", label: "Logbook Correction" },
    { href: "/dot-audit-help", label: "DOT Audit Help" },
    { href: "/eld-compliance", label: "ELD Compliance" },
  ]

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="NextLog FullService"
              width={28}
              height={28}
              className="rounded-full sm:h-8 sm:w-8"
            />
            <span className="text-sm font-bold text-foreground sm:text-base">
              Next<span className="text-primary">Log</span> FullService
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground sm:gap-5 sm:text-sm">
            <a href="/#services" className="transition-colors hover:text-primary">{t("nav.services")}</a>
            <a href="/#pricing" className="transition-colors hover:text-primary">{t("nav.pricing")}</a>
            <a href="/#why" className="transition-colors hover:text-primary">{t("nav.results")}</a>
            <a href="/#faq" className="transition-colors hover:text-primary">{t("nav.faq")}</a>
            <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
            <a href="/#contact" className="transition-colors hover:text-primary">{t("nav.contact")}</a>
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-muted-foreground sm:gap-3 sm:text-xs">
            {seoLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-[10px] text-muted-foreground sm:text-xs">
            30 N Gould St Ste R, Sheridan, WY 82801, USA
          </p>

          <div className="h-px w-full max-w-xs bg-border/40" />

          <p className="text-[10px] text-muted-foreground sm:text-xs">
            &copy; {new Date().getFullYear()} NextLog FullService. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
