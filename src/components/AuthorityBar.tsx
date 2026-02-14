import { motion } from "framer-motion";
import { Award, FlaskConical, ShieldCheck } from "lucide-react";

const items = [
  { icon: Award, label: "נציגות רשמית Neuropuncture Inc" },
  { icon: ShieldCheck, label: "טיפול מבוסס ראיות" },
  { icon: FlaskConical, label: "טכנולוגיית Pantheon Research" },
];

const AuthorityBar = () => {
  return (
    <section className="py-6 border-b border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-muted-foreground">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityBar;
