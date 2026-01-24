import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Home, Shield, Zap, Heart } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Custom Home Building",
  description:
    "Build your dream home in Northern Colorado with Kiefer Built Contracting. Custom home building from design to completion.",
};

const benefits = [
  {
    icon: Home,
    title: "Fully Custom Design",
    description:
      "Every home is unique to you. Work with our team to design a home that perfectly fits your lifestyle, from floor plan to finishes.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "We stand behind our work with comprehensive warranties and use only premium materials from trusted suppliers.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description:
      "Modern building techniques and energy-efficient systems reduce your utility bills and environmental footprint.",
  },
  {
    icon: Heart,
    title: "Built with Care",
    description:
      "Our craftsmen take pride in every detail, treating your home as if it were their own.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We meet to discuss your vision, needs, budget, and timeline. This is where your dream home begins to take shape.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Work with our design team to finalize floor plans, select materials, and create detailed specifications.",
  },
  {
    step: "03",
    title: "Permitting & Preparation",
    description:
      "We handle all permits and site preparation, keeping you informed at every step.",
  },
  {
    step: "04",
    title: "Construction",
    description:
      "Watch your home come to life with regular updates through our customer portal and site visits.",
  },
  {
    step: "05",
    title: "Final Walkthrough",
    description:
      "We conduct a comprehensive walkthrough to ensure every detail meets our standards and your expectations.",
  },
  {
    step: "06",
    title: "Move-In Day",
    description:
      "Receive your keys and begin making memories in your new custom home.",
  },
];

const includedFeatures = [
  "Custom floor plan design",
  "Full architectural drawings",
  "Interior design consultation",
  "Premium appliance packages",
  "Energy-efficient windows & insulation",
  "Smart home pre-wiring",
  "Landscaping design consultation",
  "2-year warranty",
];

export default function HomeBuildingPage() {
  return (
    <>
      <PageHeader
        title="Custom Home Building"
        subtitle="Build Your Dream"
        description="From vision to reality, we'll guide you through building the home you've always imagined."
      />

      {/* Hero Content */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-ink/5 to-ink/10">
                {/* TODO: Replace with actual home build photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm text-muted">TODO: Custom home showcase image</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2>Your Vision, Our Expertise</h2>
              <p className="mt-4 text-lg text-muted">
                Building a custom home is one of life's greatest investments—and it should be one of its greatest joys. At Kiefer Built, we combine decades of expertise with a genuine passion for craftsmanship to make your dream home a reality.
              </p>
              <p className="mt-4 text-muted">
                From the first consultation to handing over your keys, our team is with you every step of the way. We believe in transparent communication, meticulous attention to detail, and building relationships that last long after the final nail is driven.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-paper-dark">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Why Choose Kiefer Built</h2>
              <p className="mt-4 text-lg text-muted">
                What sets us apart in custom home building
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Our Building Process</h2>
              <p className="mt-4 text-lg text-muted">
                A clear, proven process for building your custom home
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <Card className="h-full border-l-4 border-l-brand">
                  <CardContent className="p-6">
                    <span className="text-3xl font-bold text-brand/30">
                      {step.step}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted">{step.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-ink text-white">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <h2 className="text-white">What's Included</h2>
              <p className="mt-4 text-lg text-white/70">
                Every Kiefer Built home comes with premium features and services as standard.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {includedFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10">
                {/* TODO: Replace with actual interior photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm text-white/50">TODO: Interior showcase image</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Dream Home?"
        description="Schedule a consultation with our team to discuss your vision and get started."
      />
    </>
  );
}
