import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of custom homes, renovations, and commercial projects in Northern Colorado.",
};

// TODO: Replace with actual gallery data
const galleryItems = [
  { id: 1, category: "New Build", title: "Modern Farmhouse in Windsor" },
  { id: 2, category: "New Build", title: "Mountain View Estate" },
  { id: 3, category: "Renovation", title: "Historic Home Restoration" },
  { id: 4, category: "Commercial", title: "Office Building" },
  { id: 5, category: "New Build", title: "Contemporary Ranch" },
  { id: 6, category: "Renovation", title: "Kitchen Transformation" },
  { id: 7, category: "New Build", title: "Craftsman Style Home" },
  { id: 8, category: "Addition", title: "Master Suite Addition" },
  { id: 9, category: "New Build", title: "Custom Lake House" },
  { id: 10, category: "Renovation", title: "Basement Finish" },
  { id: 11, category: "Commercial", title: "Retail Space" },
  { id: 12, category: "New Build", title: "Energy-Efficient Home" },
];

const categories = ["All", "New Build", "Renovation", "Addition", "Commercial"];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="Project Gallery"
        description="Explore our portfolio of custom homes and projects across Northern Colorado."
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <StaggerItem key={item.id}>
                <div className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-ink/5 to-ink/10 cursor-pointer">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand/20">
                      {item.id}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                        {item.category}
                      </span>
                      <p className="mt-2 text-sm font-medium text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-12 text-center text-sm text-muted">
            TODO: Replace with actual project photos. Consider implementing lightbox functionality for full-size viewing.
          </p>

          {/* View More Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/new-builds">View New Builds</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/renovations-and-additions">View Renovations</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/commercial">View Commercial</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection variant="brand" />
    </>
  );
}
