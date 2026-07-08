import { motion } from "framer-motion";

const EmotionalSection = () => {
  return (
    <section className="py-[120px] bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6 leading-tight">
            כשהמילים לא מספיקות: ויסות המערכת מהשורש
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-10 max-w-3xl mx-auto">
            <strong className="text-foreground">ההתמחות העיקרית</strong> של המרכז היא טיפול ב<strong className="text-foreground">חרדה, דיכאון ופוסט-טראומה (PTSD)</strong>. הגישה הייחודית שלנו לא מחפשת 'לדבר' על הבעיה, אלא לפתור את השורש הביולוגי שלה דרך מערכת העצבים.
          </p>

          <div className="bg-card rounded-2xl p-8 md:p-10 border-0 shadow-[0_4px_40px_-12px_hsl(220_60%_20%/0.08)]">
            <p className="text-lg text-muted-foreground leading-[1.9] text-right">
              בין אם אתם מרגישים <strong className="text-foreground">דרוכים מדי</strong> – עם חרדה שלא מרפה וחוסר שקט, ובין אם אתם מרגישים <strong className="text-foreground">כבויים מדי</strong> – במצב של דיכאון עמיד, תחושת ריקנות או דכדוך כבד – הסיבה היא לרוב <strong className="text-foreground">ביולוגית</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-[1.9] text-right mt-6">
              מערכת העצבים שלכם עשויה להינעל במצב של <strong className="text-foreground">'עוררות יתר' (הישרדות)</strong> או <strong className="text-foreground">'קפיאה' (ניתוק)</strong>. במצבים אלו, המוח מתקשה להגיב לטיפולים המבוססים על שיח בלבד (<strong className="text-foreground">Top-Down</strong>). ב-Neuro•Zen אנו פונים ישירות אל ה<strong className="text-foreground">תשתית הביולוגית</strong> בגישת ה-<strong className="text-foreground">Bottom-Up</strong>: אנו מניעים את המערכת מהשורש הפיזיולוגי שלה, פותחים חסימות נוירולוגיות ומאפשרים לנפש להתחיל לנשום שוב.
            </p>
            <p className="text-lg text-muted-foreground leading-[1.9] text-right mt-6 border-r-2 border-primary/30 pr-4 bg-primary/5 p-4 rounded-l-lg">
              <strong className="text-foreground block mb-1">היתרון הגדול ביותר: לא צריך לפתוח מחדש את פצעי העבר</strong>
              אחד החסמים המשמעותיים ביותר בדרך לטיפול הוא הפחד מהצפה רגשית ומחזרה אל זיכרונות כואבים. מכיוון שהטיפול בנוירופונקטורה הוא פיזיולוגי, אנו עובדים ישירות עם מערכת העצבים מבלי שתצטרכו לשתף, לנתח או לעבד מחדש את אירועי העבר. המוח שלכם לומד להירגע ולהחזיר את עצמו להומיאוסטזיס - בצורה בטוחה, שקטה וללא מאמץ נפשי כואב.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default EmotionalSection;