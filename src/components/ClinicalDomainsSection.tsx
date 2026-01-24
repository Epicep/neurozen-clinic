import { motion } from "framer-motion";
import { Brain, Activity, Zap, Heart, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const domains = [
  {
    icon: Brain,
    title: "חרדה ואיזון נפשי",
    description: "יציאה ממצב הישרדותי, טיפול בחרדה, דיכאון, PTSD ושיפור איכות השינה.",
    accentColor: "bg-purple-50",
    borderColor: "border-purple-200 hover:border-purple-400",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    link: "/mental-health",
  },
  {
    icon: Zap,
    title: "כאב כרוני",
    description: "טיפול בשורש העצבי של כאבי גב, מיגרנות, פיברומיאלגיה וכאב נוירופתי.",
    accentColor: "bg-sky-50",
    borderColor: "border-sky-200 hover:border-sky-400",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    link: "/chronic-pain",
  },
  {
    icon: Activity,
    title: "שיקום נוירולוגי",
    description: "תמיכה בפרקינסון, שיקום תנועה, והאטת התקדמות של מחלות ניווניות.",
    accentColor: "bg-amber-50",
    borderColor: "border-amber-200 hover:border-amber-400",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    link: "/neurological",
  },
  {
    icon: Heart,
    title: "איזון מטבולי",
    description: "סיוע באיזון סוכרת, לחץ דם, גיל המעבר ופעילות תקינה של המערכת ההורמונלית.",
    accentColor: "bg-emerald-50",
    borderColor: "border-emerald-200 hover:border-emerald-400",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    link: "/metabolic",
  },
];

const ClinicalDomainsSection = () => {
  return (
    <section className="py-24 bg-background neural-mesh-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            באילו מצבים אנו מטפלים?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            בחרו את התחום הרלוונטי לקריאה נוספת על הטיפול המותאם אישית:
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
              <Link to={domain.link}>
                <Card 
                  className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 ${domain.borderColor} ${domain.accentColor} group`}
                >
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <div 
                      className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${domain.iconBg} transition-transform group-hover:scale-110`}
                    >
                      <domain.icon className={`w-7 h-7 ${domain.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {domain.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                      {domain.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      <span>למידע נוסף</span>
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalDomainsSection;
