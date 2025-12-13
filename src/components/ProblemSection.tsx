import { motion } from "framer-motion";
import { 
  MessageSquareWarning, 
  FileSpreadsheet, 
  AlertTriangle, 
  Clock, 
  Ban,
  TrendingDown
} from "lucide-react";

const problems = [
  {
    icon: MessageSquareWarning,
    title: "WhatsApp & Kommentar-Chaos",
    description: "Kunden schreiben 'Ich will!', senden Screenshots, kommentieren im Stream. Du versinkst in Nachrichten.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel & Zettelwirtschaft",
    description: "Reservierungen in Excel-Tabellen, WhatsApp-Chats und auf Zetteln. Kein System, kein Überblick.",
  },
  {
    icon: AlertTriangle,
    title: "Überverkäufe & Doppelbuchungen",
    description: "Zwei Kunden reservieren das gleiche Produkt. Einer geht leer aus – und ist frustriert.",
  },
  {
    icon: Ban,
    title: "Nichtzahler blockieren Bestand",
    description: "Kunden reservieren, zahlen aber nie. Dein Bestand ist blockiert, andere Käufer gehen leer aus.",
  },
  {
    icon: Clock,
    title: "Stunden für Rechnungen",
    description: "Nach dem Stream: Stundenlange Nacharbeit, um alle Bestellungen manuell zusammenzuschreiben.",
  },
  {
    icon: TrendingDown,
    title: "Nicht skalierbar",
    description: "Je mehr Kunden, desto mehr Chaos. Wachstum wird zum Problem statt zur Chance.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-4">
            Das Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kommt dir das bekannt vor?
          </h2>
          <p className="text-lg text-background/70 leading-relaxed">
            Du zeigst Produkte im Livestream oder in WhatsApp-Stories. Kunden kommentieren, 
            schreiben Nachrichten, senden Screenshots. Im Hintergrund: 
            <span className="text-background font-semibold"> Excel-Tabellen, WhatsApp-Chaos, manuelle Zettelwirtschaft.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-background/5 border border-background/10 hover:border-destructive/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-background/60 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xl font-medium text-background/80">
            Das ist nicht skalierbar. Das kostet jeden Monat{" "}
            <span className="text-destructive font-bold">Umsatz und Nerven.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
