import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIBrandingHeroSection from "@/components/sections/ai-branding/AIBrandingHeroSection";
import LogosSection from "@/components/sections/LogosSection";
import ProcessSection from "@/components/sections/ai-branding/ProcessSection";
import ContentPlannerSection from "@/components/sections/ai-branding/ContentPlannerSection";
import MultiLanguageSection from "@/components/sections/ai-branding/MultiLanguageSection";
import BenefitsSection from "@/components/sections/ai-branding/BenefitsSection";
import PricingSection from "@/components/sections/ai-branding/PricingSection";
import TestimonialsSection from "@/components/sections/why-someli/TestimonialsSection";

export default function AIPoweredBrandingPage() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Section 1: Hero */}
      <AIBrandingHeroSection />

      {/* Section 2: Logos Marquee */}
      <LogosSection label="Businesses That Grow With Someli" />

      {/* Section 3: Process - How it works */}
      <ProcessSection />

      {/* Section 4: Content Planner - Dark */}
      <ContentPlannerSection />

      {/* Section 5: Multi-Language */}
      <MultiLanguageSection />

      {/* Section 6: Benefits - Dark */}
      <BenefitsSection />

      {/* Section 7: Pricing */}
      <PricingSection />

      {/* Section 8: Testimonials */}
      <TestimonialsSection />

      {/* Section 9: Logos Marquee 2 */}
      <LogosSection label="OUR PARTNERSHIPS" />

      {/* Footer */}
      <Footer />
    </main>
  );
}
