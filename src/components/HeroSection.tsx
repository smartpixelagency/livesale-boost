import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-livestream.jpg";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactDialog } from "@/components/ContactDialog";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-hero overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">{t("hero.badge")}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4">
              <span className="text-gradient">{t("hero.headline1")}</span>{" "}
              <span className="text-gradient">{t("hero.headline2")}</span>{" "}
              <span className="text-gradient">{t("hero.headline3")}</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">{t("hero.subheadline")}</p>
            
            <p className="text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed">
              {t("hero.description1")}
              <span className="font-semibold text-foreground">{t("hero.description1Bold")}</span>
            </p>
            
            <p className="text-base text-muted-foreground mb-8 max-w-xl">{t("hero.description2")}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactDialog 
                trigger={
                  <Button variant="hero" size="xl" className="group">
                    {t("hero.cta1")}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
              <Button variant="heroOutline" size="xl" className="group" asChild>
                <a href="#features">
                  <Play className="mr-2 h-5 w-5" />
                  {t("hero.cta2")}
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{t("hero.merchants")}</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-foreground">4.9</span>
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <img src={heroImage} alt={t("hero.imageAlt")} className="w-full object-cover aspect-[4/3]" />
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{t("hero.reservationConfirmed")}</p>
                      <p className="text-sm font-semibold">{t("hero.stockSecured")}</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-sm font-medium">LIVE</span>
                    <span className="text-xs text-muted-foreground">• 1.247 {t("hero.viewers")}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
