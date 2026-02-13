import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold">
                Neuro<span className="text-primary">Zen</span>
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              עילאי פארן, מנהל נוירופונקטורה ישראל.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">יצירת קשר</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                <span dir="ltr">054-808-2487</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>שאול המלך 39, תל אביב</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">התחילו עכשיו</h4>
            <p className="text-secondary-foreground/70 text-sm">
              בדקו אם הטיפול מתאים לכם בשיחה קצרה ללא התחייבות.
            </p>
            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="https://wa.me/972548082487" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                <span>שלחו הודעה בוואטסאפ</span>
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar with Disclaimer */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 space-y-4">
          <div className="bg-secondary-foreground/5 rounded-lg p-4 max-w-4xl mx-auto">
            <p className="text-secondary-foreground/80 text-sm leading-relaxed text-center">
              <strong>הבהרה רפואית:</strong> המידע המוצג באתר זה הינו למטרות מידע כללי בלבד ואינו מהווה ייעוץ רפואי, 
              אבחון או טיפול. נוירופונקטורה היא שיטת טיפול משלימה ואינה מחליפה ייעוץ רפואי מקצועי. 
              יש להתייעץ עם רופא מוסמך לפני תחילת כל טיפול.
            </p>
          </div>
          
          <p className="text-secondary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} NeuroZen. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
