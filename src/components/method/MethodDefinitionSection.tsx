import { motion } from "framer-motion";
import { Lightbulb, Radio } from "lucide-react";

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
              מה זה בעצם?
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
                <Radio className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  בעוד שדיקור סיני מסורתי מתמקד ב"ערוצי אנרגיה" (מרידיאנים) וזרימת צ'י,
                  הנוירופונקטורה מדברת בשפה של מערכת העצבים.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  אנו משתמשים במחטים כאלקטרודות זעירות כדי להתחבר לסיבי עצב ספציפיים,
                  ולשדר להם אותות חשמליים שמתקנים את התקשורת בין המוח לגוף.
                </p>
              </div>
            </div>

            {/* Visual accent */}
            <div className="mt-8 pt-8 border-t border-border/50 flex flex-wrap gap-4 justify-center">
              {["נוירו-אנטומיה", "אלקטרודות זעירות", "תיקון תקשורת עצבית"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodDefinitionSection;
