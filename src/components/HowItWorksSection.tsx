import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Produkte synchronisieren",
    description:
      "Deine Shopify-Produkte werden automatisch mit LiveDealz verbunden. Keine manuelle Eingabe nötig.",
  },
  {
    number: "02",
    title: "Livestream starten",
    description:
      "Starte deinen TikTok-Livestream. Jeder Kunde erhält automatisch eine individuelle Kundennummer.",
  },
  {
    number: "03",
    title: "Kunden reservieren",
    description:
      "Kunden nennen ihre Kundennummer und das gewünschte Produkt. Du scannst den Artikel – fertig reserviert.",
  },
  {
    number: "04",
    title: "Reservierungen sammeln",
    description:
      "Alle Reservierungen werden pro Kunde gesammelt. Der Bestand wird in Echtzeit aktualisiert.",
  },
  {
    number: "05",
    title: "Bestellungen versenden",
    description:
      "Nach dem Stream sendest du alle Bestellentwürfe mit einem Klick. Kunden erhalten ihre Rechnung automatisch.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
            So einfach geht's
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            In 5 Schritten zum erfolgreichen Live-Verkauf
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Von der ersten Reservierung bis zur fertigen Bestellung – LiveDealz macht es kinderleicht.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
