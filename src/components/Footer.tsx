import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import LogoWhite from "@/assets/logo-white.png";

const footerLinks = {
  produkt: [
    { label: "Funktionen", href: "#features" },
    { label: "Anwendungsfälle", href: "#use-cases" },
    { label: "Preise", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  ressourcen: [
    { label: "Demo buchen", href: "#" },
    { label: "Kontakt", href: "#" },
  ],
  rechtliches: [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "AGB", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <img src={LogoWhite} alt="LiveDealz" className="h-8 w-auto" />
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-4 max-w-sm">
              Die Plattform für Live-, Story- und Sammelverkäufe ohne Chaos.
            </p>
            <p className="text-background/50 text-xs mb-6 max-w-sm">
              Reservieren. Sammeln. Bezahlen. Ein System, ein Bestand – 
              für TikTok, Instagram, WhatsApp und Community-Verkäufe.
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
            <h3 className="font-semibold mb-4">Produkt</h3>
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
            <h3 className="font-semibold mb-4">Ressourcen</h3>
            <ul className="space-y-3">
              {footerLinks.ressourcen.map((link) => (
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
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
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
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} LiveDealz. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-background/40 text-center md:text-right max-w-md">
              Hinweis: Die Angebote und Inhalte auf dieser Webseite richten sich 
              ausschließlich an Unternehmer und gewerbliche Kunden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
