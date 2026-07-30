import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import MetabolicHeroSection from "@/components/metabolic/MetabolicHeroSection";
import MetabolicPhilosophySection from "@/components/metabolic/MetabolicPhilosophySection";
import MetabolicScienceSection from "@/components/metabolic/MetabolicScienceSection";
import MetabolicConditionsSection from "@/components/metabolic/MetabolicConditionsSection";
import SEO from "@/components/SEO";

const Metabolic = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEO path="/metabolic" />
      <Header />
      <main>
        <MetabolicHeroSection />
        <MetabolicPhilosophySection />
        <MetabolicScienceSection />
        <MetabolicConditionsSection />
        <div id="lead-capture">
          <LeadCaptureSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Metabolic;
