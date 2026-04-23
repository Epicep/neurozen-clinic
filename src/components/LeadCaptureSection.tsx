import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadCaptureSection = () => {
  return (
    <section id="lead-capture" className="py-[120px] bg-muted/30 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            הצעד הראשון הוא תמיד הכי קשה.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            צרו קשר ישיר לשיחת ייעוץ ללא התחייבות. נשמח לבדוק יחד אם הטיפול מתאים לכם.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="lg"
              className="gap-2 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://wa.me/972548082487"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                צרו קשר בוואטסאפ
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="gap-2 w-full sm:w-auto"
              asChild
            >
              <a href="tel:054-808-2487" dir="ltr">
                <Phone className="w-4 h-4" />
                054-808-2487
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
