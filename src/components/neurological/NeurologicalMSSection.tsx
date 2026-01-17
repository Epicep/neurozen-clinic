import { motion } from "framer-motion";
import { Network, Flame, Brain } from "lucide-react";

const NeurologicalMSSection = () => {
  const mechanisms = [
    {
      icon: Network,
      title: "שיקום תקשורת ונוירופלסטיות",
      description: "במקום שבו קיימת פגיעה במיאלין, אנו מעודדים את המוח ליצור \"מסלולים עוקפים\" (Bypass tracks) לחידוש התקשורת העצבית.",
    },
    {
      icon: Flame,
      title: "ניהול דלקת ועייפות",
      description: "עבודה ממוקדת על עצב הואגוס (VNS) להפחתת דלקת כרונית וטיפול ב\"עייפות הבלתי מוסברת\" (Fatigue) האופיינית למחלה.",
    },
    {
      icon: Brain,
      title: "תמיכה בחלבונים נוירוטרופיים",
      description: "העלאת רמות BDNF & GDNF התומכים בבריאות הנוירונים ותאי הגלייה (\"מערך התמיכה\" של המוח).",
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            טרשת נפוצה
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            המדע שמאחורי הטיפול בטרשת נפוצה (MS)
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-teal/20 overflow-hidden"
          >
            {/* Header with visual */}
            <div className="bg-gradient-to-r from-teal/10 to-teal/5 p-6 border-b border-teal/20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-teal/20 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">מנגנוני פעולה קליניים</h3>
                  <p className="text-muted-foreground text-sm">שיקום מיאלין ותקשורת עצבית</p>
                </div>
              </div>
            </div>

            {/* Mechanisms List */}
            <div className="p-6 space-y-6">
              {mechanisms.map((mechanism, index) => (
                <motion.div
                  key={mechanism.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                      <mechanism.icon className="w-5 h-5 text-teal" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-teal bg-teal/10 px-2 py-0.5 rounded">
                        {index + 1}
                      </span>
                      <h4 className="font-semibold text-foreground">{mechanism.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {mechanism.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeurologicalMSSection;
