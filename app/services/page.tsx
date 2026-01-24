import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Building2, Hammer, Wrench, PaintBucket, Ruler } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive home building services from Kiefer Built Contracting - custom homes, renovations, additions, and commercial construction.",
};

const services = [
  {
    icon: Home,
    title: "Custom Home Building",
    description:
      "Build your dream home from the ground up. Our team handles everything from initial design consultation to final walkthrough, ensuring every detail reflects your vision and lifestyle.",
    features: [
      "Complete design-build services",
      "Energy-efficient construction",
      "Premium materials and finishes",
      "Full warranty coverage",
    ],
    href: "/services/home-building",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Professional commercial construction services for businesses throughout Northern Colorado. From office buildings to retail spaces, we deliver quality on time and on budget.",
    features: [
      "Office buildings",
      "Retail spaces",
      "Industrial facilities",
      "Tenant improvements",
    ],
    href: "/commercial",
  },
  {
    icon: Hammer,
    title: "Renovations & Additions",
    description:
      "Transform your existing space with thoughtful renovations and additions. Whether you need more room to grow or want to update your home's look, we make it happen.",
    features: [
      "Kitchen & bath remodels",
      "Room additions",
      "Basement finishing",
      "Whole-home renovations",
    ],
    href: "/renovations-and-additions",
  },
  {
    icon: Wrench,
    title: "Custom Elevators",
    description:
      "Add luxury, accessibility, and home value with a custom residential elevator. We offer expert installation seamlessly integrated into new builds or existing homes.",
    features: [
      "Residential elevators",
      "Accessibility solutions",
      "New construction integration",
      "Retrofit installations",
    ],
    href: "/services",
    badge: "New",
  },
  {
    icon: PaintBucket,
    title: "Interior Design Coordination",
    description:
      "Work with our design team to select finishes, fixtures, and materials that bring your vision to life while staying within budget.",
    features: [
      "Finish selections",
      "Color consultations",
      "Fixture coordination",
      "Material sourcing",
    ],
    href: "/services",
  },
  {
    icon: Ruler,
    title: "Project Management",
    description:
      "Our dedicated project managers ensure your build stays on track with clear communication, detailed scheduling, and proactive problem-solving.",
    features: [
      "Dedicated project manager",
      "Real-time portal access",
      "Regular progress updates",
      "Budget tracking",
    ],
    href: "/process",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="What We Do"
        description="Comprehensive building solutions tailored to your needs, from custom homes to commercial projects."
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card hover className="h-full">
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <service.icon className="h-7 w-7" />
                      </div>
                      {service.badge && (
                        <Badge variant="default">{service.badge}</Badge>
                      )}
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-muted">{service.description}</p>

                    <ul className="mt-6 flex-1 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button asChild variant="outline" className="mt-6">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Preview */}
      <section className="section-padding bg-paper-dark">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2>How We Work</h2>
              <p className="mt-4 text-lg text-muted">
                Our proven process ensures a smooth journey from initial consultation to handing over your keys. Learn more about how we turn your vision into reality.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/process">
                  View Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
