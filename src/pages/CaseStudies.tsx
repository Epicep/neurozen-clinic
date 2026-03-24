import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const outcomes = [
{ label: "שיפור בחרדה", scale: "GAD-7", from: 12, to: 2, percent: 83.3 },
{ label: "שיפור בפוסט-טראומה", scale: "PCL-5", from: 31, to: 6, percent: 80.6 },
{ label: "שיפור בדיכאון", scale: "PHQ-9", from: 19, to: 6, percent: 68.4 }];




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
                {outcomes.map((o, i) =>
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
                {"\n"}שמתי לב שאני יוצרת קשר עם אנשים קצת יותר ויותר בנחמדות.  אם החרדה עולה היא ממש יורדת מהר ברמת הדקות הראש מבין שאין סכנה וחזרה לשגרה. חזרתי לישון הפסקתי לחשוב בלי הפסקה והתחלתי לראות דברים בצורה יותר \"נורמטיבית\", אני מצליחה להתרכז יותר ולהיות נעימה לסביבה."
              </p>
            </div>

            {/* Quote */}
            <div className="p-6 md:p-10 bg-accent/30">
              <blockquote className="text-base text-foreground font-medium leading-relaxed text-center italic md:text-2xl"> זה היה טיפול s.o.s.  שניה לפני כדורים. 
אחרי 8 טיפולים ממש מרגישה שהטיפול שינה אותי ב180 מעלות בוודאות.  באמת משנה חיים.






















































              </blockquote>
            </div>
          </motion.div>

          {/* Placeholder Card #2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 rounded-2xl border-2 border-dashed border-border bg-muted/20 flex flex-col items-center justify-center py-14 text-center">
            
            <p className="text-muted-foreground font-semibold">מקרה מס׳ 2</p>
            <p className="text-sm text-muted-foreground/60 mt-1">בקרוב...</p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>);};export default CaseStudies;