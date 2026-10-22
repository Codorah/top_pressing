"use client";
// components/layout/Navbar.tsx
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/content";
import MagneticButton from "@/components/ui/MagneticButton";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 40);
    setHidden(y > lastY && y > 100);
    setLastY(y);
  }, [lastY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "glass shadow-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#accueil"); }}
            className="flex items-center gap-3"
            aria-label={SITE.name}
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden">
              <Image src="/logo.png" alt={`${SITE.name} logo`} fill className="object-contain" sizes="40px" />
            </div>
            <span className={clsx(
              "font-heading font-bold text-lg hidden sm:block transition-colors duration-300",
              scrolled ? "text-primary" : "text-white"
            )}>
              Top Pressing
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  className={clsx(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/20",
                    scrolled ? "text-primary hover:text-secondary" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <MagneticButton
              href="#reservation"
              className="btn btn-accent btn-sm rounded-xl text-white font-semibold px-5"
              onClick={() => handleLinkClick("#reservation")}
            >
              Réservation
            </MagneticButton>
          </div>

          {/* Mobile burger */}
          <button
            className={clsx("lg:hidden p-2 rounded-xl transition-colors", scrolled ? "text-primary" : "text-white")}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <ul className="flex flex-col items-center gap-2 w-full px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 + 0.1, ease: "easeOut" }}
                  className="w-full"
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className="block text-white text-2xl font-heading font-semibold py-4 text-center hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.07 + 0.1 }}
                className="mt-4"
              >
                <a
                  href="#reservation"
                  onClick={(e) => { e.preventDefault(); handleLinkClick("#reservation"); }}
                  className="btn btn-accent btn-lg rounded-2xl text-white font-semibold px-10"
                >
                  Réservation
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
