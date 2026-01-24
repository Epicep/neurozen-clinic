import { motion } from "framer-motion";
import { Brain, Heart, Battery, Moon, Sparkles } from "lucide-react";

const MentalConditionsSection = () => {
  const conditions = [
    {
      icon: Heart,
      title: "חרדה והתקפי פאניקה",
      description: "הרגעת מערכת העצבים הסימפתטית והפחתת תגובות פאניקה",
    },
    {
      icon: Brain,
      title: "פוסט-טראומה (PTSD)",
      description: "עיבוד טראומה דרך ויסות עצבי ולא רק שיחה",
    },
    {
      icon: Sparkles,
      title: "דיכאון והעדר מוטיבציה",
      description: "טיפול ביולוגי להעלאת אנרגיה, ויסות מצב הרוח והחזרת החיוניות (Vitality) דרך איזון דופמין וסרוטונין.",
    },
    {
      icon: Battery,
      title: "סטרס כרוני ושחיקה",
      description: "שחרור מעגלי דחק והחזרת אנרגיה טבעית",
    },
    {
      icon: Moon,
      title: "אינסומניה והפרעות שינה",
      description: "איזון המערכת לכניסה טבעית למצב מנוחה",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            באילו מצבים הטיפול יעיל?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <condition.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {condition.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {condition.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalConditionsSection;
