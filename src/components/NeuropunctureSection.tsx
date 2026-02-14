import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NeuropunctureSection = () => {
  return (
    <section className="py-24 bg-background neural-mesh-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            נוירופונקטורה | Neuropuncture
          </h2>
          



          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
            <p className="text-lg text-muted-foreground leading-[1.9] text-right">
              השיטה, שפותחה על ידי <strong className="text-foreground">ד"ר מייקל קורדינו (Dr. Michael Corradino)</strong>, מאפשרת להתמקד בקולטנים (<strong className="text-foreground">receptors</strong>) ספציפיים לצורך נוירומודולציה של שחרור נוירוכימיקלים, לווסת מחדש רפלקסים לקויים במערכת העצבים האוטונומית, הוויסרלית והספינלית ו'חתימות מוחיות' (<strong className="text-foreground">Cerebral signatures</strong>), ולהתמקד באזורים ספציפיים במוח ובמערכת העצבים המרכזית לצורך שיקום נוירולוגי (<strong className="text-foreground">Neuro-rehabilitation</strong>).
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed text-right mt-6 pt-6 border-t border-border/50">
              המרשמים הטיפוליים נמצאים בתהליך רישום פטנט, מבוססים על עדויות מדעיות, נתמכים במחקר וניתנים לשחזור קליני.
            </p>
            <div className="mt-8 flex justify-end">
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/science">המדע שמאחורי</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default NeuropunctureSection;