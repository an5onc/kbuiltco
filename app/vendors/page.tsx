import { Metadata } from "next";
import { Handshake, Shield, Users, Award } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { VendorForm } from "@/components/forms/vendor-form";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";

export const metadata: Metadata = {
  title: "Vendor Application",
  description:
    "Partner with Kiefer Built Contracting. We're always looking for quality subcontractors and vendors to join our trusted network in Northern Colorado.",
};

const benefits = [
  {
    icon: Handshake,
    title: "Long-term Partnerships",
    description:
      "We value lasting relationships with our vendors and subcontractors, providing consistent work opportunities.",
  },
  {
    icon: Shield,
    title: "Professional Environment",
    description:
      "Work on well-organized job sites with clear expectations, timelines, and communication.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description:
      "Join a network of skilled professionals who take pride in quality craftsmanship.",
  },
  {
    icon: Award,
    title: "Quality Standards",
    description:
      "We partner with vendors who share our commitment to excellence and customer satisfaction.",
  },
];

export default function VendorsPage() {
  return (
    <>
      <PageHeader
        title="Vendor Application"
        subtitle="Partner With Us"
        description="We're always looking for quality subcontractors and suppliers to join our trusted network of vendors."
      />

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Why Partner With Kiefer Built?</h2>
              <p className="mt-4 text-lg text-muted">
                Join a team that values quality, integrity, and lasting
                partnerships.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="rounded-xl border border-border bg-paper p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
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

      {/* Application Form Section */}
      <section className="section-padding bg-paper-dark">
        <div className="container-site">
          <div className="mx-auto max-w-2xl">
            <ScrollReveal>
              <div className="text-center">
                <h2>Apply to Join Our Network</h2>
                <p className="mt-4 text-muted">
                  Complete the form below to start the application process.
                  We'll review your information and reach out if there's a
                  potential fit for our upcoming projects.
                </p>
              </div>
              <div className="mt-10">
                <VendorForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
