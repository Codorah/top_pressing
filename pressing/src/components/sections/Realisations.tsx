"use client";
// components/sections/Realisations.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SafeImage from "@/components/ui/SafeImage";
import BeforeAfter from "@/components/ui/BeforeAfter";
import Reveal from "@/components/ui/Reveal";
import { REALISATIONS } from "@/lib/content";

type Category = "tous" | "avant-apres" | "equipements" | "realisations";
type Realisation = typeof REALISATIONS[0];

const FILTERS: { key: Category; label: string }[] = [
  { key: "tous",        label: "Tous" },
  { key: "avant-apres", label: "Avant-Après" },
  { key: "equipements", label: "Équipements" },
  { key: "realisations",label: "Réalisations" },
];

const CAT_LABELS: Record<string, string> = {
  "avant-apres":  "Avant-Après",
  equipements:    "Équipements",
  realisations:   "Réalisation",
};

export default function Realisations() {
  const [active, setActive]     = useState<Category>("tous");
  const [modal, setModal]       = useState<Realisation | null>(null);

  const filtered = active === "tous" ? REALISATIONS : REALISATIONS.filter((r) => r.category === active);

  return (
    <section id="realisations" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Nos réalisations"
          title="Projets réalisés"
          subtitle="Chaque installation est unique et personnalisée."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                active === f.key
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-neutral/70 border-base-300 hover:border-primary/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((real) => (
              <motion.div
                key={real.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl border border-base-300"
                onClick={() => setModal(real)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SafeImage
                    src={real.image}
                    alt={real.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white/80 text-sm">{real.desc}</p>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary mb-2">
                    {CAT_LABELS[real.category] ?? real.category}
                  </span>
                  <h3 className="font-heading font-bold text-primary text-base">{real.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal>
          <p className="text-center mt-10 text-neutral/50 text-sm italic">
            Chaque installation est unique et personnalisée.
          </p>
        </Reveal>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-3xl p-6 max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-bold text-primary text-lg">{modal.title}</h3>
                <button onClick={() => setModal(null)} className="p-2 rounded-xl hover:bg-base-200 text-neutral/50" aria-label="Fermer">
                  <X size={20} />
                </button>
              </div>
              {modal.category === "avant-apres" && modal.before && modal.after ? (
                <BeforeAfter
                  before={modal.before}
                  after={modal.after}
                  beforeAlt={`${modal.title} — Avant`}
                  afterAlt={`${modal.title} — Après`}
                  className="mb-4"
                />
              ) : (
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <SafeImage src={modal.image} alt={modal.title} fill className="object-cover" sizes="672px" />
                </div>
              )}
              <p className="text-neutral/70 text-sm">{modal.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
