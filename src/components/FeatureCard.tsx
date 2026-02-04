import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "highlight" | "compact";
  delay?: number;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
  variant = "default",
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className={cn(
        "h-full transition-all duration-300 hover:shadow-card-hover",
        variant === "highlight" && "border-primary/30 bg-accent/30",
        variant === "compact" && "border-0 shadow-none bg-transparent",
        className
      )}>
        <CardContent className={cn(
          "pt-6",
          variant === "compact" && "p-4"
        )}>
          <div className={cn(
            "flex items-center justify-center rounded-xl mb-4",
            variant === "compact" ? "w-10 h-10 bg-primary/10" : "w-14 h-14 bg-accent"
          )}>
            <Icon className={cn(
              "text-primary",
              variant === "compact" ? "w-5 h-5" : "w-7 h-7"
            )} />
          </div>

          <h3 className={cn(
            "font-semibold text-foreground mb-2",
            variant === "compact" ? "text-base" : "text-lg"
          )}>
            {title}
          </h3>

          <p className={cn(
            "text-muted-foreground",
            variant === "compact" ? "text-sm" : "text-base leading-relaxed"
          )}>
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
