import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import LogoWhite from "@/assets/logo-white.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactDialog } from "@/components/ContactDialog";


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
    <footer id="contact" className="bg-ink text-paper">
      <div className="container pt-20 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-paper/15">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to={`/${language}`} className="inline-block mb-6">
              <img src={LogoWhite} alt="LiveDealz" className="h-8 w-auto" width={206} height={45} />
            </Link>
            <p className="text-paper/80 text-sm leading-relaxed mb-4 max-w-sm">
              {t("footer.tagline")}
            </p>
            <p className="text-paper/60 text-xs mb-6 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="min-h-11 min-w-11 border border-paper/20 hover:border-ember hover:text-ember flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={t("footer.product")}>
            <h3 className="section-marker mb-5">{t("footer.product")}</h3>
            <ul className="space-y-3">
              {footerLinks.produkt.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/80 hover:text-ember transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("footer.resources")}>
            <h3 className="section-marker mb-5">{t("footer.resources")}</h3>
            <ul className="space-y-3">
              <li>
                <ContactDialog
                  trigger={
                    <button className="text-sm text-paper/80 hover:text-ember transition-colors text-left">
                      {t("footer.bookDemo")}
                    </button>
                  }
                />
              </li>
              <li>
                <ContactDialog
                  trigger={
                    <button className="text-sm text-paper/80 hover:text-ember transition-colors text-left">
                      {t("footer.contact")}
                    </button>
                  }
                />
              </li>
            </ul>
          </nav>

          <nav aria-label={t("footer.legal")}>
            <h3 className="section-marker mb-5">{t("footer.legal")}</h3>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm text-paper/80 hover:text-ember transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-paper/80 hover:text-ember transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-paper/70 font-display uppercase tracking-wider">
            © {new Date().getFullYear()} LiveDealz — {t("footer.copyright")}
          </p>
          <p className="text-xs text-paper/70 md:text-right max-w-md">
            {t("footer.businessOnly")}
          </p>
        </div>
      </div>
    </footer>
  );
};
