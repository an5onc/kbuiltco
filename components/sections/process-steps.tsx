"use client";

import { CheckCircle2, Users, Compass, Home } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

const defaultSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with a detailed consultation to understand your vision, requirements, and budget. Our team works closely with you to outline the scope of your project.",
    icon: Users,
  },
  {
    number: "02",
    title: "Customer Portal",
    description:
      "Access our Buildertrend customer portal to track progress, communicate with our team, and stay updated on every milestone of your project.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Final Walkthrough",
    description:
      "Before handing over the keys, we conduct a comprehensive walkthrough to ensure every detail meets our standards and your expectations.",
    icon: Home,
  },
];

type ProcessStepsProps = {
  title?: string;
  subtitle?: string;
  steps?: typeof defaultSteps;
  className?: string;
};

export function ProcessSteps({
  title = "Our Process",
  subtitle = "A seamless journey from concept to completion",
  steps = defaultSteps,
  className,
}: ProcessStepsProps) {
  return (
    <section className={cn("section-padding bg-white", className)}>
      <div className="container-site">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2>{title}</h2>
            <p className="mt-4 text-lg text-muted">{subtitle}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="group relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-brand/20 to-transparent md:block" />
                )}

                <div className="relative rounded-2xl border border-border bg-white p-8 transition-all hover:border-brand/20 hover:shadow-lg">
                  {/* Step Number */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="text-4xl font-bold text-brand/20">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-muted">{step.description}</p>

                  {/* Checkmark */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-brand">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Quality Assured</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
