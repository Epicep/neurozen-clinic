import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, BookOpen } from "lucide-react";
import brainImage from "@/assets/brain-hero.png";
const HeroSection = () => {
  return <section className="min-h-screen pt-24 pb-16 relative" style={{
    background: 'linear-gradient(180deg, hsl(280 30% 97%) 0%, hsl(270 40% 94%) 30%, hsl(280 30% 97%) 70%, hsl(240 20% 99%) 100%)'
  }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content - Right side (RTL) */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-8">
            {/* Badge */}
            

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">Neuro•Zen<span className="text-primary">Zen</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 leading-relaxed">המרכז לנוירופונקטורה בישראל</h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              נוירופונקטורה (Neuropuncture) היא שיטת הדיקור השלמה היחידה המבוססת על מדעי המוח, המלמדת את המטפל כיצד לווסת מחדש את מערכת העצבים של המטופל בחזרה לתפקוד בריא ומאוזן.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group">
                <MessageCircle className="w-5 h-5" />
                <span>בדיקת התאמה לטיפול בוואטסאפ</span>
              </Button>
              <Button variant="heroOutline" size="xl">
                <BookOpen className="w-5 h-5" />
                <span>קראו עוד על השיטה</span>
              </Button>
            </div>

            {/* Trust Element */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="flex items-center gap-4 pt-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent overflow-hidden border-2 border-primary/20 flex items-center justify-center">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">בניהולו של</p>
                <p className="font-semibold text-foreground">עילאי פארן, מומחה לנוירופונקטורה</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Brain Visual - Left side (RTL) */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.4
        }} className="relative flex items-center justify-center order-first lg:order-last">
            {/* Brain Image with seamless fade */}
            <div className="relative w-full max-w-xl mx-auto">
              {/* Soft glow background */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{
              background: 'radial-gradient(circle, hsl(270 40% 85%) 0%, transparent 70%)'
            }} />
              
              {/* Brain with smooth edge fade */}
              <div className="relative" style={{
              maskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, black 30%, transparent 70%)'
            }}>
                <motion.img src={brainImage} alt="3D Brain Visualization" className="w-full drop-shadow-2xl" animate={{
                y: [0, -10, 0]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }} />
              </div>
              
              {/* Floating Badges - positioned like reference */}
              <motion.div initial={{
              opacity: 0,
              scale: 0
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.8
            }} className="absolute top-[10%] left-1/2 -translate-x-1/2 floating-badge z-10">
                <span className="text-foreground text-sm">נוירומודולציה</span>
                <span className="node-dot"></span>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              scale: 0
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 1
            }} className="absolute top-[45%] -left-4 floating-badge z-10">
                <span className="text-foreground text-sm">ויסות עצבי</span>
                <span className="node-dot"></span>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              scale: 0
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 1.2
            }} className="absolute bottom-[20%] right-[5%] floating-badge z-10">
                <span className="text-foreground text-sm">שיקום תפקודי</span>
                <span className="node-dot"></span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;