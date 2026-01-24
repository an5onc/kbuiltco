import { Metadata } from "next";
import { Home, Plus, RefreshCw, Layers } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Renovations & Additions",
  description:
    "Transform your home with renovations and additions from Kiefer Built Contracting.",
};

const services = [
  {
    icon: RefreshCw,
    title: "Kitchen Remodels",
    description: "Complete kitchen transformations from layout changes to custom cabinetry and premium finishes.",
  },
  {
    icon: Layers,
    title: "Bathroom Renovations",
    description: "Luxurious bathroom updates including spa-like master baths and functional family bathrooms.",
  },
  {
    icon: Plus,
    title: "Room Additions",
    description: "Expand your living space with seamlessly integrated additions that match your home's style.",
  },
  {
    icon: Home,
    title: "Basement Finishing",
    description: "Turn unused basement space into functional living areas, home theaters, or guest suites.",
  },
];

// TODO: Replace with actual projects
const projects = [
  {
    id: 1,
    title: "Kitchen Transformation",
    location: "Windsor, CO",
    type: "Kitchen Remodel",
    description: "Complete kitchen renovation with custom island, new cabinetry, and premium appliances.",
  },
  {
    id: 2,
    title: "Master Suite Addition",
    location: "Loveland, CO",
    type: "Addition",
    description: "600 sq ft master suite addition with spa bathroom and walk-in closet.",
  },
  {
    id: 3,
    title: "Basement Entertainment Center",
    location: "Greeley, CO",
    type: "Basement Finish",
    description: "Basement finish featuring home theater, wet bar, and guest bedroom.",
  },
  {
    id: 4,
    title: "Historic Home Restoration",
    location: "Fort Collins, CO",
    type: "Whole Home",
    description: "Careful restoration of a 1920s craftsman home with modern updates throughout.",
  },
];

export default function RenovationsPage() {
  return (
    <>
      <PageHeader
        title="Renovations & Additions"
        subtitle="Our Work"
        description="Transform your existing home into the space you've always wanted."
      />

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Renovation Services</h2>
              <p className="mt-4 text-lg text-muted">
                From kitchen updates to whole-home transformations, we bring the same quality and craftsmanship to renovations as we do to new builds.
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
            <h2 className="text-center">Featured Renovation Projects</h2>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <Card hover>
                  <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="aspect-square bg-gradient-to-br from-ink/5 to-ink/10">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-4xl font-bold text-brand/20">
                          {project.id}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="flex flex-col p-6">
                      <Badge variant="outline" className="w-fit">
                        {project.type}
                      </Badge>
                      <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted">{project.location}</p>
                      <p className="mt-3 flex-1 text-sm text-muted">
                        {project.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-12 text-center text-sm text-muted">
            TODO: Replace with actual renovation project data and photos.
          </p>
        </div>
      </section>

      {/* Why Renovate */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <h2>Why Renovate with Kiefer Built?</h2>
              <div className="mt-6 space-y-4 text-muted">
                <p>
                  Renovating your existing home can be more complex than new construction, requiring careful planning to work within existing structures while achieving your vision. Our team brings decades of experience to every renovation project.
                </p>
                <p>
                  We understand that you're living in your home during many renovation projects, and we work to minimize disruption while maintaining the highest standards of quality and cleanliness.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-brand" />
                  <span>Experienced in working within existing structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-brand" />
                  <span>Respect for your home and living space</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-brand" />
                  <span>Seamless integration with existing architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-brand" />
                  <span>Same warranty and quality as new construction</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-ink/5 to-ink/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm text-muted">TODO: Renovation showcase image</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Home?"
        description="Let's discuss your renovation ideas and create a plan that works for your home and budget."
      />
    </>
  );
}
