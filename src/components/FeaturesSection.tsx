import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    { n: "01", titleKey: "features.item1.title", descKey: "features.item1.description" },
    { n: "02", titleKey: "features.item2.title", descKey: "features.item2.description" },
    { n: "03", titleKey: "features.item3.title", descKey: "features.item3.description" },
    { n: "04", titleKey: "features.item4.title", descKey: "features.item4.description" },
    { n: "05", titleKey: "features.item5.title", descKey: "features.item5.description" },
    { n: "06", titleKey: "features.item6.title", descKey: "features.item6.description" },
    { n: "07", titleKey: "features.item7.title", descKey: "features.item7.description" },
    { n: "08", titleKey: "features.item8.title", descKey: "features.item8.description" },
  ];

  return (
    <section id="features" className="bg-paper text-ink">
      <div className="container pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <span className="section-marker">04 — {t("features.badge")}</span>
          <span className="section-marker hidden md:inline">Alle Funktionen</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 display-lg uppercase"
          >
            {t("features.headline")}{" "}
            <span className="text-ember">{t("features.headlineBold")}</span>
            {t("features.headlineEnd") && ` ${t("features.headlineEnd")}`}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 text-lg md:text-xl text-ink-soft leading-relaxed self-end"
          >
            {t("features.description")}
          </motion.p>
        </div>

        <ul className="grid md:grid-cols-2 gap-0 border-t border-ink/15">
          {features.map((f, i) => (
            <motion.li
              key={f.titleKey}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className={`group grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 border-b border-ink/15 hover:bg-ink/[0.03] transition-colors ${
                i % 2 === 0 ? "md:pr-10 md:border-r border-ink/15" : "md:pl-10"
              }`}
            >
              <span className="col-span-2 font-display text-3xl md:text-4xl text-ink/25 group-hover:text-ember transition-colors">
                {f.n}
              </span>
              <div className="col-span-10">
                <h3 className="font-display text-xl md:text-2xl uppercase leading-tight mb-2">
                  {t(f.titleKey)}
                </h3>
                <p className="text-ink-soft leading-relaxed">{t(f.descKey)}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
