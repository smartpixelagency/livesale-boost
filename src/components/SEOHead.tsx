import { useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const seoContent: Record<Language, { title: string; description: string }> = {
  de: {
    title: "LiveDealz – Echtzeit-Reservierungen für Live-Shopping & Social Selling",
    description: "LiveDealz verbindet Live-Shopping, Stories und Sammelaktionen. Kunden reservieren Produkte während des Streams, sammeln über mehrere Tage und bezahlen später. Keine Überverkäufe, kein Chaos.",
  },
  en: {
    title: "LiveDealz – Real-time Reservations for Live Shopping & Social Selling",
    description: "LiveDealz connects live shopping, stories, and collection campaigns. Customers reserve products during streams, collect over days, and pay later. No overselling, no chaos.",
  },
  no: {
    title: "LiveDealz – Sanntidsreservasjoner for Live Shopping & Social Selling",
    description: "LiveDealz kobler live-shopping, stories og samleaksjoner. Kunder reserverer produkter under streams, samler over flere dager og betaler senere. Ingen oversalg, ingen kaos.",
  },
};

export const SEOHead = ({ title, description, path = "", image }: SEOHeadProps) => {
  const { language } = useLanguage();
  const baseUrl = "https://livedealz.de";
  const defaultImage = `${baseUrl}/og-image.png`;
  
  const currentTitle = title || seoContent[language].title;
  const currentDescription = description || seoContent[language].description;
  const currentImage = image || defaultImage;
  const currentUrl = `${baseUrl}/${language}${path}`;

  useEffect(() => {
    // Update document title
    document.title = currentTitle;

    // Helper to set meta tag
    const setMetaTag = (property: string, content: string, isOg = false) => {
      const selector = isOg ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        if (isOg) {
          meta.setAttribute("property", property);
        } else {
          meta.setAttribute("name", property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update lang attribute
    document.documentElement.lang = language;

    // Standard meta tags
    setMetaTag("description", currentDescription);
    setMetaTag("robots", "index, follow");

    // Open Graph meta tags
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", currentUrl, true);
    setMetaTag("og:title", currentTitle, true);
    setMetaTag("og:description", currentDescription, true);
    setMetaTag("og:image", currentImage, true);
    setMetaTag("og:locale", language === "de" ? "de_DE" : language === "no" ? "nb_NO" : "en_US", true);
    setMetaTag("og:site_name", "LiveDealz", true);

    // Twitter Card meta tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:url", currentUrl);
    setMetaTag("twitter:title", currentTitle);
    setMetaTag("twitter:description", currentDescription);
    setMetaTag("twitter:image", currentImage);

    // Remove existing hreflang links
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());

    // Create hreflang links
    const languages: Language[] = ["de", "en", "no"];
    languages.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = `${baseUrl}/${lang}${path}`;
      document.head.appendChild(link);
    });

    // Add x-default
    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = `${baseUrl}/de${path}`;
    document.head.appendChild(defaultLink);

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    return () => {
      document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    };
  }, [language, currentTitle, currentDescription, currentImage, currentUrl, path]);

  return null;
};
