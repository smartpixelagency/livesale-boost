import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  headline?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  secondaryLink?: string;
  variant?: "default" | "compact";
  className?: string;
}

export const CTABanner = ({
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  secondaryLink,
  variant = "default",
  className,
}: CTABannerProps) => {
  const { t, language } = useLanguage();

  const defaultHeadline = t("cta.headline");
  const defaultDescription = t("cta.description");
  const defaultPrimaryCTA = t("nav.bookDemo");
  const defaultSecondaryCTA = t("pricing.badge");
  const defaultSecondaryLink = `/${language}#pricing`;

  return (
    <section className={cn(
      "py-16 md:py-20",
      variant === "compact" ? "bg-accent/50" : "bg-gradient-to-br from-primary/5 via-background to-accent/30",
      className
    )}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "text-center",
            variant === "compact" ? "max-w-2xl mx-auto" : "max-w-4xl mx-auto"
          )}
        >
          <h2 className={cn(
            "font-bold tracking-tight text-foreground mb-4",
            variant === "compact" ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-5xl"
          )}>
            {headline || defaultHeadline}
          </h2>

          <p className={cn(
            "text-muted-foreground mb-8",
            variant === "compact" ? "text-base" : "text-lg md:text-xl max-w-2xl mx-auto"
          )}>
            {description || defaultDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactDialog
              trigger={
                <Button variant="hero" size="lg" className="group">
                  {primaryCTA || defaultPrimaryCTA}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />

            {(secondaryCTA || defaultSecondaryCTA) && (
              <Link to={secondaryLink || defaultSecondaryLink}>
                <Button variant="outline" size="lg">
                  {secondaryCTA || defaultSecondaryCTA}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
