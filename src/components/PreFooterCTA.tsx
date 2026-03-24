import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PreFooterCTA = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild variant="outline" size="xl" className="border-primary text-foreground hover:bg-primary/10">
            <Link to="/cases">לצפייה במדדי השיפור מהקליניקה</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
