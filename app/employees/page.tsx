import { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the experienced team at Kiefer Built Contracting who bring your dream home to life.",
};

const teamMembers = [
  {
    name: "Mark Kiefer",
    role: "Owner",
    bio: "With 25 years in the construction industry, Mark excels at finding creative solutions that bring each client's vision to life. His expertise spans from foundations to interior finishes, with notable projects including Dayspring Christian School and the Weld County Food Bank.",
    image: "/team/mark-kiefer.jpg",
  },
  {
    name: "Mindy Kiefer",
    role: "CFO",
    bio: "Mindy brings 25 years of experience in insurance and accounting to oversee project finances and budgetary controls. Her meticulous attention to detail ensures smooth project execution from a financial standpoint.",
    image: "/team/mindy-kiefer.jpg",
  },
  {
    name: "Miles Kiefer",
    role: "Estimator & Project Manager",
    bio: "With lifelong involvement in the construction industry, Miles brings a creative and calm approach to project management. He excels at optimizing spaces and guiding projects from conception through completion.",
    image: "/team/miles-kiefer.jpg",
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
                    {/* Team Member Photo */}
                    <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-ink/5 to-ink/10">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="h-full w-full object-cover object-top"
                      />
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
