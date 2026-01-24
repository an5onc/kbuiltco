import { Metadata } from "next";
import { Building2, Store, Warehouse, Briefcase } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Commercial Construction",
  description:
    "Professional commercial construction services from Kiefer Built Contracting in Northern Colorado.",
};

const services = [
  {
    icon: Building2,
    title: "Office Buildings",
    description: "Professional office spaces designed for productivity and employee comfort.",
  },
  {
    icon: Store,
    title: "Retail Spaces",
    description: "Attractive retail environments that enhance customer experience and drive sales.",
  },
  {
    icon: Warehouse,
    title: "Industrial Facilities",
    description: "Functional industrial buildings built for efficiency and durability.",
  },
  {
    icon: Briefcase,
    title: "Tenant Improvements",
    description: "Custom buildouts and renovations for existing commercial spaces.",
  },
];

// TODO: Replace with actual projects
const projects = [
  {
    id: 1,
    title: "Professional Office Building",
    location: "Windsor, CO",
    sqft: "12,000",
    year: 2023,
    type: "Office",
  },
  {
    id: 2,
    title: "Retail Strip Center",
    location: "Greeley, CO",
    sqft: "8,500",
    year: 2022,
    type: "Retail",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    location: "Loveland, CO",
    sqft: "25,000",
    year: 2022,
    type: "Industrial",
  },
];

export default function CommercialPage() {
  return (
    <>
      <PageHeader
        title="Commercial Construction"
        subtitle="Our Work"
        description="Professional commercial construction services for businesses throughout Northern Colorado."
      />

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Commercial Services</h2>
              <p className="mt-4 text-lg text-muted">
                From ground-up construction to tenant improvements, we deliver quality commercial spaces.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card hover className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted">{service.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-paper-dark">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-center">Featured Commercial Projects</h2>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <Card hover>
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-ink/5 to-ink/10">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-3xl font-bold text-brand/20">
                        {project.id}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted">{project.location}</p>
                      </div>
                      <Badge variant="outline">{project.type}</Badge>
                    </div>
                    <div className="mt-4 flex gap-4 text-sm">
                      <span>
                        <strong>{project.sqft}</strong> sq ft
                      </span>
                      <span className="text-muted">Completed {project.year}</span>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-12 text-center text-sm text-muted">
            TODO: Replace with actual commercial project data and photos.
          </p>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your Commercial Project"
        description="Contact us to discuss your commercial construction needs and get a consultation."
        variant="dark"
      />
    </>
  );
}
