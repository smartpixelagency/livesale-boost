import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import LogoWhite from "@/assets/logo-white.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactDialog } from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const { t, language } = useLanguage();

  const footerLinks = {
    produkt: [
      { label: t("footer.features"), href: `/${language}#features` },
      { label: t("footer.useCases"), href: `/${language}#use-cases` },
      { label: t("footer.pricing"), href: `/${language}#pricing` },
      { label: t("footer.faq"), href: `/${language}#faq` },
    ],
    ressourcen: [
      { label: t("footer.bookDemo"), href: "#" },
      { label: t("footer.contact"), href: `/${language}#contact` },
    ],
    rechtliches: [
      { label: t("footer.imprint"), href: `/${language}/impressum`, isRoute: true },
      { label: t("footer.privacy"), href: `/${language}/datenschutz`, isRoute: true },
      { label: t("footer.terms"), href: "#" },
    ],
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to={`/${language}`} className="inline-block mb-4">
              <img src={LogoWhite} alt="LiveDealz" className="h-8 w-auto" width={206} height={45} />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4 max-w-sm">
              {t("footer.tagline")}
            </p>
            <p className="text-background/50 text-xs mb-6 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.product")}</h3>
            <ul className="space-y-3">
              {footerLinks.produkt.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-3">
              <li>
                <ContactDialog 
                  trigger={
                    <button className="text-sm text-background/70 hover:text-background transition-colors">
                      {t("footer.bookDemo")}
                    </button>
                  }
                />
              </li>
              <li>
                <ContactDialog 
                  trigger={
                    <button className="text-sm text-background/70 hover:text-background transition-colors">
                      {t("footer.contact")}
                    </button>
                  }
                />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} LiveDealz. {t("footer.copyright")}
            </p>
            <p className="text-xs text-background/40 text-center md:text-right max-w-md">
              {t("footer.businessOnly")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
