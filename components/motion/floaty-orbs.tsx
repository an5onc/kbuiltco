"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OrbConfig = {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: "brand" | "accent";
};

type FloatyOrbsProps = {
  count?: number;
  className?: string;
};

export function FloatyOrbs({ count = 3, className }: FloatyOrbsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [orbs, setOrbs] = useState<OrbConfig[]>([]);

  useEffect(() => {
    // Generate orb configurations on mount (client-side only)
    const generated: OrbConfig[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 60 + Math.random() * 80,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      color: Math.random() > 0.5 ? "brand" : "accent",
    }));
    setOrbs(generated);
  }, [count]);

  if (prefersReducedMotion || orbs.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={cn(
            "absolute rounded-full blur-3xl",
            orb.color === "brand" ? "bg-brand/10" : "bg-accent/10"
          )}
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
