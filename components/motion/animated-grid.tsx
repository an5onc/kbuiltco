"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedGridProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function AnimatedGrid({ className, variant = "light" }: AnimatedGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Grid Layer */}
      <div
        className={cn(
          "absolute inset-0",
          variant === "light" ? "bg-grid" : "bg-grid-dark"
        )}
      />

      {/* Animated Gradient Overlay */}
      {!prefersReducedMotion && (
        <div
          className={cn(
            "absolute inset-0 opacity-30",
            variant === "light"
              ? "bg-gradient-to-b from-transparent via-brand/5 to-transparent"
              : "bg-gradient-to-b from-transparent via-accent/5 to-transparent"
          )}
          style={{
            animation: "grid-flow 20s linear infinite",
            backgroundSize: "100% 200%",
          }}
        />
      )}

      {/* Noise Texture */}
      <div className="bg-noise absolute inset-0" />

      {/* Radial Fade at Edges */}
      <div
        className={cn(
          "absolute inset-0",
          variant === "light"
            ? "bg-gradient-radial from-transparent to-paper"
            : "bg-gradient-radial from-transparent to-ink"
        )}
        style={{
          background:
            variant === "light"
              ? "radial-gradient(ellipse at center, transparent 0%, var(--paper) 70%)"
              : "radial-gradient(ellipse at center, transparent 0%, var(--ink) 70%)",
        }}
      />
    </div>
  );
}
