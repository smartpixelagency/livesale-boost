import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Users, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Bell,
  RefreshCw,
  Smartphone
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Echtzeit-Reservierungen",
    description:
      "Kunden reservieren Produkte live während deines Streams. Über den integrierten Shopify-Checkout wird später bezahlt.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Individuelle Kundennummern",
    description:
      "Jeder Kunde erhält automatisch eine eigene Nummer. Reservierungen werden eindeutig zugeordnet – ohne Verwechslungen.",
    color: "text-amber-500",
  },
  {
    icon: RefreshCw,
    title: "Intelligente Bestandsreservierung",
    description:
      "Produkte werden bei Reservierung automatisch gesperrt. Zahlt ein Kunde nicht, wird der Bestand wieder freigegeben.",
    color: "text-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Einfache Bedienung",
    description:
      "Scanne Produkte per Barcode und ordne sie der Kundennummer zu. Reservierung in Sekunden – direkt vom Smartphone.",
    color: "text-primary",
  },
  {
    icon: Bell,
    title: "Automatische Erinnerungen",
    description:
      "Kunden werden an offene Bestellungen erinnert. Bei Bedarf werden Nichtzahler automatisch für künftige Reservierungen gesperrt.",
    color: "text-violet-500",
  },
  {
    icon: BarChart3,
    title: "Sonderpreise im Livestream",
    description:
      "Vergib individuelle Preise während des Streams. Flexibel und ohne Einschränkungen – perfekt für Live-Aktionen.",
    color: "text-sky-500",
  },
  {
    icon: Zap,
    title: "Nahtlose Integration",
    description:
      "Dein bestehender Shop läuft weiter wie gewohnt. Verkaufe gleichzeitig im Onlineshop und im Livestream – alles synchron.",
    color: "text-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-konform & sicher",
    description:
      "Deine Daten sind bei uns sicher. Server in Deutschland, höchste Sicherheitsstandards und vollständige DSGVO-Konformität.",
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
            Funktionen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Alles was du für erfolgreichen{" "}
            <span className="text-primary">Live-Verkauf</span> brauchst
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Von der Reservierung bis zur Zahlung – LiveDealz automatisiert deinen gesamten Verkaufsprozess.
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
