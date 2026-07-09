import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import brainImage from "@/assets/brain-hero.png";

const neuroPills = [
  {
    label: "נוירומודולציה",
    description: "Neuromodulation - התמקדות בקולטנים (receptors) ספציפיים לצורך ויסות שחרור נוירוכימיקלים לשיפור התפקוד וההרגשה.",
  },
  {
    label: "חתימות מוחיות",
    description: "Cerebral Signatures - כיול מחדש של דפוסים עצביים באזורים ספציפיים במוח האחראים על חתימות שינה, תנועה ותחושת כאב.",
  },
  {
    label: "שיקום נוירולוגי",
    description: "Neuro-rehabilitation - טיפול במערכת העצבים המרכזית וההיקפית לצורך חיווט מחדש במצבים כגון כאב נוירופתי ושיקום אחרי שבץ.",
  },
];

const pillPositions = [
  "absolute top-[8%] left-1/2 -translate-x-1/2 z-10",
  "absolute top-[45%] -left-2 z-10",
  "absolute bottom-[18%] right-[3%] z-10",
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
      <button className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-primary/20 text-[13px] font-medium text-foreground cursor-pointer hover:bg-white/90 hover:border-primary/40 hover:shadow-lg transition-all duration-300 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
        <span>{pill.label}</span>
      </button>
      {open && (
        <div className="absolute z-20 top-full mt-2 right-1/2 translate-x-1/2 w-64 p-3 rounded-lg bg-white shadow-xl border border-border/40 text-[12px] text-muted-foreground leading-relaxed text-right">
          {pill.description}
        </div>
      )}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-36 pb-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Brain visual with floating pill buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative order-2 lg:order-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <motion.img
                src={brainImage}
                alt="הדמיית מוח תלת-ממדית — נוירופונקטורה"
                className="w-full h-full object-contain drop-shadow-2xl"
                animate={{ rotate: [0, 3, -3, 0], y: [0, -8, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              {neuroPills.map((pill, i) => (
                <div key={pill.label} className={pillPositions[i]}>
                  <NeuroPillButton pill={pill} delay={0.4 + i * 0.2} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-10 order-1 lg:order-2">
            <div className="space-y-5">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-right tracking-[0.12em]">
                המרכז לנוירופונקטורה
                <span className="sr-only"> — המרכז לנוירופונקטורה בישראל</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-right">
              נוירופונקטורה, לטיפול בחרדה, דיכאון וטראומה (PTSD). ללא שיחה וללא תרופות.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/972548082487">בדיקת התאמה לטיפול</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;