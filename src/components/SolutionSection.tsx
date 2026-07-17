import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const SolutionSection = () => {
  const { t } = useLanguage();

  const storefrontItems = [
    t("solution.storefront.item1"),
    t("solution.storefront.item2"),
    t("solution.storefront.item3"),
    t("solution.storefront.item4"),
  ];

  const dashboardItems = [
    t("solution.dashboard.item1"),
    t("solution.dashboard.item2"),
    t("solution.dashboard.item3"),
    t("solution.dashboard.item4"),
  ];

  const keyProperties = [
    { title: t("solution.atomic.title"), description: t("solution.atomic.description") },
    { title: t("solution.collect.title"), description: t("solution.collect.description") },
    { title: t("solution.shopify.title"), description: t("solution.shopify.description") },
    { title: t("solution.release.title"), description: t("solution.release.description") },
  ];

  return (
    <section className="bg-paper text-ink">
      <div className="container pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <span className="section-marker">03 — {t("solution.badge")}</span>
          <span className="section-marker hidden md:inline">Wie es funktioniert</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 display-lg uppercase"
          >
            {t("solution.headline")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 text-lg md:text-xl text-ink-soft leading-relaxed self-end"
          >
            {t("solution.description")}
          </motion.p>
        </div>

        {/* Two modes — as vertical editorial columns */}
        <div className="grid md:grid-cols-2 gap-0 border-t border-ink/15">
          {[
            { n: "A", title: t("solution.storefront.title"), desc: t("solution.storefront.description"), items: storefrontItems },
            { n: "B", title: t("solution.dashboard.title"), desc: t("solution.dashboard.description"), items: dashboardItems },
          ].map((mode, idx) => (
            <motion.div
              key={mode.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`py-10 md:py-14 ${idx === 0 ? "md:pr-12 md:border-r border-ink/15" : "md:pl-12 border-t md:border-t-0 border-ink/15"}`}
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-display text-5xl md:text-6xl font-bold text-ember">{mode.n}</span>
                <span className="section-marker">Modus</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-4">{mode.title}</h3>
              <p className="text-ink-soft leading-relaxed mb-6 max-w-md">{mode.desc}</p>
              <ul className="space-y-3">
                {mode.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 py-2 border-t border-ink/10">
                    <span className="font-display text-xs text-ember pt-1">→</span>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Key properties strip */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-4 gap-0 border-t border-ink/15">
          {keyProperties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-6 md:p-8 border-b md:border-b-0 border-ink/15 ${index < 3 ? "md:border-r border-ink/15" : ""}`}
            >
              <span className="font-display text-sm text-ember mb-3 block">0{index + 1}</span>
              <h4 className="font-display text-lg md:text-xl uppercase mb-3 leading-tight">{item.title}</h4>
              <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp callout — editorial pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-28 border-l-4 border-ember pl-6 md:pl-10 max-w-4xl"
        >
          <h3 className="font-display text-2xl md:text-4xl uppercase leading-tight mb-4">
            {t("solution.whatsapp.title")}
          </h3>
          <p className="text-lg md:text-xl text-ink-soft leading-relaxed">
            {t("solution.whatsapp.description")}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};
