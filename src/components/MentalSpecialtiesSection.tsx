import { motion } from "framer-motion";
import { Heart, Brain, Battery, Moon, Flame } from "lucide-react";

const specialties = [
  {
    icon: Heart,
    title: "חרדה גבוהה ועוררות יתר",
  },
  {
    icon: Brain,
    title: "פוסט-טראומה (PTSD)",
  },
  {
    icon: Battery,
    title: "דיכאון ודכדוך",
  },
  {
    icon: Moon,
    title: "הפרעות שינה (אינסומניה)",
  },
  {
    icon: Flame,
    title: "שחיקה ומתח כרוני",
  },
];

const MentalSpecialtiesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            תחומי ההתמחות שלנו
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-3 bg-card rounded-full px-6 py-4 border border-border/50 shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground whitespace-nowrap">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalSpecialtiesSection;
