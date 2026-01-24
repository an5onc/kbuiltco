"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type DraggableElementProps = {
  children: React.ReactNode;
  className?: string;
  constraintsRef?: React.RefObject<HTMLElement>;
};

export function DraggableElement({
  children,
  className,
  constraintsRef,
}: DraggableElementProps) {
  const prefersReducedMotion = useReducedMotion();
  const fallbackRef = useRef(null);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={fallbackRef}
      drag
      dragConstraints={constraintsRef || fallbackRef}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      whileHover={{ scale: 1.02 }}
      className={cn("cursor-grab", className)}
    >
      {children}
    </motion.div>
  );
}

export function DraggableChip({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand backdrop-blur-sm",
          className
        )}
      >
        <span className="h-2 w-2 rounded-full bg-brand" />
        {label}
      </div>
    );
  }

  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      dragElastic={0.2}
      whileDrag={{ scale: 1.1, boxShadow: "0 0 20px rgba(175, 48, 45, 0.3)" }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "inline-flex cursor-grab items-center gap-2 rounded-full border border-brand/20 bg-white/80 px-4 py-2 text-sm font-medium text-brand shadow-lg backdrop-blur-sm",
        className
      )}
    >
      <motion.span
        className="h-2 w-2 rounded-full bg-brand"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {label}
    </motion.div>
  );
}
