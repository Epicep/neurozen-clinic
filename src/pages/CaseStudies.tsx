import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

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

const outcomes3 = [
  { label: "שיפור בדיכאון (PHQ-9)", scale: "21 → 4", percent: 81 },
  { label: "שיפור בחרדה (GAD-7)", scale: "11 → 1", percent: 91 },
  { label: "שיפור בפוסט-טראומה (PCL-5)", scale: "42 → 11", percent: 74 },
  { label: "שיפור באיכות השינה", scale: "22 → 6", percent: 73 },
];

const WA_URL = "https://wa.me/972548082487";

const CTA = () => (
  <div className="p-6 text-center border-t border-border/40 bg-background">
    <Button size="lg" asChild>
      <a href={WA_URL} target="_blank" rel="noopener noreferrer">
        לתיאום פגישת ייעוץ ואבחון קליני <ChevronRight className="w-4 h-4 ml-2" />
      </a>
    </Button>
  </div>
);

const MetricsGrid = ({ items }: { items: { label: string; scale: string; from?: number; to?: number; percent: number }[] }) => (
  <div className={`grid ${items.length >= 4 ? "grid-cols-2" : "grid-cols-3"} gap-4`}>
    {items.map((o, i) => (
      <div key={i} className="text-center p-4 bg-muted/30 rounded-lg">
        <span className="block text-3xl font-extrabold text-primary">{o.percent}%</span>
        <span className="block text-sm font-bold mt-1">{o.label}</span>
        <span className="block text-xs text-muted-foreground mt-0.5">
          {o.scale}
          {typeof o.from === "number" && typeof o.to === "number" ? ` · ${o.from} → ${o.to}` : ""}
        </span>
      </div>
    ))}
  </div>
);

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background font-heebo">
      <SEO path="/cases" />
      <Header />
      <main className="pt-28 pb-20">
        <section className="container mx-auto px-6 mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>מקרים קליניים</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">מהקליניקה: מדידת תוצאות בזמן אמת</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              שלושה מקרים ממשיים מהקליניקה, עם מדדים קליניים סטנדרטיים (PHQ-9, GAD-7, PCL-5) שמעידים על השינוי.
            </p>
          </motion.div>
        </section>

        {/* Case Study #1: The Captain */}
        <section className="container mx-auto px-6 max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-soft">
            <div className="p-8 border-b border-border/40 text-right">
              <p className="font-semibold tracking-wide text-primary uppercase mb-2">סיפור הצלחה</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">כשהקפטן חזר להוביל את הספינה</h2>
              <p className="text-lg text-foreground/80 mb-6 font-medium">טיפול נוירופונקטורה בדיכאון כרוני (דיסתימיה), חרדה ופוסט-טראומה.</p>
              <div className="bg-accent/20 p-6 rounded-xl border border-border/40">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  מטופל בן 33, שהתמודד במשך קרוב ל-6 שנים עם דיכאון כרוני עקשן, חרדה ופגיעה באיכות השינה, הגיע לקליניקה לאחר שעבר בין אנשי מקצוע שונים ללא הועיל. בתוך פחות מחודש של טיפול נוירולוגי ממוקד, הוא חווה מהפך קליני מלא וחזר לתפקוד מוחלט.
                </p>
              </div>
            </div>

            <div className="p-8 border-b border-border/40">
              <h3 className="text-xl font-bold mb-6 text-right">השינוי במדדים הקליניים</h3>
              <MetricsGrid items={outcomes3} />
            </div>

            <div className="p-8 bg-accent/10 text-right">
              <h3 className="text-xl font-bold mb-4 text-foreground">מהמטופל, במילים שלו:</h3>
              <div className="space-y-4 text-[15px] leading-[1.9] text-foreground/90 italic">
                <p>"וואלה, הייתי מאוד סקפטי לגבי התהליך בהתחלה, אבל בכל זאת נרשמתי כי לרוב אני מקשיב לתחושות הבטן שלי."</p>
                <p>"בתור אדם שהתמודד עם דיכאון (דיסתימיה) במשך קרוב ל-6 שנים, עברתי בין אנשי מקצוע שונים, והיו גם תקופות שבהן לקחתי כדורים."</p>
                <p>"תמיד תיארתי את הדיכאון שלי בדמיון כספינת פיראטים. בתקופות הקשות יותר השמיים היו מכוסים בעננים, ירד גשם, הים היה סוער, והספינה איבדה שליטה. הקפטן היה אדיש ולא ניסה להשתלט על המצב, אלא פשוט חיכה… ואולי אפילו קיווה שמשהו יקרה ושהכול ייגמר. ככה הרגשתי במשך רוב השנים האחרונות."</p>
                <p>"אחרי שהתחלתי את התהליך אצל עילאי, כבר אחרי שניים, שלושה מפגשים הרגשתי שהקפטן מתחיל סוף סוף להזיז את עצמו ולנסות להחזיר את השליטה על הספינה."</p>
                <p>"כשסיימתי את התהליך, הרגשתי שמשהו השתנה. הים הפך רגוע יותר, השמיים התחילו להתבהר, והקפטן קיבל בחזרה את התשוקה להמשיך להפליג, לגלות מקומות חדשים ולחיות את החיים כפי שהם."</p>
                <p>"נכון, זו רק מטאפורה שקיימת בדמיון שלי, אבל גם האנשים הקרובים אליי, שראו אותי לאורך כל שלבי ההתמודדות, התחילו להעיר שהם רואים שחזר לי האור לעיניים, בדיוק כמו שהכירו אותי פעם."</p>
                <p className="font-semibold text-foreground not-italic">רגע השיא מבחינתי היה כשאמא שלי ואבא שלי אמרו לי: <span className="italic">"אנחנו מרגישים שקיבלנו את הבן שלנו בחזרה."</span></p>
                <p>"זה היה אחד המשפטים הכי מרגשים ששמעתי, והוא גרם לי להבין עד כמה הדרך שעברתי הייתה משמעותית…"</p>
              </div>
            </div>
            <CTA />
          </motion.div>
        </section>

        {/* Case Study #2: Woman, 36 */}
        <section className="container mx-auto px-6 max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-soft">
            <div className="p-8 border-b border-border/40 text-right">
              <p className="font-semibold tracking-wide text-primary uppercase mb-2">מקרה קליני #2</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">אישה בת 36 — חרדה, פוסט-טראומה ודיכאון</h2>
              <div className="bg-accent/20 p-6 rounded-xl border border-border/40">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  מטופלת שהגיעה עם רמות גבוהות של חרדה כללית, סימפטומים פוסט-טראומטיים משמעותיים ודיכאון בעצימות בינונית. לאחר סדרת טיפולים ממוקדת של נוירופונקטורה נצפתה ירידה חדה בכל שלושת המדדים תוך שיפור מקביל בתפקוד היומיומי ובאיכות השינה.
                </p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6 text-right">השינוי במדדים הקליניים</h3>
              <MetricsGrid items={outcomes1} />
            </div>
            <CTA />
          </motion.div>
        </section>

        {/* Case Study #3: Man, 30 */}
        <section className="container mx-auto px-6 max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-soft">
            <div className="p-8 border-b border-border/40 text-right">
              <p className="font-semibold tracking-wide text-primary uppercase mb-2">מקרה קליני #3</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">גבר בן 30 — פוסט-טראומה, דיכאון והפרעות שינה</h2>
              <div className="bg-accent/20 p-6 rounded-xl border border-border/40">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  מטופל עם עומס פוסט-טראומטי גבוה, דיכאון עמיד וקושי משמעותי בשינה. הטיפול התמקד בוויסות מערכת העצבים האוטונומית, הגברת הטון הפאראסימפטטי ושיקום נוירופלסטיות. התוצאה: ירידה משמעותית בכל המדדים, לרבות שיפור נוסף באיכות השינה.
                </p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6 text-right">השינוי במדדים הקליניים</h3>
              <MetricsGrid items={outcomes2} />
            </div>
            <CTA />
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
