"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { DraggableChip } from "@/components/motion/draggable-element";
import { FloatyOrbs } from "@/components/motion/floaty-orbs";
import { AnimatedGrid } from "@/components/motion/animated-grid";
import { cn } from "@/lib/utils";

type HeroProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showDraggable?: boolean;
  className?: string;
};

export function Hero({
  title = "Building Dreams, Shaping Futures",
  subtitle = "Northern Colorado's Premier Home Builder",
  description = "Designing and building custom homes, renovations, and commercial projects for over 25 years. Where craftsmanship meets innovation.",
  primaryCta = { label: "Start Your Project", href: "/contact" },
  secondaryCta = { label: "View Our Work", href: "/gallery" },
  showDraggable = true,
  className,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative min-h-[90vh] flex items-center overflow-hidden bg-paper",
        className
      )}
    >
      {/* Background Effects */}
      <AnimatedGrid />
      <FloatyOrbs count={4} />

      {/* Content */}
      <div className="container-site relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Draggable Chip */}
          {showDraggable && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 flex justify-center"
            >
              <DraggableChip label="25+ Years of Excellence" />
            </motion.div>
          )}

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-semibold uppercase tracking-widest text-brand"
          >
            {subtitle}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-balance"
          >
            <span className="text-ink">{title}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Button asChild size="lg">
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
            <Button asChild size="lg" variant="outline">
              <Link href={secondaryCta.href}>
                <Play className="mr-2 h-4 w-4" />
                {secondaryCta.label}
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-ink/5 to-ink/10 shadow-2xl">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-brand/10 flex items-center justify-center">
                  <Play className="h-8 w-8 text-brand" />
                </div>
                <p className="mt-4 text-sm text-muted">
                  TODO: Hero image/video placeholder
                </p>
              </div>
            </div>
            {/* Decorative corners */}
            <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-brand/30" />
            <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-brand/30" />
            <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-brand/30" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-brand/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
