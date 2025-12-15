import { useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
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

export const SEOHead = ({ title, description, path = "" }: SEOHeadProps) => {
  const { language } = useLanguage();
  const baseUrl = "https://livedealz.de";
  
  const currentTitle = title || seoContent[language].title;
  const currentDescription = description || seoContent[language].description;

  useEffect(() => {
    // Update document title
    document.title = currentTitle;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", currentDescription);

    // Update or create lang attribute
    document.documentElement.lang = language;

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
    canonical.setAttribute("href", `${baseUrl}/${language}${path}`);

    return () => {
      document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    };
  }, [language, currentTitle, currentDescription, path]);

  return null;
};
