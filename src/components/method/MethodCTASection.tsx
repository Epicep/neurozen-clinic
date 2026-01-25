import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const MethodCTASection = () => {
  const scrollToContact = () => {
    document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            כשמדובר במערכת העצבים שלך, אין מקום לניחושים.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            בדקו התאמה לטיפול אצל המומחה היחיד בארץ
          </p>
          <Button
            onClick={scrollToContact}
            variant="hero"
            size="xl"
            className="gap-3"
          >
            בדיקת התאמה לטיפול אצל המומחה היחיד בארץ
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodCTASection;
