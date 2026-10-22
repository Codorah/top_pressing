"use client";
// components/sections/About.tsx
import { Globe, HandshakeIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SafeImage from "@/components/ui/SafeImage";
import Reveal from "@/components/ui/Reveal";
import { ABOUT_POINTS } from "@/lib/content";

const ICONS: Record<string, React.ReactNode> = {
  HandshakeIcon: <HandshakeIcon size={22} />,
  Globe:         <Globe size={22} />,
};

export default function About() {
  return (
    <section id="apropos" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div>
            <Reveal>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-secondary/10 text-secondary mb-4">
                À Propos
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mb-6">
                Qui sommes-nous réellement ?
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-neutral/70 leading-relaxed mb-10">
                Top Pressing est bien plus qu&apos;un simple fournisseur d&apos;équipements. Nous sommes le partenaire de ceux qui souhaitent créer, développer et pérenniser une activité de blanchisserie professionnelle au Togo.
              </p>
            </Reveal>

            <div className="space-y-5">
              {ABOUT_POINTS.map((pt, i) => (
                <Reveal key={pt.title} delay={0.2 + i * 0.1}>
                  <div className="flex items-start gap-5 p-5 bg-base-200 rounded-2xl border border-base-300 hover:border-secondary/40 hover:shadow-md transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0">
                      {ICONS[pt.icon]}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary mb-1">{pt.title}</h3>
                      <p className="text-sm text-neutral/70 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <Reveal direction="right">
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute top-0 left-0 w-3/4 h-2/3 rounded-3xl overflow-hidden shadow-xl">
                <SafeImage
                  src="/images/apropos/lavage.jpg"
                  alt="Atelier blanchisserie Top Pressing"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3/5 h-1/2 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <SafeImage
                  src="/images/hero/hero-1.jpg"
                  alt="Équipe professionnelle Top Pressing"
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
              {/* Accent shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl gradient-primary opacity-20 rotate-12" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
