"use client";
// components/sections/Services.tsx
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { motion, AnimatePresence } from "motion/react";
import {
  Rocket, Hotel, GraduationCap, Waves, Package, ShoppingCart, ArrowRight, X
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import MagneticButton from "@/components/ui/MagneticButton";
import { SERVICES } from "@/lib/content";

const ICONS: Record<string, React.ReactNode> = {
  Rocket:      <Rocket size={26} />,
  Hotel:       <Hotel size={26} />,
  GraduationCap: <GraduationCap size={26} />,
  Waves:       <Waves size={26} />,
  Package:     <Package size={26} />,
  ShoppingCart:<ShoppingCart size={26} />,
};

type Service = typeof SERVICES[0];

function ServiceModal({ service, onClose, onBook }: { service: Service; onClose: () => void; onBook: (s: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white">
              {ICONS[service.icon]}
            </div>
            <h3 className="text-xl font-heading font-bold text-primary">{service.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-base-200 text-neutral/50 hover:text-neutral transition-colors" aria-label="Fermer">
            <X size={20} />
          </button>
        </div>
        <p className="text-neutral/70 leading-relaxed mb-8">{service.fullDesc}</p>
        <MagneticButton
          className="btn btn-accent w-full rounded-2xl text-white font-semibold"
          onClick={() => { onBook(service.title); onClose(); }}
        >
          Demander ce service
        </MagneticButton>
      </motion.div>
    </motion.div>
  );
}

export default function Services({ onSelectService }: { onSelectService?: (s: string) => void }) {
  const [selected, setSelected] = useState<Service | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    gsap.fromTo(gridRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 80%", once: true }
      }
    );
  }, { scope: gridRef });

  const handleBook = (serviceName: string) => {
    onSelectService?.(serviceName);
    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Ce que nous faisons"
          title="Nos Solutions Complètes"
          subtitle="De la création de votre pressing à son approvisionnement, nous vous accompagnons à chaque étape."
        />
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-white border border-base-300 rounded-3xl p-7 cursor-pointer shadow-sm hover:shadow-xl hover:border-secondary/40 transition-shadow duration-300"
              onClick={() => setSelected(service)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && setSelected(service)}
              aria-label={`En savoir plus sur ${service.title}`}
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {ICONS[service.icon]}
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-3">{service.title}</h3>
              <p className="text-sm text-neutral/60 leading-relaxed mb-5">{service.shortDesc}</p>
              <span className="inline-flex items-center gap-1.5 text-secondary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                Détails <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ServiceModal service={selected} onClose={() => setSelected(null)} onBook={handleBook} />
        )}
      </AnimatePresence>
    </section>
  );
}
