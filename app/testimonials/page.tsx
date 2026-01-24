import { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our clients say about their experience building with Kiefer Built Contracting.",
};

const testimonials = [
  {
    id: 1,
    content:
      "Mark corrects issues at his own expense. Not the cheapest, but the job gets done right. That's what matters.",
    author: "Jeff T.",
    location: "Northern Colorado",
    project: "Flooring & Cabinets",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Mark is the very best General Contractor we have ever had. He handled demolition, electrical, plumbing, framing, drywall, painting, and tile work flawlessly.",
    author: "Al Baker",
    location: "Northern Colorado",
    project: "Multi-Trade Remodel",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Knowledgeable, timely, fair, and respectful – rare traits these days. Our basement finishing project exceeded expectations.",
    author: "Lindy Frieler",
    location: "Northern Colorado",
    project: "Basement Finish",
    rating: 5,
  },
  {
    id: 4,
    content:
      "Excellent communication, many options presented, and reasonable cost. They made our remodeling project stress-free.",
    author: "Lori Johnstone",
    location: "Northern Colorado",
    project: "Remodel",
    rating: 5,
  },
  {
    id: 5,
    content:
      "Everyone was simply amazing and responsive throughout our kitchen remodel. You are in good hands with Kiefer Built.",
    author: "Jean",
    location: "Northern Colorado",
    project: "Kitchen Remodel",
    rating: 5,
  },
  {
    id: 6,
    content:
      "The work is outstanding. The workers were polite, professional, and clean. Our tile, vanity, and flooring look incredible.",
    author: "James Eschenfelder",
    location: "Northern Colorado",
    project: "Bathroom & Kitchen",
    rating: 5,
  },
  {
    id: 7,
    content:
      "They wanted us to be happy. And we are. Our outdoor patio and entertaining area turned out better than we imagined.",
    author: "Gina Miles",
    location: "Northern Colorado",
    project: "Outdoor Living",
    rating: 5,
  },
  {
    id: 8,
    content:
      "Best remodel experience we've ever had. Mark is the definition of integrity. We couldn't recommend Kiefer Built more highly.",
    author: "Stephanie Smith",
    location: "Northern Colorado",
    project: "Remodel",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Client Testimonials"
        subtitle="What They Say"
        description="Hear from the families and businesses we've had the privilege to serve."
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <Card hover className="h-full">
                  <CardContent className="flex h-full flex-col p-8">
                    {/* Quote Icon */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                      <Quote className="h-6 w-6 text-brand" />
                    </div>

                    {/* Stars */}
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-brand text-brand"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="flex-1 text-muted italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <span>{testimonial.location}</span>
                        <span>•</span>
                        <span>{testimonial.project}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

                  </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-ink text-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 text-center md:grid-cols-4">
                <div>
                  <div className="text-4xl font-bold text-brand">500+</div>
                  <div className="mt-2 text-sm text-white/70">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand">25+</div>
                  <div className="mt-2 text-sm text-white/70">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand">98%</div>
                  <div className="mt-2 text-sm text-white/70">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand">4.9</div>
                  <div className="mt-2 text-sm text-white/70">Average Rating</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Happy Clients?"
        description="Contact us today to start your journey toward your dream home."
      />
    </>
  );
}
