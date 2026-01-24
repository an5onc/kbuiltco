import { Metadata } from "next";
import { CheckCircle2, Award, Users, Calendar } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about Kiefer Built Contracting's 25+ year history of building dream homes in Northern Colorado.",
};

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "We take pride in every detail, using premium materials and time-tested techniques to build homes that last generations.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Your vision drives every decision. We work alongside you from concept to completion, ensuring your dream becomes reality.",
  },
  {
    icon: Calendar,
    title: "Timely Delivery",
    description:
      "We respect your timeline and budget, providing transparent communication and consistent progress throughout your project.",
  },
];

const milestones = [
  { year: "1998", event: "Kiefer Built Contracting founded in Northern Colorado" },
  { year: "2005", event: "Completed 100th custom home" },
  { year: "2010", event: "Expanded into commercial construction" },
  { year: "2015", event: "Launched customer portal for real-time project tracking" },
  { year: "2020", event: "Celebrated 500+ completed projects" },
  { year: "2024", event: "Introduced custom elevator installations" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Our Story"
        subtitle="About Kiefer Built"
        description="For over 25 years, we've been turning dreams into homes across Northern Colorado."
      />

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-ink/5 to-ink/10">
                {/* TODO: Replace with actual company photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm text-muted">TODO: Company/Team photo</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2>Building Dreams Since 1998</h2>
              <div className="mt-6 space-y-4 text-muted">
                <p>
                  Kiefer Built Contracting was founded with a simple mission: to build homes that families would cherish for generations. What started as a small operation has grown into Northern Colorado's trusted name in custom home building.
                </p>
                <p>
                  Our founder believed that every home should be as unique as the family living in it. That philosophy continues to guide us today. We don't just construct buildings—we craft sanctuaries where memories are made and futures are shaped.
                </p>
                <p>
                  Over the past 25+ years, we've completed hundreds of projects, from custom dream homes to thoughtful renovations and commercial spaces. Each project reflects our commitment to quality, integrity, and client satisfaction.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-paper-dark">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Our Values</h2>
              <p className="mt-4 text-lg text-muted">
                The principles that guide every project we undertake
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-border bg-white p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-muted">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Our Journey</h2>
              <p className="mt-4 text-lg text-muted">
                Key milestones in our 25+ year history
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="relative border-l-2 border-brand/20 pl-8">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 0.1}>
                  <div className="relative pb-10 last:pb-0">
                    {/* Dot */}
                    <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand bg-white">
                      <div className="h-2 w-2 rounded-full bg-brand" />
                    </div>

                    {/* Content */}
                    <div className="rounded-lg border border-border bg-paper p-4">
                      <span className="text-sm font-bold text-brand">
                        {milestone.year}
                      </span>
                      <p className="mt-1 text-muted">{milestone.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
