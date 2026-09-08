import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEO path="/accessibility" />
      <Header />

      <main id="main-content" className="pb-20 pt-28">
        <div className="container mx-auto max-w-3xl px-5">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
            חזרה לדף הבית
          </Link>

          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            הצהרת נגישות
          </h1>
          <p className="mb-10 text-sm text-muted-foreground">
            עדכון אחרון: אוגוסט 2026
          </p>

          <div className="space-y-10 leading-8 text-foreground/90">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                מחויבות לנגישות
              </h2>
              <p>
                הקליניקה לנוירופונקטורה בניהול עילאי פארן פועלת לאפשר לאנשים עם
                מוגבלות להשתמש באתר ולקבל את שירותי הקליניקה באופן נגיש, מכבד
                ושוויוני.
              </p>
              <p>
                בתכנון האתר ובהפעלתו מושקעים מאמצים לשפר את התאמתו לעקרונות
                הנגישות המקובלים ולדרישות הדין הרלוונטיות. אין בהצהרה זו טענה כי
                בוצעה הסמכה חיצונית או בדיקת עמידה מלאה בכל סעיפי תקן מסוים.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                התאמות נגישות באתר
              </h2>
              <p>באתר מיושמות, בין היתר, ההתאמות הבאות:</p>
              <ul className="list-disc space-y-2 pr-6">
                <li>מבנה כותרות היררכי וסדר תוכן ברור.</li>
                <li>אפשרות ניווט באמצעות מקלדת ומצבי מיקוד גלויים.</li>
                <li>שמות נגישים לקישורים, לכפתורים ולאייקונים משמעותיים.</li>
                <li>טקסט חלופי לתמונות משמעותיות.</li>
                <li>תצוגה מותאמת למחשב, לטאבלט ולמכשירים ניידים.</li>
                <li>תמיכה בכיוון כתיבה מימין לשמאל.</li>
                <li>שימוש בניגודיות ובגודל טקסט שנועדו לשפר את הקריאות.</li>
                <li>קישור לדילוג ישיר לתוכן המרכזי, ככל שמיושם בתבנית האתר.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                שירותים חיצוניים
              </h2>
              <p>
                חלק מהפעולות באתר מפנות לשירותים חיצוניים, ובהם WhatsApp, PayBox,
                Google Forms ו-Google Calendar. רמת הנגישות של שירותים אלה נמצאת
                באחריות מפעיליהם ואינה בשליטת הקליניקה. כאשר מתעורר קושי ניתן לפנות
                אלינו לקבלת סיוע או דרך חלופית לביצוע הפעולה.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                הסדרי נגישות בקליניקה
              </h2>
              <p>
                הקליניקה ממוקמת בבית הדר דפנה, שאול המלך 39, תל אביב, בניין B,
                קומה 5, משרד 505.
              </p>
              <ul className="list-disc space-y-2 pr-6">
                <li>קיימת כניסה נגישה לבניין.</li>
                <li>קיימת מעלית המאפשרת הגעה לקומה שבה נמצאת הקליניקה.</li>
                <li>קיימים שירותים נגישים בבניין.</li>
                <li>
                  לא ידוע לנו על חניית נכים ייעודית בבניין. קיימות חניות נכים
                  ציבוריות בסביבת הבניין, בכפוף למיקום ולזמינות בפועל.
                </li>
              </ul>
              <p>
                מומלץ ליצור קשר מראש כאשר נדרשת התאמת נגישות מסוימת או בירור נוסף
                לקראת ההגעה.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                דיווח על בעיית נגישות
              </h2>
              <p>
                למרות המאמצים המושקעים, ייתכן שחלק מסוים באתר עדיין אינו נגיש
                באופן מלא. במקרה שנתקלתם בקושי, נשמח לקבל פירוט הכולל את כתובת
                העמוד, הפעולה שניסיתם לבצע, סוג הדפדפן והמכשיר, ככל שהמידע זמין.
              </p>
              <p>
                ניתן לפנות לעילאי פארן בוואטסאפ:
                {" "}
                <a
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  href="https://wa.me/972548082487"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span dir="ltr">054-808-2487</span>
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;
