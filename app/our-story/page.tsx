import Header from "@/components/Header";
import OurStoryHeroSection from "@/components/sections/our-story/OurStoryHeroSection";
import IdeaToImpactSection from "@/components/sections/our-story/IdeaToImpactSection";
import MissionVisionSection from "@/components/sections/our-story/MissionVisionSection";
import TeamSection from "@/components/sections/our-story/TeamSection";
import LogosSection, { PARTNERSHIP_LOGOS } from "@/components/sections/LogosSection";
import PrinciplesSection from "@/components/sections/our-story/PrinciplesSection";
import Footer from "@/components/Footer";

export default function OurStoryPage() {
  return (
    <main>
      <Header />
      <OurStoryHeroSection />
      <IdeaToImpactSection />
      <MissionVisionSection />
      <TeamSection />
      <LogosSection label="Businesses That Grow With Someli" />
      <PrinciplesSection />
      <LogosSection label="Our Partnerships" logos={PARTNERSHIP_LOGOS} />
      <Footer />
    </main>
  );
}
