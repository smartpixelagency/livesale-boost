import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta.headline")}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t("cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">{t("cta.button1")}</Button>
            <Button variant="heroOutline" size="xl">{t("cta.button2")}</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
