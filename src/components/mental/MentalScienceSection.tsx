import { motion } from "framer-motion";
import { Zap, Activity } from "lucide-react";

const MentalScienceSection = () => {
  const cards = [
    {
      icon: Activity,
      title: "Vagal Nerve Stimulation (VNS)",
      subtitle: "שיקום הפעילות הפרא-סימפתטית",
      description: "שימוש בנקודות דיקור ספציפיות לגירוי עצב הואגוס. המנגנון: שליחת איתותים המגבירים את הפעילות הפרא-סימפתטית (\"Mending & Defending\") ודיכוי תגובת דלקת מערכתית (המסלול האנטי-דלקתי הכולינרגי).",
      gradient: "from-primary/20 to-primary/5",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      icon: Zap,
      title: "Stellate Ganglion Modulation (SGM)",
      subtitle: "\"כיבוי שריפות\" במערכת הסימפתטית",
      description: "מודולציה של גנגליון הכוכב בצוואר – צומת העצבים האחראי על תגובת ה-Fight or Flight. המטרה הקלינית היא ויסות \"עודף עוררות\" והשפעה עקיפה על אזורי מוח לימביים (אמיגדלה והיפוקמפוס) להרגעת חרדה קיצונית וטראומה.",
      gradient: "from-teal/20 to-teal/5",
      iconBg: "bg-teal/20",
      iconColor: "text-teal",
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            המדע
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ויסות עצבי עמוק
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className={`rounded-2xl bg-gradient-to-br ${card.gradient} p-1`}>
                <div className="bg-card rounded-xl p-8 border border-border/50 transition-shadow hover:shadow-xl">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6`}>
                    <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                  </div>

                  {/* English title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2" dir="ltr">
                    {card.title}
                  </h3>

                  {/* Hebrew subtitle */}
                  <p className="text-primary font-medium mb-4">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalScienceSection;
