import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { JsonLd } from "@/components/JsonLd";

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
    <section id="faq" className="bg-paper text-ink">
      <JsonLd
        id="faq"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className="container pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <span className="section-marker">07 — FAQ</span>
          <span className="section-marker hidden md:inline">Häufige Fragen</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 display-lg uppercase self-start"
          >
            {t("faq.headline")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full border-t border-ink/15">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-ink/15"
                >
                  <AccordionTrigger className="text-left font-display uppercase tracking-wide text-lg md:text-xl hover:no-underline hover:text-ember py-6 gap-6">
                    <span className="flex items-baseline gap-4">
                      <span className="section-marker text-ember shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-ink-soft text-base leading-relaxed pb-6 pl-14">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
