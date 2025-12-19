import { useState, forwardRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactDialogProps {
  trigger?: React.ReactNode;
  variant?: "hero" | "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const ContactDialog = forwardRef<HTMLButtonElement, ContactDialogProps>(
  ({ trigger, variant = "hero", size = "default" }, ref) => {
    const [open, setOpen] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const { t } = useLanguage();

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
      if (!newOpen) {
        // Reset form when dialog closes
        setResetKey(prev => prev + 1);
      }
    };

    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          {trigger || (
            <Button ref={ref} variant={variant} size={size}>
              {t("nav.bookDemo")}
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-transparent border-none">
          <ContactForm resetTrigger={resetKey} />
        </DialogContent>
      </Dialog>
    );
  }
);

ContactDialog.displayName = "ContactDialog";
