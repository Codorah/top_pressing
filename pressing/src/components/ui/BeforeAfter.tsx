"use client";
// components/ui/BeforeAfter.tsx
import { useRef, useState, useCallback } from "react";
import SafeImage from "./SafeImage";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export default function BeforeAfter({ before, after, beforeAlt = "Avant", afterAlt = "Après", className = "" }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-2xl cursor-col-resize ${className}`}
      onMouseMove={(e) => move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      style={{ minHeight: 300 }}
    >
      {/* After */}
      <div className="absolute inset-0">
        <SafeImage src={after} alt={afterAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <span className="absolute top-4 right-4 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">Après</span>
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <SafeImage src={before} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Avant</span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4L2 9L6 14" stroke="#0B3A6F" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 4L16 9L12 14" stroke="#0B3A6F" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
