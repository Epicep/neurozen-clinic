import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChronicPainHeroSection from "@/components/chronic-pain/ChronicPainHeroSection";
import ChronicPainProblemSection from "@/components/chronic-pain/ChronicPainProblemSection";
import ChronicPainScienceSection from "@/components/chronic-pain/ChronicPainScienceSection";
import ChronicPainConditionsSection from "@/components/chronic-pain/ChronicPainConditionsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";

const ChronicPain = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ChronicPainHeroSection />
        <div className="py-8" />
        <ChronicPainProblemSection />
        <div className="py-8" />
        <ChronicPainScienceSection />
        <div className="py-8" />
        <ChronicPainConditionsSection />
        <div className="py-8" />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default ChronicPain;
