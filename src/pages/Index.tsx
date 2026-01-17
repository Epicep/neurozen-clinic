import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GapSection from "@/components/GapSection";
import SolutionSection from "@/components/SolutionSection";
import ClinicalDomainsSection from "@/components/ClinicalDomainsSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GapSection />
        <SolutionSection />
        <ClinicalDomainsSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
