import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import LogosSection from "@/components/sections/LogosSection";
import GrowthEngineSection from "@/components/sections/GrowthEngineSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProvenImpactSection from "@/components/sections/ProvenImpactSection";
import ContentManagementSection from "@/components/sections/ContentManagementSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ReachCalculatorSection from "@/components/sections/ReachCalculatorSection";
import PricingSection from "@/components/sections/PricingSection";
import AdvocacyEngineSection from "@/components/sections/AdvocacyEngineSection";
import DedicatedTeamSection from "@/components/sections/DedicatedTeamSection";
import BlogSection from "@/components/sections/BlogSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LogosSection />
      <GrowthEngineSection />
      <FeaturesSection />
      <ProvenImpactSection />
      <LogosSection label="Our Partnerships" />
      <ContentManagementSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <ReachCalculatorSection />
      <PricingSection />
      <AdvocacyEngineSection />
      <DedicatedTeamSection />
      <BlogSection />
      <CertificationsSection />
      <Footer />
    </main>
  );
}
