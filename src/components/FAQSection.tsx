import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "האם זה כואב?",
    answer:
      "הטיפול משלב נקודות נוירו-ריאקטיביות עם זרם חשמלי עדין. התחושה נתפסת כפעימה עדינה או רטט, ורוב המטופלים חווים רגיעה עמוקה.",
  },
  {
    question: "מתי מרגישים שינוי?",
    answer:
      "תחושת 'שקט' נוירולוגי מורגשת לרוב מהמפגש הראשון. שיפור יציב שנשמר לטווח ארוך נבנה לאורך סדרה של 5-10 מפגשים.",
  },
  {
    question: "כמה זמן נמשך כל טיפול?",
    answer: "כל מפגש נמשך בין 45 ל-60 דקות, כולל הערכה ראשונית ותכנון טיפולי מותאם אישית.",
  },
  {
    question: "האם הטיפול בטוח?",
    answer:
      "הטיפול מבוסס על פרוטוקולים מחקריים מוכחים ומבוצע בידי מטפל מוסמך. הוא אינו פולשני ואינו כולל תרופות.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-[150px] bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            שאלות נפוצות
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-right text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
