import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Premium cabinetry and products available through Kiefer Built Contracting. Featuring Northpoint Cabinetry for your custom home.",
};

const cabinetryStyles = [
  {
    name: "Traditional",
    description: "Classic raised panel designs with timeless appeal and elegant detailing.",
  },
  {
    name: "Transitional",
    description: "The perfect blend of traditional and contemporary for versatile design.",
  },
  {
    name: "Modern",
    description: "Clean lines and minimalist aesthetics for a sleek, contemporary look.",
  },
  {
    name: "Rustic",
    description: "Natural textures and warm finishes that bring warmth to any space.",
  },
];

const cabinetryFeatures = [
  "Custom sizing and configurations",
  "Soft-close hinges and drawer slides",
  "Solid wood construction",
  "Wide variety of finishes and stains",
  "Custom storage solutions",
  "Lifetime warranty available",
  "Professional installation",
  "Design consultation included",
];

const applications = [
  {
    title: "Kitchen Cabinets",
    description: "The heart of your home deserves exceptional cabinetry. From wall cabinets to islands, we design kitchens that are both beautiful and functional.",
  },
  {
    title: "Bathroom Vanities",
    description: "Custom vanities and storage solutions that maximize space while adding elegance to your bathrooms.",
  },
  {
    title: "Built-In Storage",
    description: "Custom closet systems, entertainment centers, mudroom cubbies, and home office solutions.",
  },
  {
    title: "Laundry & Utility",
    description: "Practical and organized spaces with custom cabinetry designed for utility rooms and laundry areas.",
  },
];

export default function CatalogItemsPage() {
  return (
    <>
      <PageHeader
        title="Premium Cabinetry"
        subtitle="Our Products"
        description="We partner with Northpoint Cabinetry to bring you exceptional quality and craftsmanship for your custom home."
      />

      {/* Featured Partner */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-paper p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <Badge variant="default" className="mb-4">Featured Partner</Badge>
                  <h2 className="text-3xl font-bold md:text-4xl">Northpoint Cabinetry</h2>
                  <p className="mt-4 max-w-2xl text-lg text-muted">
                    Northpoint Cabinetry offers high-quality, American-made cabinets with endless customization options.
                    As an authorized dealer, we bring their exceptional craftsmanship to every Kiefer Built home.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button asChild>
                      <a
                        href="https://northpointcabinetry.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Northpoint Cabinetry
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">
                        Schedule a Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cabinetry Styles */}
      <section className="section-padding bg-paper-dark">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Cabinet Styles</h2>
              <p className="mt-4 text-lg text-muted">
                From timeless traditional to sleek modern designs, find the perfect style for your home.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cabinetryStyles.map((style) => (
              <StaggerItem key={style.name}>
                <Card hover className="h-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand/10 to-brand/5">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-2xl font-bold text-brand/30">{style.name.charAt(0)}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{style.name}</h3>
                    <p className="mt-2 text-sm text-muted">{style.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Applications</h2>
              <p className="mt-4 text-lg text-muted">
                Custom cabinetry solutions for every room in your home.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2">
            {applications.map((app) => (
              <StaggerItem key={app.title}>
                <div className="rounded-xl border border-border bg-paper p-6">
                  <h3 className="text-xl font-semibold">{app.title}</h3>
                  <p className="mt-2 text-muted">{app.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-ink text-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-white">What's Included</h2>
                <p className="mt-4 text-lg text-white/70">
                  Every cabinetry project includes these premium features and services.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
              {cabinetryFeatures.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Design Your Cabinetry?"
        description="Schedule a consultation with our team to explore options and start planning your custom cabinetry."
        primaryCta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/gallery" }}
      />
    </>
  );
}
