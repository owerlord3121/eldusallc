import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustStrip } from "@/components/trust-strip"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ToolsSection } from "@/components/tools-section"
import { LanguagesSection } from "@/components/languages-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { SEOContentSection } from "@/components/seo-content-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <PricingSection />
      <WhyChooseSection />
      <ToolsSection />
      <LanguagesSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <SEOContentSection />
      <Footer />
    </main>
  )
}
