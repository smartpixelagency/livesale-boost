import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          current += stepValue;
          if (current >= value) {
            setCount(value);
            clearInterval(interval);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
        +{count}
        {suffix}
      </div>
      <p className="text-sm md:text-base text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const stats = [
  { value: 50, suffix: "%", label: "mehr Artikel im Warenkorb" },
  { value: 90, suffix: "%", label: "Wiederkehrende Kunden" },
  { value: 40, suffix: "%", label: "Umsatzwachstum durch LiveDealz" },
  { value: 20, suffix: "k", label: "Stunden Zeitersparnis" },
];

export const StatsSection = () => {
  return (
    <section id="stats" className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16"
        >
          Kundenerfolge in Zahlen
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
