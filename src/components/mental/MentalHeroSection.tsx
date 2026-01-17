import { motion } from "framer-motion";

const MentalHeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-lavender-soft via-lavender to-background">
      {/* Abstract Vagus Nerve Visual */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-auto opacity-20"
          viewBox="0 0 200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main vagus nerve path */}
          <motion.path
            d="M100 0 C100 100, 80 150, 100 200 C120 250, 80 300, 100 350 C120 400, 80 450, 100 500 C120 550, 80 600, 100 650 C120 700, 100 750, 100 800"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Branching nerves */}
          <motion.path
            d="M100 200 C60 220, 40 260, 30 300"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.path
            d="M100 200 C140 220, 160 260, 170 300"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
          <motion.path
            d="M100 350 C50 380, 30 430, 25 480"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          <motion.path
            d="M100 350 C150 380, 170 430, 175 480"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
          {/* Nerve nodes */}
          {[200, 350, 500, 650].map((y, i) => (
            <motion.circle
              key={y}
              cx="100"
              cy={y}
              r="6"
              fill="hsl(var(--primary))"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
            />
          ))}
        </svg>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            בריאות הנפש
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
            להרגיע את המערכת מבפנים
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            טיפול ביולוגי בחרדה, דיכאון, PTSD ואינסומניה. כשהגוף תקוע במצב "הישרדות", אנחנו עוזרים לו לעבור למצב של ריפוי.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MentalHeroSection;
