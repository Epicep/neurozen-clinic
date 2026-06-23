import { motion } from "framer-motion";
import { ArrowRightLeft, Activity, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: ArrowRightLeft,
    title: "מסלול עוקף שיחה",
    subtitle: "התערבות פיזיולוגית ישירה מהגוף אל המוח.",
  },
  {
    icon: Activity,
    title: "נוירופונקטורה",
    subtitle: "גירוי מדויק של עצבים פריפריאליים ומערכת העצבים המרכזית (CNS).",
  },
  {
    icon: BarChart3,
    title: "תוצאות מדידות",
    subtitle: "סדרות טיפול ממוקדות ומעקב מבוסס שאלונים קליניים.",
  },
];

const ThreePillarsSection = () => {
  return (
    <section className="py-[120px] bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-10 border border-primary/10 shadow-[0_4px_40px_-12px_hsl(220_60%_20%/0.08)] hover:shadow-[0_12px_50px_-12px_hsl(220_60%_20%/0.14)] hover:-translate-y-1.5 transition-all duration-300 text-right">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;