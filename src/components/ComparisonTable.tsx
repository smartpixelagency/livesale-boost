import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  before: string | boolean;
  after: string | boolean;
}

interface ComparisonTableProps {
  title?: string;
  description?: string;
  beforeLabel: string;
  afterLabel: string;
  rows: ComparisonRow[];
  className?: string;
}

const CellValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-600 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-destructive mx-auto" />
    );
  }

  if (value === "-") {
    return <Minus className="w-5 h-5 text-muted-foreground mx-auto" />;
  }

  return <span>{value}</span>;
};

export const ComparisonTable = ({
  title,
  description,
  beforeLabel,
  afterLabel,
  rows,
  className,
}: ComparisonTableProps) => {
  return (
    <div className={cn("py-12", className)}>
      {(title || description) && (
        <div className="text-center mb-10">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-x-auto"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 bg-muted/50 rounded-tl-xl font-semibold text-foreground">
                Feature
              </th>
              <th className="p-4 bg-destructive/10 text-center font-semibold text-destructive">
                {beforeLabel}
              </th>
              <th className="p-4 bg-primary/10 text-center font-semibold text-primary rounded-tr-xl">
                {afterLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "border-b border-border/50",
                  index === rows.length - 1 && "border-b-0"
                )}
              >
                <td className={cn(
                  "p-4 text-foreground font-medium",
                  index === rows.length - 1 && "rounded-bl-xl"
                )}>
                  {row.feature}
                </td>
                <td className="p-4 text-center text-muted-foreground bg-destructive/5">
                  <CellValue value={row.before} />
                </td>
                <td className={cn(
                  "p-4 text-center text-foreground bg-primary/5 font-medium",
                  index === rows.length - 1 && "rounded-br-xl"
                )}>
                  <CellValue value={row.after} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};
