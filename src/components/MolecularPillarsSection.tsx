import { motion } from "framer-motion";
import { Brain, Sparkles, Shield } from "lucide-react";

const pillars = [
{
  icon: Brain,
  title: "נוירופלסטיות וגורמי צמיחה (BDNF & GDNF)",
  description:
  <>
        עידוד הפרשת חלבונים קריטיים התומכים בצמיחת סינפסות חדשות והגנה על נוירונים. זהו המפתח ל<strong>'חיווט מחדש'</strong> של המוח – תהליך המאפשר לשינוי הטיפולי <strong>להחזיק לטווח ארוך</strong> לצד בניית חוסן נפשי עמוק.
      </>

},
{
  icon: Sparkles,
  title: "נוירוכימיה (סרוטונין, דופמין, GABA)",
  description: "שיפור הרגישות והזמינות של המוליכים העצביים האחראים על ויסות רגשי, מוטיבציה ושקט פנימי."
},
{
  icon: Shield,
  title: "אנדורפינים",
  description: "משככי כאב טבעיים בעלי תפקיד מכריע בוויסות רגשי ובאיזון המערכת החיסונית."
}];


const MolecularPillarsSection = () => {
  return (
    <section className="py-[120px] bg-accent/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            המנגנון המולקולרי
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                             שלושת עמודי התווך הביולוגיים לטיפול בנפש  
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group">
            
              <div className="h-full bg-card rounded-2xl p-8 border-0 shadow-[0_4px_40px_-12px_hsl(220_60%_20%/0.08)] hover:shadow-[0_12px_50px_-12px_hsl(220_60%_20%/0.14)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default MolecularPillarsSection;