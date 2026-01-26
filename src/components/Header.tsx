import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = () => {
  const navItems = [{
    label: "על השיטה",
    href: "/method"
  }, {
    label: "תחומי טיפול",
    href: "/#clinical-domains"
  }, {
    label: "צור קשר",
    href: "#contact"
  }];
  return <motion.header initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">N</span>
          </div>
          <span className="text-2xl font-bold text-foreground">Neuro•<span className="text-primary">Zen</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => item.href.startsWith("/") ? <Link key={item.label} to={item.href} className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                {item.label}
              </Link> : <a key={item.label} href={item.href} className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                {item.label}
              </a>)}
        </nav>

        {/* CTA Button */}
        <Button variant="heroOutline" size="default">
          תיאום פגישה
        </Button>
      </div>
    </motion.header>;
};
export default Header;