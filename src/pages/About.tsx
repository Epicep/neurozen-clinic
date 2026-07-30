import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO path="/about" />
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              {/* Neuron placeholder icon */}
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-14 h-14 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="6" />
                  <line x1="32" y1="26" x2="32" y2="8" />
                  <line x1="32" y1="38" x2="32" y2="56" />
                  <line x1="26" y1="32" x2="10" y2="32" />
                  <line x1="38" y1="32" x2="54" y2="32" />
                  <line x1="27.5" y1="27.5" x2="16" y2="16" />
                  <line x1="36.5" y1="36.5" x2="48" y2="48" />
                  <line x1="36.5" y1="27.5" x2="48" y2="16" />
                  <line x1="27.5" y1="36.5" x2="16" y2="48" />
                  <circle cx="32" cy="8" r="2.5" />
                  <circle cx="32" cy="56" r="2.5" />
                  <circle cx="10" cy="32" r="2.5" />
                  <circle cx="54" cy="32" r="2.5" />
                  <circle cx="16" cy="16" r="2.5" />
                  <circle cx="48" cy="48" r="2.5" />
                  <circle cx="48" cy="16" r="2.5" />
                  <circle cx="16" cy="48" r="2.5" />
                </svg>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                עילאי פארן
              </h1>
              <p className="text-primary font-semibold text-lg">
                מנהל נוירופונקטורה ישראל
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                עילאי פארן הוא הנציג הרשמי של שיטת <strong className="text-foreground">Neuropuncture</strong> בישראל – גישה טיפולית חדשנית המשלבת את עקרונות הרפואה הסינית המסורתית עם ידע עדכני מתחום מדעי המוח.
              </p>
              <p>
                כמנהל נוירופונקטורה ישראל, עילאי עובד על פי פרוטוקולים מחקריים מבוססי ראיות, המיועדים לווסת את מערכת העצבים ולהחזירה לאיזון. הגישה שלו מתמקדת בטיפול בשורש הביולוגי של הבעיה – לא רק בסימפטומים.
              </p>
              <p>
                ההתמחות העיקרית של המרכז היא בטיפול ב<strong className="text-foreground">חרדה, דיכאון ופוסט-טראומה (PTSD)</strong>, לצד תחומים נוספים כגון שיקום נוירולוגי, כאב כרוני ואיזון מטבולי.
              </p>
              <p>
                הקליניקה ממוקמת בבית הדר דפנה, בניין B, קומה 5, חדר 505, רחוב שאול המלך 39, תל אביב.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
