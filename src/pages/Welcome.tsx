import { motion } from "framer-motion";
import { CreditCard, ClipboardList, CalendarDays, MapPin, Building, Shirt, Navigation, MessageCircle, FileText, FileHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    icon: CreditCard,
    title: "הבטחת התור ותשלום ראשוני",
    description: "תשלום עבור מפגש אבחון וטיפול ראשון (500 ש״ח). הסכום יקוזז מעלות סדרת הטיפולים המלאה.",
    buttons: [
      { label: "לתשלום מאובטח בפייבוקס", href: "https://links.payboxapp.com/ku0QMs8aW0b" },
    ],
  },
  {
    number: 2,
    icon: ClipboardList,
    title: "מילוי שאלונים רפואיים",
    description: "נא למלא את שני הטפסים הבאים. המידע חיוני לבניית התוכנית הטיפולית (אין צורך בחשבון גוגל):",
    buttons: [
      { label: "הצהרת בריאות", href: "https://forms.gle/KcHn8kXa7udriYjBA", icon: FileHeart },
      { label: "שאלון רפואי מורחב", href: "https://forms.gle/a9ie67rSpjMnzzkQ9", icon: FileText },
    ],
  },
  {
    number: 3,
    icon: CalendarDays,
    title: "בחירת מועד ביומן",
    description: "לאחר התשלום ומילוי הטפסים, קבעו את המועד הנוח לכם ביותר:",
    buttons: [
      { label: "קביעת תור ביומן", href: "https://calendar.app.google/zRWguTHzTw8LPbWw6" },
    ],
  },
];

const Welcome = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-accent/30 py-16 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-5"
          >
            ברוכים הבאים לתהליך הטיפולי ב-Neuro•<span className="text-primary">Zen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            כדי למקסם את זמן המפגש שלנו, אנא השלימו את 3 השלבים הפשוטים הבאים:
          </motion.p>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto max-w-2xl px-6 py-12 space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-border/50 shadow-card">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                    {step.number}
                  </span>
                  <step.icon className="w-5 h-5 text-primary shrink-0" />
                  <h2 className="text-xl font-semibold text-foreground">{step.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {step.buttons.map((btn) => (
                    <Button key={btn.label} variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                      <a href={btn.href} target="_blank" rel="noopener noreferrer">
                        {btn.icon && <btn.icon className="w-5 h-5" />}
                        {btn.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Logistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-primary/20 bg-accent/20 shadow-card">
            <CardContent className="p-6 md:p-8 space-y-5">
              <h3 className="text-xl font-semibold text-foreground">מידע נוסף להגעה</h3>
              <div className="space-y-4 text-muted-foreground text-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span>שאול המלך 39, תל אביב</span>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span>בית הדר דפנה, בניין B, קומה 5, משרד 505</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shirt className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span>דגשים: נא להגיע בבגדים גמישים, נוחים ונקיים. 🌾</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="https://waze.com/ul?q=שאול המלך 39 תל אביב" target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-5 h-5" />
                    ניווט עם Waze
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="https://wa.me/972548082487" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    יצירת קשר בוואטסאפ
                  </a>
                </Button>
              </div>

              <p className="text-muted-foreground pt-2">
                לכל שאלה או שינוי, ניתן ליצור קשר{' '}
                <a href="https://wa.me/972548082487" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">בוואטסאפ</a>.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
