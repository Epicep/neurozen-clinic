import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, Activity, Brain } from "lucide-react";

const scienceItems = [
  {
    id: "neuromodulation",
    icon: Sparkles,
    title: "נוירו-מודולציה (Neuromodulation)",
    content: "ויסות הכימיה במוח (נוירוטרנסמיטורים) להשפעה ישירה על כאב ומצב רוח.",
  },
  {
    id: "neuroregulation",
    icon: Activity,
    title: "נוירו-רגולציה (Neuroregulation)",
    content: "החזרת מערכת העצבים האוטונומית לפעילות סדירה ומאוזנת (Vagal Tone).",
  },
  {
    id: "neuroplasticity",
    icon: Brain,
    title: "נוירו-פלסטיות (Neuroplasticity)",
    content: "שיקום מסלולים עצביים כדי ליצור תגובות בריאות חדשות במקום דפוסים של חולי.",
  },
];

const ScienceTrustSection = () => {
  return (
    <section className="py-24 bg-muted/50 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            המדע שמאחורי הריפוי
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            שלושה עקרונות מדעיים שמובילים את השיטה שלנו
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {scienceItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-background rounded-xl border border-border/50 shadow-sm px-6 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-right">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-16 text-muted-foreground leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ScienceTrustSection;
