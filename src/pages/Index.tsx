import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthorityBar from "@/components/AuthorityBar";
import BiologicalResetSection from "@/components/BiologicalResetSection";
import MentalSpecialtiesSection from "@/components/MentalSpecialtiesSection";
import FAQSection from "@/components/FAQSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import MediaSection from "@/components/MediaSection";
import ThreePillarsSection from "@/components/ThreePillarsSection";
import MechanismSection from "@/components/MechanismSection";
import TargetedApproachSection from "@/components/TargetedApproachSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Neuro•Zen — נוירופונקטורה בישראל | עילאי פארן"
        description="קליניקה לנוירופונקטורה ומדעי המוח בתל אביב. טיפול בחרדה, דיכאון, פוסט-טראומה וכאב כרוני באמצעות דיקור חשמלי מדעי וגירוי עצב הוואגוס."
        path="/"
      />
      <Header />
      <main>
        <HeroSection />
        <AuthorityBar />
        <ThreePillarsSection />
        <MechanismSection />
        <TargetedApproachSection />
        <BiologicalResetSection />
        <MentalSpecialtiesSection />
        <MediaSection />
        <FAQSection />
        <LeadCaptureSection />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
