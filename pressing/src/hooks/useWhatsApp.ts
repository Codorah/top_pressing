// hooks/useWhatsApp.ts
import { SITE } from "@/lib/content";

export function useWhatsApp() {
  const open = (message: string) => {
    const number = SITE.whatsappEnv;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return { open };
}
