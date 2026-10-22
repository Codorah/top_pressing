"use client";
// components/ui/SectionTitle.tsx
import Reveal from "./Reveal";

interface SectionTitleProps {
  surtitle?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({ surtitle, title, subtitle, center = true, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {surtitle && (
        <Reveal delay={0}>
          <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4 ${light ? "bg-white/20 text-white" : "bg-secondary/10 text-secondary"}`}>
            {surtitle}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4 ${light ? "text-white" : "text-primary"}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className={`max-w-2xl mx-auto text-base md:text-lg leading-relaxed ${light ? "text-white/80" : "text-neutral/70"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
