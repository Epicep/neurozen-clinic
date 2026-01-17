import { motion } from "framer-motion";
import { Scan, Zap, Heart } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Scan,
      title: "מיפוי עצבי",
      description: "אבחון המקור הפיזיולוגי של הסימפטומים.",
    },
    {
      icon: Zap,
      title: "האיפוס (The Reset)",
      description: "סדרת טיפולים לוויסות חשמלי של מערכת העצבים.",
    },
    {
      icon: Heart,
      title: "החזרה לחיים",
      description: "שיפור בשינה, ירידה במינון החרדה, וחזרה לתפקוד מלא.",
    },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            התהליך שלנו
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            שלושה שלבים להחזרת מערכת העצבים לאיזון
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="group"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full hover:shadow-lg transition-shadow duration-300 hover:border-primary/30"
              >
                {/* Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15, type: "spring" }}
                  className="w-16 h-16 rounded-2xl bg-teal-light flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <step.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Step Number */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-muted-foreground">שלב</span>
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
