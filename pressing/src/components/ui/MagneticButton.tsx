"use client";
// components/ui/MagneticButton.tsx
import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  id?: string;
}

export default function MagneticButton({
  children, className = "", strength = 0.3, onClick, href, type = "button", disabled, id,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    // Only on pointer: fine (desktop)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }, [x, y, strength]);

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-flex"
    >
      {href ? (
        <a href={href} className={className} id={id}>
          {children}
        </a>
      ) : (
        <button type={type} className={className} onClick={onClick} disabled={disabled} id={id}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return inner;
}
