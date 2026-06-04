import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import MethodHeroSection from "@/components/method/MethodHeroSection";
import MethodAuthoritySection from "@/components/method/MethodAuthoritySection";
import MethodTraditionSection from "@/components/method/MethodTraditionSection";
import MethodCommunicationSection from "@/components/method/MethodCommunicationSection";
import MethodEvidenceSection from "@/components/method/MethodEvidenceSection";
import MethodCTASection from "@/components/method/MethodCTASection";
import SEO from "@/components/SEO";

const Method = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="שיטת הנוירופונקטורה | Neuro•Zen"
        description="Neuropuncture — שיטה רפואית של ד״ר מייקל קוראדינו המשלבת דיקור חשמלי מדעי, מדעי המוח ומרשמים קליניים מבוססי ראיות."
        path="/method"
      />
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
