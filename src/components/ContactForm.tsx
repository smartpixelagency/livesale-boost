import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { z } from "zod";

// Webhook URL - set this to your webhook endpoint
const WEBHOOK_URL = ""; // Add your webhook URL here
const RECAPTCHA_SITE_KEY = ""; // Add your reCAPTCHA site key here (v2 or v3)

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  company: z.string().trim().max(100, "Company name too long").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void }) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

export const ContactForm = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  // Load reCAPTCHA script if site key is provided
  useEffect(() => {
    if (RECAPTCHA_SITE_KEY && !window.grecaptcha) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.grecaptcha && recaptchaRef.current) {
          window.grecaptcha.render(recaptchaRef.current, {
            sitekey: RECAPTCHA_SITE_KEY,
            callback: (token: string) => setRecaptchaToken(token),
          });
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  const labels = {
    de: {
      title: "Kontaktieren Sie uns",
      subtitle: "Haben Sie Fragen? Wir sind hier, um zu helfen.",
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen (optional)",
      message: "Nachricht",
      submit: "Nachricht senden",
      success: "Vielen Dank! Wir melden uns bald.",
      error: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre@email.de",
      companyPlaceholder: "Ihr Unternehmen",
      messagePlaceholder: "Wie können wir Ihnen helfen?",
    },
    en: {
      title: "Contact Us",
      subtitle: "Have questions? We're here to help.",
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      message: "Message",
      submit: "Send Message",
      success: "Thank you! We'll get back to you soon.",
      error: "Error sending message. Please try again.",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      companyPlaceholder: "Your company",
      messagePlaceholder: "How can we help you?",
    },
    no: {
      title: "Kontakt oss",
      subtitle: "Har du spørsmål? Vi er her for å hjelpe.",
      name: "Navn",
      email: "E-post",
      company: "Selskap (valgfritt)",
      message: "Melding",
      submit: "Send melding",
      success: "Takk! Vi tar kontakt snart.",
      error: "Feil ved sending. Vennligst prøv igjen.",
      namePlaceholder: "Ditt navn",
      emailPlaceholder: "din@epost.no",
      companyPlaceholder: "Ditt selskap",
      messagePlaceholder: "Hvordan kan vi hjelpe deg?",
    },
  };

  const l = labels[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Check webhook URL
    if (!WEBHOOK_URL) {
      toast({
        title: "Configuration Error",
        description: "Webhook URL not configured. Please contact the administrator.",
        variant: "destructive",
      });
      return;
    }

    // Check reCAPTCHA if enabled
    if (RECAPTCHA_SITE_KEY && !recaptchaToken) {
      toast({
        title: language === "de" ? "reCAPTCHA erforderlich" : language === "no" ? "reCAPTCHA påkrevd" : "reCAPTCHA required",
        description: language === "de" ? "Bitte bestätigen Sie das reCAPTCHA." : language === "no" ? "Vennligst bekreft reCAPTCHA." : "Please complete the reCAPTCHA.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...result.data,
          language,
          recaptchaToken: recaptchaToken || undefined,
          timestamp: new Date().toISOString(),
          source: "livedealz-website",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      toast({
        title: "✓",
        description: l.success,
      });
    } catch {
      toast({
        title: "Error",
        description: l.error,
        variant: "destructive",
      });
      // Reset reCAPTCHA on error
      if (window.grecaptcha) {
        window.grecaptcha.reset();
        setRecaptchaToken(null);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl p-8 text-center"
      >
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">{l.success}</h3>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold mb-2">{l.title}</h3>
      <p className="text-muted-foreground mb-6">{l.subtitle}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">{l.name}</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={l.namePlaceholder}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email">{l.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={l.emailPlaceholder}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="company">{l.company}</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={l.companyPlaceholder}
          />
        </div>

        <div>
          <Label htmlFor="message">{l.message}</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={l.messagePlaceholder}
            rows={5}
            className={errors.message ? "border-destructive" : ""}
          />
          {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
        </div>

        {/* reCAPTCHA widget container - only shows if site key is configured */}
        {RECAPTCHA_SITE_KEY && (
          <div ref={recaptchaRef} className="flex justify-center" />
        )}

        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {language === "de" ? "Wird gesendet..." : language === "no" ? "Sender..." : "Sending..."}
            </>
          ) : (
            <>
              {l.submit}
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      {/* Configuration hint for developers */}
      {!WEBHOOK_URL && (
        <p className="text-xs text-muted-foreground mt-4 p-2 bg-muted rounded">
          ⚠️ Developer: Set WEBHOOK_URL in ContactForm.tsx to enable form submission.
          {RECAPTCHA_SITE_KEY ? "" : " Set RECAPTCHA_SITE_KEY for spam protection."}
        </p>
      )}
    </motion.div>
  );
};
