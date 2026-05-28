import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthorityBar from "@/components/AuthorityBar";
import EmotionalSection from "@/components/EmotionalSection";
import NeuropunctureSection from "@/components/NeuropunctureSection";
import MolecularPillarsSection from "@/components/MolecularPillarsSection";
import BiologicalResetSection from "@/components/BiologicalResetSection";
import MentalSpecialtiesSection from "@/components/MentalSpecialtiesSection";
import FAQSection from "@/components/FAQSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import MediaSection from "@/components/MediaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AuthorityBar />
        <EmotionalSection />
        <NeuropunctureSection />
        <MolecularPillarsSection />
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
