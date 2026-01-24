"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

type IntroBlockProps = {
  eyebrow?: string;
  title?: string;
  content?: string;
  className?: string;
};

export function IntroBlock({
  eyebrow = "Welcome to Kiefer Built",
  title = "Building Dream Homes in Northern Colorado",
  content = `For over 25 years, Kiefer Built Contracting has been the trusted name in custom home building across Northern Colorado. We believe that a home should be more than just a structure—it should be a sanctuary where memories are made and futures are shaped.

Our team combines time-honored craftsmanship with modern building techniques to deliver homes that stand the test of time. From initial concept to final walkthrough, we partner with you every step of the way to ensure your vision becomes reality.

Whether you're dreaming of a custom home, planning a renovation, or exploring commercial construction, our experienced team brings dedication, expertise, and attention to detail to every project we undertake.`,
  className,
}: IntroBlockProps) {
  return (
    <section className={cn("section-padding bg-white", className)}>
      <div className="container-site">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              {eyebrow}
            </p>
            <h2 className="mt-4">{title}</h2>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
              {content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
