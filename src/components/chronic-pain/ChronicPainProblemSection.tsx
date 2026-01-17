import { motion } from "framer-motion";

const ChronicPainProblemSection = () => {
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
            כשהעצב זקוק ל<span className="text-sky-600">שיקום</span>, לא רק להשתקה
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              כאב כרוני הוא לעיתים קרובות תוצאה של פגיעה ממשית ברקמה העצבית (נוירופתיה) או דלקת שלא נפתרה. במקום רק לנסות "לחסום" את הכאב, בנוירופונקטורה אנו פועלים לשיקום העצב הפגוע, שיפור המוליכות העצבית והחזרת הרקמה לתפקוד בריא.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChronicPainProblemSection;
