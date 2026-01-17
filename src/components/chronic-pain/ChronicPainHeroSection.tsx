import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ChronicPainHeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 via-sky-100/50 to-background">
      {/* Animated background - nerve network visualization */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central nerve visualization */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(199, 89%, 48%, 0.15) 0%, hsla(199, 89%, 48%, 0.05) 40%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Nerve pathway lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${30 + Math.random() * 40}%`}
              y2={`${20 + Math.random() * 60}%`}
              stroke="hsl(199, 89%, 48%)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </svg>

        {/* Signal nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-sky-400/60"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-6"
          >
            טיפול בכאב כרוני
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            לשחרר את הכאב, 
            <span className="text-sky-600"> לשקם את העצב</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            נוירופונקטורה מתקדמת לטיפול שורשי בכאב כרוני – שיקום עצבי, ויסות דלקת ושחרור מערכות שיכוך טבעיות בגוף.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-sky-600/30"
          >
            בדיקת התאמה לטיפול
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ChronicPainHeroSection;
