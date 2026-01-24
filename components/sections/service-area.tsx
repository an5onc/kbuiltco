"use client";

import { MapPin, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

const serviceAreas = [
  "Windsor",
  "Greeley",
  "Loveland",
  "Fort Collins",
  "Johnstown",
  "Severance",
  "Timnath",
  "Wellington",
];

type ServiceAreaProps = {
  title?: string;
  description?: string;
  areas?: string[];
  className?: string;
};

export function ServiceArea({
  title = "Proudly Serving Northern Colorado",
  description = "We build custom homes and provide construction services throughout Northern Colorado, north of Highway 7. Our local expertise ensures we understand the unique needs of our community.",
  areas = serviceAreas,
  className,
}: ServiceAreaProps) {
  return (
    <section className={cn("section-padding bg-white", className)}>
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Map Placeholder */}
          <ScrollReveal direction="left">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-paper to-paper-dark border border-border">
              {/* Placeholder map visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-brand/10 flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-brand" />
                  </div>
                  <p className="mt-4 text-sm text-muted">
                    TODO: Interactive map or service area illustration
                  </p>
                </div>
              </div>

              {/* Decorative pins */}
              <div className="absolute left-1/4 top-1/3">
                <div className="h-3 w-3 rounded-full bg-brand animate-pulse" />
              </div>
              <div className="absolute right-1/3 top-1/4">
                <div className="h-3 w-3 rounded-full bg-brand animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
              <div className="absolute bottom-1/3 right-1/4">
                <div className="h-3 w-3 rounded-full bg-brand animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <h2>{title}</h2>
            <p className="mt-4 text-lg text-muted">{description}</p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-brand/5 border border-brand/10 p-4">
              <p className="text-sm text-muted">
                <strong className="text-ink">Service Area Note:</strong> We primarily serve communities north of Highway 7, including the greater Greeley and Loveland areas. Contact us to discuss projects outside this region.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
