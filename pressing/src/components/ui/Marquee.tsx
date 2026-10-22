"use client";
// components/ui/Marquee.tsx
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "ltr" | "rtl";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 30,
  direction = "ltr",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={`flex flex-wrap gap-8 justify-center ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden marquee-mask ${pauseOnHover ? "marquee-wrap" : ""} ${className}`}
    >
      <div
        className={`marquee-track ${direction === "rtl" ? "reverse" : ""}`}
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
