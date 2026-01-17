import { motion } from "framer-motion";

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
