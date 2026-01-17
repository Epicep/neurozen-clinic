import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GapSection from "@/components/GapSection";
import ClinicalDomainsSection from "@/components/ClinicalDomainsSection";
import ScienceTrustSection from "@/components/ScienceTrustSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GapSection />
        <ClinicalDomainsSection />
        <ScienceTrustSection />
        <SolutionSection />
        <ProcessSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
