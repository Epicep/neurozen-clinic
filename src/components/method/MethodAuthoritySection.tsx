import { motion } from "framer-motion";
import { Award, Shield, Star, User } from "lucide-react";

const MethodAuthoritySection = () => {
  return (
    <section className="py-24 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              הסטנדרט הבינלאומי – עכשיו בישראל
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-primary/20 to-navy/20 rounded-3xl aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                <div className="text-center p-8 relative z-10">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white/80 shadow-card flex items-center justify-center mb-4">
                    <User className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">תמונת מטפל</p>
                </div>
                
                {/* Certified badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-4 right-4 bg-white rounded-2xl p-3 shadow-card flex items-center gap-2"
                >
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-xs font-bold text-foreground">Certified Instructor</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  <strong className="text-primary">עילאי פארן</strong> אינו רק מטפל, אלא מכהן כ
                  <strong className="text-navy">דירקטור (Director) של תחום הנוירופונקטורה בישראל</strong>{" "}
                  ומדריך מוסמך של השיטה.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  קליניקת NeuroZen היא כיום המקום היחיד בישראל המעניק טיפול על ידי מוסמך רשמי,
                  הפועל בצמוד לפרוטוקולים הקליניים של מייסד השיטה, ד"ר מייקל קורדינו.
                </p>
              </div>

              {/* Authority badges */}
              <div className="flex flex-wrap gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 px-4 py-3 bg-primary/10 rounded-xl"
                >
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">דירקטור ישראל</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 px-4 py-3 bg-navy/10 rounded-xl"
                >
                  <Star className="w-5 h-5 text-navy" />
                  <span className="text-sm font-medium text-foreground">מדריך מוסמך</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 px-4 py-3 bg-accent rounded-xl"
                >
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">פרוטוקולים בינלאומיים</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodAuthoritySection;
