import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GapSection from "@/components/GapSection";
import SolutionSection from "@/components/SolutionSection";
import ClinicalDomainsSection from "@/components/ClinicalDomainsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-8 md:space-y-12">
        <HeroSection />
        <div className="py-8" />
        <GapSection />
        <div className="py-8" />
        <SolutionSection />
        <div className="py-8" />
        <ClinicalDomainsSection />
        <div className="py-8" />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
