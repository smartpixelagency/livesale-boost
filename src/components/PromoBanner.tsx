import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground py-2.5 px-4 relative">
      <div className="container flex items-center justify-center gap-2 text-sm md:text-base">
        <Sparkles className="h-4 w-4 shrink-0" />
        <span className="font-medium text-center">
          {t("promo.starterOffer")}
        </span>
        <Sparkles className="h-4 w-4 shrink-0 hidden md:block" />
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
