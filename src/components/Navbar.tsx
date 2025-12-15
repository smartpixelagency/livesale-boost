import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.features"), href: "#features", isRoute: false },
    { label: t("nav.benefits"), href: "#stats", isRoute: false },
    { label: t("nav.pricing"), href: "#pricing", isRoute: false },
    { label: t("nav.b2b"), href: "/b2b", isRoute: true },
    { label: t("nav.faq"), href: "#faq", isRoute: false },
  ];

  const handleAnchorClick = (href: string) => {
    if (!isHomePage && href.startsWith("#")) {
      window.location.href = "/" + href;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="LiveDealz" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={isHomePage ? link.href : "/" + link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Globe size={16} />
            {language.toUpperCase()}
          </button>
          <a 
            href={isHomePage ? "#contact" : "/#contact"} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.contact")}
          </a>
          <Button variant="hero" size="default">
            {t("nav.bookDemo")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2 text-muted-foreground hover:text-foreground"
          >
            <Globe size={20} />
          </button>
          <button
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={isHomePage ? link.href : "/" + link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <a 
                href={isHomePage ? "#contact" : "/#contact"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contact")}
              </a>
              <Button variant="hero" size="lg" className="mt-2">
                {t("nav.bookDemo")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
