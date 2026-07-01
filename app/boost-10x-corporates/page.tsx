import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogosSection, { PARTNERSHIP_LOGOS } from "@/components/sections/LogosSection";
import FAQSection from "@/components/sections/pricing/FAQSection";
import CalculatorHeroSection from "@/components/sections/boost-10x/CalculatorHeroSection";
import ReachCalculatorFormSection from "@/components/sections/boost-10x/ReachCalculatorFormSection";
import ResultsDisplaySection from "@/components/sections/boost-10x/ResultsDisplaySection";
import WhatWeOfferSection from "@/components/sections/boost-10x/WhatWeOfferSection";
import Boost10xPricingSection from "@/components/sections/boost-10x/Boost10xPricingSection";

export default function Boost10xCorporatesPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <CalculatorHeroSection />

      {/* Calculator Form Section */}
      <ReachCalculatorFormSection />

      {/* Results Display Section */}
      <ResultsDisplaySection />

      {/* What We Offer Section */}
      <WhatWeOfferSection />

      {/* Pricing Section */}
      <Boost10xPricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Logos Marquee Section */}
      <LogosSection label="OUR PARTNERSHIPS" logos={PARTNERSHIP_LOGOS} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
