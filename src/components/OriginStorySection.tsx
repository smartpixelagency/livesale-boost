import { motion } from "framer-motion";
import { Flame, TrendingDown, AlertTriangle, Lightbulb } from "lucide-react";

const storySteps = [
  {
    icon: Flame,
    title: "Der Ansturm",
    description: "LSQ24, ein auf Live-Shopping spezialisierter Händler, erlebte explosives Wachstum. Doch mit dem Erfolg kamen die Probleme.",
  },
  {
    icon: TrendingDown,
    title: "Die Überlastung",
    description: "Das System brach unter der Last neuer Reservierungen zusammen. Excel-Tabellen, WhatsApp-Nachrichten und manuelle Prozesse führten zu Chaos.",
  },
  {
    icon: AlertTriangle,
    title: "Die Nichtzahler",
    description: "Kunden reservierten, zahlten aber nicht. Der Bestand war blockiert, der Umsatz verloren. Der Überblick ging komplett verloren.",
  },
  {
    icon: Lightbulb,
    title: "Die Lösung",
    description: "Aus dieser Not entstand LiveDealz – entwickelt von Händlern für Händler. Eine Lösung, die alle Probleme auf einmal löst.",
  },
];

export const OriginStorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
            Unsere Geschichte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Geboren aus der <span className="text-primary">Praxis</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            LiveDealz ist keine Theorie – es ist die Antwort auf echte Probleme, die wir selbst erlebt haben.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {storySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < storySteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+24px)] w-[calc(100%-24px)] h-0.5 bg-gradient-to-r from-border to-border/0" />
              )}
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <step.icon size={24} />
                </div>
                <span className="text-xs font-semibold text-muted-foreground mb-2 block">
                  Schritt {index + 1}
                </span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Von Händlern. Für Händler.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wir wissen genau, was du brauchst – weil wir selbst im Live-Shopping tätig waren. 
              LiveDealz nutzt die native Reservierungsfunktion von Shopify, um Bestände für einen 
              bestimmten Zeitraum zu sperren. Zahlt ein Kunde nicht, wird der Bestand automatisch 
              wieder freigegeben und der Kunde für künftige Reservierungen gesperrt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Das Beste: Dein bestehender Shop läuft weiter wie gewohnt. Keine Störung von ERP-Systemen, 
              keine komplizierten Änderungen. Verkaufe gleichzeitig über deinen Onlineshop und im Livestream – 
              alles perfekt synchronisiert.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
