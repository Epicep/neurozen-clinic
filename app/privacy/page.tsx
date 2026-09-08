import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEO path="/privacy" />
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
            מדיניות פרטיות
          </h1>
          <p className="mb-10 text-sm text-muted-foreground">
            עדכון אחרון: אוגוסט 2026
          </p>

          <div className="space-y-10 leading-8 text-foreground/90">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">כללי</h2>
              <p>
                מדיניות זו מסבירה כיצד הקליניקה לנוירופונקטורה בניהול עילאי פארן
                אוספת, מקבלת, משתמשת ושומרת מידע אישי במסגרת השימוש באתר, פנייה
                לקליניקה וקבלת טיפול.
              </p>
              <p>
                מסירת מידע אינה חובה חוקית ככלל, אך ללא פרטים מסוימים ייתכן שלא
                נוכל להשיב לפנייה, לבדוק התאמה, לקבוע תור או לספק טיפול.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">איזה מידע מתקבל</h2>
              <ul className="list-disc space-y-2 pr-6">
                <li>
                  פרטי קשר וזיהוי שנמסרים ביוזמתכם, כגון שם, מספר טלפון וכתובת דוא״ל.
                </li>
                <li>
                  תוכן פניות שנשלחות בוואטסאפ, בדוא״ל או באמצעי תקשורת אחר.
                </li>
                <li>
                  מידע רפואי ובריאותי שנמסר בטופסי הבריאות וההערכה, במהלך שיחה או
                  במסגרת הטיפול.
                </li>
                <li>
                  מידע הנדרש לתשלום ולקביעת תור. פרטי אמצעי התשלום עצמם מעובדים
                  באמצעות PayBox ואינם נשמרים באתר.
                </li>
                <li>
                  נתוני שימוש טכניים, ככל שכלי מדידה ועוגיות הופעלו לאחר קבלת
                  ההסכמה הנדרשת, כגון סוג דפדפן, דפים שנצפו ואינטראקציות באתר.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">מטרות השימוש</h2>
              <ul className="list-disc space-y-2 pr-6">
                <li>מענה לפניות וביצוע שיחת התאמה.</li>
                <li>קביעת תורים, תשלום וניהול הקשר עם המטופלים.</li>
                <li>הערכת מצב רפואי, תכנון הטיפול, תיעוד ומעקב קליני.</li>
                <li>תפעול האתר, אבטחתו ושיפור חוויית השימוש.</li>
                <li>עמידה בחובות משפטיות, מקצועיות וחשבונאיות.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">פנייה באמצעות WhatsApp</h2>
              <p>
                לחיצה על כפתור WhatsApp באתר מעבירה את המשתמש לשירות חיצוני. האתר
                אינו מקבל את תוכן ההודעה, אך לאחר שליחתה הקליניקה מקבלת את מספר
                הטלפון, פרטי הפרופיל הזמינים ותוכן ההתכתבות.
              </p>
              <p>
                מומלץ שלא לשלוח בוואטסאפ מסמכים רפואיים או מידע רפואי מפורט. מידע
                הנדרש לצורך הערכה וטיפול יש למסור בטפסים הייעודיים או בדרך שתתואם
                עם הקליניקה.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">ספקים חיצוניים</h2>
              <p>
                לצורך הפעלת השירותים נעשה שימוש, לפי העניין, בשירותים חיצוניים כגון
                Google Forms, Google Calendar, Google Analytics, PayBox ו-WhatsApp.
                בעת מעבר לשירות חיצוני, עיבוד המידע כפוף גם למדיניות הפרטיות ולתנאי
                השימוש של אותו ספק.
              </p>
              <p>
                מידע עשוי להימסר לספקים המסייעים בתפעול השירות רק במידה הנדרשת
                למטרה הרלוונטית, וכן כאשר קיימת חובה חוקית או דרישה של רשות מוסמכת.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">עוגיות וכלי מדידה</h2>
              <p>
                ככל שיופעלו באתר עוגיות שאינן חיוניות או Google Analytics, הם ייטענו
                רק בהתאם למנגנון ההסכמה שיוטמע באתר. ניתן לשנות את הבחירה או לחסום
                עוגיות דרך הגדרות הדפדפן. חסימת עוגיות חיוניות עלולה לפגוע בפעילות
                חלקים מסוימים באתר.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">שמירת מידע</h2>
              <p>
                המידע נשמר למשך הזמן הנדרש למטרות שלשמן נאסף ובהתאם לחובות החלות
                על הקליניקה. רשומות טיפוליות עשויות להישמר גם לאחר סיום הטיפול כאשר
                קיימת חובה מקצועית או משפטית לעשות זאת.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">אבטחת מידע</h2>
              <p>
                הקליניקה נוקטת אמצעים סבירים ומקובלים לצמצום הסיכון לגישה, שימוש,
                שינוי או חשיפה בלתי מורשים של מידע. עם זאת, מערכות להעברת מידע
                ולאחסונו אינן חסינות לחלוטין, ולא ניתן להבטיח אבטחה מוחלטת.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">עיון ותיקון מידע</h2>
              <p>
                ניתן לפנות לקליניקה בבקשה לעיין במידע אישי המוחזק על אודותיכם או
                לתקן מידע שאינו נכון, שלם, ברור או מעודכן. בקשות למחיקה ייבחנו
                בהתאם לדין ולחובות שמירת הרשומות החלות על הקליניקה.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">קטינים</h2>
              <p>
                מסירת מידע וקבלת טיפול עבור קטין ייעשו באמצעות הורה או אפוטרופוס
                ובהתאם לדרישות הדין ולנסיבות הטיפול.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">עדכונים ויצירת קשר</h2>
              <p>
                מדיניות זו עשויה להתעדכן מעת לעת. מועד העדכון האחרון יוצג בראש
                העמוד.
              </p>
              <p>
                לשאלות או לבקשות בנושא פרטיות ניתן לפנות לעילאי פארן בוואטסאפ:
                {" "}
                <a
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  href="https://wa.me/972548082487"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span dir="ltr">054-808-2487</span>
                </a>
                , או בכתובת הקליניקה: שאול המלך 39, תל אביב.
              </p>
            </section>

            <aside className="rounded-xl border border-border bg-card p-5 text-sm leading-7 text-muted-foreground">
              המדיניות נועדה לשקף באופן מעשי את פעילות האתר והקליניקה. היא אינה
              מהווה ייעוץ משפטי, ויש לעדכן אותה כאשר משתנים הטפסים, ספקי השירות,
              כלי המדידה או אופן שמירת המידע.
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
