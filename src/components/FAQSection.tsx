import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was ist LiveDealz und wie funktioniert es?",
    answer:
      "LiveDealz ist eine Plattform, die es dir ermöglicht, Produkte in Echtzeit während deines Livestreams zu verkaufen. Kunden können Artikel reservieren, ohne den Stream zu verlassen oder sofort zu bezahlen. Die Reservierungen werden automatisch verwaltet und können zu einem späteren Zeitpunkt gesammelt bezahlt werden.",
  },
  {
    question: "Wie hilft mir LiveDealz, meine Verkäufe zu verwalten?",
    answer:
      "LiveDealz bietet eine zentrale Übersicht aller Reservierungen und Bestellungen. Du kannst Bestände in Echtzeit verfolgen, Kundenanfragen verwalten und Zahlungen automatisch abwickeln lassen. Unsere KI filtert Spam-Reservierungen und optimiert deinen Lagerbestand.",
  },
  {
    question: "Kann ich LiveDealz verwenden, wenn ich nicht live bin?",
    answer:
      "Ja! Kunden können auch nach dem Livestream weiter reservieren und einkaufen. Deine Produkte bleiben verfügbar und der Verkaufsprozess läuft automatisiert weiter – so maximierst du deinen Umsatz rund um die Uhr.",
  },
  {
    question: "Wie werden Bestellungen in Shopify integriert?",
    answer:
      "LiveDealz lässt sich nahtlos in deinen Shopify-Store integrieren. Alle Reservierungen und Bestellungen werden automatisch synchronisiert, sodass du eine einheitliche Übersicht behältst und keine manuelle Dateneingabe nötig ist.",
  },
  {
    question: "Wie sicher sind meine Daten bei LiveDealz?",
    answer:
      "Deine Daten sind bei uns bestens geschützt. Unsere Server stehen in Deutschland und sind DSGVO-konform. Wir verwenden moderne Verschlüsselungstechnologien und führen regelmäßige Sicherheitsaudits durch.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Häufig gestellte Fragen
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
