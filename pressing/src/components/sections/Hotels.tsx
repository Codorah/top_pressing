"use client";
// components/sections/Hotels.tsx
import { Star, RefreshCw, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { HOTEL_ADVANTAGES, PARTNERS } from "@/lib/content";

const ICONS: Record<string, React.ReactNode> = {
  Star:      <Star size={22} />,
  RefreshCw: <RefreshCw size={22} />,
  Clock:     <Clock size={22} />,
};

export default function Hotels({ onSelectService }: { onSelectService?: (s: string) => void }) {
  return (
    <section id="hotels" className="py-20 sm:py-28 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Blanchisserie hôtelière"
          title="Une solution B2B sur mesure"
          subtitle="Nous gérons la blanchisserie de vos établissements hôteliers et institutionnels avec rigueur et régularité."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {HOTEL_ADVANTAGES.map((adv, i) => (
            <Reveal key={adv.title} delay={i * 0.15}>
              <div className="glass-dark rounded-3xl p-7 border border-white/10 hover:border-secondary/50 transition-colors duration-300 h-full">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary mb-5">
                  {ICONS[adv.icon]}
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{adv.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{adv.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Big number */}
        <Reveal>
          <div className="text-center mb-12 py-8 border-y border-white/10">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-7xl font-heading font-extrabold text-accent">
                <Counter end={100} suffix=" kg" />
              </span>
              <span className="text-xl text-white/80">/jour</span>
            </div>
            <p className="text-white/60 mt-2 text-sm">Capacité de traitement pour nos hôtels partenaires</p>
          </div>
        </Reveal>

        {/* Partners mention */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {PARTNERS.map((p) => (
              <span key={p.id} className="px-5 py-2 rounded-xl bg-white/10 border border-white/20 text-sm font-medium text-white/80">
                {p.name}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="text-center">
          <MagneticButton
            className="btn btn-accent btn-lg rounded-2xl text-white font-semibold px-10"
            onClick={() => {
              onSelectService?.("Blanchisserie Pro");
              document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
            }}
            id="hotels-cta"
          >
            Demander un devis hôtel
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
