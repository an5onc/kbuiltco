"use client";

import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

const defaultTestimonials = [
  {
    id: 1,
    content:
      "Mark is the very best General Contractor we have ever had. He handled demolition, electrical, plumbing, framing, drywall, painting, and tile work flawlessly.",
    author: "Al Baker",
    location: "Northern Colorado",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Best remodel experience we've ever had. Mark is the definition of integrity. We couldn't recommend Kiefer Built more highly.",
    author: "Stephanie Smith",
    location: "Northern Colorado",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Knowledgeable, timely, fair, and respectful – rare traits these days. Our basement finishing project exceeded expectations.",
    author: "Lindy Frieler",
    location: "Northern Colorado",
    rating: 5,
  },
];

type TestimonialsProps = {
  title?: string;
  subtitle?: string;
  testimonials?: typeof defaultTestimonials;
  className?: string;
};

export function Testimonials({
  title = "What Our Clients Say",
  subtitle = "Real stories from homeowners we've helped",
  testimonials = defaultTestimonials,
  className,
}: TestimonialsProps) {
  return (
    <section className={cn("section-padding bg-paper-dark", className)}>
      <div className="container-site">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2>{title}</h2>
            <p className="mt-4 text-lg text-muted">{subtitle}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card hover className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  {/* Quote Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
                    <Quote className="h-5 w-5 text-brand" />
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
                  <p className="flex-1 text-muted italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
