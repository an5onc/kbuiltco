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

// TODO: Replace with actual testimonials
const testimonials = [
  {
    id: 1,
    content:
      "Kiefer Built exceeded all our expectations. From the initial consultation to the final walkthrough, their attention to detail and commitment to quality was evident in every aspect of our new home. We couldn't be happier with the result.",
    author: "John & Sarah M.",
    location: "Windsor, CO",
    project: "Custom Home",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The team at Kiefer Built made our dream home a reality. Their customer portal kept us informed every step of the way, and their craftsmanship is truly exceptional. We've already recommended them to friends and family.",
    author: "Michael T.",
    location: "Greeley, CO",
    project: "Custom Home",
    rating: 5,
  },
  {
    id: 3,
    content:
      "We couldn't be happier with our renovation. Professional, on-time, and on-budget. Kiefer Built is the only contractor we'll ever use. They transformed our dated kitchen into a space we love.",
    author: "The Anderson Family",
    location: "Loveland, CO",
    project: "Kitchen Remodel",
    rating: 5,
  },
  {
    id: 4,
    content:
      "Building our forever home was a big decision, and Kiefer Built made us feel confident throughout the entire process. Their transparency and communication were outstanding.",
    author: "David & Lisa R.",
    location: "Fort Collins, CO",
    project: "Custom Home",
    rating: 5,
  },
  {
    id: 5,
    content:
      "Our basement transformation exceeded our expectations. What was once unused space is now the heart of our home. The attention to detail and quality of work is impressive.",
    author: "Jennifer K.",
    location: "Timnath, CO",
    project: "Basement Finish",
    rating: 5,
  },
  {
    id: 6,
    content:
      "Working with Kiefer Built on our commercial project was a great experience. They delivered on time, on budget, and the quality of construction is excellent. Highly recommend.",
    author: "Northview Properties",
    location: "Windsor, CO",
    project: "Commercial Build",
    rating: 5,
  },
  {
    id: 7,
    content:
      "The custom elevator installation was seamless. Our aging parents can now easily navigate our multi-level home. Kiefer Built handled the entire project with professionalism.",
    author: "Robert & Mary S.",
    location: "Greeley, CO",
    project: "Elevator Installation",
    rating: 5,
  },
  {
    id: 8,
    content:
      "From design to completion, Kiefer Built guided us through building our retirement home. They listened to our needs and delivered a home that's perfect for this stage of our lives.",
    author: "The Martinez Family",
    location: "Loveland, CO",
    project: "Custom Home",
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

          <p className="mt-12 text-center text-sm text-muted">
            TODO: Replace with actual client testimonials.
          </p>
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
