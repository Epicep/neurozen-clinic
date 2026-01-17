import { motion } from "framer-motion";
import neuralVideo from "@/assets/neural-animation.mp4";

const SolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-lavender/50 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              לטפל בביולוגיה, כדי שהנפש תוכל להחלים.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              בנוירופונקטורה אנחנו ניגשים ישירות למקור הפיזיולוגי של הבעיה. במקום לנסות "לשכנע" את המוח להירגע, אנחנו משתמשים בוויסות עצבי מדויק (Stellate Ganglion Modulation & Vagus Nerve Regulation) כדי לאותת למערכת העצבים שהסכנה חלפה.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              אנחנו עוצרים את מרוץ האדרנלין ומאפשרים לגוף לחזור לאיזון – מה שפותח דלת אמיתית לטיפול הרגשי ולחזרה לחיים.
            </p>
          </motion.div>

          {/* Video Visual with fade edges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div 
              className="relative h-80 lg:h-96 rounded-3xl overflow-hidden"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)'
              }}
            >
              {/* Background video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              >
                <source src={neuralVideo} type="video/mp4" />
              </video>
              
              {/* Overlay gradient for blending */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 30%, hsl(270 40% 94% / 0.5) 70%, hsl(270 40% 94%) 100%)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
