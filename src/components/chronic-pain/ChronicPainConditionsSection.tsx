import { motion } from "framer-motion";

const ChronicPainConditionsSection = () => {
  const conditions = [
    "כאבי גב תחתון כרוניים",
    "נוירופתיה סוכרתית",
    "פיברומיאלגיה",
    "כאבי ראש כרוניים ומיגרנות",
    "כאבים פוסט-ניתוחיים",
    "תסמונת התעלה הקרפלית",
    "כאבי צוואר ותפיסות",
    "כאבים לאחר פציעות ספורט",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            מצבים שאנו מטפלים בהם
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            הטיפול מותאם אישית לכל מטופל בהתאם לסוג הכאב, משכו ומקורו
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl p-5 text-center border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-foreground font-medium">{condition}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChronicPainConditionsSection;
