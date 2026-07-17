import { motion } from "framer-motion";
import { Server, Zap, Shield, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const TechTrustSection = () => {
  const { t } = useLanguage();

  const techPoints = [
    {
      icon: Zap,
      title: t("tech.item1.title"),
      description: t("tech.item1.description"),
    },
    {
      icon: Server,
      title: t("tech.item2.title"),
      description: t("tech.item2.description"),
    },
    {
      icon: Shield,
      title: t("tech.item3.title"),
      description: t("tech.item3.description"),
    },
    {
      icon: Globe,
      title: t("tech.item4.title"),
      description: t("tech.item4.description"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-paper text-ink border-t border-ink/10">
      <div className="container">
        <div className="flex items-baseline justify-between mb-10">
          <span className="section-marker">08 — Technologie</span>
          <span className="section-marker hidden md:inline">Trust · Infrastructure</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <h2 className="display-lg uppercase text-ink">{t("tech.headline")}</h2>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            {t("tech.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-ink/10">
          {techPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 md:p-8 border-b border-ink/10 lg:border-b-0 lg:border-r border-ink/10 last:border-r-0"
            >
              <div className="w-12 h-12 border border-ink flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-ember" strokeWidth={1.75} />
              </div>
              <h3 className="font-display uppercase tracking-wider text-sm text-ink mb-2">
                {point.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
