import { motion } from "framer-motion";
import { 
  Store, 
  LayoutDashboard, 
  Zap, 
  ShoppingCart,
  Clock,
  Shield
} from "lucide-react";
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
    {
      icon: Zap,
      title: t("solution.atomic.title"),
      description: t("solution.atomic.description"),
    },
    {
      icon: Clock,
      title: t("solution.collect.title"),
      description: t("solution.collect.description"),
    },
    {
      icon: ShoppingCart,
      title: t("solution.shopify.title"),
      description: t("solution.shopify.description"),
    },
    {
      icon: Shield,
      title: t("solution.release.title"),
      description: t("solution.release.description"),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            {t("solution.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("solution.headline")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("solution.description")}
          </p>
        </motion.div>

        {/* Two Modes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Storefront Mode */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
              <Store className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("solution.storefront.title")}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("solution.storefront.description")}
            </p>
            <ul className="space-y-3">
              {storefrontItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Seller Dashboard Mode */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
              <LayoutDashboard className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("solution.dashboard.title")}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("solution.dashboard.description")}
            </p>
            <ul className="space-y-3">
              {dashboardItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Key Properties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyProperties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp/Story Use Case Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-accent rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              {t("solution.whatsapp.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("solution.whatsapp.description")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
