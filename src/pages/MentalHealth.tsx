import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MentalHeroSection from "@/components/mental/MentalHeroSection";
import MentalProblemSection from "@/components/mental/MentalProblemSection";
import MentalScienceSection from "@/components/mental/MentalScienceSection";
import MentalNeurochemistrySection from "@/components/mental/MentalNeurochemistrySection";
import MentalConditionsSection from "@/components/mental/MentalConditionsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import SEO from "@/components/SEO";

const MentalHealth = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO path="/mental-health" />
      <Header />
      <main>
        <MentalHeroSection />
        <div className="py-8" />
        <MentalProblemSection />
        <div className="py-8" />
        <MentalScienceSection />
        <div className="py-8" />
        <MentalNeurochemistrySection />
        <div className="py-8" />
        <MentalConditionsSection />
        <div className="py-8" />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default MentalHealth;
