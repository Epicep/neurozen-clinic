import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const treatmentAreas = [
    { label: "חרדה ואיזון נפשי", href: "/mental-health" },
    { label: "כאב כרוני", href: "/chronic-pain" },
    { label: "שיקום נוירולוגי", href: "/neurological" },
    { label: "איזון מטבולי", href: "/metabolic" },
  ];

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
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">N</span>
          </div>
          <span className="text-2xl font-bold text-foreground">
            Neuro•<span className="text-primary">Zen</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/method"
            className="text-foreground/70 hover:text-foreground transition-colors font-medium"
          >
            על השיטה
          </Link>

          {/* Treatment Areas Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors font-medium outline-none">
              תחומי טיפול
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="bg-background border border-border/50 shadow-lg rounded-lg p-2 min-w-[200px]"
            >
              {treatmentAreas.map((area) => (
                <DropdownMenuItem key={area.href} asChild>
                  <Link
                    to={area.href}
                    className="w-full px-4 py-2.5 text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md cursor-pointer transition-colors text-right"
                  >
                    {area.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={handleContactClick}
            className="text-foreground/70 hover:text-foreground transition-colors font-medium"
          >
            יצירת קשר
          </button>
        </nav>

        {/* CTA Button - Phone Call */}
        <Button variant="heroOutline" size="default" asChild className="hidden md:flex">
          <a href="tel:0548082487">תיאום פגישה</a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border/50"
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link
              to="/method"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
            >
              על השיטה
            </Link>

            {/* Mobile Accordion for Treatment Areas */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="treatments" className="border-none">
                <AccordionTrigger className="text-foreground/70 hover:text-foreground font-medium py-2 hover:no-underline">
                  תחומי טיפול
                </AccordionTrigger>
                <AccordionContent className="pr-4 space-y-2">
                  {treatmentAreas.map((area) => (
                    <Link
                      key={area.href}
                      to={area.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-foreground/60 hover:text-foreground transition-colors py-2"
                    >
                      {area.label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <button
              onClick={handleContactClick}
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium py-2 w-full text-right"
            >
              יצירת קשר
            </button>

            <Button variant="heroOutline" size="default" asChild className="w-full">
              <a href="tel:0548082487">תיאום פגישה</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;