import { motion } from "framer-motion";
import { Brain, Activity, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const domains = [
  {
    icon: Brain,
    title: "חרדה ואיזון נפשי",
    description: "יציאה ממצב הישרדותי, טיפול בחרדה, דיכאון, PTSD ושיפור איכות השינה.",
    highlighted: true,
  },
  {
    icon: Zap,
    title: "כאב כרוני",
    description: "טיפול בשורש העצבי של כאבי גב, מיגרנות, פיברומיאלגיה וכאב נוירופתי.",
    highlighted: false,
  },
  {
    icon: Activity,
    title: "שיקום נוירולוגי",
    description: "תמיכה בפרקינסון, שיקום תנועה, והאטת התקדמות של מחלות ניווניות.",
    highlighted: false,
  },
  {
    icon: Heart,
    title: "איזון מטבולי",
    description: "סיוע באיזון סוכרת, לחץ דם, גיל המעבר ופעילות תקינה של המערכת ההורמונלית.",
    highlighted: false,
  },
];

const ClinicalDomainsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            במה אנחנו מטפלים?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            נוירופונקטורה מתאימה למגוון רחב של מצבים בריאותיים
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  domain.highlighted 
                    ? "border-2 border-primary/40 bg-primary/5 shadow-md" 
                    : "border-border bg-card"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div 
                    className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      domain.highlighted 
                        ? "bg-primary/20" 
                        : "bg-muted"
                    }`}
                  >
                    <domain.icon 
                      className={`w-7 h-7 ${
                        domain.highlighted 
                          ? "text-primary" 
                          : "text-muted-foreground"
                      }`} 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {domain.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {domain.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalDomainsSection;
