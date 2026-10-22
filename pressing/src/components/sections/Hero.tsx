"use client";
// components/sections/Hero.tsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Typewriter from "@/components/ui/Typewriter";
import MagneticButton from "@/components/ui/MagneticButton";
import SafeImage from "@/components/ui/SafeImage";
import { SITE, HERO_SLIDES, HERO_TYPEWRITER_WORDS, HERO_SUBTITLE } from "@/lib/content";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="accueil" ref={containerRef} className="relative h-svh min-h-[620px] overflow-hidden bg-[#040E1F]">
      {/* Background carousel */}
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        loop
        className="absolute inset-0 h-full w-full z-0"
        speed={1200}
      >
        {HERO_SLIDES.map((slide, idx) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div className="absolute inset-0 ken-burns">
              <SafeImage
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover brightness-[0.65] contrast-[1.05]"
                sizes="100vw"
                priority={idx === 0}
              />
            </div>
            {/* Dark overlays for high contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#040E1F]/90 via-[#0B3A6F]/80 to-[#040E1F]/95" />
            <div className="absolute inset-0 bg-black/40" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Foreground content - explicitly on top (z-30) */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-white px-4 pointer-events-none">
        {/* Surtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-4 pointer-events-auto"
        >
          <span className="w-6 h-px bg-secondary" />
          {SITE.heroSurtitle}
          <span className="w-6 h-px bg-secondary" />
        </motion.div>

        {/* Title & Autowrite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pointer-events-auto max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-2 text-white drop-shadow-lg">
            <span className="block">Blanchisserie pro</span>
          </h1>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#F5A524] min-h-[1.4em] flex items-center justify-center drop-shadow-md">
            <Typewriter words={HERO_TYPEWRITER_WORDS} />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-xl text-white/90 text-sm sm:text-base md:text-lg mt-6 leading-relaxed pointer-events-auto drop-shadow-sm"
        >
          {HERO_SUBTITLE}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 pointer-events-auto"
        >
          <MagneticButton
            href="#services"
            id="hero-cta-services"
            className="btn btn-accent btn-lg rounded-2xl font-semibold text-white px-8 shadow-2xl hover:scale-105 transition-transform"
          >
            Découvrir nos solutions
          </MagneticButton>
          <a
            href="#reservation"
            className="btn btn-outline btn-lg rounded-2xl font-semibold text-white border-white/60 hover:bg-white/20 hover:border-white px-8"
          >
            Lancer mon projet
          </a>
        </motion.div>

        {/* Badges */}

      </div>

      {/* Custom pagination */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2" />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 right-8 z-40 text-white/70 flex flex-col items-center gap-1 text-xs pointer-events-none"
      >
        <span className="rotate-90 text-[10px] tracking-widest">SCROLL</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
