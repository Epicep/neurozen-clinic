import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EmotionalSection from "@/components/EmotionalSection";
import NeuropunctureSection from "@/components/NeuropunctureSection";
import MolecularPillarsSection from "@/components/MolecularPillarsSection";
import BiologicalResetSection from "@/components/BiologicalResetSection";
import MentalSpecialtiesSection from "@/components/MentalSpecialtiesSection";
import FAQSection from "@/components/FAQSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EmotionalSection />
        <NeuropunctureSection />
        <MolecularPillarsSection />
        <BiologicalResetSection />
        <MentalSpecialtiesSection />
        <FAQSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
