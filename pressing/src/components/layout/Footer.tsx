// components/layout/Footer.tsx
import { ExternalLink, Share2, MessageCircle, Waves } from "lucide-react";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#040E1F] text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10">
                <Image src="/logo.png" alt="Top Pressing" fill className="object-contain" sizes="40px" />
              </div>
              <span className="font-heading font-bold text-xl text-white">Top Pressing</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-white/60 mb-6">
              {SITE.footerText}
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-secondary/80 flex items-center justify-center transition-colors" rel="noopener noreferrer">
                <ExternalLink size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-secondary/80 flex items-center justify-center transition-colors">
                <Share2 size={16} />
              </a>
              <a href={`https://wa.me/${SITE.whatsappEnv}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366]/80 flex items-center justify-center transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">Services</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-secondary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contact</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <Waves size={14} className="mt-0.5 text-secondary flex-shrink-0" />
                <span>Lomé, Togo</span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsappEnv}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <a
              href="#reservation"
              className="mt-6 inline-block btn btn-accent btn-sm rounded-xl text-white font-semibold"
            >
              Réservation
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>{SITE.copyright}</p>
          <p>Fait avec ♥ à Lomé, Togo</p>
        </div>
      </div>
    </footer>
  );
}
