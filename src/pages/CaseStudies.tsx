import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const outcomes1 = [
  { label: "שיפור בחרדה", scale: "GAD-7", from: 12, to: 2, percent: 83.3 },
  { label: "שיפור בפוסט-טראומה", scale: "PCL-5", from: 31, to: 6, percent: 80.6 },
  { label: "שיפור בדיכאון", scale: "PHQ-9", from: 19, to: 6, percent: 68.4 },
];

const outcomes2 = [
  { label: "שיפור בחרדה", scale: "GAD-7", from: 19, to: 5, percent: 73.7 },
  { label: "שיפור בדיכאון", scale: "PHQ-9", from: 26, to: 8, percent: 69.2 },
  { label: "שיפור בפוסט-טראומה", scale: "PCL-5", from: 61, to: 28, percent: 54.1 },
  { label: "שיפור במדד השינה", scale: "SLEEP", from: 24, to: 10, percent: 58.3 },
];

const recoveryCards = [
  {
    title: "השינוי התפקודי: לקום מהמיטה",
    quote: "עזר לי לקום מהמיטה ולעשות דברים, לחזור לישון ולעלות על דרך בריאה ונכונה יותר.",
  },
  {
    title: "השינוי בוויסות הרגשי: תקשורת",
    quote: "דיווח על שיפור משמעותי בעצבנות המתפרצת. הטבה ביחסים הזוגיים ובתקשורת בבית.",
  },
  {
    title: "השינוי הקוגניטיבי: גמישות מחשבתית",
    quote: "עזר לי לשנות את החשיבה שלי, ולמצוא שקט ברגעים לא שקטים.",
  },
];




const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background font-heebo">
      <Header />
      <main className="pt-28 pb-20">
        {/* Page Header */}
        <section className="container mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>מקרים קליניים</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              מהקליניקה: מדידת תוצאות בזמן אמת
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              סקירה של תהליכי ההחלמה הנוירו-ביולוגיים דרך סיפורי מקרה המגובים במדדים מדעיים (GAD-7, PCL-5, PHQ-9).
            </p>
          </motion.div>
        </section>

        {/* Case Study #1 */}
        <section className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-soft">
            
            {/* Profile */}
            <div className="p-6 md:p-10 border-b border-border/40">
              <p className="font-semibold tracking-wide text-primary uppercase mb-4 text-center text-2xl">מקרה מס׳ 1</p>
              <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 text-right">אישה, בת 36. </h2>
              <p className="leading-relaxed mb-1 text-base text-secondary">תלונה עיקרית: חרדה ודיכאון (מדווחת על מצב קשה ולפני טיפול תרופתי). דפיקות לב ונימולים בגפיים. 
                <span className="font-medium text-foreground"></span> חרדה ודיכאון SOS (לפני טיפול תרופתי). דפיקות לב ונימולים אקוטיים.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                <span className="font-medium text-foreground"></span> סדרת טיפולי נוירופונקטורה מותאמת לוויסות המערכת הלימבית.
              </p>
            </div>

            {/* Outcomes */}
            <div className="p-6 md:p-10 border-b border-border/40">
              <p className="font-semibold tracking-wide uppercase mb-6 text-5xl text-center text-[#3e3832]">השינוי במדדים הקליניים</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {outcomes1.map((o, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="text-center">
                  
                    <span className="block text-4xl md:text-5xl font-extrabold text-foreground leading-none">
                      {o.percent}%
                    </span>
                    <span className="block text-sm font-medium text-foreground mt-2">{o.label}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">
                      {o.scale}: מ-{o.from} ל-{o.to}
                    </span>
                    {/* Subtle progress bar */}
                    <div className="mt-3 mx-auto w-full max-w-[120px] h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${o.percent}%` }}
                      transition={{ delay: 0.6 + i * 0.12, duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-primary/60" />
                    
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Testimonial detail */}
            <div className="p-6 md:p-10 border-b border-border/40 text-black">
              <p className="text-base text-foreground leading-relaxed whitespace-pre-line text-right">
                "התחלתי את הטיפול בגל של חרדה שנמשך כבר לפחות 3 שנים. הגעתי אחרי חודש קשה של חרדה ודיכאון. תוך טיפול או 2 הרגשתי כמו ניצוץ לא ברור של משהו חיובי ושמתי לב שלא היה התקף או סממן של חרדה. אחרי הטיפול הרביעי התחילה המלחמה דבר שהעלה לי את סף החרדה אבל כבר פה הרגשתי שאני מתנהלת אחרת, החרדה מורגשת בווליום נמוך, תסמינים קלים יותר והתאוששות וחזרה לשגרה מהירים יותר. שמתי לב שהבנתי, הבנתי שהמח שלי חזר לעצמו אחרי שנים. משהו השתנה ונרגע. כמו נחת בחזרה למקומו. לאחר מכן אפשר לומר שגם הסביבה כבר הבחינה בשינוי . 
                {"\n"}שמתי לב שאני יוצרת קשר עם אנשים קצת יותר ויותר בנחמדות. אם החרדה עולה היא ממש יורדת מהר ברמת הדקות הראש מבין שאין סכנה וחזרה לשגרה. חזרתי לישון הפסקתי לחשוב בלי הפסקה והתחלתי לראות דברים בצורה יותר 'נורמטיבית', אני מצליחה להתרכז יותר ולהיות נעימה לסביבה."
              </p>
            </div>

            {/* Quote */}
            <div className="p-6 md:p-10 bg-accent/30">
              <blockquote className="text-base text-foreground font-medium leading-relaxed text-center italic md:text-2xl"> זה היה טיפול s.o.s.  שניה לפני כדורים. 
אחרי 8 טיפולים ממש מרגישה שהטיפול שינה אותי ב180 מעלות בוודאות.  באמת משנה חיים.






















































              </blockquote>
            </div>
          </motion.div>

          {/* Case Study #2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 rounded-2xl border border-border/60 bg-card overflow-hidden shadow-soft">

            {/* Profile */}
            <div className="p-6 md:p-10 border-b border-border/40">
              <p className="font-semibold tracking-wide text-primary uppercase mb-4 text-center text-2xl">מקרה מס׳ 2</p>
              <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 text-right">גבר, בן 30, סטודנט לתואר שני ומשרת מילואים.</h2>
              <p className="leading-relaxed mb-1 text-base text-secondary">
                תלונה עיקרית: פוסט-טראומה (PTSD), חרדה ודיכאון המלווים בקושי תפקודי עמוק ('קושי לקום מהמיטה'), הפרעות שינה חמורות ועצבנות מתפרצת שפגעה במערכות היחסים.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                <span className="font-medium text-foreground">התערבות:</span> סדרת טיפולי נוירופונקטורה מותאמת לוויסות המערכת הלימבית.
              </p>
            </div>

            {/* Outcomes */}
            <div className="p-6 md:p-10 border-b border-border/40">
              <p className="font-semibold tracking-wide uppercase mb-6 text-5xl text-center text-foreground">השינוי במדדים הקליניים</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {outcomes2.map((o, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="text-center">
                    <span className="block text-4xl md:text-5xl font-extrabold text-foreground leading-none">
                      {o.percent}%
                    </span>
                    <span className="block text-sm font-medium text-foreground mt-2">{o.label}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">
                      {o.scale}: מ-{o.from} ל-{o.to}
                    </span>
                    <div className="mt-3 mx-auto w-full max-w-[120px] h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${o.percent}%` }}
                        transition={{ delay: 0.7 + i * 0.12, duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-primary/60" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* The Process - Consolidated Quote */}
            <div className="p-8 md:p-14 border-b border-border/40">
              <p className="font-semibold tracking-wide mb-8 text-xl text-center text-foreground">השינוי במילותיו: חזרה לחיים, שקט וויסות</p>
              <div className="rounded-xl border border-border/40 bg-accent/20 p-8 md:p-12 text-right">
                <p className="text-base md:text-lg text-foreground leading-loose whitespace-pre-line">
                  "הדבר הראשון שהבחנתי בו היה שהצלחתי לישון יותר טוב, לאחר מכן לקום מהמיטה ולצאת ללימודים להתרכז יותר. והשינוי המשמעותי ביותר מבחינתי היה שההתפרצויות כעס וזעם נרגעו וזה לחלוטין הביא להטבה ביחסים הזוגיים ובתקשורת בבית."
                </p>
              </div>
            </div>

            {/* Final Quote */}
            <div className="p-6 md:p-10 bg-accent/30">
              <blockquote className="text-base text-foreground font-medium leading-relaxed text-center italic md:text-2xl">
                "הטיפול עזר לי לחזור להתנהל כמו בן אדם."
              </blockquote>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>);};export default CaseStudies;