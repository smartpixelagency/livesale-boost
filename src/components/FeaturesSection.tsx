import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Smartphone, 
  Zap, 
  Filter, 
  Brain, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Produkte reservieren - direkt im Livestream",
    description:
      "Lass deine Kunden in Echtzeit während des Livestreams und danach einfach reservieren. Alle Bestände werden automatisch synchronisiert.",
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "Produkte in Sekunden einstellen",
    description:
      "Stelle deine Produkte live und direkt vom Smartphone aus ein. Titel, Preis und Bestand reichen aus, damit sie sofort verfügbar sind.",
    color: "text-amber-500",
  },
  {
    icon: Zap,
    title: "Schnelle Integration in deinen Shop",
    description:
      "Erweitere deinen Shop problemlos ohne zusätzlichen Aufwand. LiveDealz fügt sich direkt in dein System ein.",
    color: "text-emerald-500",
  },
  {
    icon: Filter,
    title: "Effiziente Variantenwahl und Filter",
    description:
      "Ermögliche deinen Kunden, gezielt nach Produktvarianten wie Größe oder Farbe zu filtern. Schneller finden, schneller kaufen.",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "KI-gesteuerte Reservierungsverwaltung",
    description:
      "Unsere KI verwaltet deinen Lagerbestand in Echtzeit. Sie erkennt Reservierungen und passt Bestände automatisch an.",
    color: "text-violet-500",
  },
  {
    icon: Shield,
    title: "Schnelle Performance und sichere Daten",
    description:
      "Unsere Server in Deutschland skalieren automatisch. Alle Daten bleiben DSGVO-konform.",
    color: "text-sky-500",
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
            Für den Live-Verkauf
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Die perfekte Lösung für deinen{" "}
            <span className="block">Live-Shopping Erfolg</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`mb-4 ${feature.color}`}>
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
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
