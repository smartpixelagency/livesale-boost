import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id: string;
}

export const JsonLd = ({ data, id }: JsonLdProps) => {
  useEffect(() => {
    const attrId = `jsonld-${id}`;
    let el = document.getElementById(attrId) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = attrId;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
    return () => {
      const node = document.getElementById(attrId);
      if (node) node.remove();
    };
  }, [data, id]);

  return null;
};
