import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, HeartPulse, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: HeartPulse,
    badge: "נוירופונקטורה בתל אביב",
    title: "טיפול בחרדה",
    description:
      "לאפס את מערכת האזעקה הפנימית ולהחזיר את האיזון למערכת העצבים הסימפתטית באופן טבעי ומהיר.",
    to: "/treatments/anxiety",
    accent: "from-sky-50 to-white",
    ring: "ring-sky-100",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
  },
  {
    icon: Brain,
    badge: "נוירופונקטורה בתל אביב",
    title: "טיפול בדיכאון",
    description:
      "לעורר מחדש את מסלולי התגמול והאנרגיה של הגוף באמצעות שפעול אקטיבי של מוליכים עצביים ונוירופלסטיות.",
    to: "/treatments/depression",
    accent: "from-emerald-50 to-white",
    ring: "ring-emerald-100",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    icon: ShieldCheck,
    badge: "המרכז הישראלי לנוירופונקטורה",
    title: "לשחרר את הטראומה מהגוף",
    description:
      "טיפול ממוקד בפוסט טראומה (PTSD) ללא תרופות וללא מילים, העוקף את העיבוד המילולי וניגש ישירות למערכת העצבים.",
    to: "/treatments/ptsd",
    accent: "from-amber-50 to-white",
    ring: "ring-amber-100",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];

const ConditionsSpecialtiesSection = () => {
  return (
    <section
      dir="rtl"
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            תחומי התמחות
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            מרשמים טיפוליים ממוקדים
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            בחרו את התחום הרלוונטי למידע קליני מלא על הפרוטוקול המדעי המותאם.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={card.to}
                  className={`group relative flex flex-col h-full rounded-3xl bg-gradient-to-b ${card.accent} p-8 ring-1 ${card.ring} shadow-[0_4px_30px_-12px_hsl(220_60%_20%/0.08)] hover:shadow-[0_20px_50px_-15px_hsl(220_60%_20%/0.18)] hover:-translate-y-1.5 transition-all duration-300`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-7 h-7 ${card.iconColor}`} />
                  </div>

                  <span className="inline-block self-start px-3 py-1 rounded-full bg-white/70 backdrop-blur text-[11px] font-medium text-foreground/70 mb-4 border border-border/40">
                    {card.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>למידע מלא על המרשם הטיפולי</span>
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSpecialtiesSection;