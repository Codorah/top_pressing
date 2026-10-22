"use client";
// components/sections/Process.tsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Search, Wrench, GraduationCap, Rocket } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import MagneticButton from "@/components/ui/MagneticButton";
import { PROCESS_STEPS } from "@/lib/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ICONS: Record<string, React.ReactNode> = {
  Search:       <Search size={22} />,
  Wrench:       <Wrench size={22} />,
  GraduationCap:<GraduationCap size={22} />,
  Rocket:       <Rocket size={22} />,
};

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const stepsRef   = useRef<HTMLDivElement>(null);
  const reduced    = useReducedMotion();

  useGSAP(() => {
    if (reduced || !sectionRef.current || !lineRef.current || !stepsRef.current) return;

    const steps = stepsRef.current.querySelectorAll(".process-step");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 20%",
        end: "+=120%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, ease: "none" });

    steps.forEach((step: Element, i: number) => {
      tl.fromTo(step,
        { opacity: 0.2, y: 20 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
        i * 0.25
      );
    });

    return () => { ScrollTrigger.getAll().forEach((t: ScrollTrigger) => t.kill()); };
  }, { scope: sectionRef });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 sm:py-28 gradient-primary text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Notre méthode"
          title="De l'idée au Succès"
          subtitle="Un parcours en 4 étapes pour transformer votre projet en pressing opérationnel."
          light
        />

        {/* Progress line (desktop) */}
        <div className="hidden md:block relative mb-12">
          <div className="absolute top-8 left-0 right-0 h-1 bg-white/20 rounded-full">
            <div
              ref={lineRef}
              className="h-full bg-secondary rounded-full origin-left"
              style={{ transform: `scaleX(${reduced ? 1 : 0})` }}
            />
          </div>

          <div ref={stepsRef} className="grid grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className={`process-step flex flex-col items-center text-center ${!reduced ? "opacity-20" : ""}`}>
                <div className="w-16 h-16 rounded-full bg-white/20 border-4 border-secondary flex items-center justify-center mb-6 text-secondary">
                  {ICONS[step.icon]}
                </div>
                <span className="text-6xl font-heading font-black text-white/10 absolute -top-4 select-none">{step.num}</span>
                <h3 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical */}
        <div className="md:hidden relative pl-10">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/20" />
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} className="relative mb-10 last:mb-0">
              <div className="absolute -left-10 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                {ICONS[step.icon]}
              </div>
              <span className="text-xs font-bold text-secondary tracking-widest">{step.num}</span>
              <h3 className="font-heading font-bold text-lg text-white mt-1 mb-2">{step.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <MagneticButton
            href="#reservation"
            className="btn btn-accent btn-lg rounded-2xl text-white font-bold px-10 shadow-xl"
            id="process-cta"
          >
            Lancer mon projet aujourd&apos;hui
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
