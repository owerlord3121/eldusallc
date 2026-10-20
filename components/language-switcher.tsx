"use client"

import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { Language, languageNames } from "@/lib/translations"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languages: { code: Language; flag: string; href: string }[] = [
  { code: "en", flag: "🇺🇸", href: "/" },
  { code: "ru", flag: "🇷🇺", href: "/ru" },
  { code: "kg", flag: "🇰🇬", href: "/ky" },
  { code: "uz", flag: "🇺🇿", href: "/uz" },
  { code: "tr", flag: "🇹🇷", href: "/tr" },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const { language, setLanguage } = useLanguage()
  const currentLang = languages.find((l) => l.code === language)

  const selectLanguage = (lang: (typeof languages)[number]) => {
    setLanguage(lang.code)
    router.push(lang.href)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1.5 px-2 text-muted-foreground hover:text-foreground" aria-label="Change language">
          <Globe className="h-4 w-4" />
          <span className="text-sm">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => selectLanguage(lang)}
            className={`cursor-pointer gap-2 ${language === lang.code ? "bg-primary/10 text-primary" : ""}`}
          >
            <span>{lang.flag}</span>
            <span>{languageNames[lang.code]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
