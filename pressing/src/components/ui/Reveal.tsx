"use client";
// components/ui/Reveal.tsx
import { motion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const directionMap = {
  up:    { y: 32,  x: 0   },
  down:  { y: -32, x: 0   },
  left:  { y: 0,   x: 32  },
  right: { y: 0,   x: -32 },
};

export default function Reveal({ children, delay = 0, direction = "up", className = "" }: RevealProps) {
  const { x, y } = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
