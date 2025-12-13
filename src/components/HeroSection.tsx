import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-livestream.jpg";

export const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-hero">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Reservieren. Sammeln. Bezahlen.
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Maximale Verkäufe.{" "}
              <span className="block">Minimaler Aufwand.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Biete deinen Kunden eine einzigartige Live-Shopping-Erfahrung. 
              Produkte in Echtzeit reservieren, sammeln und mit einem Klick 
              bezahlen – vollständig in dein System integriert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Jetzt Demo anfragen
              </Button>
              <Button variant="heroOutline" size="xl">
                Mehr erfahren
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl blur-3xl" />
              <img
                src={heroImage}
                alt="Frau beim TikTok Live-Shopping mit LiveDealz"
                className="relative rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
