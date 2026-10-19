import Link from "next/link"
import { Home, Search } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="flex min-h-[70vh] items-center justify-center px-4 pt-24 pb-14 text-center">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Page not found</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">The page may have moved or the address may be incorrect. Use one of the main resources below.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"><Home className="h-4 w-4" />Home</Link>
            <Link href="/tools" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground"><Search className="h-4 w-4" />Trucking Tools</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
