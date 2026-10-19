import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact NextLog FullService | ELD Support",
  description: "Contact NextLog FullService for ELD monitoring, driver support, DOT audit preparation, IFTA reporting, and trucking compliance support.",
  alternates: { canonical: "https://eldusallc.com/contact" },
}

const contacts = [
  { icon: Phone, label: "Phone", value: "+1 309-223-3263", href: "tel:+13092233263" },
  { icon: MessageCircle, label: "Telegram", value: "@nextlogfullservice", href: "https://t.me/nextlogfullservice" },
  { icon: MessageCircle, label: "WhatsApp", value: "+996 508 228 328", href: "https://wa.me/996508228328" },
  { icon: Mail, label: "Email", value: "workingeld@gmail.com", href: "mailto:workingeld@gmail.com" },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-14 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p><h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">Talk to NextLog FullService</h1><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Contact us about ELD monitoring, logbook support, DOT preparation, IFTA reporting, owner-operator support, or fleet support.</p></header>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {contacts.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group rounded-2xl border border-border/50 bg-card p-5 transition-colors hover:border-primary/40"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div><h2 className="mt-4 font-semibold text-foreground">{item.label}</h2><p className="mt-1 text-sm text-primary">{item.value}</p></a>)}
          </div>
          <div className="mt-6 rounded-2xl border border-border/50 bg-card p-5"><div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><h2 className="font-semibold text-foreground">Business address</h2><p className="mt-1 text-sm text-muted-foreground">30 N Gould St Ste R, Sheridan, WY 82801, USA</p></div></div></div>
          <section className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><h2 className="text-xl font-bold text-foreground">Prefer the website form?</h2><p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Use the secure contact form on the homepage and our team will follow up.</p><Button asChild className="mt-5"><Link href="/#contact">Open Contact Form</Link></Button></section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
