import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoundersHeroSection from "@/components/supercharge/FoundersHeroSection";
import LogosSection from "@/components/sections/LogosSection";
import WhatsIncludedSection from "@/components/supercharge/WhatsIncludedSection";
import SuperchargePricingSection from "@/components/supercharge/SuperchargePricingSection";
import TestimonialsSection from "@/components/sections/why-someli/TestimonialsSection";
import FAQSection from "@/components/sections/pricing/FAQSection";

export default function SuperchargePlanPage() {
  return (
    <main className="min-h-screen">
      {/* Header - Reused from home page */}
      <Header />

      {/* Section 1: Founder's Circle Hero - NEW */}
      <FoundersHeroSection />

      {/* Section 2: Logos Marquee #1 - REUSED */}
      <LogosSection label="Businesses That Grow With Someli" />

      {/* Section 3: What's Included Grid - NEW */}
      <WhatsIncludedSection />

      {/* Section 4: Supercharge Pricing - NEW */}
      <SuperchargePricingSection />

      {/* Section 5: Empty frame - SKIPPED */}

      {/* Section 6: Testimonials - REUSED from why-someli page */}
      <TestimonialsSection />

      {/* Section 7: FAQ Accordion - REUSED from pricing page */}
      <FAQSection />

      {/* Section 8: Logos Marquee #2 - REUSED */}
      <LogosSection label="Our Partnerships" />

      {/* Footer - Reused from home page */}
      <Footer />
    </main>
  );
}
