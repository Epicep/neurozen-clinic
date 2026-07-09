import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "שיקום הנוירופלסטיות",
    description:
      "אנחנו מעודדים יצירת קשרים סינפטיים חדשים כדי להחזיר את היכולת של האונה הקדם-מצחית לווסת את האמיגדלה (מרכז הפחד), לצד ויסות תקשורת עם ההיפוקמפוס.",
  },
  {
    number: "02",
    title: "איזון נוירוכימי",
    description:
      "ויסות רמות המוליכים העצביים במוח להחזרת השקט הפנימי והרגעה טבעית.",
  },
  {
    number: "03",
    title: "הפחתת דלקת עצבית",
    description:
      "שימוש במנגנונים ביולוגיים להרגעת התגובה הדלקתית במוח וסיוע למערכת העצבים לחזור לתפקוד תקין.",
  },
];

const TargetedApproachSection = () => {
  return (
    <section className="py-[120px] bg-accent/20 font-heebo">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            הגישה שלנו
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            הגישה הממוקדת שלנו
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            המרכז פועל מתוך הבנה שטיפול בחרדה, דיכאון ופוסט-טראומה מחייב נוירומודולציה מדויקת. אנו ממקדים את הטיפול בשלוש הפרעות הליבה:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="relative bg-card rounded-2xl p-8 border border-border/40 shadow-[0_4px_40px_-12px_hsl(220_60%_20%/0.08)] hover:shadow-[0_12px_50px_-12px_hsl(220_60%_20%/0.14)] hover:-translate-y-1.5 transition-all duration-300 text-right"
            >
              <div className="text-5xl font-extrabold text-primary/30 mb-3 leading-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetedApproachSection;