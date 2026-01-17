import { motion } from "framer-motion";
import { Move, Battery, Brain, TrendingDown } from "lucide-react";

const NeurologicalBenefitsSection = () => {
  const benefits = [
    {
      icon: Move,
      title: "שיפור בתנועה ובמוטוריקה",
      color: "amber",
    },
    {
      icon: Battery,
      title: "יותר אנרגיה ופחות עייפות כרונית",
      color: "teal",
    },
    {
      icon: Brain,
      title: "שיפור קוגניטיבי ומצב רוח",
      color: "primary",
    },
    {
      icon: TrendingDown,
      title: "האטת קצב התקדמות הסימפטומים",
      color: "secondary",
    },
  ];

  const colorMap: Record<string, { bg: string; iconBg: string; text: string; border: string }> = {
    amber: {
      bg: "bg-amber-500/5",
      iconBg: "bg-amber-500/20",
      text: "text-amber-500",
      border: "border-amber-500/20 hover:border-amber-500/40",
    },
    teal: {
      bg: "bg-teal/5",
      iconBg: "bg-teal/20",
      text: "text-teal",
      border: "border-teal/20 hover:border-teal/40",
    },
    primary: {
      bg: "bg-primary/5",
      iconBg: "bg-primary/20",
      text: "text-primary",
      border: "border-primary/20 hover:border-primary/40",
    },
    secondary: {
      bg: "bg-secondary/5",
      iconBg: "bg-secondary/20",
      text: "text-secondary",
      border: "border-secondary/20 hover:border-secondary/40",
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-amber-950/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-4">
            תוצאות
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            למה לצפות מהטיפול?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const colors = colorMap[benefit.color];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`h-full rounded-2xl ${colors.bg} border ${colors.border} p-6 text-center transition-all hover:shadow-lg`}
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
                    <benefit.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-foreground leading-relaxed">
                    {benefit.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NeurologicalBenefitsSection;
