import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudiesHeroSection from '@/components/sections/case-studies/CaseStudiesHeroSection';
import PricingMarqueeBar from '@/components/sections/pricing/PricingMarqueeBar';
import CaseStudiesListSection from '@/components/sections/case-studies/CaseStudiesListSection';
import LogosSection from '@/components/sections/LogosSection';

export const metadata = {
  title: 'Case Studies | Someli.ai',
  description: 'Real results, real impact. Someli helps mid-sized organizations turn employees into trusted brand advocates and measurable growth drivers.'
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CaseStudiesHeroSection />
      <PricingMarqueeBar />
      <CaseStudiesListSection />
      <LogosSection label="OUR PARTNERSHIPS" />
      <Footer />
    </main>
  );
}
