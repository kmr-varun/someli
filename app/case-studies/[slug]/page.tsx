import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudyDetailHero from '@/components/sections/case-study-detail/CaseStudyDetailHero';
import CaseStudyDetailTabNav from '@/components/sections/case-study-detail/CaseStudyDetailTabNav';
import CaseStudyDetailOverview from '@/components/sections/case-study-detail/CaseStudyDetailOverview';
import CaseStudyDetailChallengeSolution from '@/components/sections/case-study-detail/CaseStudyDetailChallengeSolution';
import CaseStudyDetailResults from '@/components/sections/case-study-detail/CaseStudyDetailResults';
import CaseStudyDetailKeyTakeaways from '@/components/sections/case-study-detail/CaseStudyDetailKeyTakeaways';
import CaseStudyDetailClientSays from '@/components/sections/case-study-detail/CaseStudyDetailClientSays';

export const metadata = {
  title: 'DP World Case Study | Someli.ai',
  description: 'See how DP World leveraged Someli to turn employees into trusted brand advocates and achieve measurable growth.'
};

export default function CaseStudyDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CaseStudyDetailHero />
      <CaseStudyDetailTabNav />
      <CaseStudyDetailOverview />
      <CaseStudyDetailChallengeSolution />
      <CaseStudyDetailResults />
      <CaseStudyDetailKeyTakeaways />
      <CaseStudyDetailClientSays />
      <Footer />
    </main>
  );
}
