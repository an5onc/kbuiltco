"use client";

import Link from "next/link";
import { ArrowUpRight, Home, Building2, Hammer, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

const defaultServices = [
  {
    title: "Custom Home Building",
    description:
      "Build your dream home from the ground up with our expert team. We handle everything from design to final walkthrough.",
    href: "/services/home-building",
    icon: Home,
    featured: true,
  },
  {
    title: "Commercial Construction",
    description:
      "Professional commercial construction services for businesses throughout Northern Colorado.",
    href: "/commercial",
    icon: Building2,
    featured: false,
  },
  {
    title: "Renovations & Additions",
    description:
      "Transform your existing space with thoughtful renovations and additions that enhance your lifestyle.",
    href: "/renovations-and-additions",
    icon: Hammer,
    featured: false,
  },
  {
    title: "Custom Elevators",
    description:
      "We now install custom home elevators - a unique feature that adds both luxury and accessibility.",
    href: "/services",
    icon: Wrench,
    featured: true,
    badge: "New",
  },
];

type ServicesGridProps = {
  title?: string;
  subtitle?: string;
  services?: typeof defaultServices;
  className?: string;
};

export function ServicesGrid({
  title = "Our Services",
  subtitle = "Comprehensive building solutions for every need",
  services = defaultServices,
  className,
}: ServicesGridProps) {
  return (
    <section className={cn("section-padding bg-paper-dark", className)}>
      <div className="container-site">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2>{title}</h2>
            <p className="mt-4 text-lg text-muted">{subtitle}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="block h-full">
                <Card
                  hover
                  className={cn(
                    "h-full",
                    service.featured && "border-brand/20 bg-gradient-to-br from-white to-brand/5"
                  )}
                >
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <service.icon className="h-6 w-6" />
                      </div>
                      {service.badge && (
                        <Badge variant="default">{service.badge}</Badge>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 flex-1 text-muted">{service.description}</p>

                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand">
                      Learn more
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
