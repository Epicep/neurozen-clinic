import { motion } from "framer-motion";
import { Network, FlaskConical, Flame } from "lucide-react";

const items = [
  {
    icon: Network,
    title: "פגיעה בתקשורת המוחית",
    description:
      "האזורים שאחראים על הפחד (האמיגדלה) מגיבים בעוצמת-יתר, בעוד ה\"בקרה\" של המוח (הקליפה הקדם-מצחית) נחלשת ולא מצליחה להרגיע את המערכת.",
  },
  {
    icon: FlaskConical,
    title: "חוסר איזון נוירוכימי",
    description:
      "המוח מאבד את האיזון הטבעי של חומרי ההרגעה (GABA וסרוטונין) וסובל מעודף של מוליכים מעוררים (דופמין ונוראפינפרין) שמשאירים אתכם בסטרס מתמיד.",
  },
  {
    icon: Flame,
    title: "דלקת עצבית משמרת",
    description:
      "סטרס כרוני מפעיל את תאי החיסון במוח (מיקרוגליה) ויוצר דלקת עצבית. הדלקת הזו פוגעת בנוירופלסטיות – היכולת של המוח להשתקם ולבנות קשרים חדשים – ומקבעת את מצב החרדה או הדיכאון.",
  },
];

const MechanismSection = () => {
  return (
    <section className="py-[120px] bg-background font-heebo">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            המנגנון הביולוגי
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            המעגל הביולוגי של מצבי חרדה, דיכאון וטראומה
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 border border-border/40 shadow-[0_4px_40px_-12px_hsl(220_60%_20%/0.08)] hover:shadow-[0_12px_50px_-12px_hsl(220_60%_20%/0.14)] hover:-translate-y-1.5 transition-all duration-300 text-right">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
