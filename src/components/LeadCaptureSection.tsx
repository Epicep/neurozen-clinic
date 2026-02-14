import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LeadCaptureSection = () => {
  return (
    <section id="lead-capture" className="py-[120px] bg-muted/30 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-right order-2 lg:order-1"
          >
            <p className="text-lg text-muted-foreground mb-4">
              מעדיפים לא לחכות?
            </p>
            <a 
              href="tel:054-808-2487" 
              className="block text-4xl md:text-5xl font-bold text-foreground mb-6 hover:text-primary transition-colors"
              dir="ltr"
            >
              054-808-2487
            </a>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700"
              asChild
            >
              <a 
                href="https://wa.me/972548082487" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                שלחו הודעה בוואטסאפ
              </a>
            </Button>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                הצעד הראשון הוא תמיד הכי קשה.
              </h2>
              <p className="text-muted-foreground mb-8">
                השאירו פרטים ונחזור אליכם לשיחת ייעוץ ללא התחייבות.
              </p>

              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">שם מלא</Label>
                  <Input 
                    id="name" 
                    placeholder="הזינו את שמכם המלא" 
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">טלפון נייד</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="050-0000000" 
                    className="text-right"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">מתי נוח שנתקשר?</Label>
                  <Select>
                    <SelectTrigger id="time" className="text-right">
                      <SelectValue placeholder="בחרו זמן מועדף" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">בוקר</SelectItem>
                      <SelectItem value="afternoon">צהריים</SelectItem>
                      <SelectItem value="evening">ערב</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full gap-2"
                >
                  חזרו אליי עם פרטים
                  <Phone className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
