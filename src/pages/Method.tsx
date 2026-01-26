import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import MethodHeroSection from "@/components/method/MethodHeroSection";
import MethodAuthoritySection from "@/components/method/MethodAuthoritySection";
import MethodTraditionSection from "@/components/method/MethodTraditionSection";
import MethodCommunicationSection from "@/components/method/MethodCommunicationSection";
import MethodEvidenceSection from "@/components/method/MethodEvidenceSection";
import MethodCTASection from "@/components/method/MethodCTASection";

const Method = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <MethodHeroSection />
        <MethodAuthoritySection />
        <MethodTraditionSection />
        <MethodCommunicationSection />
        <MethodEvidenceSection />
        <MethodCTASection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Method;
