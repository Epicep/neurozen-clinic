import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const MentalProblemSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Visual indicator */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center"
                >
                  <AlertTriangle className="w-7 h-7 text-destructive" />
                </motion.div>
              </div>
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-destructive/30"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            כשהמערכת תקועה על מצב <span className="text-destructive">"ON"</span>
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              אם הגעת לכאן, ייתכן שהמערכת שלך נמצאת ב-'ON' כבר יותר מדי זמן. בין אם זו חרדה שסוגרת עליך, דיכאון שמכבה את האנרגיה, או לילות ללא שינה – התחושה היא שמשהו עמוק במערכת לא מצליח להירגע. עבור רבים, זה לא רק 'בראש', אלא מצב פיזיולוגי של דריכות, עומס והצפה.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentalProblemSection;
