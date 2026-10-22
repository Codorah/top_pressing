"use client";
// components/sections/Faq.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, MessageCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { FAQ_ITEMS, SITE } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Questions fréquentes"
          title="FAQ"
          subtitle="Tout ce que vous devez savoir avant de vous lancer."
        />

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                open === i ? "border-secondary/50 shadow-md" : "border-base-300"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span className="font-heading font-semibold text-primary text-sm sm:text-base leading-snug">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-secondary flex-shrink-0"
                >
                  <Plus size={20} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="px-6 pb-6 text-neutral/70 text-sm leading-relaxed border-t border-base-300 pt-4">
                      {item.a}
                      {item.isCtaQuestion && (
                        <a
                          href={`https://wa.me/${SITE.whatsappEnv}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 btn btn-primary btn-sm rounded-xl text-white font-semibold"
                        >
                          <MessageCircle size={16} />
                          Contacter un expert
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
