"use client";

import { motion } from "framer-motion";
import { FloatyOrbs } from "@/components/motion/floaty-orbs";
import { AnimatedGrid } from "@/components/motion/animated-grid";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

export function PageHeader({
  title,
  subtitle,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-paper py-20 md:py-28",
        className
      )}
    >
      <AnimatedGrid />
      <FloatyOrbs count={2} />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              {subtitle}
            </p>
          )}
          <h1 className="mt-2">{title}</h1>
          {description && (
            <p className="mt-4 text-lg text-muted md:text-xl">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
