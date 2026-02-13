import { motion } from "framer-motion";
import { Brain, Sparkles, Shield } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "נוירופלסטיות וגורמי צמיחה (BDNF & GDNF)",
    description:
      "עידוד הפרשת חלבונים קריטיים התומכים בצמיחת סינפסות חדשות והגנה על נוירונים. זהו המפתח ל'חיווט מחדש' של המוח – תהליך המאפשר לשינוי הטיפולי להחזיק לטווח ארוך לצד בניית חוסן נפשי עמוק.",
  },
  {
    icon: Sparkles,
    title: "נוירוכימיקלים (סרוטונין, דופמין, GABA)",
    description:
      "שיפור הרגישות והזמינות של המוליכים העצביים האחראים על ויסות רגשי, מוטיבציה ושקט פנימי.",
  },
  {
    icon: Shield,
    title: "אנדורפינים",
    description:
      "משככי כאב טבעיים בעלי תפקיד מכריע בוויסות רגשי ובאיזון המערכת החיסונית.",
  },
];

const MolecularPillarsSection = () => {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            המנגנון המולקולרי
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            שלושת עמודי התווך הביולוגיים
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MolecularPillarsSection;
