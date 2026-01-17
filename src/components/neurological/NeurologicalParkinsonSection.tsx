import { motion } from "framer-motion";
import { Activity, Footprints, Zap, Shield } from "lucide-react";

const NeurologicalParkinsonSection = () => {
  const mechanisms = [
    {
      icon: Activity,
      title: "הפחתת רעד ונוקשות",
      description: "ויסות המסלולים הדופמינרגיים (D1 & D2) בגרעיני הבסיס לשחרור תנועה ושיפור מוטוריקה עדינה.",
    },
    {
      icon: Footprints,
      title: "שיפור יציבה והליכה",
      description: "עבודה על שיווי משקל וביטחון בתנועה.",
    },
    {
      icon: Zap,
      title: "עידוד ייצור דופמין",
      description: "המרצת האנזים Tyrosine Hydroxylase, רכיב מפתח בסינתזה של דופמין.",
    },
    {
      icon: Shield,
      title: "הגנה עצבית (Neuroprotection)",
      description: "תמיכה במנגנונים נוגדי חמצון להפחתת דלקת עצבית.",
    },
  ];

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
            פרקינסון
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            המדע שמאחורי הטיפול בפרקינסון
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-amber-500/20 overflow-hidden"
          >
            {/* Header with visual */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 p-6 border-b border-amber-500/20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">מנגנוני פעולה קליניים</h3>
                  <p className="text-muted-foreground text-sm">ויסות המערכת הדופמינרגית</p>
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
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <mechanism.icon className="w-5 h-5 text-amber-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
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

export default NeurologicalParkinsonSection;
