"use client";
// components/sections/Partners.tsx
import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import SectionTitle from "@/components/ui/SectionTitle";
import { PARTNERS } from "@/lib/content";
import { Hotel } from "lucide-react";
import { useState } from "react";

function PartnerCard({ partner }: { partner: typeof PARTNERS[0] }) {
  const [err, setErr] = useState(false);
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm border border-base-300 hover:border-secondary/50 transition-all duration-300 hover:shadow-md group cursor-default min-w-[200px] justify-center">
      {!err ? (
        <div className="relative w-20 h-20 grayscale group-hover:grayscale-0 transition-all duration-300">
          <Image
            src={`/images-logo-partenaires/${partner.logo.split("/").pop()}`}
            alt={partner.name}
            fill
            className="object-contain"
            sizes="48px"
            onError={() => setErr(true)}
          />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Hotel size={20} />
        </div>
      )}

    </div>
  );
}

export default function Partners() {
  return (
    <section id="partenaires" className="py-16 sm:py-20 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <SectionTitle
          surtitle="Nos partenaires"
          title="Ils nous font confiance"
          subtitle="Des établissements hôteliers de référence à Lomé nous confient leur blanchisserie."
        />
      </div>
      <Marquee speed={25} pauseOnHover>
        {PARTNERS.map((p) => (
          <PartnerCard key={p.id} partner={p} />
        ))}
      </Marquee>
    </section>
  );
}
