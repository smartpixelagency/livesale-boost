import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Maximiere deinen Erfolg im Live-Shopping
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Mit LiveDealz bringst du dein Geschäft auf das nächste Level. 
            Steigere deinen Umsatz durch Echtzeit-Reservierungen, automatisiere 
            deine Abläufe und schaffe ein nahtloses Einkaufserlebnis für deine Kunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Jetzt Probemonat sichern
            </Button>
            <Button variant="heroOutline" size="xl">
              Kontakt aufnehmen
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
