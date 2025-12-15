import { motion } from "framer-motion";
import { 
  Video, 
  MessageCircle, 
  Users, 
  Building2,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const UseCasesSection = () => {
  const { t } = useLanguage();

  const useCases = [
    {
      icon: Video,
      title: t("useCases.case1.title"),
      color: "from-pink-500 to-rose-500",
      story: [
        t("useCases.case1.step1"),
        t("useCases.case1.step2"),
        t("useCases.case1.step3"),
        t("useCases.case1.step4"),
      ]
    },
    {
      icon: MessageCircle,
      title: t("useCases.case2.title"),
      color: "from-green-500 to-emerald-500",
      story: [
        t("useCases.case2.step1"),
        t("useCases.case2.step2"),
        t("useCases.case2.step3"),
        t("useCases.case2.step4"),
      ]
    },
    {
      icon: Users,
      title: t("useCases.case3.title"),
      color: "from-blue-500 to-indigo-500",
      story: [
        t("useCases.case3.step1"),
        t("useCases.case3.step2"),
        t("useCases.case3.step3"),
        t("useCases.case3.step4"),
      ]
    },
    {
      icon: Building2,
      title: t("useCases.case4.title"),
      color: "from-amber-500 to-orange-500",
      story: [
        t("useCases.case4.step1"),
        t("useCases.case4.step2"),
        t("useCases.case4.step3"),
        t("useCases.case4.step4"),
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            {t("useCases.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("useCases.headline")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("useCases.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6`}>
                <useCase.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
              <ul className="space-y-3">
                {useCase.story.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
