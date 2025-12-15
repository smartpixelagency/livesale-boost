import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
              {t("contact.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("contact.headline")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("contact.description")}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary text-lg">📧</span>
                </div>
                <div>
                  <p className="font-semibold">{t("contact.emailLabel")}</p>
                  <a href="mailto:info@livedealz.de" className="text-muted-foreground hover:text-primary transition-colors">
                    info@livedealz.de
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary text-lg">⏱️</span>
                </div>
                <div>
                  <p className="font-semibold">{t("contact.responseLabel")}</p>
                  <p className="text-muted-foreground">{t("contact.responseTime")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
