import { motion } from "framer-motion";
import { Target, Sparkles } from "lucide-react";

const NeurologicalPhilosophySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-4">
              הגישה שלנו
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              שיקום תפקודי ואיכות חיים
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-2xl p-8 md:p-10 border border-amber-500/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <p className="text-lg text-foreground leading-relaxed">
                  אנחנו לא מבטיחים "להעלים" מחלות ניווניות, אבל אנחנו יודעים שאפשר לשפר את התפקוד היומיומי איתן.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              במקום לראות רק את שם המחלה, אנחנו שואלים:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                "איפה יש שיבוש בתקשורת העצבית?",
                "אילו מסלולי תנועה נפגעו?",
                "איך ניתן ללמד את המוח לייצר מסלולים עוקפים?",
              ].map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 bg-background/50 rounded-xl p-4 border border-border/50"
                >
                  <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">{question}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NeurologicalPhilosophySection;
