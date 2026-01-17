import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import NeurologicalHeroSection from "@/components/neurological/NeurologicalHeroSection";
import NeurologicalPhilosophySection from "@/components/neurological/NeurologicalPhilosophySection";
import NeurologicalParkinsonSection from "@/components/neurological/NeurologicalParkinsonSection";
import NeurologicalMSSection from "@/components/neurological/NeurologicalMSSection";
import NeurologicalBenefitsSection from "@/components/neurological/NeurologicalBenefitsSection";

const Neurological = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <main>
        <NeurologicalHeroSection />
        <NeurologicalPhilosophySection />
        <NeurologicalParkinsonSection />
        <NeurologicalMSSection />
        <NeurologicalBenefitsSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Neurological;
