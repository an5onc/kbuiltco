import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "New Builds",
  description:
    "Explore our portfolio of custom new home builds across Northern Colorado.",
};

// TODO: Replace with actual project data
const projects = [
  {
    id: 1,
    title: "Modern Farmhouse in Windsor",
    location: "Windsor, CO",
    sqft: "4,200",
    beds: 4,
    baths: 3.5,
    year: 2024,
    description: "A stunning modern farmhouse featuring an open floor plan, custom kitchen, and luxurious master suite with mountain views.",
    features: ["Open concept", "Custom kitchen", "Home office", "3-car garage"],
  },
  {
    id: 2,
    title: "Mountain View Estate",
    location: "Loveland, CO",
    sqft: "5,500",
    beds: 5,
    baths: 4.5,
    year: 2023,
    description: "Expansive estate home designed to capture panoramic mountain views from every major living space.",
    features: ["Mountain views", "Home theater", "Wine cellar", "Pool"],
  },
  {
    id: 3,
    title: "Contemporary Ranch",
    location: "Timnath, CO",
    sqft: "3,800",
    beds: 3,
    baths: 2.5,
    year: 2023,
    description: "Single-story living with contemporary design elements and seamless indoor-outdoor flow.",
    features: ["Single story", "Outdoor living", "Smart home", "Solar ready"],
  },
  {
    id: 4,
    title: "Craftsman Style Home",
    location: "Greeley, CO",
    sqft: "3,200",
    beds: 4,
    baths: 3,
    year: 2022,
    description: "Traditional craftsman aesthetics combined with modern amenities and energy-efficient systems.",
    features: ["Craftsman details", "Covered porch", "Bonus room", "Energy efficient"],
  },
];

export default function NewBuildsPage() {
  return (
    <>
      <PageHeader
        title="New Home Builds"
        subtitle="Our Work"
        description="Custom homes designed and built to exceed expectations."
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <StaggerContainer className="space-y-12">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <Card hover>
                  <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-ink/5 to-ink/10 md:aspect-auto">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-4xl font-bold text-brand/20">
                          {project.id}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="flex flex-col p-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{project.title}</h3>
                          <p className="text-sm text-muted">{project.location}</p>
                        </div>
                        <Badge variant="outline">{project.year}</Badge>
                      </div>

                      <p className="mt-4 flex-1 text-muted">{project.description}</p>

                      {/* Stats */}
                      <div className="mt-6 flex gap-6 border-t border-border pt-4 text-sm">
                        <div>
                          <span className="font-semibold">{project.sqft}</span>{" "}
                          <span className="text-muted">sq ft</span>
                        </div>
                        <div>
                          <span className="font-semibold">{project.beds}</span>{" "}
                          <span className="text-muted">beds</span>
                        </div>
                        <div>
                          <span className="font-semibold">{project.baths}</span>{" "}
                          <span className="text-muted">baths</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <Badge key={feature} variant="muted">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-12 text-center text-sm text-muted">
            TODO: Replace with actual project data and photos.
          </p>
        </div>
      </section>

      <CTASection
        title="Build Your Dream Home"
        description="Ready to start planning your custom home? Let's talk about your vision."
        primaryCta={{ label: "Start Your Project", href: "/contact" }}
        secondaryCta={{ label: "View Our Process", href: "/process" }}
      />
    </>
  );
}
