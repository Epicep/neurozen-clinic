import { motion } from "framer-motion";
import { Droplets, Pill, Heart, Battery, Stethoscope, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const conditions = [
  {
    icon: Droplets,
    title: "סוכרת סוג 2 וטרום-סוכרת",
    description: "",
    color: "emerald",
  },
  {
    icon: Pill,
    title: "כבד שומני ופרופיל שומנים גבוה",
    description: "",
    color: "green",
  },
  {
    icon: Heart,
    title: "יתר לחץ דם",
    description: "",
    color: "teal",
  },
  {
    icon: Battery,
    title: "תסמונת מטבולית ועייפות כרונית",
    description: "",
    color: "cyan",
  },
  {
    icon: Stethoscope,
    title: "מעי רגיז (IBS) ורגישות בבטן",
    description: "ויסות רגישות היתר של מערכת העצבים במעיים (Visceral Hypersensitivity).",
    color: "emerald",
  },
  {
    icon: Flame,
    title: "מחלות מעי דלקתיות (IBD)",
    description: "הפעלת המסלול האנטי-דלקתי של עצב הואגוס להפחתת התקפים ותמיכה ברמיסיה.",
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; iconColor: string; border: string }> = {
  emerald: {
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    border: "border-emerald-200 hover:border-emerald-400",
  },
  green: {
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    border: "border-green-200 hover:border-green-400",
  },
  teal: {
    bg: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    border: "border-teal-200 hover:border-teal-400",
  },
  cyan: {
    bg: "bg-cyan-50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    border: "border-cyan-200 hover:border-cyan-400",
  },
};

const MetabolicConditionsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-emerald-50/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            באילו מצבים הטיפול יעיל?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full text-emerald-700 text-sm font-medium">
              הטיפול הוא משלים ונעשה בשיתוף פעולה עם הרופא המטפל
            </span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {conditions.map((condition, index) => {
            const colors = colorMap[condition.color];
            return (
              <motion.div
                key={condition.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 ${colors.border} ${colors.bg}`}
                >
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <div
                      className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4`}
                    >
                      <condition.icon className={`w-7 h-7 ${colors.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground leading-snug mb-2">
                      {condition.title}
                    </h3>
                    {condition.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {condition.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetabolicConditionsSection;
