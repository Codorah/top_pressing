"use client";
// components/ui/Counter.tsx
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({ end, suffix = "", duration = 2, className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (reduced) {
      ref.current.textContent = `${end}${suffix}`;
      return;
    }

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end,
        duration,
        ease: "power3.out",
        snap: { val: 1 },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
        onUpdate() {
          if (ref.current) {
            ref.current.textContent = `${Math.round(obj.val)}${suffix}`;
          }
        },
        onComplete() {
          if (ref.current) {
            ref.current.textContent = `${end}${suffix}`;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [end, suffix, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
