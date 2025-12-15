import { motion } from "framer-motion";
import { Flame, TrendingDown, AlertTriangle, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const OriginStorySection = () => {
  const { t } = useLanguage();

  const storySteps = [
    {
      icon: Flame,
      title: t("origin.step1.title"),
      description: t("origin.step1.description"),
    },
    {
      icon: TrendingDown,
      title: t("origin.step2.title"),
      description: t("origin.step2.description"),
    },
    {
      icon: AlertTriangle,
      title: t("origin.step3.title"),
      description: t("origin.step3.description"),
    },
    {
      icon: Lightbulb,
      title: t("origin.step4.title"),
      description: t("origin.step4.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
            {t("origin.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("origin.headline")} <span className="text-primary">{t("origin.headlineBold")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("origin.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {storySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < storySteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+24px)] w-[calc(100%-24px)] h-0.5 bg-gradient-to-r from-border to-border/0" />
              )}
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <step.icon size={24} />
                </div>
                <span className="text-xs font-semibold text-muted-foreground mb-2 block">
                  {t("origin.step")} {index + 1}
                </span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              {t("origin.conclusion.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("origin.conclusion.description1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("origin.conclusion.description2")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
