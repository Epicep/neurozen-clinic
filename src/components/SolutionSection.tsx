import { motion } from "framer-motion";
import NeuralAnimation from "./NeuralAnimation";

const SolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-lavender/50 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              לטפל בביולוגיה, כדי שהנפש תוכל להחלים.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              בנוירופונקטורה אנחנו ניגשים ישירות למקור הפיזיולוגי של הבעיה. במקום לנסות "לשכנע" את המוח להירגע, אנחנו משתמשים בוויסות עצבי מדויק (Stellate Ganglion Modulation & Vagus Nerve Regulation) כדי לאותת למערכת העצבים שהסכנה חלפה.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              אנחנו עוצרים את מרוץ האדרנלין ומאפשרים לגוף לחזור לאיזון – מה שפותח דלת אמיתית לטיפול הרגשי ולחזרה לחיים.
            </motion.p>
          </motion.div>

          {/* Neural Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-80 lg:h-96"
          >
            <NeuralAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
