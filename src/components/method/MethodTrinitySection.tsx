import { motion } from "framer-motion";
import { MapPin, Zap, RefreshCw } from "lucide-react";

const trinityPillars = [
  {
    icon: MapPin,
    title: "אנטומיה",
    subtitle: "Neuro-Anatomy",
    description: "מיקום המחטים נקבע אך ורק על פי מסלולי העצבים והצמתים הנוירולוגיים הרלוונטיים לפתולוגיה שלך.",
    color: "bg-sky-100 text-sky-700",
    iconBg: "bg-sky-500",
  },
  {
    icon: Zap,
    title: "חשמל רפואי",
    subtitle: "Neuro-Physiology",
    description: "שימוש בזרם חשמלי בתדרים ספציפיים (למשל 2Hz לשחרור אנדורפינים או 100Hz לשיקום). הסוד הוא בתדר המדויק ש\"משוחח\" עם המוח.",
    color: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-500",
  },
  {
    icon: RefreshCw,
    title: "שיקום",
    subtitle: "Neuro-Rehabilitation",
    description: "המטרה אינה רק הקלה רגעית, אלא אימון מחדש של מערכת העצבים ותיקון השורש הביולוגי של הבעיה.",
    color: "bg-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-500",
  },
];

const MethodTrinitySection = () => {
  return (
    <section className="py-24 bg-muted/30 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            איך זה עובד? שלושת עמודי התווך
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Neuropuncture Trinity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trinityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-3xl p-8 shadow-card border border-border/50 text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${pillar.iconBg} mb-6`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className={`text-sm font-medium mb-4 ${pillar.color} inline-block px-3 py-1 rounded-full`}>
                {pillar.subtitle}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodTrinitySection;
