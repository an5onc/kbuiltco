import { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the experienced team at Kiefer Built Contracting who bring your dream home to life.",
};

// TODO: Replace with actual team data from CMS or content file
const teamMembers = [
  {
    name: "Team Member Name",
    role: "Founder & President",
    bio: "With over 25 years of experience in custom home building, leading our team with a commitment to quality and client satisfaction.",
  },
  {
    name: "Team Member Name",
    role: "Project Manager",
    bio: "Ensuring every project runs smoothly from groundbreaking to final walkthrough with meticulous attention to detail.",
  },
  {
    name: "Team Member Name",
    role: "Lead Estimator",
    bio: "Providing accurate, transparent estimates that help clients plan their dream homes with confidence.",
  },
  {
    name: "Team Member Name",
    role: "Construction Superintendent",
    bio: "Overseeing on-site operations and coordinating our skilled trades to deliver exceptional results.",
  },
  {
    name: "Team Member Name",
    role: "Client Relations",
    bio: "Your dedicated point of contact throughout the building process, ensuring clear communication every step of the way.",
  },
  {
    name: "Team Member Name",
    role: "Design Coordinator",
    bio: "Helping clients make design selections that bring their vision to life while staying within budget.",
  },
];

export default function EmployeesPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet the Experts"
        description="The dedicated professionals who make your dream home a reality."
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name + member.role}>
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    {/* Avatar Placeholder */}
                    <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-ink/5 to-ink/10">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-3xl font-bold text-brand/30">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm font-medium text-brand">
                        {member.role}
                      </p>
                      <p className="mt-3 text-sm text-muted">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-12 text-center text-sm text-muted">
            TODO: Replace placeholder data with actual team member information and photos.
          </p>
        </div>
      </section>

      <CTASection
        title="Join Our Team"
        description="We're always looking for talented individuals who share our passion for quality craftsmanship."
        primaryCta={{ label: "View Open Positions", href: "/join-our-team" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        variant="brand"
      />
    </>
  );
}
