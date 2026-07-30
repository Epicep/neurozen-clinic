import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEO path="/privacy" />
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

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            מדיניות פרטיות
          </h1>
          <p className="text-muted-foreground text-sm mb-10">
            עדכון אחרון: יולי 2026
          </p>

          <div className="space-y-10 text-foreground/90 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">1. כללי</h2>
              <p>
                מדיניות פרטיות זו מתארת את האופן שבו המרכז הישראלי לנוירופונקטורה,
                בניהול עילאי פארן (להלן: "הקליניקה" או "אנחנו"), אוסף, משתמש, שומר
                ומגן על מידע אישי של משתמשי האתר ומטופלי הקליניקה, בהתאם להוראות
                חוק הגנת הפרטיות, התשמ״א-1981, תקנות הגנת הפרטיות (אבטחת מידע),
                התשע״ז-2017, וחוק זכויות החולה, התשנ״ו-1996.
              </p>
              <p>
                השימוש באתר ו/או מסירת מידע לקליניקה מהווים הסכמה מדעת לתנאי
                מדיניות זו.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                2. המידע הנאסף
              </h2>
              <p>הקליניקה עשויה לאסוף את סוגי המידע הבאים:</p>
              <ul className="list-disc pr-6 space-y-2">
                <li>
                  <strong>פרטי זיהוי וקשר:</strong> שם מלא, מספר טלפון, כתובת דוא״ל
                  ופרטים נוספים שתמסרו בטפסי יצירת הקשר או בטופס ה-Welcome.
                </li>
                <li>
                  <strong>מידע רפואי:</strong> אנמנזה, תלונות, אבחונים קודמים,
                  טיפולים ותרופות – הנמסר על ידכם לצורך בניית מרשם טיפולי.
                </li>
                <li>
                  <strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה,
                  דפים בהם ביקרתם ונתוני שימוש – הנאספים באמצעות Google Analytics
                  ו-Cookies.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                3. מטרות השימוש במידע
              </h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>מתן שירות טיפולי, אבחון ובניית מרשם קליני מותאם אישית.</li>
                <li>יצירת קשר חוזר בעקבות פנייה באתר או בוואטסאפ.</li>
                <li>ניהול תיק רפואי בהתאם לחוק זכויות החולה.</li>
                <li>שיפור חוויית המשתמש באתר וניתוח סטטיסטי מצטבר ואנונימי.</li>
                <li>עמידה בדרישות הדין החל.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                4. מסירת מידע לצדדים שלישיים
              </h2>
              <p>
                הקליניקה לא תעביר מידע אישי או רפואי לצדדים שלישיים, למעט במקרים
                הבאים: (א) בהסכמתכם המפורשת; (ב) לספקי תשתית טכנולוגית הפועלים
                עבורנו תחת חובת סודיות (כגון Google Workspace לאחסון מאובטח);
                (ג) כאשר הדבר נדרש על פי דין, צו שיפוטי או דרישת רשות מוסמכת.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                5. אבטחת מידע
              </h2>
              <p>
                הקליניקה נוקטת באמצעי אבטחה מקובלים בהתאם לתקנות הגנת הפרטיות
                (אבטחת מידע), התשע״ז-2017. המידע מאוחסן בתשתית Google Workspace
                העומדת בסטנדרטים בינלאומיים (SOC 2, HIPAA). יחד עם זאת, לא ניתן
                להבטיח חסינות מוחלטת מפני חדירה או שימוש לרעה, והשימוש באתר נעשה
                באחריות המשתמש.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                6. Cookies וכלי מדידה
              </h2>
              <p>
                באתר נעשה שימוש בקבצי Cookies וב-Google Analytics לצורך מדידת
                תעבורה ושיפור השירות. ניתן לחסום Cookies דרך הגדרות הדפדפן, אך
                הדבר עלול לפגוע בחלק מהפונקציונליות של האתר.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                7. זכויות המשתמש
              </h2>
              <p>
                בהתאם לחוק הגנת הפרטיות, עומדת לכם הזכות לעיין במידע המוחזק אודותיכם,
                לבקש את תיקונו או מחיקתו (בכפוף לחובות שמירת רשומות רפואיות לפי דין).
                לצורך מימוש זכויות אלו ניתן לפנות אלינו בוואטסאפ למספר 054-808-2487.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                8. שמירת מידע רפואי
              </h2>
              <p>
                רשומות רפואיות נשמרות למשך התקופה הקבועה בחוק זכויות החולה
                ובהנחיות משרד הבריאות (לפחות 7 שנים ממועד הטיפול האחרון).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                9. קטינים
              </h2>
              <p>
                טיפול בקטינים מתקיים רק בהסכמת הורה או אפוטרופוס חוקי, ואיסוף
                המידע נעשה בהתאם.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                10. שינויים במדיניות
              </h2>
              <p>
                הקליניקה שומרת לעצמה את הזכות לעדכן מדיניות זו מעת לעת. המדיניות
                העדכנית תהיה זמינה תמיד בעמוד זה.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                11. יצירת קשר
              </h2>
              <p>
                לכל שאלה בנוגע למדיניות פרטיות זו ניתן ליצור קשר עם עילאי פארן,
                מנהל הקליניקה, בוואטסאפ למספר <span dir="ltr">054-808-2487</span>,
                שאול המלך 39, תל אביב.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;