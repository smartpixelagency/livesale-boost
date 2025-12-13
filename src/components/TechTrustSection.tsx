import { motion } from "framer-motion";
import { Server, Zap, Shield, Globe } from "lucide-react";

const techPoints = [
  {
    icon: Zap,
    title: "Event-getriebene Architektur",
    description: "Webhooks von Shopify werden in Echtzeit verarbeitet. Jede Bestandsänderung wird sofort synchronisiert."
  },
  {
    icon: Server,
    title: "Skalierbare Queue-Verarbeitung",
    description: "Verarbeitung über Queues ermöglicht hohe Last bei niedrigen Fixkosten für Händler."
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "Speicherung nur minimaler IDs. Keine personenbezogenen Daten in unserem System."
  },
  {
    icon: Globe,
    title: "Server in der EU",
    description: "DSGVO-konform. Alle Daten werden auf Servern in der Europäischen Union verarbeitet."
  }
];

export const TechTrustSection = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">
            Technologie, der du vertrauen kannst
          </h2>
          <p className="text-muted-foreground">
            Moderne Infrastruktur für zuverlässige Performance – auch bei hoher Last.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm">{point.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
