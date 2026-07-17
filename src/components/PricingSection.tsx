import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactDialog } from "./ContactDialog";
import { useState } from "react";

export const PricingSection = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: t("pricing.starter.name"),
      monthlyPrice: "79",
      originalMonthlyPrice: "99",
      yearlyPrice: "66",
      originalYearlyPrice: "79",
      yearlyTotal: "790",
      description: t("pricing.starter.description"),
      cta: t("pricing.starter.cta"),
      popular: false,
      limitedTime: true,
      isEnterprise: false,
      features: [
        t("pricing.starter.features.1"),
        t("pricing.starter.features.2"),
        t("pricing.starter.features.3"),
        t("pricing.starter.features.4"),
      ],
      scope: [
        t("pricing.starter.scope.1"),
        t("pricing.starter.scope.2"),
        t("pricing.starter.scope.3"),
      ],
      support: [t("pricing.starter.support.1")],
    },
    {
      name: t("pricing.pro.name"),
      monthlyPrice: "349",
      originalMonthlyPrice: "399",
      yearlyPrice: "291",
      originalYearlyPrice: "349",
      yearlyTotal: "3.490",
      description: t("pricing.pro.description"),
      cta: t("pricing.pro.cta"),
      popular: true,
      limitedTime: false,
      isEnterprise: false,
      features: [
        t("pricing.pro.features.1"),
        t("pricing.pro.features.2"),
        t("pricing.pro.features.3"),
        t("pricing.pro.features.4"),
        t("pricing.pro.features.5"),
      ],
      scope: [
        t("pricing.pro.scope.1"),
        t("pricing.pro.scope.2"),
        t("pricing.pro.scope.3"),
      ],
      support: [t("pricing.pro.support.1"), t("pricing.pro.support.2")],
    },
    {
      name: t("pricing.enterprise.name"),
      monthlyPrice: "899",
      originalMonthlyPrice: null,
      yearlyPrice: null,
      originalYearlyPrice: null,
      yearlyTotal: null,
      description: t("pricing.enterprise.description"),
      cta: t("pricing.enterprise.cta"),
      popular: false,
      limitedTime: false,
      isEnterprise: true,
      features: [
        t("pricing.enterprise.features.1"),
        t("pricing.enterprise.features.2"),
        t("pricing.enterprise.features.3"),
        t("pricing.enterprise.features.4"),
        t("pricing.enterprise.features.5"),
      ],
      scope: [
        t("pricing.enterprise.scope.1"),
        t("pricing.enterprise.scope.2"),
        t("pricing.enterprise.scope.3"),
      ],
      support: [
        t("pricing.enterprise.support.1"),
        t("pricing.enterprise.support.2"),
        t("pricing.enterprise.support.3"),
      ],
    },
  ];

  const renderList = (title: string, items: string[]) => (
    <div>
      <h4 className="section-marker mb-3">{title}</h4>
      <ul className="space-y-0 border-t border-ink/10">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 py-2.5 border-b border-ink/10 text-sm text-ink-soft"
          >
            <span className="font-display text-xs text-ember pt-1">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="pricing" className="bg-paper text-ink">
      <div className="container pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <span className="section-marker">06 — {t("pricing.badge")}</span>
          <span className="section-marker hidden md:inline">{t("pricing.pioneerBadge")}</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 display-lg uppercase"
          >
            {t("pricing.headline")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 self-end space-y-4"
          >
            <p className="text-lg md:text-xl text-ink-soft leading-relaxed">
              {t("pricing.description")}
            </p>
            <p className="text-base text-ink font-medium">
              <span className="text-ember">◆</span> {t("pricing.pioneerTitle")} —{" "}
              <span className="text-ink-soft">{t("pricing.pioneerDescription")}</span>
            </p>
          </motion.div>
        </div>

        {/* Billing toggle — segmented pill */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 border-t border-ink/15 pt-6">
          <div className="flex items-center gap-4">
            <span className="section-marker">Abrechnung</span>
            <div
              role="tablist"
              aria-label="Abrechnungszeitraum"
              className="inline-flex items-center border border-ink p-1 bg-paper"
            >
              <button
                type="button"
                role="tab"
                aria-selected={!isYearly}
                onClick={() => setIsYearly(false)}
                className={`font-display uppercase tracking-wider text-xs md:text-sm px-4 py-2 transition-colors ${
                  !isYearly ? "bg-ink text-paper" : "text-ink hover:bg-ink/5"
                }`}
              >
                {t("pricing.monthly")}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={isYearly}
                onClick={() => setIsYearly(true)}
                className={`font-display uppercase tracking-wider text-xs md:text-sm px-4 py-2 inline-flex items-center gap-2 transition-colors ${
                  isYearly ? "bg-ink text-paper" : "text-ink hover:bg-ink/5"
                }`}
              >
                {t("pricing.yearly")}
                <span
                  className={`inline-block text-[10px] px-1.5 py-0.5 border ${
                    isYearly ? "border-paper/40 text-paper" : "border-ember text-ember"
                  }`}
                >
                  −17%
                </span>
              </button>
            </div>
          </div>
          <span className="text-xs text-ink-soft">{t("pricing.savingsNote")}</span>
        </div>

        {/* Plans as editorial columns */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-ink/20">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative p-8 md:p-10 border-b md:border-b-0 border-ink/15 ${
                index < 2 ? "md:border-r border-ink/15" : ""
              } ${plan.popular ? "bg-paper md:-mt-3 md:pt-14 border-t-4 border-t-ember ring-1 ring-ember/30" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ember text-paper px-3 py-1 font-display uppercase tracking-widest text-[10px]">
                  ★ {t("pricing.popular")}
                </div>
              )}
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display text-2xl md:text-3xl uppercase text-ink">
                  {plan.name}
                </h3>
                {plan.limitedTime && (
                  <span className="section-marker text-ember">◆ {t("pricing.limitedTime")}</span>
                )}
              </div>

              <p className="text-sm leading-relaxed mb-8 min-h-[48px] text-ink-soft">
                {plan.description}
              </p>

              {/* Price block */}
              <div className="pb-8 mb-8 border-b border-ink/15">
                <span className="section-marker block mb-2">{t("pricing.startingFrom")}</span>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-display text-5xl md:text-6xl font-bold text-ink tabular-nums">
                    <span className="text-ember">€</span>
                    {plan.isEnterprise ? plan.monthlyPrice : isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="font-display text-sm uppercase text-ink-soft">
                    {t("pricing.perMonth")}
                  </span>
                </div>
                {!plan.isEnterprise &&
                  (isYearly ? plan.originalYearlyPrice : plan.originalMonthlyPrice) && (
                    <span className="text-sm line-through mt-1 inline-block text-ink-soft">
                      €{isYearly ? plan.originalYearlyPrice : plan.originalMonthlyPrice}*
                    </span>
                  )}
                {!plan.isEnterprise && isYearly && plan.yearlyTotal && (
                  <p className="text-xs mt-2 text-ink-soft">
                    {t("pricing.billedYearly")} €{plan.yearlyTotal}
                  </p>
                )}
                {plan.isEnterprise && (
                  <p className="text-xs mt-2 text-ink-soft">{t("pricing.custom")}</p>
                )}
              </div>

              <ContactDialog
                trigger={
                  <button
                    className={`group inline-flex items-center justify-between gap-4 w-full px-6 py-4 font-display font-semibold uppercase tracking-wider text-sm transition-colors duration-300 mb-8 ${
                      plan.popular
                        ? "bg-ember text-paper hover:bg-ink"
                        : "bg-ink text-paper hover:bg-ember"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                }
              />

              <div className="space-y-6">
                {renderList("Features", plan.features)}
                {renderList(t("pricing.scopeTitle"), plan.scope)}
                {renderList(t("pricing.supportTitle"), plan.support)}
              </div>
            </motion.article>
          ))}
        </div>


        <p className="text-xs text-ink-soft mt-8">{t("pricing.savingsDisclaimer")}</p>

        {/* Testimonial as pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-28 border-l-4 border-ember pl-6 md:pl-10 max-w-4xl"
        >
          <p className="font-display text-2xl md:text-4xl uppercase leading-tight text-ink mb-6">
            {t("pricing.testimonial")}
          </p>
          <footer className="flex items-baseline gap-4">
            <cite className="font-display uppercase tracking-wider text-sm not-italic">
              {t("pricing.testimonialAuthor")}
            </cite>
            <span className="text-sm text-ink-soft">{t("pricing.testimonialRole")}</span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};
