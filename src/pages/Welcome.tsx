import { motion } from "framer-motion";
import { MapPin, Building, Clock, Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-accent/30 py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            נעים להכיר, וברוכים הבאים ל-Neuro•<span className="text-primary">Zen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            שלום, אני <strong>עילאי פארן</strong>, ושמח שבחרת להשקיע בעצמך ובתהליך הריפוי שלך. כדי שנוכל להתחיל את התהליך בצורה המדויקת והמקצועית ביותר, אני מבקש ממך להקדיש כמה דקות למילוי השאלונים שלפנינו. המידע שתשתף יעזור לנו לבנות 'מפה נוירולוגית' של המצב הנוכחי שלך, כדי שנוכל להתאים עבורך את המרשם הטיפולי הנכון ביותר.
          </motion.p>
        </div>
      </div>

      {/* Forms Section */}
      <div className="container mx-auto max-w-3xl px-6 py-12 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
            שלב א': הצהרת בריאות
          </h2>
          <Card className="border-border/50">
            <CardContent className="p-6 flex justify-center">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdAtbemuaXhcax2P7I-ZDaFevWVO2uDyW1gVNKfIq6xoyKOYg/viewform?embedded=true" width={640} height={5002} frameBorder="0" marginHeight={0} marginWidth={0}>
                בטעינה…
              </iframe>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
            שלב ב': הערכה קלינית (PHQ-9, GAD-7, PCL-5)
          </h2>
          <Card className="border-border/50">
            <CardContent className="p-6 flex justify-center">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeL4RgQie2CxwDpf9fveqLmrDtLVvpm0gVG4dLmlAHJ3cDP-g/viewform?embedded=true" width={640} height={1800} frameBorder="0" marginHeight={0} marginWidth={0}>
                בטעינה…
              </iframe>
            </CardContent>
          </Card>
        </motion.div>

        {/* Logistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-primary/20 bg-accent/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-5">פרטי הגעה</h3>
              <div className="space-y-4 text-muted-foreground text-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span>שאול המלך 39, תל אביב</span>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span>בית הדר דפנה, בניין B, קומה 5, חדר 505</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shirt className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span>מומלץ להגיע בבגדים נוחים. אני מחכה לפגוש אותך.</span>
                </div>
                <p className="pt-2">
                  אם יש שינויים או שאלות נוספות, תמיד ניתן ליצור קשר{' '}
                  <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">בוואטסאפ</a>.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
