import { motion } from "framer-motion";

const GapSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            למה כוח רצון ושיחות לא תמיד מספיקים?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            חרדה, טראומה וכאב כרוני הם לא רק "בראש שלך" – הם צרובים בגוף. כשהמערכת העצבים הסימפתטית נמצאת בעוררות יתר (Over-activation), הגוף מגיב בסערה ביולוגית של הורמוני דחק. במצב כזה, הנפש לא יכולה להירגע כי הגוף עדיין משדר "סכנה".
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-20 h-1 bg-primary mx-auto rounded-full origin-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GapSection;
