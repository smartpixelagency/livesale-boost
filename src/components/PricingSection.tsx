import { motion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactDialog } from "./ContactDialog";

export const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.starter.name"),
      price: "79",
      yearlyPrice: "790",
      description: t("pricing.starter.description"),
      features: [
        t("pricing.starter.feature1"),
        t("pricing.starter.feature2"),
        t("pricing.starter.feature3"),
        t("pricing.starter.feature4"),
        t("pricing.starter.feature5"),
        t("pricing.starter.feature6"),
      ],
      cta: t("pricing.starter.cta"),
      popular: false,
      discount: null,
      isEnterprise: false,
    },
    {
      name: t("pricing.pro.name"),
      price: "349",
      yearlyPrice: "3.490",
      description: t("pricing.pro.description"),
      features: [
        t("pricing.pro.feature1"),
        t("pricing.pro.feature2"),
        t("pricing.pro.feature3"),
        t("pricing.pro.feature4"),
        t("pricing.pro.feature5"),
        t("pricing.pro.feature6"),
        t("pricing.pro.feature7"),
      ],
      cta: t("pricing.pro.cta"),
      popular: true,
      discount: t("pricing.pro.discount"),
      isEnterprise: false,
    },
    {
      name: t("pricing.enterprise.name"),
      price: "899",
      yearlyPrice: null,
      description: t("pricing.enterprise.description"),
      features: [
        t("pricing.enterprise.feature1"),
        t("pricing.enterprise.feature2"),
        t("pricing.enterprise.feature3"),
        t("pricing.enterprise.feature4"),
        t("pricing.enterprise.feature5"),
        t("pricing.enterprise.feature6"),
      ],
      cta: t("pricing.enterprise.cta"),
      popular: false,
      discount: null,
      isEnterprise: true,
    },
  ];

  const comparisonFeatures = [
    { name: t("pricing.comparison.realtime"), starter: true, pro: true, enterprise: true },
    { name: t("pricing.comparison.unlimited"), starter: true, pro: true, enterprise: true },
    { name: t("pricing.comparison.shopify"), starter: true, pro: true, enterprise: true },
    { name: t("pricing.comparison.checkout"), starter: true, pro: true, enterprise: true },
    { name: t("pricing.comparison.reservationLimit"), starter: "300", pro: t("pricing.comparison.unlimitedText"), enterprise: t("pricing.comparison.unlimitedText") },
    { name: t("pricing.comparison.users"), starter: "1", pro: "3", enterprise: t("pricing.comparison.unlimitedText") },
    { name: t("pricing.comparison.shops"), starter: "1", pro: t("pricing.comparison.multiple"), enterprise: t("pricing.comparison.unlimitedText") },
    { name: t("pricing.comparison.specialPrices"), starter: false, pro: true, enterprise: true },
    { name: t("pricing.comparison.reminders"), starter: false, pro: true, enterprise: true },
    { name: t("pricing.comparison.blocking"), starter: false, pro: true, enterprise: true },
    { name: t("pricing.comparison.invoices"), starter: false, pro: true, enterprise: true },
    { name: t("pricing.comparison.dashboards"), starter: false, pro: true, enterprise: true },
    { name: t("pricing.comparison.prioritySupport"), starter: false, pro: true, enterprise: true },
    { name: t("pricing.comparison.customIntegrations"), starter: false, pro: false, enterprise: true },
    { name: t("pricing.comparison.accountManager"), starter: false, pro: false, enterprise: true },
    { name: t("pricing.comparison.whiteLabel"), starter: false, pro: false, enterprise: true },
    { name: t("pricing.comparison.sla"), starter: false, pro: false, enterprise: true },
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
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pricing.headline")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.description")}
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
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {t("pricing.popular")}
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                {plan.isEnterprise ? (
                  <div>
                    <span className="text-sm text-muted-foreground">{t("pricing.startingFrom")}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">€{plan.price}</span>
                      <span className="text-muted-foreground">{t("pricing.perMonth")}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{t("pricing.custom")}</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">€{plan.price}</span>
                      <span className="text-muted-foreground">{t("pricing.perMonth")}</span>
                    </div>
                    {plan.yearlyPrice && (
                      <span className="text-sm text-muted-foreground">
                        {t("pricing.orYearly")} €{plan.yearlyPrice}
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
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center mb-16"
        >
          <blockquote className="text-lg md:text-xl italic text-foreground max-w-3xl mx-auto mb-6">
            {t("pricing.testimonial")}
          </blockquote>
          <div>
            <p className="font-semibold">{t("pricing.testimonialAuthor")}</p>
            <p className="text-muted-foreground text-sm">{t("pricing.testimonialRole")}</p>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">{t("pricing.comparisonTitle")}</h3>
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-muted-foreground">{t("pricing.feature")}</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="py-3 px-4 text-sm">{feature.name}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof feature.starter === "string" ? (
                        <span className="text-sm">{feature.starter}</span>
                      ) : feature.starter ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof feature.pro === "string" ? (
                        <span className="text-sm">{feature.pro}</span>
                      ) : feature.pro ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof feature.enterprise === "string" ? (
                        <span className="text-sm">{feature.enterprise}</span>
                      ) : feature.enterprise ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
