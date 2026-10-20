"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
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
    { label: t("nav.contact"), href: "/#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/88 backdrop-blur-2xl shadow-lg shadow-primary/5">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" aria-label="USA ELD home" className="flex items-center rounded-xl px-1 py-1 transition-opacity hover:opacity-90">
          <Image src="/images/usa-eld-logo.svg" alt="USA ELD" width={155} height={42} priority className="h-10 w-auto" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-primary/8 hover:text-accent">{link.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <a href="tel:+18155506576">
            <Button size="sm" variant="outline" className="gap-1.5 border-primary/20 bg-secondary/30 hover:border-primary/40 hover:bg-secondary"><Phone className="h-3.5 w-3.5 text-accent" /><span className="hidden sm:inline">(815) 550-6576</span></Button>
          </a>
          <Button size="sm" className="bg-primary text-primary-foreground shadow-md shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/35" asChild>
            <Link href="/#contact">{t("nav.contact")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-secondary/30" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-primary/10 bg-background/95 backdrop-blur-2xl md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-accent" onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
            <a href="tel:+18155506576" className="mt-2"><Button size="sm" variant="outline" className="w-full gap-2 border-primary/20 bg-secondary/30"><Phone className="h-4 w-4 text-accent" />{t("nav.call")}: (815) 550-6576</Button></a>
            <Button size="sm" className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild><Link href="/#contact" onClick={() => setMobileOpen(false)}>{t("nav.contact")}</Link></Button>
          </nav>
        </div>
      )}
    </header>
  )
}
