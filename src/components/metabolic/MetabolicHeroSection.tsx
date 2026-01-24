import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MetabolicHeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50 via-background to-background">
      {/* Abstract Vagus Nerve to Organs Visualization */}
      <div className="absolute inset-0">
        {/* Central Vagus Nerve Path */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Main Vagus Nerve trunk */}
          <motion.path
            d="M400,50 Q380,150 400,250 Q420,350 380,450 Q360,500 400,550"
            stroke="url(#vagusGradient)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          
          {/* Branch to Stomach (left) */}
          <motion.path
            d="M400,300 Q350,320 280,350 Q230,380 200,400"
            stroke="url(#branchGradient)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          
          {/* Branch to Liver (right) */}
          <motion.path
            d="M400,320 Q450,340 520,360 Q580,380 620,390"
            stroke="url(#branchGradient)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
          
          {/* Branch to Pancreas (center-left) */}
          <motion.path
            d="M390,380 Q340,400 300,420"
            stroke="url(#branchGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.2, delay: 2.1 }}
          />

          <defs>
            <linearGradient id="vagusGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Organ Nodes */}
        {/* Stomach */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-emerald-200/40 to-emerald-400/20 blur-xl"
          style={{ left: "20%", top: "60%" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 3, delay: 2, repeat: Infinity }}
        />
        
        {/* Liver */}
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-emerald-300/30 to-teal-400/20 blur-xl"
          style={{ right: "18%", top: "58%" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3.5, delay: 2.3, repeat: Infinity }}
        />

        {/* Pancreas */}
        <motion.div
          className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-green-200/40 to-emerald-300/20 blur-lg"
          style={{ left: "32%", top: "68%" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2.8, delay: 2.6, repeat: Infinity }}
        />

        {/* Floating nature particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-400/30"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-emerald-100 text-emerald-700 rounded-full"
          >
            איזון מטבולי
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            מעבר ל"תזונה ותנועה":
            <br />
            <span className="text-emerald-600">ויסות מערכת העצבים המטבולית</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            שינוי תזונתי הוא הבסיס, אבל לפעמים הגוף צריך עזרה "מבפנים" כדי להגיב אליו.
            נוירופונקטורה מסייעת לאיזון הציר ההורמונלי ולהורדת רמות דלקת וסטרס המעכבות ריפוי.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              בדיקת התאמה לטיפול
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetabolicHeroSection;
