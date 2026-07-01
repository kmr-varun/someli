import Header from "@/components/Header";
import PricingHeroSection from "@/components/sections/pricing/PricingHeroSection";
import PricingMarqueeBar from "@/components/sections/pricing/PricingMarqueeBar";
import PricingSection from "@/components/sections/PricingSection";
import LogosSection, { PARTNERSHIP_LOGOS } from "@/components/sections/LogosSection";
import StatsTestimonialSection from "@/components/sections/pricing/StatsTestimonialSection";
import FAQSection from "@/components/sections/pricing/FAQSection";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <main>
      <Header />
      <PricingHeroSection />
      <PricingMarqueeBar />
      <PricingSection />
      <LogosSection label="Businesses That Grow With Someli" />
      <StatsTestimonialSection />
      <FAQSection />
      <LogosSection label="Our Partnerships" logos={PARTNERSHIP_LOGOS} />
      <Footer />
    </main>
  );
}
