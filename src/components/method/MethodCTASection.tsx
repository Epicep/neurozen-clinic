import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const MethodCTASection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            טיפול שמדבר בשפה של הגוף שלך.
          </h2>
          <Button
            variant="hero"
            size="xl"
            className="gap-3"
            asChild
          >
            <a href="https://wa.me/972548082487" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              בדיקת התאמה לטיפול
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodCTASection;
