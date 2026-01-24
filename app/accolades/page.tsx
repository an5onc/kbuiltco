import { Metadata } from "next";
import { Star, Trophy } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Accolades",
  description:
    "Awards and recognition received by Kiefer Built Contracting for excellence in home building.",
};

const accolades = [
  {
    year: "2025",
    title: "SIPA Building Excellence Award",
    organization: "Structural Insulated Panel Association",
    description: "Single Family Homes under 3,000 sq. ft. category for our Red Feather Lakes project showcasing innovation, energy efficiency, and sustainability.",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "Best of Houzz Service Award",
    organization: "Houzz",
    description: "Awarded to only 3% of the 2.7 million professionals on Houzz for providing excellent customer service.",
    icon: Star,
  },
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
          <StaggerContainer className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
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
                    <p className="mt-1 text-sm font-medium text-brand">
                      {accolade.organization}
                    </p>
                    <p className="mt-3 text-sm text-muted">
                      {accolade.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
