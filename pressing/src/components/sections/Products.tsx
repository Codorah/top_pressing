"use client";
// components/sections/Products.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Waves, Wind, Zap, LayoutPanelLeft, FlaskConical, Droplets, Package } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import MagneticButton from "@/components/ui/MagneticButton";
import { PRODUCTS } from "@/lib/content";

const ICONS: Record<string, React.ReactNode> = {
  Waves:          <Waves size={24} />,
  Wind:           <Wind size={24} />,
  Zap:            <Zap size={24} />,
  LayoutPanelLeft:<LayoutPanelLeft size={24} />,
  FlaskConical:   <FlaskConical size={24} />,
  Droplets:       <Droplets size={24} />,
  Package:        <Package size={24} />,
};

export default function Products({ onSelectService }: { onSelectService?: (s: string) => void }) {
  return (
    <section id="produits" className="py-20 sm:py-28 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <SectionTitle
          surtitle="Boutique & Équipements"
          title="Machines & Consommables"
          subtitle="Une gamme complète d'équipements et de produits professionnels pour votre pressing."
        />
      </div>

      <Swiper
        modules={[FreeMode]}
        freeMode
        slidesPerView="auto"
        spaceBetween={20}
        className="!px-4 sm:!px-8 lg:!px-16"
      >
        {PRODUCTS.map((prod) => (
          <SwiperSlide key={prod.id} style={{ width: "auto" }}>
            <div className="w-56 bg-white rounded-3xl p-6 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center text-white">
                {ICONS[prod.icon]}
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary text-base mb-1">{prod.name}</h3>
                <p className="text-xs text-neutral/60 leading-relaxed">{prod.desc}</p>
              </div>
              <MagneticButton
                className="btn btn-outline btn-primary btn-sm rounded-xl text-xs font-semibold mt-auto"
                onClick={() => {
                  onSelectService?.("Équipements & Produits");
                  document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
                }}
                id={`product-cta-${prod.id}`}
              >
                Demander un devis
              </MagneticButton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
