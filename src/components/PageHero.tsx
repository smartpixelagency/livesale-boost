import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  headline: string;
  headlineBold?: string;
  headlineEnd?: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export const PageHero = ({
  badge,
  headline,
  headlineBold,
  headlineEnd,
  description,
  className,
  children,
}: PageHeroProps) => {
  return (
    <section className={cn("relative py-16 md:py-24 bg-gradient-hero overflow-hidden", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {badge && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-accent rounded-full"
            >
              {badge}
            </motion.span>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            {headline}
            {headlineBold && <span className="text-gradient"> {headlineBold}</span>}
            {headlineEnd && <span> {headlineEnd}</span>}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
