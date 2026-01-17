import { motion } from "framer-motion";

const GapSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            כשהמערכת יצאה מאיזון – הגוף והנפש משלמים את המחיר
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            בין אם מדובר בחרדה שלא מרפה, כאב כרוני או בעיות שינה – המכנה המשותף הוא מערכת עצבים שתקועה במצב "הישרדות" (Fight or Flight). כשהגוף מוצף בהורמוני דחק ודריכות, הוא מאבד את היכולת הטבעית שלו לרפא את עצמו, ושום טיפול נקודתי לא יחזיק מעמד לאורך זמן.
          </p>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-20 h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GapSection;
