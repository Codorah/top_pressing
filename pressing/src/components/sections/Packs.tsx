"use client";
// components/sections/Packs.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Check, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import MagneticButton from "@/components/ui/MagneticButton";
import { PACKS } from "@/lib/content";

export default function Packs({ onSelectService }: { onSelectService?: (s: string) => void }) {
  const handleRequest = (service: string) => {
    onSelectService?.(service);
    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packs" className="py-20 sm:py-28 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Démarrez votre pressing"
          title="Nos Packs de Démarrage"
          subtitle="Équipement, installation, formation et stock initial — tout inclus pour lancer votre activité sereinement."
        />

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1.1}
          centeredSlides
          spaceBetween={24}
          autoplay={{ delay: 4000, disableOnInteraction: true, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640:  { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
          className="!pb-12"
        >
          {PACKS.map((pack) => (
            <SwiperSlide key={pack.id}>
              <div className={`relative rounded-3xl p-8 h-full flex flex-col border-2 transition-all duration-300 ${
                pack.popular
                  ? "border-accent bg-white shadow-2xl scale-[1.02]"
                  : "border-base-300 bg-white shadow-md hover:shadow-xl"
              }`}>
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star size={12} fill="currentColor" />
                    Populaire
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`font-heading font-extrabold text-2xl mb-1 ${pack.popular ? "text-accent" : "text-primary"}`}>
                    {pack.name}
                  </h3>
                  <p className="text-3xl font-heading font-bold text-neutral">{pack.price}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pack.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-neutral/70">
                      <Check size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  className={`btn w-full rounded-2xl font-semibold ${pack.popular ? "btn-accent text-white" : "btn-outline btn-primary"}`}
                  onClick={() => handleRequest(pack.service)}
                  id={`pack-cta-${pack.id}`}
                >
                  {pack.cta}
                </MagneticButton>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
