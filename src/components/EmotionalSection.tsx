import { motion } from "framer-motion";

const EmotionalSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8 leading-tight">
            להחזיר את החיות למערכת: למה טיפול שיחתי הוא לפעמים רק חצי מהפתרון?
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
            <p className="text-lg text-muted-foreground leading-[1.9] text-right">
              בין אם אתם מרגישים דרוכים מדי – עם חרדה שלא מרפה, דופק מהיר ומחשבות שלא נחות, ובין אם אתם מרגישים כבויים מדי – במצב של דיכאון עמיד, תחושת ריקנות או כבדות פיזית ששום מילה לא מצליחה להזיז – הסיבה היא לרוב ביולוגית.
            </p>
            <p className="text-lg text-muted-foreground leading-[1.9] text-right mt-6">
              מערכת העצבים שלכם עשויה להינעל באחד משני מצבים: 'עוררות יתר' (הישרדות) או 'קפיאה' (ניתוק). במצבים אלו, ובמיוחד בדיכאון עמיד לטיפול, המוח פשוט מפסיק להגיב לגירויים רגילים. ב-Neuro•Zen אנחנו לא מבקשים מכם 'לחשוב חיובי' או להסביר את התחושה. אנחנו פונים ישירות לתשתית הביולוגית. דרך גישת ה-Bottom-Up, אנחנו מניעים את המערכת מהשורש הפיזיולוגי שלה, פותחים את החסימות הנוירולוגיות ומאפשרים לנפש להתחיל לנשום שוב.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalSection;
