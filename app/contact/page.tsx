import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";
import HeadquartersSection from "@/components/sections/contact/HeadquartersSection";
import FAQSection from "@/components/sections/pricing/FAQSection";
import PricingMarqueeBar from "@/components/sections/pricing/PricingMarqueeBar";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHeroSection />
      <HeadquartersSection />
      <FAQSection />
      <PricingMarqueeBar />
      <Footer />
    </main>
  );
}
