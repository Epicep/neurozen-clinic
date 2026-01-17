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
              לטפל בביולוגיה, כדי שהנפש תוכל להחלים.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              בנוירופונקטורה אנחנו ניגשים ישירות למקור הפיזיולוגי של הבעיה. במקום לנסות "לשכנע" את המוח להירגע, אנחנו משתמשים בוויסות עצבי מדויק (Stellate Ganglion Modulation & Vagus Nerve Regulation) כדי לאותת למערכת העצבים שהסכנה חלפה.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              אנחנו עוצרים את מרוץ האדרנלין ומאפשרים לגוף לחזור לאיזון – מה שפותח דלת אמיתית לטיפול הרגשי ולחזרה לחיים.
            </p>
          </motion.div>

          {/* Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-80 lg:h-96 rounded-3xl bg-gradient-to-br from-teal-light via-accent to-lavender overflow-hidden">
              {/* Abstract wave pattern */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                    style={{ top: `${20 + i * 15}%` }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
              
              {/* Glowing orbs */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-accent/40 blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              {/* Nerve fiber lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <motion.path
                  d="M0,150 Q100,100 200,150 T400,150"
                  fill="none"
                  stroke="hsl(168 65% 45% / 0.3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                />
                <motion.path
                  d="M0,180 Q100,220 200,180 T400,180"
                  fill="none"
                  stroke="hsl(168 65% 45% / 0.2)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3 }}
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
