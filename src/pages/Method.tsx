import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import MethodHeroSection from "@/components/method/MethodHeroSection";
import MethodDefinitionSection from "@/components/method/MethodDefinitionSection";
import MethodComparisonSection from "@/components/method/MethodComparisonSection";
import MethodTechnologySection from "@/components/method/MethodTechnologySection";
import MethodOriginSection from "@/components/method/MethodOriginSection";
import MethodCTASection from "@/components/method/MethodCTASection";

const Method = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <MethodHeroSection />
        <MethodDefinitionSection />
        <MethodComparisonSection />
        <MethodTechnologySection />
        <MethodOriginSection />
        <MethodCTASection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Method;
