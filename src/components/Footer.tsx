import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  ressourcen: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "FAQs", href: "#faq" },
    { label: "Hilfe & Support", href: "#" },
  ],
  produkt: [
    { label: "Funktionen", href: "#features" },
    { label: "Preise", href: "#pricing" },
    { label: "API-Integration", href: "#" },
    { label: "Feature vorschlagen", href: "#" },
  ],
  unternehmen: [
    { label: "Über uns", href: "#" },
    { label: "Karriere", href: "#" },
    { label: "Partner werden", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
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
              <span className="text-2xl font-bold">
                Live<span className="text-primary">Dealz</span>
                <span className="text-primary">+</span>
              </span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-sm">
              LiveDealz – Die innovative Plattform für Umsatzsteigerung im Live-Shopping. 
              Organisieren Sie Reservierungen, verwalten Sie Bestände in Echtzeit und 
              maximieren Sie Ihren Erfolg.
            </p>
            <div className="flex gap-4">
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
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
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
              © 2024 LiveDealz. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                Impressum
              </a>
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                Datenschutzerklärung
              </a>
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                AGB
              </a>
            </div>
          </div>
          <p className="text-xs text-background/40 text-center mt-6">
            Hinweis: Die Angebote und Inhalte auf dieser Webseite richten sich ausschließlich 
            an Unternehmer und gewerbliche Kunden gemäß §14 BGB.
          </p>
        </div>
      </div>
    </footer>
  );
};
