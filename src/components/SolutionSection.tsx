import { motion } from "framer-motion";

const SolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-lavender/50 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              להשיב את האיזון למערכת העצבים
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              הכאב והחרדה הם לרוב סימן למערכת שיצאה מאיזון. בנוירופונקטורה, אנחנו לא רק "מטפלים בסימפטום", אלא מבצעים ויסות עצבי מדויק (Neuromodulation). הטיפול מעודד שחרור של נוירוכימיה טבעית המייצרת רגיעה עמוקה, וממריץ את יכולת הגוף לרפא ולשקם את הרקמות הפגועות. כך המערכת חוזרת לתפקוד טבעי, שקט ובריא.
            </p>
          </motion.div>

          {/* Abstract Healing Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full h-80 lg:h-96">
              {/* Soft flowing abstract background */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                style={{ filter: 'blur(0.5px)' }}
              >
                <defs>
                  <linearGradient id="softTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(180, 40%, 85%)" />
                    <stop offset="50%" stopColor="hsl(190, 50%, 80%)" />
                    <stop offset="100%" stopColor="hsl(200, 45%, 88%)" />
                  </linearGradient>
                  <linearGradient id="softLavender" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(270, 40%, 92%)" />
                    <stop offset="100%" stopColor="hsl(260, 35%, 88%)" />
                  </linearGradient>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(180, 50%, 90%)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(180, 50%, 95%)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                {/* Background circle glow */}
                <circle cx="200" cy="200" r="180" fill="url(#centerGlow)" />
                
                {/* Flowing wave paths - representing nerve flow */}
                <motion.path
                  d="M50,200 Q100,150 150,200 T250,200 T350,200"
                  stroke="url(#softTeal)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M30,220 Q80,180 140,220 T260,220 T370,220"
                  stroke="url(#softTeal)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M40,180 Q90,140 150,180 T270,180 T380,180"
                  stroke="url(#softLavender)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2.4, delay: 0.3, ease: "easeInOut" }}
                />
                
                {/* Synaptic connection points */}
                {[
                  { cx: 120, cy: 200, r: 6 },
                  { cx: 200, cy: 190, r: 8 },
                  { cx: 280, cy: 205, r: 5 },
                  { cx: 160, cy: 175, r: 4 },
                  { cx: 240, cy: 185, r: 5 },
                ].map((circle, i) => (
                  <motion.circle
                    key={i}
                    cx={circle.cx}
                    cy={circle.cy}
                    r={circle.r}
                    fill="hsl(180, 45%, 75%)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  />
                ))}
                
                {/* Gentle pulse rings */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="60"
                  stroke="hsl(180, 40%, 80%)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="100"
                  stroke="hsl(190, 35%, 85%)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
