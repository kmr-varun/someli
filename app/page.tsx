import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import LogosSection from "@/components/sections/LogosSection";
import GrowthEngineSection from "@/components/sections/GrowthEngineSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProvenImpactSection from "@/components/sections/ProvenImpactSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LogosSection />
      <GrowthEngineSection />
      <FeaturesSection />
      <ProvenImpactSection />
    </main>
  );
}
