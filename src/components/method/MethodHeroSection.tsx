import { motion } from "framer-motion";
import { Zap, Brain, Target } from "lucide-react";

const MethodHeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden neural-mesh-bg">
      {/* Abstract background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender/50 via-background to-accent/20" />
      
      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="methodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--navy))" />
          </linearGradient>
        </defs>
        {/* Anatomical nerve lines */}
        <motion.path
          d="M100,100 Q300,200 200,400 T300,600"
          stroke="url(#methodGrad)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M700,50 Q600,250 750,350 T650,550"
          stroke="url(#methodGrad)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        />
        {/* Acupuncture needle representation */}
        <motion.line
          x1="60%"
          y1="20%"
          x2="55%"
          y2="60%"
          stroke="hsl(var(--navy))"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </svg>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-[15%] p-4 bg-white/80 rounded-2xl shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Brain className="w-8 h-8 text-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-[15%] p-4 bg-white/80 rounded-2xl shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Zap className="w-8 h-8 text-navy" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            השיטה הקלינית
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            נוירופונקטורה
            <br />
            <span className="text-primary">(Neuropuncture)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            מערכת הדיקור השלמה היחידה המבוססת על מדעי המוח, המלמדת את המטפל כיצד לווסת מחדש 
            את מערכת העצבים של המטופל בחזרה לתפקוד בריא ומאוזן בעזרת דיקור חשמלי.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MethodHeroSection;
