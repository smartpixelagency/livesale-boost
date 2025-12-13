import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "299",
    description: "Der Einstieg in erfolgreiches Live-Shopping",
    features: [
      "Live-Verkauf in Echtzeit",
      "Produktverwaltung",
      "Lagerbestandsmanagement",
      "Shopify-Anbindung",
      "500 Bestellungen pro Monat",
      "100 Produkte pro Monat",
      "Standard-Support",
    ],
    cta: "Jetzt starten",
    popular: false,
  },
  {
    name: "Pro",
    price: "899",
    description: "Die umfassende Lösung für wachsende Shops",
    features: [
      "Alle Funktionen des Starter-Pakets",
      "Unbegrenzte Artikelanzahl",
      "Unbegrenzte Bestellungen",
      "Exklusive Premium-Funktionen",
      "Fraud Detection",
      "Performance Dashboards",
      "Premium Support",
    ],
    cta: "Kostenlose Beratung",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "1.999",
    description: "Die maßgeschneiderte Lösung für große Unternehmen",
    features: [
      "Alle Funktionen des Pro-Pakets",
      "Priorisierte Updates",
      "Exklusiver Zugang zu neuen Funktionen",
      "Platin-Support",
      "Individuelle Beratung durch Experten",
      "Individuelle Schnittstellenanbindung",
      "Dedizierte Live-Verkäufer Support",
    ],
    cta: "Kontakt aufnehmen",
    popular: false,
  },
];

const comparisonFeatures = [
  { name: "Echtzeit-Reservierungen", starter: true, pro: true, enterprise: true },
  { name: "Produkt- und Bestandsverwaltung", starter: true, pro: true, enterprise: true },
  { name: "Unlimitierte Reservierungen", starter: false, pro: true, enterprise: true },
  { name: "Unlimitierte Artikel", starter: false, pro: true, enterprise: true },
  { name: "Automated Rewards", starter: false, pro: true, enterprise: true },
  { name: "Fraud Detection", starter: false, pro: true, enterprise: true },
  { name: "Multi-Channel Support", starter: false, pro: true, enterprise: true },
  { name: "Performance Dashboards", starter: false, pro: true, enterprise: true },
  { name: "Priorisierter Support", starter: false, pro: false, enterprise: true },
  { name: "Dedizierte Live-Verkäufer Support", starter: false, pro: false, enterprise: true },
  { name: "Individuelle Schnittstellen", starter: false, pro: false, enterprise: true },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
            Preise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Pläne für Ihr Wachstum
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie den passenden Plan für Ihr Live-Shopping-Business.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-card border rounded-2xl p-6 md:p-8 ${
                plan.popular
                  ? "border-primary shadow-lg ring-1 ring-primary/20"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Am beliebtesten
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">€{plan.price}</span>
                <span className="text-muted-foreground"> / pro Monat</span>
              </div>
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full mb-6"
              >
                {plan.cta}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center mb-16"
        >
          <blockquote className="text-lg md:text-xl italic text-foreground max-w-3xl mx-auto mb-6">
            "LiveDealz war für uns der absolute Durchbruch! Wir haben riesige Mengen an Zeit gespart, 
            Fehler drastisch reduziert und unseren Umsatz spürbar gesteigert. Es fühlt sich an, als 
            hätten wir unser Business komplett neu erfunden!"
          </blockquote>
          <div>
            <p className="font-semibold">Ali Kaawar</p>
            <p className="text-muted-foreground text-sm">Geschäftsführer @ LSQ24</p>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Funktionen im Vergleich</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-muted-foreground">Funktion</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="py-3 px-4 text-sm">{feature.name}</td>
                    <td className="py-3 px-4 text-center">
                      {feature.starter ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {feature.pro ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {feature.enterprise ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
