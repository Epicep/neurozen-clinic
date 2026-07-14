import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import brainImage from "@/assets/brain-hero.png";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] pt-32 pb-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-right"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
                המרכז הישראלי לנוירופונקטורה
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl whitespace-pre-line">
              נוירופונקטורה לטיפול בחרדה, דיכאון וטראומה (PTSD).&nbsp;
              {"\n"}בניהול: עילאי פארן.
            </p>

            <div className="pt-4">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <a href="https://wa.me/972548082487" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  בדיקת התאמה לטיפול
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Brain Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <img
                src={brainImage}
                alt="3D Brain Visualization"
                className="w-full"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 45%, transparent 78%)",
                  maskImage:
                    "radial-gradient(ellipse at center, black 45%, transparent 78%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
