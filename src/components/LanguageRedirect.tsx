import { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const validLanguages: Language[] = ["de", "en", "no"];

export const LanguageRedirect = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If we have a lang param and it's valid, set the language
    if (lang && validLanguages.includes(lang as Language)) {
      if (lang !== language) {
        setLanguage(lang as Language);
      }
    } else if (lang && !validLanguages.includes(lang as Language)) {
      // Invalid language, redirect to default
      navigate(`/de${location.pathname.replace(`/${lang}`, "")}`, { replace: true });
    }
  }, [lang, language, setLanguage, navigate, location.pathname]);

  return <>{children}</>;
};

export const useLanguageNavigation = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const navigateWithLang = (path: string) => {
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    navigate(`/${language}/${cleanPath}`);
  };

  const getLocalizedPath = (path: string) => {
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `/${language}/${cleanPath}`;
  };

  return { navigateWithLang, getLocalizedPath, currentLangPath: `/${language}` };
};
