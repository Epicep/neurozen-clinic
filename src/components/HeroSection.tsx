import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
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
      <button className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-primary/20 text-[13px] font-medium text-foreground cursor-pointer hover:bg-white/80 hover:border-primary/40 hover:shadow-lg transition-all duration-300 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
        <span>{pill.label}</span>
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
    <section className="min-h-screen pt-36 pb-32 relative" style={{
      background: 'linear-gradient(180deg, hsl(45 20% 97%) 0%, hsl(170 20% 95%) 30%, hsl(45 15% 97%) 70%, hsl(45 15% 99%) 100%)'
    }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content - Right side (RTL) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-5">
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-right tracking-[0.12em]">
                המרכז לנוירופונקטורה
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-foreground/70 leading-relaxed">
                בהנהלת עילאי פארן
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              נוירופונקטורה, לטיפול בחרדה, דיכאון וטראומה (PTSD). ללא שיחה וללא תרופות.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://wa.me/972548082487" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  <span>בדיקת התאמה לטיפול</span>
                </a>
              </Button>
            </div>

          </motion.div>

          {/* Brain Visual - Left side (RTL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-40" style={{
                background: 'radial-gradient(circle, hsl(168 50% 72% / 0.35) 0%, hsl(40 40% 80% / 0.15) 40%, transparent 70%)'
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
