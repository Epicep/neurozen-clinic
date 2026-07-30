import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthorityBar from "@/components/AuthorityBar";
import BiologicalResetSection from "@/components/BiologicalResetSection";
import MentalSpecialtiesSection from "@/components/MentalSpecialtiesSection";
import FAQSection from "@/components/FAQSection";
import { homeFaqs } from "@/data/faqs";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import MediaSection from "@/components/MediaSection";
import ThreePillarsSection from "@/components/ThreePillarsSection";
import MechanismSection from "@/components/MechanismSection";
import TargetedApproachSection from "@/components/TargetedApproachSection";
import ConditionsSpecialtiesSection from "@/components/ConditionsSpecialtiesSection";
import ConditionQuickLinks from "@/components/ConditionQuickLinks";
import SEO from "@/components/SEO";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO path="/" faqItems={homeFaqs} />
      <Header />
      <main>
        <HeroSection />
        <AuthorityBar />
        <ConditionQuickLinks />
        <MechanismSection />
        <TargetedApproachSection />
        <ConditionsSpecialtiesSection />
        <BiologicalResetSection />
        <MentalSpecialtiesSection />
        <MediaSection />
        <FAQSection />
        <LeadCaptureSection />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
