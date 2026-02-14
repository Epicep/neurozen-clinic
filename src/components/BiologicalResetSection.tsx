import { motion } from "framer-motion";
import { Zap, Activity } from "lucide-react";

const tools = [
  {
    icon: Zap,
    title: "Stellate Ganglion Modulation",
    acronym: "SGM",
    description: (
      <>
        ויסות הצבר העצבי הסימפתטי המשמש כ'מרכז הפיקוד' של מערכת ההישרדות. זהו <strong>'כפתור האתחול' הביולוגי</strong> המאפשר למערכת העצבים לצאת ממצב דריכות כרוני וחזרה לאיזון (Homeostasis) ללא הליכים פולשניים.
      </>
    ),
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15",
  },
  {
    icon: Activity,
    title: "Transcutaneous Vagus Nerve Stimulation",
    acronym: "tVNS",
    description: (
      <>
        גירוי עדין של עצב הוואגוס המשמש כ<strong>'בלם הטבעי'</strong> של הגוף. הפעלתו משדרת למוח אותות של ביטחון, מורידה מיידית את רמות הקורטיזול (הורמון הסטרס) ומשפרת את יכולת הוויסות העצמי.
      </>
    ),
    gradient: "from-teal/20 to-teal/5",
    iconBg: "bg-teal/15",
  },
];

const BiologicalResetSection = () => {
  return (
    <section className="py-[150px] bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            כלי האתחול הביולוגי
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            טכנולוגיות ויסות עצבי מתקדמות
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.acronym}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="rounded-2xl">
                <div className="bg-card rounded-xl p-8 border-0 shadow-[0_4px_40px_-12px_hsl(220_60%_20%/0.08)] hover:shadow-[0_12px_50px_-12px_hsl(220_60%_20%/0.14)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl ${tool.iconBg} flex items-center justify-center mb-6`}>
                    <tool.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold text-primary">{tool.acronym}</span>
                    <span className="text-sm text-muted-foreground" dir="ltr">{tool.title}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {tool.description}
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

export default BiologicalResetSection;
