import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactDialog } from "@/components/ContactDialog";

export const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="container pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="flex items-baseline justify-between mb-12">
          <span className="section-marker text-paper/60">— Jetzt starten</span>
          <span className="section-marker text-paper/70 hidden md:inline">Demo · Kostenlos</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-xl uppercase max-w-6xl"
        >
          {t("cta.headline")}
        </motion.h2>

        <div className="mt-14 md:mt-16 grid md:grid-cols-12 gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6 text-lg md:text-xl text-paper/70 leading-relaxed"
          >
            {t("cta.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6 flex flex-col md:items-end gap-4"
          >
            <ContactDialog
              trigger={
                <button className="group inline-flex items-center gap-4 bg-ember text-paper hover:bg-paper hover:text-ink transition-colors duration-300 px-8 py-6 font-display font-semibold uppercase tracking-wider text-sm text-left max-w-md">
                  <span className="leading-tight">{t("cta.button1")}</span>
                  <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              }
            />
            <ContactDialog
              trigger={
                <button className="section-marker text-paper/70 hover:text-ember transition-colors">
                  → {t("cta.button2")}
                </button>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
