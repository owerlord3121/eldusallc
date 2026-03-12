import type { Metadata } from "next"
import Link from "next/link"
import { Clock, ArrowRight, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "ELD Blog for Trucking Drivers | ELD Rules, DOT Tips & Compliance Guides",
  description:
    "Expert articles on ELD compliance, DOT inspections, logbook corrections, and trucking regulations. Stay informed with the latest ELD rules and industry tips for drivers.",
  keywords: [
    "ELD blog",
    "trucking blog",
    "ELD rules",
    "DOT inspection tips",
    "logbook correction guide",
    "trucking compliance",
    "ELD violations",
    "DOT audit guide",
  ],
  alternates: { canonical: "https://eldusallc.com/blog" },
  openGraph: {
    type: "website",
    url: "https://eldusallc.com/blog",
    title: "ELD Blog for Trucking Drivers | Expert Compliance Guides",
    description:
      "Expert articles on ELD compliance, DOT inspections, logbook corrections, and trucking regulations for drivers.",
  },
}

const blogPosts = [
  {
    slug: "eld-violations-list",
    title: "Complete ELD Violations List: What Every Driver Must Know",
    description:
      "Comprehensive guide to all ELD violations, penalty points, and how to avoid them. Stay compliant and protect your CSA score.",
    readTime: "12 min read",
    date: "March 1, 2026",
    category: "Compliance",
  },
  {
    slug: "eld-rules-2026",
    title: "ELD Rules 2026: Latest FMCSA Regulations Update",
    description:
      "Everything you need to know about the latest ELD mandate changes in 2026, including new exemptions and compliance requirements.",
    readTime: "15 min read",
    date: "February 28, 2026",
    category: "Regulations",
  },
  {
    slug: "dot-inspection-checklist",
    title: "DOT Inspection Checklist: Complete Driver Guide",
    description:
      "Step-by-step DOT inspection checklist covering vehicle, driver, and ELD requirements. Be prepared for any roadside inspection.",
    readTime: "14 min read",
    date: "February 25, 2026",
    category: "Inspections",
  },
  {
    slug: "how-to-fix-eld-logbook-mistakes",
    title: "How to Fix ELD Logbook Mistakes: Step-by-Step Guide",
    description:
      "Learn the proper procedures for correcting ELD logbook errors, making edits, and maintaining compliance with FMCSA rules.",
    readTime: "11 min read",
    date: "February 20, 2026",
    category: "Logbooks",
  },
  {
    slug: "dot-audit-preparation-guide",
    title: "DOT Audit Preparation Guide: Everything You Need",
    description:
      "Complete guide to preparing for DOT audits including documentation requirements, common issues, and how to pass with confidence.",
    readTime: "16 min read",
    date: "February 15, 2026",
    category: "Audits",
  },
]

export default function BlogPage() {
  return (
    <main className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">
              ELD Blog
            </span>
          </div>
          <h1 className="mb-3 text-balance text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            ELD Compliance & Trucking Guides
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            Expert articles on ELD rules, DOT inspections, logbook corrections, and everything
            trucking drivers need to stay compliant on the road.
          </p>
        </header>

        {/* Free Tools */}
        <div className="mb-8 sm:mb-10">
          <h2 className="mb-4 text-lg font-semibold text-foreground sm:text-xl">Free Trucking Tools</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/hos-calculator"
              className="group rounded-xl border border-green-500/30 bg-green-500/5 p-4 transition-all hover:border-green-500/50 hover:bg-green-500/10"
            >
              <h3 className="mb-1 font-semibold text-foreground group-hover:text-green-500">HOS Calculator</h3>
              <p className="text-xs text-muted-foreground sm:text-sm">Calculate your remaining driving hours instantly</p>
            </Link>
            <Link
              href="/eld-exemptions"
              className="group rounded-xl border border-blue-500/30 bg-blue-500/5 p-4 transition-all hover:border-blue-500/50 hover:bg-blue-500/10"
            >
              <h3 className="mb-1 font-semibold text-foreground group-hover:text-blue-500">ELD Exemptions Checker</h3>
              <p className="text-xs text-muted-foreground sm:text-sm">Find out if you need an ELD or qualify for exemption</p>
            </Link>
          </div>
        </div>

        {/* Featured Guides */}
        <div className="mb-10 sm:mb-12">
          <h2 className="mb-4 text-lg font-semibold text-foreground sm:text-xl">Featured Guides</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/eld-violations"
              className="group rounded-xl border border-primary/30 bg-primary/5 p-4 transition-all hover:border-primary/50 hover:bg-primary/10"
            >
              <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary">ELD Violations List</h3>
              <p className="text-xs text-muted-foreground sm:text-sm">Complete 2026 guide to all ELD violations</p>
            </Link>
            <Link
              href="/dot-inspection-checklist"
              className="group rounded-xl border border-primary/30 bg-primary/5 p-4 transition-all hover:border-primary/50 hover:bg-primary/10"
            >
              <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary">DOT Inspection Checklist</h3>
              <p className="text-xs text-muted-foreground sm:text-sm">Prepare for your next DOT inspection</p>
            </Link>
            <Link
              href="/eld-rules-2026"
              className="group rounded-xl border border-primary/30 bg-primary/5 p-4 transition-all hover:border-primary/50 hover:bg-primary/10"
            >
              <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary">ELD Rules 2026</h3>
              <p className="text-xs text-muted-foreground sm:text-sm">Latest FMCSA regulations and requirements</p>
            </Link>
          </div>
        </div>

        <h2 className="mb-4 text-lg font-semibold text-foreground sm:text-xl">All Articles</h2>
        <div className="space-y-4 sm:space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-primary/40 sm:p-6"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:mb-3 sm:gap-3 sm:text-sm">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                  {post.title}
                </h2>
                <p className="mb-3 text-sm text-muted-foreground sm:text-base">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center sm:mt-12 sm:p-8">
          <h2 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
            Need Help with ELD Compliance?
          </h2>
          <p className="mb-4 text-sm text-muted-foreground sm:text-base">
            Our team provides 24/7 ELD monitoring, logbook correction, and DOT audit preparation.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
