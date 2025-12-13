import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Clock, 
  Shield, 
  Users, 
  Smartphone, 
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Atomare Reservierungsgarantie",
    description: "Ihre Ware wird im Moment der Bestellung verbindlich aus dem Bestand ausgebucht. Kein Überverkauf mehr. Händler sehen nur, was sie garantiert bekommen.",
  },
  {
    icon: Clock,
    title: "Echtzeit-Verfügbarkeit",
    description: "Bestand wird im Moment der Bestellung verbindlich reserviert. Sofort sichtbar, was verfügbar ist – keine Rückfragen mehr nötig.",
  },
  {
    icon: Users,
    title: "Marktplatz-Erlebnis",
    description: "Präsentieren Sie Ihr Sortiment wie auf einem digitalen Markt. Händler wählen selbst aus, was und wie viel sie kaufen wollen – wer zuerst kommt, mahlt zuerst.",
  },
  {
    icon: Building2,
    title: "Flexible Rechnungsstellung",
    description: "Beliefern Sie erst, stellen Sie die Rechnung später. LiveDealz sammelt alle Bestellungen und Sie entscheiden, wann abgerechnet wird.",
  },
  {
    icon: ShieldCheck,
    title: "Zukunftssichere B2B-Plattform",
    description: "Wir nutzen Shopify als Backbone, da es die größte Schnittstellenabdeckung zu allen ERP-Systemen bietet. Nutzen Sie die bewährte und mobile Technologie für Ihren Großhandel.",
  },
  {
    icon: Smartphone,
    title: "Volle Flexibilität",
    description: "Bestellungen können jederzeit und von überall aufgegeben werden. Durch die Shopify-Basis erhalten Ihre Händler ein natives, mobiles Kauferlebnis – ob am PC, Tablet oder Handy.",
  },
];

const useCases = [
  "Großhändler mit regelmäßigen Orderrunden",
  "Hersteller mit Direktvertrieb an Händler",
  "Showroom-Verkäufe mit Live-Präsentation",
  "Saisonale Kollektionsvorstellungen",
  "B2B-Marktplätze und Messen",
];

const B2B = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
              LiveDealz für B2B
            </span>
            
            {/* Pain Point Above H1 */}
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Schluss mit Überverkaufs-Risiko und manueller Bestell-Bremse. <span className="text-primary font-semibold">Geld liebt Speed.</span>
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Endlich Großhandel ohne Risiko:{" "}
              <span className="text-gradient">Gesicherte Ware durch Echtzeit-Reservierung</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Garantierte Bestandsreservierung im Moment der Bestellung. 
              Keine Überverkäufe, keine Rückfragen, keine verlorenen Aufträge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Demo buchen: Warensicherheit in Echtzeit erleben
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-destructive/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Das Risiko kennen Sie
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              Ihre Händler bestellen per E-Mail oder Excel. Ständige Rückfragen zu Verfügbarkeiten, 
              manuelle Bestandsprüfungen und chaotische Kommunikation kosten Zeit und Geld. 
              <span className="text-foreground font-semibold block mt-4">
                Und das Schlimmste: Wenn mehrere Händler gleichzeitig zuschlagen, verkaufen Sie über – 
                und müssen stornieren. Verlorenes Vertrauen, verlorener Umsatz.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
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
              Die Lösung
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Garantierte Warensicherheit mit <span className="text-primary">LiveDealz</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Atomare Reservierungen im Moment der Bestellung. Ihre Händler sehen nur, 
              was verfügbar ist – und bekommen garantiert, was sie bestellen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed vs. Cost Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Der Speed-Gewinn zählt
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ja, Shopify kostet ca. 30–40 €/Monat. Aber wie viel Geld verlieren Sie 
              pro Monat durch manuelles Chaos, ineffiziente Rückfragen und stornierte Überverkäufe?
            </p>
            <p className="text-foreground font-semibold text-xl">
              LiveDealz nutzt Shopify, um Ihnen den Speed und die Sicherheit zu geben, 
              die Ihr Großhandel braucht.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
                Anwendungsfälle
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Perfekt für Ihren <span className="text-primary">B2B-Vertrieb</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Egal ob Großhandel, Hersteller oder Importeur – LiveDealz passt sich 
                Ihrem Geschäftsmodell an und macht B2B-Bestellungen sicher und effizient.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <motion.li
                    key={useCase}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{useCase}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-4">So funktioniert's</h3>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">1</span>
                  <div>
                    <p className="font-semibold">Produkte präsentieren</p>
                    <p className="text-muted-foreground text-sm">Zeigen Sie Ihr Sortiment live oder auf einer permanenten Bestellseite.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">2</span>
                  <div>
                    <p className="font-semibold">Händler bestellen selbst</p>
                    <p className="text-muted-foreground text-sm">Ihre Händler wählen Produkte und Mengen – in Echtzeit und selbstständig.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">3</span>
                  <div>
                    <p className="font-semibold">Bestand wird garantiert reserviert</p>
                    <p className="text-muted-foreground text-sm">Im Moment der Bestellung wird die Ware verbindlich ausgebucht – keine Doppelverkäufe möglich.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">4</span>
                  <div>
                    <p className="font-semibold">Rechnung nach Lieferung</p>
                    <p className="text-muted-foreground text-sm">Sie entscheiden, wann die Bestellung abgerechnet wird.</p>
                  </div>
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für risikofreien B2B-Vertrieb?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Erleben Sie, wie LiveDealz Überverkäufe eliminiert und Ihren 
              Großhandel mit garantierter Echtzeit-Reservierung revolutioniert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Demo buchen: Warensicherheit jetzt in Echtzeit erleben
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default B2B;
