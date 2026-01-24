import { motion } from "framer-motion";
import { Zap, Radio, Activity } from "lucide-react";

const frequencies = [
  {
    hz: "2Hz",
    effect: "שחרור אנקפלינים – שיכוך כאב טבעי",
    color: "bg-sky-100 text-sky-700 border-sky-200",
  },
  {
    hz: "15Hz",
    effect: "ויסות דופמין – שיפור מוטיבציה",
    color: "bg-purple-100 text-purple-700 border-purple-200",
  },
  {
    hz: "100Hz",
    effect: "פעילות אנטי-דלקתית מערכתית",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
];

const MethodTechnologySection = () => {
  return (
    <section className="py-24 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 mb-6">
              <Zap className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              הכוח של החשמל הרפואי
            </h2>
            <p className="text-sm text-primary font-medium">Electro-Acupuncture</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground leading-relaxed">
                הסוד הוא לא רק במחט, אלא <strong className="text-primary">בתדר</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                אנו משתמשים במכשור מתקדם כדי להעביר פולסים חשמליים בתדרים ספציפיים
                (2Hz, 100Hz וכו'). המחקרים מראים שתדרים שונים גורמים למוח לשחרר
                חומרים שונים: מתדרים משככי כאב (אנקפלינים) ועד תדרים נוגדי דלקת.
              </p>

              {/* Frequency badges */}
              <div className="space-y-3 pt-4">
                {frequencies.map((freq, index) => (
                  <motion.div
                    key={freq.hz}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${freq.color}`}
                  >
                    <span className="font-bold text-lg min-w-[60px]">{freq.hz}</span>
                    <span className="text-sm">{freq.effect}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual representation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-navy/5 to-primary/10 rounded-3xl p-8 aspect-square flex items-center justify-center">
                {/* Animated wave visualization */}
                <div className="relative w-full h-full">
                  {/* Central device icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white shadow-card flex items-center justify-center">
                      <Activity className="w-12 h-12 text-primary" />
                    </div>
                  </div>

                  {/* Animated pulse rings */}
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: ring * 0.3 }}
                    >
                      <motion.div
                        className="rounded-full border-2 border-primary/30"
                        style={{
                          width: `${ring * 30 + 30}%`,
                          height: `${ring * 30 + 30}%`,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          delay: ring * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  ))}

                  {/* Frequency labels */}
                  <motion.div
                    className="absolute top-8 right-8 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-xs font-medium"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    2Hz
                  </motion.div>
                  <motion.div
                    className="absolute bottom-8 left-8 px-3 py-1 bg-emerald-100 rounded-full text-emerald-700 text-xs font-medium"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                  >
                    100Hz
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodTechnologySection;
