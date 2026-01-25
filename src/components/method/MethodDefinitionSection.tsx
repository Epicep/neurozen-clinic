import { motion } from "framer-motion";
import { Lightbulb, Sparkles } from "lucide-react";

const MethodDefinitionSection = () => {
  return (
    <section className="py-24 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              המדע שבקצה המחט
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50"
          >
            <div className="flex items-start gap-6">
              <div className="hidden md:flex shrink-0 w-12 h-12 rounded-xl bg-accent items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  בעוד שדיקור מסורתי הוא אמנות עתיקה ומופלאה, הנוירופונקטורה מסירה את המסתורין.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  כשאנחנו יודעים בדיוק איזה עצב אנו מגרים, באיזה תדר חשמלי ובאיזה מינון – 
                  הטיפול הופך למדע מדויק.
                </p>
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  אנחנו לא מחפשים "חסימות אנרגטיות", אלא מתחברים ישירות לחיווט של מערכת העצבים 
                  כדי לתקן את התקשורת בין המוח לגוף.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodDefinitionSection;
