import { motion } from "framer-motion";
import { Server, Zap, Shield, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const TechTrustSection = () => {
  const { t } = useLanguage();

  const techPoints = [
    {
      icon: Zap,
      title: t("tech.item1.title"),
      description: t("tech.item1.description"),
    },
    {
      icon: Server,
      title: t("tech.item2.title"),
      description: t("tech.item2.description"),
    },
    {
      icon: Shield,
      title: t("tech.item3.title"),
      description: t("tech.item3.description"),
    },
    {
      icon: Globe,
      title: t("tech.item4.title"),
      description: t("tech.item4.description"),
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">
            {t("tech.headline")}
          </h2>
          <p className="text-muted-foreground">
            {t("tech.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm">{point.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
