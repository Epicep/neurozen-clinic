import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO path="/legal" />
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8"
          >
            <ArrowRight className="w-4 h-4" />
            חזרה לדף הבית
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            פרטיות ותנאי שימוש
          </h1>

          <div className="space-y-10 text-foreground/90 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                פרטיות
              </h2>
              <p>
                הקליניקה מחויבת לשמירה על פרטיות המטופלים בהתאם לחוק הגנת הפרטיות,
                התשמ"א-1981. המידע הנאסף בטפסי ה-Welcome משמש לצורך אבחון ובניית
                מרשם טיפולי בלבד ואינו מועבר לצד ג'.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                אבטחת מידע
              </h2>
              <p>
                המידע מאוחסן בתשתית Google Workspace המאובטחת בסטנדרטים בינלאומיים
                מחמירים (SOC 2, HIPAA) ומוגן תחת סודיות רפואית מלאה.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                הצהרת נגישות
              </h2>
              <p>
                אתר זה מונגש ברמת AA. לכל פנייה בנושא נגישות ניתן ליצור קשר
                בוואטסאפ של הקליניקה.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
