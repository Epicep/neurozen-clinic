import { motion } from "framer-motion";
import { Smile, Sparkles, Shield, TrendingDown } from "lucide-react";

const MentalNeurochemistrySection = () => {
  const neurotransmitters = [
    {
      icon: Smile,
      name: "סרוטונין",
      effect: "ויסות מצב רוח ושינה",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-100",
    },
    {
      icon: Sparkles,
      name: "דופמין",
      effect: "החזרת מוטיבציה וחיוניות",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-100",
    },
    {
      icon: Shield,
      name: "GABA",
      effect: "הרגעה ושקט פנימי",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-100",
    },
    {
      icon: TrendingDown,
      name: "הפחתת נוראדרנלין",
      effect: "הורדת רמות סטרס ודריכות",
      color: "from-teal-400 to-emerald-500",
      bgColor: "bg-teal-100",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            נוירוכימיה
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ויסות נוירוטרנסמיטורים מרכזיים במוח
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            הטיפול מעודד את הגוף לייצר ולאזן את החומרים הטבעיים האחראים על הרגשה טובה
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {neurotransmitters.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto rounded-2xl ${item.bgColor} flex items-center justify-center mb-4 shadow-md`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.name}
                </h3>

                {/* Effect */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.effect}
                </p>

                {/* Decorative underline */}
                <motion.div
                  className={`h-1 w-0 group-hover:w-12 mx-auto mt-4 rounded-full bg-gradient-to-r ${item.color} transition-all duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalNeurochemistrySection;
