"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.pricing"), href: "/#pricing" },
    { label: "Tools", href: "/tools" },
    { label: "Resources", href: "/blog" },
    { label: "About", href: "/about" },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="surface-glass mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-5">
        <Link href="/" aria-label="USA ELD home" className="flex items-center shrink-0">
          <Image src="/images/usa-eld-logo.svg" alt="USA ELD" width={155} height={42} priority className="h-9 w-auto" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/[0.04] hover:text-foreground">{link.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <a href="tel:+18155506576" className="hidden xl:block">
            <Button size="sm" variant="ghost" className="gap-1.5 text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"><Phone className="h-3.5 w-3.5" />(815) 550-6576</Button>
          </a>
          <Button size="sm" className="gap-1.5 rounded-xl bg-primary px-4 text-white shadow-lg shadow-primary/20 hover:bg-primary/90" asChild>
            <Link href="/#contact">{t("nav.contact")}<ArrowUpRight className="h-3.5 w-3.5" /></Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-secondary/70" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="surface-glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-white/[0.04] hover:text-foreground" onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
            <a href="tel:+18155506576" className="mt-1"><Button size="sm" variant="outline" className="w-full gap-2 rounded-xl"><Phone className="h-4 w-4" />(815) 550-6576</Button></a>
            <Button size="sm" className="mt-1 w-full rounded-xl bg-primary text-white" asChild><Link href="/#contact" onClick={() => setMobileOpen(false)}>{t("nav.contact")}</Link></Button>
          </nav>
        </div>
      )}
    </header>
  )
}
