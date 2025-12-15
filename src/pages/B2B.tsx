import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Building2, 
  Clock, 
  Shield, 
  Users, 
  Smartphone, 
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const B2B = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      titleKey: "b2b.benefit1.title",
      descKey: "b2b.benefit1.description",
    },
    {
      icon: Clock,
      titleKey: "b2b.benefit2.title",
      descKey: "b2b.benefit2.description",
    },
    {
      icon: Users,
      titleKey: "b2b.benefit3.title",
      descKey: "b2b.benefit3.description",
    },
    {
      icon: Building2,
      titleKey: "b2b.benefit4.title",
      descKey: "b2b.benefit4.description",
    },
    {
      icon: ShieldCheck,
      titleKey: "b2b.benefit5.title",
      descKey: "b2b.benefit5.description",
    },
    {
      icon: Smartphone,
      titleKey: "b2b.benefit6.title",
      descKey: "b2b.benefit6.description",
    },
  ];

  const useCases = [
    "b2b.useCase1",
    "b2b.useCase2",
    "b2b.useCase3",
    "b2b.useCase4",
    "b2b.useCase5",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead path="/b2b" />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
              {t("b2b.badge")}
            </span>
            
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              {t("b2b.painPoint")} <span className="text-primary font-semibold">{t("b2b.painPointHighlight")}</span>
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("b2b.headline")}{" "}
              <span className="text-gradient">{t("b2b.headlineHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("b2b.subheadline")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                {t("b2b.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-destructive/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("b2b.problemTitle")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              {t("b2b.problemDescription")}
              <span className="text-foreground font-semibold block mt-4">
                {t("b2b.problemConclusion")}
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
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
              {t("b2b.solutionBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("b2b.solutionTitle")} <span className="text-primary">LiveDealz</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("b2b.solutionDescription")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t(benefit.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(benefit.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed vs. Cost Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t("b2b.speedTitle")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t("b2b.speedDescription")}
            </p>
            <p className="text-foreground font-semibold text-xl">
              {t("b2b.speedConclusion")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">
                {t("b2b.useCasesBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("b2b.useCasesTitle")} <span className="text-primary">{t("b2b.useCasesTitleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("b2b.useCasesDescription")}
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <motion.li
                    key={useCase}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{t(useCase)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-4">{t("b2b.howItWorksTitle")}</h3>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">1</span>
                  <div>
                    <p className="font-semibold">{t("b2b.step1.title")}</p>
                    <p className="text-muted-foreground text-sm">{t("b2b.step1.description")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">2</span>
                  <div>
                    <p className="font-semibold">{t("b2b.step2.title")}</p>
                    <p className="text-muted-foreground text-sm">{t("b2b.step2.description")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">3</span>
                  <div>
                    <p className="font-semibold">{t("b2b.step3.title")}</p>
                    <p className="text-muted-foreground text-sm">{t("b2b.step3.description")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">4</span>
                  <div>
                    <p className="font-semibold">{t("b2b.step4.title")}</p>
                    <p className="text-muted-foreground text-sm">{t("b2b.step4.description")}</p>
                  </div>
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("b2b.ctaTitle")}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("b2b.ctaDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  {t("b2b.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default B2B;
