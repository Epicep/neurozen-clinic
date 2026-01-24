import { motion } from "framer-motion";
import { Brain, RefreshCw, HelpCircle } from "lucide-react";

const MetabolicPhilosophySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-emerald-50/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6"
            >
              <HelpCircle className="w-8 h-8 text-emerald-600" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              למה הדיאטה לא תמיד עובדת?
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-emerald-100"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              כשהגוף נמצא בסטרס כרוני (High Cortisol), מערכת העצבים "נועלת" את המשאבים 
              ומקשה על ירידה במשקל או איזון סוכר. ב-NeuroZen אנו מתמקדים במערכת שמנהלת 
              את חילוף החומרים, ומסייעים לאיברים המטבוליים – הלבלב, הכבד והכליות – 
              לחזור לתפקוד יעיל.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">הבעיה</h4>
                  <p className="text-sm text-muted-foreground">
                    מערכת עצבים "נעולה" במצב לחץ מונעת ממנגנוני האיזון לפעול
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">הפתרון</h4>
                  <p className="text-sm text-muted-foreground">
                    שחרור הנעילה העצבית לחידוש התקשורת עם האיברים המטבוליים
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetabolicPhilosophySection;
