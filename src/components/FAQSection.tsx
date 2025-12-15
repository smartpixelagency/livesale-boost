import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export const FAQSection = () => {
  const { t } = useLanguage();
  
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("faq.headline")}
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
