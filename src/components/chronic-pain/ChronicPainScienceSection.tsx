import { motion } from "framer-motion";
import { Zap, Shield, Heart } from "lucide-react";

const ChronicPainScienceSection = () => {
  const cards = [
    {
      icon: Zap,
      title: "Neuro-rehabilitation",
      subtitle: "שיקום עצבי",
      description: "טיפול בפגיעה המבנית בעצב עצמו. אנו מעודדים תהליכי התחדשות (Regeneration) של סיבי העצב, משפרים את איכות ההולכה החשמלית ומסייעים בשיקום המעטפת, כדי שהעצב יפסיק לשדר אותות מצוקה.",
      gradient: "from-sky-200/50 to-sky-100/30",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
    },
    {
      icon: Shield,
      title: "Immune Modulation",
      subtitle: "ויסות דלקת ואינטרלוקינים",
      description: "כאב כרוני מתוחזק לרוב על ידי \"מרק דלקתי\". הטיפול מסייע לווסת את התגובה החיסונית, להפחית רמות של ציטוקינים ואינטרלוקינים מעודדי דלקת, ולעצור את המעגל הדלקתי שמונע החלמה.",
      gradient: "from-emerald-200/50 to-emerald-100/30",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: Heart,
      title: "Endogenous Opioids",
      subtitle: "שחרור משככים טבעיים",
      description: "הפעלת המערכת הפנימית לשיכוך כאב באמצעות שחרור בטא-אנדורפינים ואנקפלינים. זהו שלב קריטי שמאפשר לגוף \"הפסקת אש\" מהכאב, כדי שתהליכי הריפוי והשיקום יוכלו להתחיל.",
      gradient: "from-rose-200/50 to-rose-100/30",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
            המדע
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            משיכוך כאב לריפוי עמוק
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className={`rounded-2xl bg-gradient-to-br ${card.gradient} p-1 h-full`}>
                <div className="bg-card rounded-xl p-8 border border-border/50 transition-shadow hover:shadow-xl h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6`}>
                    <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                  </div>

                  {/* English title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2" dir="ltr">
                    {card.title}
                  </h3>

                  {/* Hebrew subtitle */}
                  <p className={`font-medium mb-4 ${card.iconColor}`}>
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {card.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 rounded-full ${card.iconBg}`}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">מנגנון פעולה קליני</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChronicPainScienceSection;
