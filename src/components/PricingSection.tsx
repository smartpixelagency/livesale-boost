import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      support: [
        t("pricing.starter.support.1"),
      ],
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
      support: [
        t("pricing.pro.support.1"),
        t("pricing.pro.support.2"),
      ],
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

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Pioneer Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              {t("pricing.pioneerBadge")}
            </span>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            {t("pricing.pioneerTitle")}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("pricing.pioneerDescription")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pricing.headline")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("pricing.description")}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              {t("pricing.monthly")}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isYearly ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              {t("pricing.yearly")}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("pricing.savingsNote")}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-card border rounded-2xl p-6 md:p-8 ${
                plan.popular
                  ? "border-primary shadow-lg ring-1 ring-primary/20"
                  : "border-border"
              }`}
            >
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                {plan.popular && (
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
                    {t("pricing.popular")}
                  </span>
                )}
                {plan.limitedTime && (
                  <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {t("pricing.limitedTime")}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                {plan.isEnterprise ? (
                  <div>
                    <span className="text-sm text-muted-foreground">{t("pricing.startingFrom")}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">€{plan.monthlyPrice}</span>
                      <span className="text-muted-foreground">{t("pricing.perMonth")}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{t("pricing.custom")}</span>
                  </div>
                ) : (
                  <div>
                    <span className="text-sm text-muted-foreground">{t("pricing.startingFrom")}</span>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-4xl font-bold text-primary">
                        €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">{t("pricing.perMonth")}</span>
                      {(isYearly ? plan.originalYearlyPrice : plan.originalMonthlyPrice) && (
                        <span className="text-lg text-muted-foreground line-through">
                          {isYearly ? plan.originalYearlyPrice : plan.originalMonthlyPrice} €*
                        </span>
                      )}
                    </div>
                    {isYearly && plan.yearlyTotal && (
                      <span className="text-sm text-muted-foreground">
                        {t("pricing.billedYearly")} €{plan.yearlyTotal}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <ContactDialog
                trigger={
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full mb-6"
                  >
                    {plan.cta}
                  </Button>
                }
              />

              {/* Features Section */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3 text-foreground">Features</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scope Section */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3 text-foreground">{t("pricing.scopeTitle")}</h4>
                <ul className="space-y-2">
                  {plan.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Section */}
              <div>
                <h4 className="font-semibold text-sm mb-3 text-foreground">{t("pricing.supportTitle")}</h4>
                <ul className="space-y-2">
                  {plan.support.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mb-12">
          {t("pricing.savingsDisclaimer")}
        </p>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
        >
          <blockquote className="text-lg md:text-xl italic text-foreground max-w-3xl mx-auto mb-6">
            {t("pricing.testimonial")}
          </blockquote>
          <div>
            <p className="font-semibold">{t("pricing.testimonialAuthor")}</p>
            <p className="text-muted-foreground text-sm">{t("pricing.testimonialRole")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
