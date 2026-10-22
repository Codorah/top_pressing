// components/sections/Stats.tsx
"use client";
import { Users, Building2, Hotel } from "lucide-react";
import Counter from "@/components/ui/Counter";
import { STATS } from "@/lib/content";

const ICONS: Record<string, React.ReactNode> = {
  Users:     <Users size={28} />,
  Building2: <Building2 size={28} />,
  Hotel:     <Hotel size={28} />,
};

export default function Stats() {
  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="glass rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/60">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-base-300">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center py-4 sm:py-0 sm:px-8 gap-3">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white mb-1">
                {ICONS[stat.icon]}
              </div>
              <div className="text-4xl font-heading font-extrabold text-primary">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-medium text-neutral/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
