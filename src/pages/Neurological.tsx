import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import NeurologicalHeroSection from "@/components/neurological/NeurologicalHeroSection";
import NeurologicalPhilosophySection from "@/components/neurological/NeurologicalPhilosophySection";
import NeurologicalParkinsonSection from "@/components/neurological/NeurologicalParkinsonSection";
import NeurologicalMSSection from "@/components/neurological/NeurologicalMSSection";
import NeurologicalBenefitsSection from "@/components/neurological/NeurologicalBenefitsSection";
import SEO from "@/components/SEO";

const Neurological = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEO
        title="טיפול נוירולוגי בנוירופונקטורה | Neuro•Zen"
        description="טיפול נוירולוגי באמצעות נוירופונקטורה: פרקינסון, טרשת נפוצה, נוירופתיה ושיקום מוחי בתל אביב במרכז Neuro•Zen."
        path="/neurological"
        pageType="MedicalWebPage"
      />
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
