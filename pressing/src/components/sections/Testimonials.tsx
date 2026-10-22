"use client";
// components/sections/Testimonials.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 sm:py-28 bg-base-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Ils nous font confiance"
          title="Témoignages"
          subtitle="Ce que nos clients disent de leur expérience avec Top Pressing."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="!pb-12"
          breakpoints={{ 768: { slidesPerView: 1 } }}
        >
          {/* TODO: remplacer par de vrais témoignages */}
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-base-300 relative">
                <Quote size={48} className="text-secondary/20 absolute top-6 right-8" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <blockquote className="text-neutral/80 text-base md:text-lg leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary">{t.name}</p>
                    <p className="text-xs text-neutral/60">{t.structure} — {t.city}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
