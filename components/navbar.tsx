"use client"

import { useState } from "react"
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
    { label: t("nav.results"), href: "/#why" },
    { label: t("nav.faq"), href: "/#faq" },
    { label: "Blog", href: "/blog" },
    { label: t("nav.contact"), href: "/#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl shadow-lg shadow-black/20">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/nextlog.png"
            alt="NextLog FullService"
            width={40}
            height={40}
            className="rounded-full shadow-lg shadow-primary/20 ring-2 ring-primary/30"
          />
          <span className="text-base font-bold text-foreground">
            Next<span className="text-primary">Log</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:text-primary hover:bg-primary/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <a href="tel:+13092233263">
            <Button size="sm" variant="outline" className="gap-1.5 border-border/60">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">309-223-3263</span>
            </Button>
          </a>
          <a href="#contact">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/30 transition-all duration-200 hover:shadow-lg hover:shadow-primary/40">
              {t("nav.contact")}
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+13092233263" className="mt-2">
              <Button size="sm" variant="outline" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                {t("nav.call")}: 309-223-3263
              </Button>
            </a>
            <a href="#contact">
              <Button size="sm" className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t("nav.contact")}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
