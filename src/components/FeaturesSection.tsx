import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Scan, 
  Zap, 
  Database, 
  ShieldCheck, 
  Bell,
  RefreshCw,
  Lock
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Nahtlose Shopify-Integration",
    description:
      "Arbeite direkt mit Shopify Bestellentwürfen – kein separater Checkout nötig. Produkte werden automatisch mit deinem Shopify-Katalog synchronisiert.",
    color: "text-primary",
  },
  {
    icon: Scan,
    title: "Interaktive Barcode-Reservierung",
    description:
      "Scanne Artikel per Barcode und ordne sie direkt der Kundennummer zu. Perfekt für schnelle, interaktive Livestreams ohne Verzögerung.",
    color: "text-amber-500",
  },
  {
    icon: RefreshCw,
    title: "Gesammelte Bestellentwürfe",
    description:
      "Alle Reservierungen werden pro Kunde gesammelt. Du entscheidest, wann die Entwürfe abgeschickt werden – maximale Flexibilität für deinen Workflow.",
    color: "text-emerald-500",
  },
  {
    icon: Database,
    title: "AWS-Infrastruktur ohne Überverkäufe",
    description:
      "Mit SQS, CloudFront und DynamoDB werden alle Reservierungen in Echtzeit getaktet. Keine Überverkäufe, auch bei hohem Andrang.",
    color: "text-primary",
  },
  {
    icon: Lock,
    title: "DSGVO-konform ohne Personendaten",
    description:
      "Wir speichern keine personenbezogenen Daten – nur Shopify Customer IDs und anonymisierte Kundennummern pro Shop.",
    color: "text-violet-500",
  },
  {
    icon: Bell,
    title: "Automatische Zahlungserinnerungen",
    description:
      "Kunden werden automatisch an offene Bestellentwürfe erinnert. Bei Bedarf werden Nichtzahler für künftige Reservierungen gesperrt.",
    color: "text-sky-500",
  },
  {
    icon: Zap,
    title: "Flexibel einbettbar",
    description:
      "Nutze LiveDealz auf einer separaten Stream-Seite oder bette es direkt in deinen Shop ein – ganz wie es zu dir passt.",
    color: "text-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Sichere Server in Deutschland",
    description:
      "Unsere Infrastruktur skaliert automatisch und garantiert schnelle Ladezeiten. Höchste Sicherheit für dein Business.",
    color: "text-teal-500",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
            Warum LiveDealz?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Die einzige Lösung mit{" "}
            <span className="text-primary">echter Shopify-Integration</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Keine Workarounds, keine Plugins – LiveDealz arbeitet direkt mit Shopify Bestellentwürfen für ein nahtloses Erlebnis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
            >
              <div className={`mb-4 ${feature.color}`}>
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
