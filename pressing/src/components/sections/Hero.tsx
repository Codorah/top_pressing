"use client";
// components/sections/Hero.tsx
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Typewriter from "@/components/ui/Typewriter";
import MagneticButton from "@/components/ui/MagneticButton";
import SafeImage from "@/components/ui/SafeImage";
import { SITE, HERO_SLIDES, HERO_TYPEWRITER_WORDS, HERO_SUBTITLE } from "@/lib/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const surtitleRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(() => {
    if (reduced) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (surtitleRef.current) {
      tl.from(surtitleRef.current, { opacity: 0, y: 15, duration: 0.6 }, "+=0.1");
    }

    if (titleRef.current) {
      tl.from(titleRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.3");
    }

    if (subtitleRef.current) {
      tl.from(subtitleRef.current, { opacity: 0, y: 15, duration: 0.6 }, "-=0.3");
    }

    if (btnsRef.current) {
      tl.from(btnsRef.current, { opacity: 0, y: 15, duration: 0.5 }, "-=0.3");
    }

    if (badgesRef.current) {
      tl.from(badgesRef.current, { opacity: 0, scale: 0.9, duration: 0.5 }, "-=0.2");
    }
  }, { scope: containerRef });

  return (
    <section id="accueil" ref={containerRef} className="relative h-svh min-h-[600px] overflow-hidden">

      {/* Background carousel */}
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        loop
        className="absolute inset-0 h-full"
        speed={1200}
        allowTouchMove={!reduced}
      >
        {HERO_SLIDES.map((slide, idx) => (
          <SwiperSlide key={slide.id} className="relative h-full">
            <div className="absolute inset-0 ken-burns">
              <SafeImage
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={idx === 0}
              />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        {/* Surtitle */}
        <span
          ref={surtitleRef}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-4"
        >
          <span className="w-6 h-px bg-secondary" />
          {SITE.heroSurtitle}
          <span className="w-6 h-px bg-secondary" />
        </span>

        {/* Title */}
        <div ref={titleRef}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-2">
            <span className="block">Blanchisserie pro</span>
          </h1>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#F5A524] min-h-[1.4em] flex items-center justify-center">
            <Typewriter words={HERO_TYPEWRITER_WORDS} />
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="max-w-xl text-white/80 text-sm sm:text-base md:text-lg mt-6 leading-relaxed"
        >
          {HERO_SUBTITLE}
        </p>

        {/* Buttons */}
        <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 mt-8">
          <MagneticButton
            href="#services"
            id="hero-cta-services"
            className="btn btn-accent btn-lg rounded-2xl font-semibold text-white px-8 shadow-xl"
          >
            Découvrir nos solutions
          </MagneticButton>
          <a
            href="#reservation"
            className="btn btn-outline btn-lg rounded-2xl font-semibold text-white border-white/50 hover:bg-white/20 hover:border-white px-8"
          >
            Lancer mon projet
          </a>
        </div>

        {/* Badges */}
        <div ref={badgesRef} className="absolute bottom-24 sm:bottom-32 left-4 sm:left-12 flex flex-col gap-3">
          <motion.div
            animate={reduced ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="glass-dark rounded-2xl px-4 py-3 flex items-center gap-3"
          >
            <span className="text-2xl font-heading font-extrabold text-accent">500+</span>
            <span className="text-xs text-white/80">Clients<br />satisfaits</span>
          </motion.div>
          <motion.div
            animate={reduced ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="glass-dark rounded-2xl px-4 py-3 flex items-center gap-3"
          >
            <span className="text-2xl font-heading font-extrabold text-accent">10+</span>
            <span className="text-xs text-white/80">Pressings<br />créés</span>
          </motion.div>
        </div>
      </div>

      {/* Custom pagination */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2" />

      {/* Scroll indicator */}
      <motion.div
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 right-8 z-20 text-white/60 flex flex-col items-center gap-1 text-xs"
      >
        <span className="rotate-90 text-[10px] tracking-widest">SCROLL</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
