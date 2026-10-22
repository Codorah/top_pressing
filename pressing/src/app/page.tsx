"use client";
// src/app/page.tsx — Page principale assemblant toutes les sections
import { useState } from "react";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import Packs from "@/components/sections/Packs";
import Process from "@/components/sections/Process";
import Training from "@/components/sections/Training";
import Hotels from "@/components/sections/Hotels";
import Realisations from "@/components/sections/Realisations";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Booking from "@/components/sections/Booking";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };

  return (
    <>
      {/* 1 — Hero */}
      <Hero />

      {/* 2 — Stats */}
      <Stats />

      {/* 3 — Partenaires */}
      <Partners />

      {/* 4 — Services */}
      <Services onSelectService={handleSelectService} />

      {/* 5 — Packs */}
      <Packs onSelectService={handleSelectService} />

      {/* 6 — Process */}
      <Process />

      {/* 7 — Formation */}
      <Training />

      {/* 8 — Hôtels */}
      <Hotels onSelectService={handleSelectService} />

      {/* 9 — Réalisations */}
      <Realisations />

      {/* 10 — Produits */}
      <Products onSelectService={handleSelectService} />

      {/* 11 — À propos */}
      <About />

      {/* 12 — Témoignages */}
      <Testimonials />

      {/* 13 — FAQ */}
      <Faq />

      {/* 14 — Réservation */}
      <Booking selectedService={selectedService} />

      {/* 15 — CTA Final */}
      <FinalCta />
    </>
  );
}
