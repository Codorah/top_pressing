"use client";
// components/layout/WhatsAppFloat.tsx
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { SITE } from "@/lib/content";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { open } = useWhatsApp();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-white text-primary text-sm font-medium px-3 py-2 rounded-xl shadow-lg border border-base-300 whitespace-nowrap"
              >
                Une question ?
              </motion.span>
            )}
          </AnimatePresence>

          <div className="relative">
            <button
              aria-label={`Contacter ${SITE.name} sur WhatsApp`}
              onClick={() => open(`Bonjour, je souhaite en savoir plus sur vos services.`)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20c05c] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <span className="whatsapp-pulse absolute inset-0 rounded-full" />
              <MessageCircle size={26} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
