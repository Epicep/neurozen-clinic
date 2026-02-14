import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import brainImage from "@/assets/brain-hero.png";

const neuroPills = [
  {
    label: "נוירומודולציה לקולטנים עצביים",
    description: "גירוי חשמלי מדויק המכוון לקולטנים ספציפיים במערכת העצבים כדי לעורר שחרור של נוירוכימיקלים (כמו דופמין וסרוטונין) לשיפור התפקוד וההרגשה.",
  },
  {
    label: "חתימות מוחיות (Cerebral signatures)",
    description: "זיהוי דפוסים עצביים ייחודיים במוח הקשורים לתפקודים כמו שינה, תנועה ותחושת כאב. הטיפול פועל לשינוי וכיול מחדש של ה'חתימות' הללו.",
  },
  {
    label: "שיקום נוירולוגי (Neuro-rehabilitation)",
    description: "תהליך של תיקון וחיווט מחדש של מערכת העצבים המרכזית וההיקפית. חיוני לשיקום אחרי שבץ, טיפול בכאב נוירופתי ומצבים נוירולוגיים כרוניים.",
  },
];

const pillPositions = [
  "absolute top-[10%] left-1/2 -translate-x-1/2 z-10",
  "absolute top-[45%] -left-4 z-10",
  "absolute bottom-[20%] right-[5%] z-10",
];

const NeuroPillButton = ({ pill, delay }: { pill: typeof neuroPills[0]; delay: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onTouchStart={() => setOpen((v) => !v)}
    >
      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-primary/30 text-sm font-medium text-foreground cursor-pointer hover:bg-white hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        <span>{pill.label}</span>
        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0"></span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-72 p-4 rounded-xl bg-white shadow-[0_8px_30px_-8px_hsl(220_60%_20%/0.12)] border border-primary/20 z-50 text-right"
          >
            <p className="text-sm text-muted-foreground leading-relaxed font-heebo">
              {pill.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 relative" style={{
      background: 'linear-gradient(180deg, hsl(180 20% 98%) 0%, hsl(175 30% 95%) 30%, hsl(180 20% 98%) 70%, hsl(0 0% 100%) 100%)'
    }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content - Right side (RTL) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-right">
                Neuro•Zen
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 leading-relaxed">
                המרכז לנוירופונקטורה בישראל
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              נוירופונקטורה (Neuropuncture) היא שיטת הדיקור השלמה היחידה המבוססת על מדעי המוח, המלמדת את המטפל כיצד לווסת מחדש את מערכת העצבים של המטופל בחזרה לתפקוד בריא ומאוזן.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://wa.me/972548082487" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  <span>בדיקת התאמה לטיפול</span>
                </a>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent overflow-hidden border-2 border-primary/20 flex items-center justify-center">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">בניהולו של</p>
                <p className="font-semibold text-foreground">עילאי פארן, מומחה לנוירופונקטורה</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Brain Visual - Left side (RTL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{
                background: 'radial-gradient(circle, hsl(175 50% 80%) 0%, transparent 70%)'
              }} />
              <div className="relative" style={{
                maskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, black 30%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, black 30%, transparent 70%)'
              }}>
                <motion.img
                  src={brainImage}
                  alt="3D Brain Visualization"
                  className="w-full drop-shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {neuroPills.map((pill, i) => (
                <div key={i} className={pillPositions[i]}>
                  <NeuroPillButton pill={pill} delay={0.8 + i * 0.2} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
