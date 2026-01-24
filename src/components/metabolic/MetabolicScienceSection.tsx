import { motion } from "framer-motion";
import { Activity, Zap, Flame } from "lucide-react";

const cards = [
  {
    icon: Activity,
    title: "ויסות ציר עצב-הורמון",
    englishTitle: "Neuro-Endocrine Axes",
    description:
      "ויסות ציר הסטרס המרכזי (HPA Axis). הורדת רמות הקורטיזול העודפות מסייעת להפחית דלקתיות, משפרת את המטבוליזם של גלוקוז ועוצרת את ה\"אגירה\" של שומן בטני.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "רגישות לאינסולין ותפקוד לבלב",
    englishTitle: "Insulin Sensitivity",
    description:
      "שיפור התקשורת העצבית עם הלבלב. הטיפול תומך ביכולת הוויסות העצמית של הגוף ומסייע לתאים להגיב טוב יותר לאינסולין (הפחתת תנגודת לאינסולין).",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Flame,
    title: 'טיפול ב"דלקת שקטה"',
    englishTitle: "Vagus Nerve",
    description:
      "השמנה בטנית וכבד שומני מלווים לרוב בדלקת כרונית נמוכה. הפעלת עצב הואגוס מסייעת לדיכוי המסלול הדלקתי ולשיפור תפקוד הכבד ופינוי הרעלים.",
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-50 to-cyan-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

const MetabolicScienceSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            המדע: איך משפיעים על מטבוליזם?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            שלושה מנגנונים מרכזיים לוויסות מערכת חילוף החומרים
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div
                className={`h-full rounded-2xl p-8 bg-gradient-to-br ${card.bgGradient} border border-emerald-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                >
                  <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-emerald-600 font-medium mb-4">
                  {card.englishTitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {/* Decorative gradient line */}
                <div
                  className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${card.gradient} opacity-60`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetabolicScienceSection;
