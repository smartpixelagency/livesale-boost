import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  // Check localStorage to see if user already closed the banner
  useEffect(() => {
    const bannerClosed = localStorage.getItem("promoBannerClosed");
    if (bannerClosed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("promoBannerClosed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#EA580C] text-white py-3 px-4 relative z-50">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base pr-10">
        <Sparkles className="h-4 w-4 shrink-0 text-white" />
        <span className="font-medium text-center text-white">
          {t("promo.starterOffer")}
        </span>
        <Sparkles className="h-4 w-4 shrink-0 hidden md:block text-white" />
      </div>
      <button
        onClick={handleClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/20 rounded-full transition-colors text-white"
        aria-label="Close banner"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};
