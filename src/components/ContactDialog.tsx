import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactDialogProps {
  trigger?: React.ReactNode;
  variant?: "hero" | "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const ContactDialog = ({ trigger, variant = "hero", size = "default" }: ContactDialogProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant={variant} size={size}>
            {t("nav.bookDemo")}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-transparent border-none">
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};
