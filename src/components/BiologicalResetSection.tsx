import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BiologicalResetSection = () => {
  return (
    <section className="py-[120px] bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            נוירומודולציה לא פולשנית
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            נוירומודולציה לא פולשנית – ויסות מהשורש
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 border border-border/40 shadow-soft"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold">איך זה עובד?</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg mb-6 text-right">
              השיטה שלנו מבוססת על נוירומודולציה – שימוש במנגנונים נוירוביולוגים ממוקדים כדי להשפיע על מערכת העצבים. זהו לא "גירוי" רגיל, אלא אינטראקציה מורכבת עם המוח. אנו משלבים טכניקות נוירומודולציה, הכוללות גירוי של עצב הוואגוס ועצבים נוספים, כדי להגביר את הטון הפאראסימפטטי (מערכת המנוחה והרגיעה). האותות הללו מאפשרים למערכת העצבים לבצע "אתחול" ולעבור ממצב של הישרדות למצב של שיקום והומאוסטזיס.
            </p>

            <div className="bg-accent/20 p-6 rounded-xl border border-border/40">
              <p className="text-base text-foreground font-medium text-right">
                <strong>היתרון הגדול ביותר:</strong> כשהמילים לא מספיקות, המערכת הפיזיולוגית יודעת את הדרך חזרה לאיזון. הטיפול מאפשר לכם להשתקם ללא צורך לשתף, לנתח או לעבד מחדש טראומות עבר. זהו טיפול בטוח, שקט וללא מאמץ נפשי או פיזי.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="xl" variant="outline" className="border-primary text-foreground hover:bg-primary/10">
                <Link to="/cases">לצפייה במדדי השיפור מהקליניקה</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiologicalResetSection;
