import { motion } from "framer-motion";
import { Activity, Heart, Zap, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const specialties = [
  {
    icon: Activity,
    title: "שיקום נוירולוגי ומערכתי",
    link: "/neurological",
    conditions: [
      { name: "פרקינסון", description: "תמיכה בתפקוד המוטורי ושיפור איכות החיים." },
      { name: "טרשת נפוצה (M.S)", description: "ויסות מערכת החיסון והאטה של תהליכים דלקתיים." },
      { name: "פוסט-שבץ", description: "עידוד נוירופלסטיות ושיקום תפקודי." },
    ],
  },
  {
    icon: Heart,
    title: "איזון מטבולי והורמונלי",
    link: "/metabolic",
    conditions: [
      { name: "סוכרת (Type 2)", description: "שיפור הרגישות לאינסולין וויסות רמות הסוכר." },
      { name: "יתר לחץ דם", description: "הרגעת המערכת הסימפתטית ואיזון מהשורש העצבי." },
    ],
  },
  {
    icon: Zap,
    title: "טיפול בכאב ובמצבים כרוניים",
    link: "/chronic-pain",
    conditions: [
      { name: "פיברומיאלגיה", description: "הפחתת רגישות-יתר של מערכת העצבים המרכזית." },
      { name: "כאב נוירופתי", description: "הרגעת דלקות עצביות ושיקום תקשורת עצבית." },
    ],
  },
];

const MentalSpecialtiesSection = () => {
  return (
    <section id="specialties" className="py-[120px] bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            תחומי ההתמחות הנוספים שלנו
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 bg-card shadow-[0_4px_40px_-12px_hsl(220_60%_20%/0.08)] hover:shadow-[0_12px_50px_-12px_hsl(220_60%_20%/0.14)] hover:-translate-y-1.5 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-accent-foreground transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-3 flex-grow mb-6">
                    {item.conditions.map((condition) => (
                      <li key={condition.name} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span>
                          <strong className="text-foreground">{condition.name}:</strong>{" "}
                          {condition.description}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link to={item.link}>
                    <Button variant="outline" size="sm" className="w-full group-hover:border-primary/50 transition-colors">
                      <span>למידע נוסף</span>
                      <ArrowLeft className="w-4 h-4 mr-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalSpecialtiesSection;
