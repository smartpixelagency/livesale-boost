import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const UseCasesSection = () => {
  const { t } = useLanguage();

  const useCases = [
    {
      n: "01",
      tag: "Live Commerce",
      title: t("useCases.case1.title"),
      story: [
        t("useCases.case1.step1"),
        t("useCases.case1.step2"),
        t("useCases.case1.step3"),
        t("useCases.case1.step4"),
      ],
    },
    {
      n: "02",
      tag: "Messaging",
      title: t("useCases.case2.title"),
      story: [
        t("useCases.case2.step1"),
        t("useCases.case2.step2"),
        t("useCases.case2.step3"),
        t("useCases.case2.step4"),
      ],
    },
    {
      n: "03",
      tag: "Community",
      title: t("useCases.case3.title"),
      story: [
        t("useCases.case3.step1"),
        t("useCases.case3.step2"),
        t("useCases.case3.step3"),
        t("useCases.case3.step4"),
      ],
    },
    {
      n: "04",
      tag: "B2B · Wholesale",
      title: t("useCases.case4.title"),
      story: [
        t("useCases.case4.step1"),
        t("useCases.case4.step2"),
        t("useCases.case4.step3"),
        t("useCases.case4.step4"),
      ],
    },
  ];

  return (
    <section id="use-cases" className="bg-paper text-ink">
      <div className="container pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <span className="section-marker">05 — {t("useCases.badge")}</span>
          <span className="section-marker hidden md:inline">Vier Szenarien</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 display-lg uppercase"
          >
            {t("useCases.headline")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 text-lg md:text-xl text-ink-soft leading-relaxed self-end"
          >
            {t("useCases.description")}
          </motion.p>
        </div>

        <div className="border-t border-ink/15">
          {useCases.map((uc, i) => (
            <motion.article
              key={uc.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-ink/15"
            >
              <div className="md:col-span-3">
                <span className="font-display text-5xl md:text-6xl text-ember block leading-none mb-3">
                  {uc.n}
                </span>
                <span className="section-marker">{uc.tag}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight">
                  {uc.title}
                </h3>
              </div>
              <ol className="md:col-span-5 space-y-0 border-t border-ink/10">
                {uc.story.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 py-3 border-b border-ink/10 text-ink-soft"
                  >
                    <span className="font-display text-xs text-ember pt-1 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm md:text-base leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
