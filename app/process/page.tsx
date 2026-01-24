import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Monitor, Clipboard, Hammer, CheckSquare, Key } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Learn about Kiefer Built Contracting's proven home building process - from consultation to move-in day.",
};

const processSteps = [
  {
    icon: Users,
    title: "1. Consultation",
    description:
      "Every great project starts with a conversation. During our initial consultation, we'll discuss your vision, needs, timeline, and budget. This is your opportunity to share your dreams, and our chance to explain how we can bring them to life.",
    details: [
      "Share your vision and inspiration",
      "Discuss lot selection or evaluate your existing lot",
      "Review preliminary budget considerations",
      "Understand your timeline and expectations",
      "Tour our recent projects (if desired)",
    ],
  },
  {
    icon: Clipboard,
    title: "2. Design & Planning",
    description:
      "With your vision clear, we move into detailed design and planning. Our team works closely with architects and designers to create plans that balance beauty, functionality, and budget.",
    details: [
      "Develop detailed floor plans and elevations",
      "Select materials, finishes, and fixtures",
      "Create comprehensive specifications",
      "Finalize budget with detailed line items",
      "Prepare construction timeline",
    ],
  },
  {
    icon: Monitor,
    title: "3. Customer Portal Access",
    description:
      "Once your project is underway, you'll receive access to our Buildertrend customer portal. This powerful tool keeps you connected to your project 24/7, no matter where you are.",
    details: [
      "Real-time project schedule and updates",
      "Photo documentation of progress",
      "Direct messaging with your project team",
      "Budget tracking and change order management",
      "Document storage and access",
    ],
  },
  {
    icon: Hammer,
    title: "4. Construction",
    description:
      "This is where the magic happens. Our skilled team of craftsmen and trusted subcontractors bring your home to life with meticulous attention to detail and quality.",
    details: [
      "Site preparation and foundation",
      "Framing and structural work",
      "Mechanical, electrical, and plumbing",
      "Insulation and drywall",
      "Finish work and installations",
    ],
  },
  {
    icon: CheckSquare,
    title: "5. Final Walkthrough",
    description:
      "Before handing over your keys, we conduct a comprehensive walkthrough with you. We'll review every detail to ensure it meets our standards and exceeds your expectations.",
    details: [
      "Room-by-room inspection",
      "Review all systems and operations",
      "Address any final touch-ups",
      "Provide maintenance guidance",
      "Complete all documentation",
    ],
  },
  {
    icon: Key,
    title: "6. Move-In & Beyond",
    description:
      "The big day has arrived! But our relationship doesn't end when you get your keys. We stand behind our work with comprehensive warranties and ongoing support.",
    details: [
      "Key handover ceremony",
      "Warranty documentation and registration",
      "30-day follow-up visit",
      "1-year warranty walkthrough",
      "Ongoing support and maintenance guidance",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        title="Our Process"
        subtitle="How We Build"
        description="A proven, transparent process that keeps you informed and involved every step of the way."
      />

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1}>
                <div className="relative pb-12 last:pb-0">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-7 top-16 h-full w-0.5 bg-gradient-to-b from-brand to-brand/20" />
                  )}

                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-lg">
                      <step.icon className="h-7 w-7" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-2xl border border-border bg-paper p-6">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-muted">{step.description}</p>

                      <ul className="mt-4 space-y-2">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Portal Highlight */}
      <section className="section-padding bg-ink text-white">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <h2 className="text-white">Stay Connected with Buildertrend</h2>
              <p className="mt-4 text-lg text-white/70">
                Our customer portal puts you in control of your project. Access real-time updates, communicate with your team, and track every milestone from anywhere, at any time.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-brand" />
                  <span>Real-time schedule and progress updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-brand" />
                  <span>Daily photo documentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-brand" />
                  <span>Direct messaging with your project manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-brand" />
                  <span>Budget tracking and selections</span>
                </li>
              </ul>
              <Button asChild className="mt-8" variant="outline">
                <Link
                  href="/contact"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10">
                {/* TODO: Replace with portal screenshot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className="h-16 w-16 text-white/30" />
                </div>
                <p className="absolute bottom-4 left-4 right-4 text-center text-sm text-white/50">
                  TODO: Customer portal screenshot
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Contact us today to schedule your initial consultation and take the first step toward your dream home."
      />
    </>
  );
}
