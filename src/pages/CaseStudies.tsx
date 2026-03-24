import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Brain, Activity, Clock, Quote, FileText } from "lucide-react";

const outcomes = [
  { label: "שיפור במדד חרדה (GAD-7)", percent: 83.3, from: 12, to: 2 },
  { label: "שיפור בתסמיני פוסט-טראומה (PCL-5)", percent: 80.6, from: 31, to: 6 },
  { label: "שיפור במדד דיכאון (PHQ-9)", percent: 68.4, from: 19, to: 6 },
];

const timeline = [
  { phase: "טיפולים 1-2", title: "אפקט מצטבר (לטנטי)", desc: "רוגע מיידי לאחר הטיפול." },
  { phase: "טיפול 3", title: "נקודת המפנה", desc: "היעלמות של התקפי החרדה והתסמינים הפיזיים (דפיקות לב, נימולים)." },
  { phase: "טיפולים 4-5", title: "מבחן החוסן", desc: "התמודדות עם פרוץ מלחמה בווליום חרדה נמוך, חזרה מהירה לשגרה (Resilience)." },
  { phase: "טיפולים 6-8", title: "אינטגרציה", desc: "שיפור בקשב, מוטיבציה, ויכולת ויסות עצמית." },
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
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>מקרים קליניים</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              מהקליניקה: מדידת תוצאות בזמן אמת
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              סקירה של מנגנוני הריפוי העצבי דרך סיפורי מקרה קליניים המגובים במדדים מדעיים (GAD-7, PCL-5, PHQ-9).
            </p>
          </motion.div>
        </section>

        {/* Case Study #1 */}
        <section className="container mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-border/60 shadow-card bg-card">
              <CardHeader className="bg-secondary text-secondary-foreground p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold">מקרה מס׳ 1</h2>
                </div>
                <p className="text-secondary-foreground/80 text-base leading-relaxed">
                  אישה, בת 36. תלונה עיקרית: חרדה ודיכאון במצב אקוטי (SOS) לפני טיפול תרופתי.
                </p>
              </CardHeader>

              <CardContent className="p-6 md:p-8 space-y-10">
                {/* Treatment */}
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">מרשם טיפולי</h3>
                    <p className="text-muted-foreground">
                      מרשם נוירופונקטורה: 8 מפגשים. מיקוד: ויסות המערכת הלימבית והפעלת המערכת הפארא-סימפתטית.
                    </p>
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h3 className="font-semibold text-foreground mb-6 text-lg">תוצאות מדידה</h3>
                  <div className="space-y-6">
                    {outcomes.map((o, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.15 }}
                      >
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{o.label}</span>
                          <span className="text-2xl font-bold text-primary">{o.percent}%</span>
                        </div>
                        <Progress value={o.percent} className="h-3 bg-muted" />
                        <p className="text-xs text-muted-foreground mt-1">
                          ירידה מ-{o.from} ל-{o.to}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="font-semibold text-foreground mb-6 text-lg flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    ציר זמן הטיפול
                  </h3>
                  <div className="relative border-r-2 border-primary/30 pr-6 space-y-6">
                    {timeline.map((t, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="relative"
                      >
                        <div className="absolute -right-[31px] top-1 w-3 h-3 rounded-full bg-primary" />
                        <span className="inline-block text-xs font-bold text-primary bg-accent px-2 py-0.5 rounded-full mb-1">
                          {t.phase}
                        </span>
                        <h4 className="font-semibold text-foreground text-sm">{t.title}</h4>
                        <p className="text-muted-foreground text-sm">{t.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Patient Quote */}
                <div className="bg-accent/50 border-r-4 border-primary rounded-lg p-6">
                  <Quote className="w-6 h-6 text-primary mb-3" />
                  <blockquote className="text-foreground font-medium leading-relaxed text-base md:text-lg italic">
                    "הגעתי שניה לפני כדורים, וזה היה טיפול מציל חיים עבורי. הטיפול שינה אותי ב-180 מעלות. הראש פשוט מבין שאין סכנה וחוזר לשגרה במהירות."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Case Study #2 Placeholder */}
        <section className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-dashed border-2 border-border bg-muted/30 shadow-none">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">מקרה מס׳ 2</h3>
                <p className="text-sm text-muted-foreground/70">בקרוב...</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
