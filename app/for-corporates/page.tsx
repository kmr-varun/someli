import Header from "@/components/Header";
import CorporatesHeroSection from "@/components/sections/corporates/CorporatesHeroSection";
import RightForYouSection from "@/components/sections/corporates/RightForYouSection";
import FeaturesSection from "@/components/sections/corporates/FeaturesSection";
import RealResultsSection from "@/components/sections/corporates/RealResultsSection";
import ProcessSection from "@/components/sections/corporates/ProcessSection";
import PricingMarqueeBar from "@/components/sections/pricing/PricingMarqueeBar";
import Footer from "@/components/Footer";

export default function ForCorporatesPage() {
  return (
    <main>
      <Header />
      <CorporatesHeroSection />
      <RightForYouSection />
      <FeaturesSection />
      <RealResultsSection />
      <ProcessSection />
      <PricingMarqueeBar />
      <Footer />
    </main>
  );
}
