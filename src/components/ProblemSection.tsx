import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    { n: "01", titleKey: "problem.item1.title", descKey: "problem.item1.description" },
    { n: "02", titleKey: "problem.item2.title", descKey: "problem.item2.description" },
    { n: "03", titleKey: "problem.item3.title", descKey: "problem.item3.description" },
    { n: "04", titleKey: "problem.item4.title", descKey: "problem.item4.description" },
    { n: "05", titleKey: "problem.item5.title", descKey: "problem.item5.description" },
    { n: "06", titleKey: "problem.item6.title", descKey: "problem.item6.description" },
  ];

  return (
    <section className="bg-ink text-paper">
      <div className="container pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="flex items-baseline justify-between mb-14 md:mb-20">
          <span className="section-marker text-paper/60">02 — {t("problem.badge")}</span>
          <span className="section-marker text-paper/70 hidden md:inline">Reality Check</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 display-lg uppercase"
          >
            {t("problem.headline")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-6 md:col-start-7 text-lg md:text-xl leading-relaxed text-paper/70"
          >
            {t("problem.description")}
            <span className="text-paper font-semibold"> {t("problem.descriptionBold")}</span>
          </motion.p>
        </div>

        <div className="mt-16 md:mt-24 border-t border-paper/15">
          {problems.map((p, i) => (
            <motion.div
              key={p.titleKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="group grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-b border-paper/15 hover:bg-paper/5 transition-colors"
            >
              <div className="md:col-span-2">
                <span className="font-display text-4xl md:text-5xl text-paper/60 group-hover:text-ember transition-colors">
                  {p.n}
                </span>
              </div>
              <h3 className="md:col-span-4 font-display text-2xl md:text-3xl uppercase leading-tight">
                {t(p.titleKey)}
              </h3>
              <p className="md:col-span-6 text-base md:text-lg text-paper/70 leading-relaxed">
                {t(p.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-20 font-display text-2xl md:text-4xl uppercase max-w-4xl leading-tight"
        >
          {t("problem.conclusion")}{" "}
          <span className="text-ember">{t("problem.conclusionBold")}</span>
        </motion.p>
      </div>
    </section>
  );
};
