import { motion } from "framer-motion";
import { MessageSquareWarning, FileSpreadsheet, AlertTriangle, Clock, Ban, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProblemSection = () => {
  const { t } = useLanguage();
  
  const problems = [
    { icon: MessageSquareWarning, titleKey: "problem.item1.title", descKey: "problem.item1.description" },
    { icon: FileSpreadsheet, titleKey: "problem.item2.title", descKey: "problem.item2.description" },
    { icon: AlertTriangle, titleKey: "problem.item3.title", descKey: "problem.item3.description" },
    { icon: Ban, titleKey: "problem.item4.title", descKey: "problem.item4.description" },
    { icon: Clock, titleKey: "problem.item5.title", descKey: "problem.item5.description" },
    { icon: TrendingDown, titleKey: "problem.item6.title", descKey: "problem.item6.description" },
  ];

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-4">{t("problem.badge")}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("problem.headline")}</h2>
          <p className="text-lg text-background/70 leading-relaxed">
            {t("problem.description")}
            <span className="text-background font-semibold">{t("problem.descriptionBold")}</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div key={problem.titleKey} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="p-6 rounded-xl bg-background/5 border border-background/10 hover:border-destructive/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(problem.titleKey)}</h3>
              <p className="text-background/60 text-sm leading-relaxed">{t(problem.descKey)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 text-center">
          <p className="text-xl font-medium text-background/80">
            {t("problem.conclusion")} <span className="text-destructive font-bold">{t("problem.conclusionBold")}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
