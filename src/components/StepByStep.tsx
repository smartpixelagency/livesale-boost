import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface StepByStepProps {
  steps: Step[];
  title?: string;
  description?: string;
  variant?: "numbered" | "checkmark" | "icon";
  className?: string;
}

export const StepByStep = ({
  steps,
  title,
  description,
  variant = "numbered",
  className,
}: StepByStepProps) => {
  return (
    <div className={cn("py-12", className)}>
      {(title || description) && (
        <div className="text-center mb-12">
          {title && (
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="relative">
        {/* Connector line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative flex items-start gap-6 md:gap-12",
                "md:grid md:grid-cols-2",
                index % 2 === 0 ? "md:text-right" : ""
              )}
            >
              {/* Left side content (odd items on desktop) */}
              <div className={cn(
                "hidden md:block",
                index % 2 === 0 ? "pr-12" : "order-2 pl-12 text-left"
              )}>
                {index % 2 === 0 && (
                  <>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </>
                )}
              </div>

              {/* Step indicator */}
              <div className={cn(
                "absolute left-0 md:left-1/2 md:-translate-x-1/2",
                "flex items-center justify-center",
                "w-16 h-16 rounded-full",
                "bg-primary text-primary-foreground",
                "shadow-button z-10"
              )}>
                {variant === "numbered" && (
                  <span className="text-xl font-bold">{index + 1}</span>
                )}
                {variant === "checkmark" && <Check className="w-6 h-6" />}
                {variant === "icon" && step.icon}
              </div>

              {/* Right side content (even items on desktop) */}
              <div className={cn(
                "pl-24 md:pl-12",
                index % 2 === 0 ? "md:hidden" : "order-1 md:order-2"
              )}>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Mobile only - all items show on right */}
              <div className={cn(
                "md:hidden",
                index % 2 === 0 ? "" : "hidden"
              )}>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
