"use client";
// components/sections/FinalCta.tsx
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { SITE } from "@/lib/content";

function Bubble({ cx, cy, r, delay }: { cx: number; cy: number; r: number; delay: number }) {
  return (
    <motion.circle
      cx={cx} cy={cy} r={r}
      fill="rgba(255,255,255,0.06)"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="1"
      animate={{ cy: [cy, cy - 30, cy], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function FinalCta() {
  return (
    <section className="py-20 sm:py-28 gradient-primary relative overflow-hidden">
      {/* Floating bubbles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <Bubble cx={80}  cy={80}  r={40} delay={0}   />
        <Bubble cx={300} cy={200} r={20} delay={1}   />
        <Bubble cx={600} cy={60}  r={60} delay={0.5} />
        <Bubble cx={900} cy={150} r={30} delay={2}   />
        <Bubble cx={200} cy={300} r={50} delay={1.5} />
        <Bubble cx={1100}cy={80}  r={35} delay={0.8} />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Passez à l&apos;action
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6"
        >
          Prêt à lancer votre pressing ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto"
        >
          Contactez-nous maintenant sur WhatsApp. Notre équipe vous répond rapidement et vous guide vers la solution la plus adaptée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <MagneticButton
            href={`https://wa.me/${SITE.whatsappEnv}?text=${encodeURIComponent("Bonjour, je souhaite lancer mon pressing. Pouvez-vous m'aider ?")}`}
            className="btn btn-accent btn-lg rounded-2xl text-white font-bold px-10 gap-3 shadow-2xl"
            id="final-cta-whatsapp"
          >
            <MessageCircle size={22} />
            Discuter sur WhatsApp
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
