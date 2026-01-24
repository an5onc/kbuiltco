"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

const defaultImages = [
  { id: 1, category: "New Build", aspect: "portrait" },
  { id: 2, category: "Renovation", aspect: "landscape" },
  { id: 3, category: "Commercial", aspect: "square" },
  { id: 4, category: "New Build", aspect: "landscape" },
  { id: 5, category: "Renovation", aspect: "portrait" },
  { id: 6, category: "New Build", aspect: "square" },
];

type GalleryGridProps = {
  title?: string;
  subtitle?: string;
  images?: typeof defaultImages;
  showViewAll?: boolean;
  className?: string;
};

export function GalleryGrid({
  title = "Featured Projects",
  subtitle = "A showcase of our craftsmanship",
  images = defaultImages,
  showViewAll = true,
  className,
}: GalleryGridProps) {
  return (
    <section className={cn("section-padding bg-white", className)}>
      <div className="container-site">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2>{title}</h2>
              <p className="mt-2 text-lg text-muted">{subtitle}</p>
            </div>
            {showViewAll && (
              <Button asChild variant="outline">
                <Link href="/gallery">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {images.map((image, index) => (
            <StaggerItem
              key={image.id}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-gradient-to-br from-ink/5 to-ink/10",
                image.aspect === "portrait" && "row-span-2",
                image.aspect === "landscape" && "col-span-2 md:col-span-1",
                index === 0 && "md:col-span-2 md:row-span-2"
              )}
            >
              <div
                className={cn(
                  "w-full",
                  image.aspect === "portrait" && "aspect-[3/4]",
                  image.aspect === "landscape" && "aspect-[4/3]",
                  image.aspect === "square" && "aspect-square",
                  index === 0 && "md:aspect-square"
                )}
              >
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-12 w-12 mx-auto rounded-lg bg-brand/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-brand/30">
                        {image.id}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-muted">
                      TODO: Project image
                    </p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                      {image.category}
                    </span>
                    <p className="mt-2 text-sm text-white">
                      View Project Details
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
