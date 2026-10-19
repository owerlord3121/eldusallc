import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for visitors and customers of NextLog FullService.",
  alternates: { canonical: "https://eldusallc.com/privacy" },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 pt-24 pb-14 sm:px-6 sm:pt-28 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: October 20, 2026</p>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section><h2 className="text-xl font-semibold text-foreground">Information you provide</h2><p className="mt-2">When you contact NextLog FullService or submit a website form, you may provide information such as your name, phone number, email address, company name, and the message you send us.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">How we use information</h2><p className="mt-2">We use submitted information to respond to inquiries, provide requested services or support, communicate about your account or service needs, improve our website and customer experience, and protect our operations from misuse.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">Website analytics and technical data</h2><p className="mt-2">Our website may use hosting, analytics, security, and performance services that process technical information such as browser type, device information, pages viewed, approximate location derived from network information, and request logs.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">Service providers</h2><p className="mt-2">We may use service providers to host the website, receive and manage inquiries, communicate with customers, process analytics, or support business operations. These providers may process information only as needed to provide their services to us.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">Data retention</h2><p className="mt-2">We retain information for as long as reasonably necessary for the purposes described above, to provide services, maintain business records, resolve disputes, and meet applicable legal or compliance obligations.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">Your choices</h2><p className="mt-2">You may contact us to ask about personal information you previously submitted through this website and to request correction or deletion where applicable.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground">Contact</h2><p className="mt-2">For privacy questions, contact us through the <Link href="/contact" className="text-primary hover:underline">contact page</Link> or email <a href="mailto:workingeld@gmail.com" className="text-primary hover:underline">workingeld@gmail.com</a>.</p></section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
