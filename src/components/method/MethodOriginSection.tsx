import { motion } from "framer-motion";
import { Award, GraduationCap, Globe } from "lucide-react";

const MethodOriginSection = () => {
  return (
    <section className="py-24 bg-muted/30 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy/10 mb-6">
              <GraduationCap className="w-8 h-8 text-navy" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              פיתוח השיטה
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              השיטה פותחה על ידי{" "}
              <strong className="text-navy">ד"ר מייקל קורדינו (Dr. Michael Corradino)</strong>,
              חוקר וקלינאי בעל שם עולמי בתחום הנוירו-אקופונקטורה.
            </p>

            <div className="bg-accent/50 rounded-2xl p-6 mb-8">
              <p className="text-lg text-foreground leading-relaxed">
                <strong className="text-primary">עילאי פארן</strong>, מנהל הקליניקה,
                הוסמך ישירות על ידו ופועל על פי הפרוטוקולים הקליניים המחמירים של
                האיגוד הבינלאומי לנוירופונקטורה.
              </p>
            </div>

            {/* Credentials badges */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-border/50"
              >
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">הסמכה בינלאומית</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-border/50"
              >
                <Globe className="w-4 h-4 text-navy" />
                <span className="text-sm font-medium text-foreground">פרוטוקולים קליניים</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-border/50"
              >
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-foreground">הכשרה ישירה</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodOriginSection;
