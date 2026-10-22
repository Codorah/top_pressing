"use client";
// components/sections/Training.tsx
import { motion } from "motion/react";
import { Waves, Zap, Wind, Smile, BarChart2, BadgeCheck } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SafeImage from "@/components/ui/SafeImage";
import Reveal from "@/components/ui/Reveal";
import { TRAINING_MODULES } from "@/lib/content";

const ICONS: Record<string, React.ReactNode> = {
  Waves:    <Waves size={18} />,
  Zap:      <Zap size={18} />,
  Wind:     <Wind size={18} />,
  Smile:    <Smile size={18} />,
  BarChart2:<BarChart2 size={18} />,
};

export default function Training() {
  return (
    <section id="formations" className="py-20 sm:py-28 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <Reveal direction="left">
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-secondary/20 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <SafeImage
                  src="/images/apropos/lavage.jpg"
                  alt="Formation pratique pressing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-base-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary text-sm">Formation</p>
                    <p className="text-xs text-neutral/60">Pratique & certifiée</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-secondary/10 text-secondary mb-4">
                Formations Pratiques
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mb-4">
                Formez votre personnel aux techniques modernes
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-neutral/70 leading-relaxed mb-8">
                Nos programmes de formation couvrent l&apos;intégralité des compétences nécessaires pour gérer un pressing professionnel. Accessibles aux porteurs de projet comme au personnel opérationnel.
              </p>
            </Reveal>

            <ul className="space-y-3">
              {TRAINING_MODULES.map((mod, i) => (
                <Reveal key={mod.label} delay={0.1 * i + 0.3}>
                  <li className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-base-300 hover:border-secondary/50 hover:shadow-md transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0">
                      {ICONS[mod.icon]}
                    </div>
                    <span className="text-sm font-medium text-neutral">{mod.label}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
