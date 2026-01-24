"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "brand" | "dark" | "light";
  className?: string;
};

export function CTASection({
  title = "Let's Launch Your Project",
  description = "Ready to build your dream home? Contact us today to schedule a consultation and take the first step toward making your vision a reality.",
  primaryCta = { label: "Get Started", href: "/contact" },
  secondaryCta = { label: "View Our Work", href: "/gallery" },
  variant = "brand",
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "section-padding relative overflow-hidden",
        variant === "brand" && "bg-brand text-white",
        variant === "dark" && "bg-ink text-white",
        variant === "light" && "bg-paper-dark text-ink",
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={cn(
            "absolute -right-20 -top-20 h-80 w-80 rounded-full blur-3xl",
            variant === "brand" && "bg-white",
            variant === "dark" && "bg-accent",
            variant === "light" && "bg-brand"
          )}
        />
        <div
          className={cn(
            "absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl",
            variant === "brand" && "bg-white",
            variant === "dark" && "bg-accent",
            variant === "light" && "bg-brand"
          )}
        />
      </div>

      <div className="container-site relative">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p
              className={cn(
                "mt-4 text-lg",
                variant === "brand" && "text-white/80",
                variant === "dark" && "text-white/70",
                variant === "light" && "text-muted"
              )}
            >
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  variant={variant === "light" ? "default" : "secondary"}
                  className={cn(
                    variant !== "light" && "bg-white text-ink hover:bg-white/90"
                  )}
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={cn(
                  variant === "brand" &&
                    "border-white/30 text-white hover:bg-white/10 hover:text-white",
                  variant === "dark" &&
                    "border-white/30 text-white hover:bg-white/10 hover:text-white",
                  variant === "light" && "border-ink/20 hover:bg-ink/5"
                )}
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
