import { Metadata } from "next";
import { Award, Star, Trophy, Medal } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Accolades",
  description:
    "Awards and recognition received by Kiefer Built Contracting for excellence in home building.",
};

// TODO: Replace with actual accolades data
const accolades = [
  {
    year: "2024",
    title: "Best Custom Home Builder",
    organization: "Northern Colorado Home Builders Association",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "Excellence in Craftsmanship Award",
    organization: "Colorado Home Building Industry",
    icon: Award,
  },
  {
    year: "2023",
    title: "Customer Satisfaction Award",
    organization: "Buildertrend",
    icon: Star,
  },
  {
    year: "2022",
    title: "Top 10 Home Builders",
    organization: "Northern Colorado Magazine",
    icon: Medal,
  },
  {
    year: "2021",
    title: "Community Impact Award",
    organization: "Windsor Chamber of Commerce",
    icon: Award,
  },
  {
    year: "2020",
    title: "Parade of Homes Winner",
    organization: "Home Builders Association",
    icon: Trophy,
  },
];

const certifications = [
  "Licensed General Contractor - State of Colorado",
  "EPA Lead-Safe Certified Firm",
  "NAHB Graduate Master Builder",
  "Energy Star Partner",
];

export default function AccoladesPage() {
  return (
    <>
      <PageHeader
        title="Awards & Recognition"
        subtitle="Our Accolades"
        description="Recognition for our commitment to excellence in custom home building."
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {accolades.map((accolade) => (
              <StaggerItem key={accolade.title + accolade.year}>
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <accolade.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline">{accolade.year}</Badge>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      {accolade.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {accolade.organization}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-8 text-center text-sm text-muted">
            TODO: Replace with actual awards and recognition data.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-paper-dark">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Certifications & Licenses</h2>
              <p className="mt-4 text-lg text-muted">
                Professional credentials that demonstrate our commitment to quality and safety.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-12 max-w-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <ScrollReveal key={cert} delay={index * 0.1}>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10">
                      <Award className="h-4 w-4 text-brand" />
                    </div>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
