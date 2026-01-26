import { motion } from "framer-motion";
import { FlaskConical, Target, Brain, Repeat } from "lucide-react";

const MethodEvidenceSection = () => {
  const features = [
    {
      icon: Target,
      title: "מיקוד קולטנים עצביים",
      description: "לווסת שחרור נוירוכימיה"
    },
    {
      icon: Repeat,
      title: "איזון רפלקסים",
      description: "אוטונומיים ויסרליים"
    },
    {
      icon: Brain,
      title: "נוירו-רהביליטציה",
      description: "כיוון אזורים ייחודיים במוח"
    }
  ];

  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <FlaskConical className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              מרשמים מבוססי מחקר וניתנים לשחזור
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 mb-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              המרשמים הטיפוליים נמצאים בתהליך רישום פטנט, מבוססים על עדויות מדעיות, נתמכים במחקר וניתנים לשחזור קליני. 
              אנו לומדים כיצד למקד קולטנים עצביים ספציפיים כדי לווסת שחרור נוירוכימיה, לאזן רפלקסים אוטונומיים ויסרליים, 
              ולכוון לאזורים ייחודיים במוח ובמערכת העצבים המרכזית לצורך נוירו-רהביליטציה.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodEvidenceSection;
