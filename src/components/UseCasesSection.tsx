import { motion } from "framer-motion";
import { 
  Video, 
  MessageCircle, 
  Users, 
  Building2,
  ArrowRight
} from "lucide-react";

const useCases = [
  {
    icon: Video,
    title: "TikTok- & Instagram-Live-Seller",
    color: "from-pink-500 to-rose-500",
    story: [
      "Du präsentierst Produkte im Livestream",
      "Zuschauer nennen ihre Kundennummer, du scannst Produkte",
      "Parallel können andere Zuschauer im Shop kaufen",
      "Keine Überverkäufe, weniger Stress, mehr Umsatz"
    ]
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-Story-Händler",
    color: "from-green-500 to-emerald-500",
    story: [
      "Produkte werden in WhatsApp-Status/Stories gezeigt",
      "Kunden antworten mit 'Ich will' auf die Story",
      "Du trägst das Produkt mit Kundennummer im Dashboard ein",
      "Sammelaktion über mehrere Tage, am Ende gehen alle Checkout-Links raus"
    ]
  },
  {
    icon: Users,
    title: "Community-Sammelaktionen",
    color: "from-blue-500 to-indigo-500",
    story: [
      "Du hast eine Discord-, Telegram- oder WhatsApp-Gruppe",
      "Aktion: 'Bis Freitag sammeln wir Bestellungen'",
      "LiveDealz führt alle Reservierungen zusammen",
      "Am Ende werden alle Bestellentwürfe automatisch generiert"
    ]
  },
  {
    icon: Building2,
    title: "B2B- & Großhandels-Szenario",
    color: "from-amber-500 to-orange-500",
    story: [
      "Mehrere Händler können gleichzeitig reservieren",
      "Echtzeit-Bestandsanzeige – wer zuerst kommt, mahlt zuerst",
      "Flexible Rechnungsstellung: erst beliefern, später abrechnen",
      "Kein kompliziertes Anfragen per Mail oder Excel"
    ]
  }
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Anwendungsfälle
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Für jeden Verkaufskanal die richtige Lösung
          </h2>
          <p className="text-lg text-muted-foreground">
            Egal wie du verkaufst – LiveDealz passt sich an deinen Workflow an.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6`}>
                <useCase.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
              <ul className="space-y-3">
                {useCase.story.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
