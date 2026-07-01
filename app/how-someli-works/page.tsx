import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import StatsBarSection from './StatsBarSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection'; // REUSING existing component
import TechStackSection from './TechStackSection';
import LogosSection, { PARTNERSHIP_LOGOS } from '@/components/sections/LogosSection';

export const metadata: Metadata = {
  title: 'How Someli Works | Someli AI',
  description: 'One platform. Three layers. Exponential impact. Learn how Someli AI turns your brand into a global employee advocacy engine.',
};

export default function HowSomeliWorksPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBarSection />
        <HowItWorksSection />
        <TechStackSection />
        <LogosSection label="Our Partnerships" logos={PARTNERSHIP_LOGOS} />
        <Footer />
      </main>
    </>
  );
}
