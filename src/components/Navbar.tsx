import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo.png";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { ContactDialog } from "@/components/ContactDialog";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "no", label: "Norsk", flag: "🇳🇴" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  // Check if we're on the home page (any language variant)
  const isHomePage = location.pathname === `/${language}` || location.pathname === "/" || location.pathname === `/${language}/`;
  const currentLang = languages.find((l) => l.code === language) || languages[0];

  const navLinks = [
    { label: t("nav.features"), href: "#features", isRoute: false },
    { label: t("nav.benefits"), href: "#stats", isRoute: false },
    { label: t("nav.pricing"), href: "#pricing", isRoute: false },
    { label: t("nav.b2b"), href: `/${language}/b2b`, isRoute: true },
    { label: t("nav.faq"), href: "#faq", isRoute: false },
  ];

  const handleLanguageChange = (newLang: Language) => {
    // Get current path without language prefix
    const pathParts = location.pathname.split("/");
    let currentPath = "";
    
    if (pathParts.length > 2) {
      // Path like /de/b2b -> extract /b2b
      currentPath = "/" + pathParts.slice(2).join("/");
    }
    
    setLanguage(newLang);
    setLangOpen(false);
    
    // Navigate to the same page in the new language
    navigate(`/${newLang}${currentPath}`);
  };

  const getHomeHref = (anchor: string) => {
    if (isHomePage) {
      return anchor;
    }
    return `/${language}${anchor}`;
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to={`/${language}`} className="flex items-center">
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
                href={getHomeHref(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
            >
              <span className="text-lg">{currentLang.flag}</span>
              <span>{currentLang.code.toUpperCase()}</span>
              <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-accent transition-colors ${
                        language === lang.code ? "bg-accent font-medium" : ""
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <ContactDialog 
            trigger={
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.contact")}
              </button>
            }
          />
          <ContactDialog />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 p-2 text-muted-foreground hover:text-foreground"
            >
              <span className="text-lg">{currentLang.flag}</span>
              <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-36 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-accent transition-colors ${
                        language === lang.code ? "bg-accent font-medium" : ""
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
                    href={getHomeHref(link.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <ContactDialog 
                trigger={
                  <button 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("nav.contact")}
                  </button>
                }
              />
              <ContactDialog 
                trigger={<Button variant="hero" size="lg" className="mt-2">{t("nav.bookDemo")}</Button>}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
