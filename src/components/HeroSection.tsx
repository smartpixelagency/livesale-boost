import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-livestream.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactDialog } from "@/components/ContactDialog";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-paper text-ink">
      {/* Section marker rail */}
      <div className="container pt-12 md:pt-16 flex items-baseline justify-between">
        <span className="section-marker">01 — Warensicherheit</span>
        <span className="section-marker hidden md:inline">Shopify · Draft Orders</span>
      </div>

      <div className="container pt-10 md:pt-16 pb-20 md:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="display-xl uppercase max-w-6xl"
        >
          {t("hero.headline1")}
          <br />
          {t("hero.headline2")}
          <br />
          <span className="text-ember">{t("hero.headline3")}</span>
        </motion.h1>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-6"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-ink">
              {t("hero.subheadline")}
            </p>
            <p className="mt-5 text-base md:text-lg text-ink-soft leading-relaxed max-w-xl">
              {t("hero.description1")}
              <span className="text-ink font-semibold">{t("hero.description1Bold")}</span>{" "}
              {t("hero.description2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-6 flex flex-col items-start md:items-end gap-4"
          >
            <ContactDialog
              trigger={
                <button className="group inline-flex items-center gap-4 bg-ink text-paper hover:bg-ember transition-colors duration-300 px-8 py-6 font-display font-semibold uppercase tracking-wider text-sm text-left">
                  <span className="max-w-xs leading-tight">{t("hero.cta1")}</span>
                  <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              }
            />
            <a
              href="#features"
              className="section-marker hover:text-ember transition-colors"
            >
              ↓ {t("hero.cta2")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Wide hairline + image band */}
      <div className="hairline-t">
        <div className="container py-10 md:py-14">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <span className="section-marker block mb-4">Live · in Aktion</span>
              <p className="font-display text-2xl md:text-3xl leading-tight text-ink">
                {t("hero.reservationConfirmed")}
                <br />
                <span className="text-ember">{t("hero.stockSecured")}</span>
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="md:col-span-8 relative overflow-hidden"
            >
              <img
                src={heroImage}
                alt={t("hero.imageAlt")}
                width={1024}
                height={640}
                fetchPriority="high"
                loading="eager"
                className="w-full h-[280px] md:h-[420px] object-cover grayscale contrast-110"
              />
              <div className="absolute top-4 left-4 bg-paper text-ink px-3 py-1.5 flex items-center gap-2 font-display uppercase tracking-widest text-xs">
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
                Live · 1.247 {t("hero.viewers")}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
