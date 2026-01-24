"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

type FeatureHighlightProps = {
  badge?: string;
  title?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  variant?: "left" | "right";
  className?: string;
};

export function FeatureHighlight({
  badge = "Did You Hear?",
  title = "We Now Install Custom Elevators",
  description = "Add luxury, accessibility, and increased home value with a custom residential elevator. Our team now offers expert installation of premium home elevators, seamlessly integrated into new builds or existing homes.",
  cta = { label: "Learn More", href: "/services" },
  variant = "left",
  className,
}: FeatureHighlightProps) {
  return (
    <section className={cn("section-padding bg-ink text-white", className)}>
      <div className="container-site">
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2",
            variant === "right" && "lg:grid-flow-dense"
          )}
        >
          {/* Content */}
          <ScrollReveal
            direction={variant === "left" ? "left" : "right"}
            className={cn(variant === "right" && "lg:col-start-2")}
          >
            <Badge variant="outline" className="border-brand bg-brand/10 text-brand">
              <Sparkles className="mr-1 h-3 w-3" />
              {badge}
            </Badge>

            <h2 className="mt-6 text-white">{title}</h2>

            <p className="mt-4 text-lg text-white/70">{description}</p>

            <Button asChild className="mt-8" variant="outline">
              <Link href={cta.href} className="border-white/30 text-white hover:bg-white/10">
                {cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>

          {/* Image Placeholder */}
          <ScrollReveal
            direction={variant === "left" ? "right" : "left"}
            className={cn(variant === "right" && "lg:col-start-1")}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10">
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-brand/20 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-brand" />
                  </div>
                  <p className="mt-4 text-sm text-white/50">
                    TODO: Feature image
                  </p>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
