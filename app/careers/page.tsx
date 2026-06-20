import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersHeroSection from "@/components/sections/careers/CareersHeroSection";
import PricingMarqueeBar from "@/components/sections/pricing/PricingMarqueeBar";
import StrategicPartnerSection from "@/components/sections/careers/StrategicPartnerSection";
import WhoWeLookForSection from "@/components/sections/careers/WhoWeLookForSection";
import PartnerBenefitsSection from "@/components/sections/careers/PartnerBenefitsSection";
import PartnershipProcessSection from "@/components/sections/careers/PartnershipProcessSection";
import OpenPositionsSection from "@/components/sections/careers/OpenPositionsSection";
import WhyJoinSection from "@/components/sections/careers/WhyJoinSection";
import LifeAtSomeliSection from "@/components/sections/careers/LifeAtSomeliSection";

export default function CareersPage() {
  return (
    <main>
      <Header />
      <CareersHeroSection />
      <PricingMarqueeBar />
      <StrategicPartnerSection />
      <WhoWeLookForSection />
      <PartnerBenefitsSection />
      <PartnershipProcessSection />
      <OpenPositionsSection />
      <WhyJoinSection />
      <LifeAtSomeliSection />
      <Footer />
    </main>
  );
}
