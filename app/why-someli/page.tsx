import Header from "@/components/Header";
import WhySomeliHeroSection from "@/components/sections/why-someli/WhySomeliHeroSection";
import PricingMarqueeBar from "@/components/sections/pricing/PricingMarqueeBar";
import StatsGridSection from "@/components/sections/why-someli/StatsGridSection";
import RealImpactSection from "@/components/sections/why-someli/RealImpactSection";
import TestimonialsSection from "@/components/sections/why-someli/TestimonialsSection";
import WhyCompaniesSection from "@/components/sections/why-someli/WhyCompaniesSection";
import LogosSection from "@/components/sections/LogosSection";
import Footer from "@/components/Footer";

export default function WhySomeliPage() {
  return (
    <main>
      <Header />
      <WhySomeliHeroSection />
      <PricingMarqueeBar />
      <StatsGridSection />
      <RealImpactSection />
      <TestimonialsSection />
      <WhyCompaniesSection />
      <LogosSection label="OUR PARTNERSHIPS" />
      <Footer />
    </main>
  );
}
