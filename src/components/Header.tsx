import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import clinicLogo from "@/assets/clinic-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">

      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={clinicLogo} alt="Neuro•Zen Clinic" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-foreground">
            Neuro•<span className="text-primary">Zen</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/science" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            המדע מאחורי השיטה
          </Link>
          <button
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  document.getElementById("specialties")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                document.getElementById("specialties")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-foreground/70 hover:text-foreground transition-colors font-medium"
          >
            מעבר לטיפול בנפש
          </button>
          <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            אודות
          </Link>
          <Link to="/cases" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            מקרים קליניים
          </Link>
          <a href="https://www.instagram.com/neurozen_neuropuncture/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </nav>

        {/* CTA Button - Phone Call */}
        <Button variant="heroOutline" size="default" asChild className="hidden md:flex">
          <a href="tel:0548082487">תיאום פגישה</a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          aria-label={mobileMenuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="md:hidden bg-background border-t border-border/50">

          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link
              to="/science"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium py-2 w-full text-right"
            >
              המדע מאחורי השיטה
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById("specialties")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  document.getElementById("specialties")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium py-2 w-full text-right"
            >
              מעבר לטיפול בנפש
            </button>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium py-2 w-full text-right"
            >
              אודות
            </Link>
            <Link
              to="/cases"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium py-2 w-full text-right"
            >
              מקרים קליניים
            </Link>
            <div className="flex items-center justify-end gap-3">
              <a href="https://www.instagram.com/neurozen_neuropuncture/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <Button variant="heroOutline" size="default" asChild className="w-full">
              <a href="tel:0548082487">תיאום פגישה</a>
            </Button>
          </div>
        </motion.div>
      }
    </motion.header>);

};

export default Header;