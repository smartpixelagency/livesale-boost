import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Users, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Bell,
  RefreshCw,
  Smartphone
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: ShoppingCart,
      title: t("features.item1.title"),
      description: t("features.item1.description"),
      color: "text-primary",
    },
    {
      icon: Users,
      title: t("features.item2.title"),
      description: t("features.item2.description"),
      color: "text-amber-500",
    },
    {
      icon: RefreshCw,
      title: t("features.item3.title"),
      description: t("features.item3.description"),
      color: "text-emerald-500",
    },
    {
      icon: Smartphone,
      title: t("features.item4.title"),
      description: t("features.item4.description"),
      color: "text-primary",
    },
    {
      icon: Bell,
      title: t("features.item5.title"),
      description: t("features.item5.description"),
      color: "text-violet-500",
    },
    {
      icon: BarChart3,
      title: t("features.item6.title"),
      description: t("features.item6.description"),
      color: "text-sky-500",
    },
    {
      icon: Zap,
      title: t("features.item7.title"),
      description: t("features.item7.description"),
      color: "text-rose-500",
    },
    {
      icon: ShieldCheck,
      title: t("features.item8.title"),
      description: t("features.item8.description"),
      color: "text-teal-500",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
            {t("features.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("features.headline")}{" "}
            <span className="text-primary">{t("features.headlineBold")}</span>
            {t("features.headlineEnd") && ` ${t("features.headlineEnd")}`}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t("features.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
            >
              <div className={`mb-4 ${feature.color}`}>
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
