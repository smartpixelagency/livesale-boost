import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { StepByStep } from "@/components/StepByStep";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FeatureCard } from "@/components/FeatureCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Clock, 
  Shield, 
  RefreshCw, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  Store,
  FileText,
  Lock,
  Unlock,
  GripVertical,
  MessageSquare,
  Timer,
  Tag
} from "lucide-react";

const DraftOrders = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      title: t("draftOrders.step1.title"),
      description: t("draftOrders.step1.description"),
    },
    {
      title: t("draftOrders.step2.title"),
      description: t("draftOrders.step2.description"),
    },
    {
      title: t("draftOrders.step3.title"),
      description: t("draftOrders.step3.description"),
    },
    {
      title: t("draftOrders.step4.title"),
      description: t("draftOrders.step4.description"),
    },
    {
      title: t("draftOrders.step5.title"),
      description: t("draftOrders.step5.description"),
    },
  ];

  const comparisonRows = [
    {
      feature: t("draftOrders.compare.feature1"),
      before: t("draftOrders.compare.before1"),
      after: t("draftOrders.compare.after1"),
    },
    {
      feature: t("draftOrders.compare.feature2"),
      before: t("draftOrders.compare.before2"),
      after: t("draftOrders.compare.after2"),
    },
    {
      feature: t("draftOrders.compare.feature3"),
      before: false,
      after: true,
    },
    {
      feature: t("draftOrders.compare.feature4"),
      before: t("draftOrders.compare.before4"),
      after: t("draftOrders.compare.after4"),
    },
    {
      feature: t("draftOrders.compare.feature5"),
      before: false,
      after: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={t("draftOrders.seo.title")}
        description={t("draftOrders.seo.description")}
      />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <PageHero
          badge={t("draftOrders.badge")}
          headline={t("draftOrders.headline")}
          headlineBold={t("draftOrders.headlineBold")}
          description={t("draftOrders.description")}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactDialog
              trigger={
                <Button variant="hero" size="lg" className="group">
                  {t("nav.bookDemo")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
            <Link to={`/${language}#pricing`}>
              <Button variant="outline" size="lg">
                {t("pricing.badge")}
              </Button>
            </Link>
          </div>
        </PageHero>

        {/* What are Draft Orders */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-accent rounded-full">
                  {t("draftOrders.whatBadge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t("draftOrders.whatTitle")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("draftOrders.whatDescription")}
                </p>
              </div>

              {/* Visual Explanation */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("draftOrders.what1.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("draftOrders.what1.description")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-2xl flex items-center justify-center">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("draftOrders.what2.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("draftOrders.what2.description")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-2xl flex items-center justify-center">
                    <Unlock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("draftOrders.what3.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("draftOrders.what3.description")}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How LiveDealz Uses Draft Orders */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-accent rounded-full">
                {t("draftOrders.howBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("draftOrders.howTitle")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("draftOrders.howDescription")}
              </p>
            </div>

            <StepByStep steps={steps} variant="numbered" />
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-accent rounded-full">
                {t("draftOrders.benefitsBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("draftOrders.benefitsTitle")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={Shield}
                title={t("draftOrders.benefit1.title")}
                description={t("draftOrders.benefit1.description")}
                delay={0.1}
              />
              <FeatureCard
                icon={RefreshCw}
                title={t("draftOrders.benefit2.title")}
                description={t("draftOrders.benefit2.description")}
                delay={0.2}
              />
              <FeatureCard
                icon={Zap}
                title={t("draftOrders.benefit3.title")}
                description={t("draftOrders.benefit3.description")}
                delay={0.3}
              />
              <FeatureCard
                icon={Clock}
                title={t("draftOrders.benefit4.title")}
                description={t("draftOrders.benefit4.description")}
                delay={0.4}
              />
              <FeatureCard
                icon={Store}
                title={t("draftOrders.benefit5.title")}
                description={t("draftOrders.benefit5.description")}
                delay={0.5}
              />
              <FeatureCard
                icon={CheckCircle2}
                title={t("draftOrders.benefit6.title")}
                description={t("draftOrders.benefit6.description")}
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Merchant Editing Features */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-accent rounded-full">
                  {t("draftOrders.editingBadge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t("draftOrders.editingTitle")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("draftOrders.editingDescription")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="w-12 h-12 mb-4 bg-accent rounded-xl flex items-center justify-center">
                    <GripVertical className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("draftOrders.editing1.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("draftOrders.editing1.description")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="w-12 h-12 mb-4 bg-accent rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("draftOrders.editing2.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("draftOrders.editing2.description")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="w-12 h-12 mb-4 bg-accent rounded-xl flex items-center justify-center">
                    <Timer className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("draftOrders.editing3.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("draftOrders.editing3.description")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden"
                >
                  <div className="w-12 h-12 mb-4 bg-accent rounded-xl flex items-center justify-center">
                    <Tag className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("draftOrders.editing4.title")}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t("draftOrders.editing4.description")}
                  </p>
                  {/* Visual Example of Strikethrough Price */}
                  <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Beispiel:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground line-through text-sm">€49,99</span>
                        <span className="text-primary font-bold text-lg">€39,99</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <ComparisonTable
              title={t("draftOrders.compareTitle")}
              description={t("draftOrders.compareDescription")}
              beforeLabel={t("draftOrders.compareBefore")}
              afterLabel={t("draftOrders.compareAfter")}
              rows={comparisonRows}
            />
          </div>
        </section>

        {/* Links to Related Pages */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("draftOrders.relatedTitle")}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link 
                to={`/${language}/features/shopify-integration`}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-2xl p-6 h-full transition-all hover:border-primary/30 hover:shadow-card-hover"
                >
                  <Store className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t("draftOrders.related1.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("draftOrders.related1.description")}
                  </p>
                </motion.div>
              </Link>

              <Link 
                to={`/${language}/compare/manual-processes`}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-2xl p-6 h-full transition-all hover:border-primary/30 hover:shadow-card-hover"
                >
                  <ShoppingCart className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t("draftOrders.related2.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("draftOrders.related2.description")}
                  </p>
                </motion.div>
              </Link>

              <Link 
                to={`/${language}/use-cases/tiktok-instagram-live`}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-2xl p-6 h-full transition-all hover:border-primary/30 hover:shadow-card-hover"
                >
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t("draftOrders.related3.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("draftOrders.related3.description")}
                  </p>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          headline={t("draftOrders.ctaTitle")}
          description={t("draftOrders.ctaDescription")}
        />
      </main>

      <Footer />
    </div>
  );
};

export default DraftOrders;
