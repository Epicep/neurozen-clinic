import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const MediaSection = () => {
  return (
    <section id="media" className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heebo">
            פרסומים ומדיה
          </h2>
          <p className="text-lg text-muted-foreground font-heebo leading-relaxed">
            סקירות, ראיונות וכתבות מקצועיות על שיטת הנוירופונקטורה והשפעתה הקלינית.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Video Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden flex flex-col"
          >
            <div className="relative w-full aspect-video bg-muted">
              <iframe
                src="https://www.youtube.com/embed/HIe2pLz7sI0"
                title="ראיון מקצועי: עילאי פארן בתוכנית זמן ריפוי"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
              <h3 className="text-2xl font-bold text-foreground font-heebo leading-snug">
                ראיון מקצועי: עילאי פארן בתוכנית "זמן ריפוי"
              </h3>
              <p className="text-base text-foreground/80 font-heebo leading-relaxed">
                הסבר קליני על ויסות המערכת האוטונומית, חיווט המוח מחדש ושינוי הנוירוכימיה של מערכת העצבים באמצעות פולסים חשמליים מבוססי מחקר.
              </p>
              <div className="mt-auto pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-foreground hover:bg-primary/10 font-heebo"
                >
                  <a href="https://youtu.be/HIe2pLz7sI0" target="_blank" rel="noopener noreferrer">
                    צפייה ב-YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>

          {/* ynet Article Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden flex flex-col"
          >
            <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 to-muted flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-5xl md:text-6xl font-extrabold text-foreground font-heebo tracking-tight">
                  ynet
                </div>
                <div className="mt-3 text-sm text-muted-foreground font-heebo uppercase tracking-widest">
                  Editorial Feature
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
              <h3 className="text-2xl font-bold text-foreground font-heebo leading-snug">
                נוירופונקטורה ב-ynet: המדע שמאחורי הדיקור המודרני
              </h3>
              <p className="text-base text-foreground/80 font-heebo leading-relaxed">
                כתבה מקצועית המסבירה את המעבר הרפואי מגישות מסורתיות למנגנונים נוירו-אנטומיים מוכחים בקליניקה.
              </p>
              <div className="mt-auto pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-foreground hover:bg-primary/10 font-heebo"
                >
                  <a
                    href="https://www.ynet.co.il/wellness/article/yokra14462274"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    לקריאת הכתבה המלאה ב-ynet
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;