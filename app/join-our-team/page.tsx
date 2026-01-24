import { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Heart,
  TrendingUp,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Kiefer Built Contracting team. We're looking for skilled professionals who are passionate about quality craftsmanship and building dream homes.",
};

const benefits = [
  {
    icon: Heart,
    title: "Competitive Benefits",
    description:
      "Health insurance, paid time off, and retirement plans to support you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Opportunities for advancement and professional development in a growing company.",
  },
  {
    icon: Users,
    title: "Great Team",
    description:
      "Work alongside skilled professionals who are passionate about their craft.",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description:
      "Build homes in beautiful Northern Colorado without long commutes.",
  },
];

// TODO: Replace with actual job listings from CMS or API
const openPositions = [
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Windsor, CO",
    description:
      "Oversee residential construction projects from start to finish, ensuring quality and timeline adherence.",
  },
  {
    title: "Carpenter",
    type: "Full-time",
    location: "Windsor, CO",
    description:
      "Skilled carpenter for framing, finishing, and custom woodwork on high-end residential projects.",
  },
  {
    title: "Construction Laborer",
    type: "Full-time",
    location: "Windsor, CO",
    description:
      "Entry-level position with opportunity to learn and grow. Must be reliable and eager to work.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Join Our Team"
        subtitle="Careers"
        description="Build your career while building dream homes. We're looking for talented individuals who share our passion for quality craftsmanship."
      />

      {/* Why Work Here */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Why Work at Kiefer Built?</h2>
              <p className="mt-4 text-lg text-muted">
                We're more than just a construction company. We're a team of
                dedicated professionals committed to excellence.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="rounded-xl border border-border bg-paper p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-paper-dark">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Open Positions</h2>
              <p className="mt-4 text-lg text-muted">
                Explore our current openings and find your next opportunity.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {openPositions.map((position, index) => (
              <ScrollReveal key={position.title} delay={index * 0.1}>
                <div className="group rounded-2xl border border-border bg-white p-6 transition-all hover:border-brand/20 hover:shadow-lg">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">
                            {position.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted">
                            <span>{position.type}</span>
                            <span>•</span>
                            <span>{position.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-muted">{position.description}</p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="shrink-0 sm:self-center"
                    >
                      <Link href="/contact">
                        Apply
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* No positions match */}
          <ScrollReveal delay={0.3}>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dashed border-border bg-white/50 p-8 text-center">
              <p className="text-muted">
                Don't see a position that fits? We're always interested in
                connecting with talented individuals.
              </p>
              <Button asChild variant="link" className="mt-2">
                <Link href="/contact">
                  Send us your resume
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        variant="brand"
        title="Ready to Build Your Career?"
        description="Join a team that values craftsmanship, integrity, and growth. Apply today and start building your future with Kiefer Built."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Learn About Us", href: "/about" }}
      />
    </>
  );
}
