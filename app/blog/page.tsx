import { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, insights, and updates from Kiefer Built Contracting on home building in Northern Colorado.",
};

// Blog posts from kbuiltco.com - links to external blog until CMS migration
const blogPosts = [
  {
    slug: "bringing-families-together-the-kiefer-way-how-thoughtful-design-creates-lasting-connection",
    title: "Bringing Families Together, the Kiefer Way: How Thoughtful Design Creates Lasting Connection",
    excerpt:
      "Discover how thoughtful home design can strengthen family bonds and create spaces where lasting memories are made.",
    category: "Design",
    date: "2025-08-18",
    author: "Codyallen",
  },
  {
    slug: "how-sips-support-a-greener-tomorrow",
    title: "How SIPs Support a Greener Tomorrow",
    excerpt:
      "Learn how Structural Insulated Panels (SIPs) are revolutionizing sustainable building and helping homeowners reduce their environmental footprint.",
    category: "Sustainability",
    date: "2025-04-21",
    author: "Mark Kiefer",
  },
  {
    slug: "building-smarter-how-kiefer-built-contracting-uses-sips-for-superior-energy-efficiency",
    title: "Building Smarter: How Kiefer Built Contracting Uses SIPs for Superior Energy Efficiency",
    excerpt:
      "An inside look at how we use Structural Insulated Panels to build homes that are more energy-efficient and comfortable year-round.",
    category: "Construction",
    date: "2025-04-14",
    author: "Mark Kiefer",
  },
  {
    slug: "efficiency-and-comfort-a-modern-home-built-for-the-future",
    title: "Efficiency and Comfort: A Modern Home Built for the Future",
    excerpt:
      "Explore how modern building techniques and smart design choices create homes that are both comfortable today and ready for tomorrow.",
    category: "Features",
    date: "2025-03-19",
    author: "Mark Kiefer",
  },
  {
    slug: "award-winning-energy-efficient-home-in-red-feather-lake",
    title: "Award-Winning Energy-Efficient Home in Red Feather Lake",
    excerpt:
      "Take a closer look at our SIPA Building Excellence Award-winning project that showcases innovation, energy efficiency, and sustainability.",
    category: "Projects",
    date: "2025-03-19",
    author: "Mark Kiefer",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Insights & Updates"
        description="Tips, trends, and insights from our team of home building experts."
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <a
                  href={`https://kbuiltco.com/blog/${post.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card hover className="h-full">
                    {/* Gradient placeholder */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-brand/10 to-brand/5">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-4xl font-bold text-brand/20">KB</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="muted">{post.category}</Badge>
                      <h3 className="mt-3 text-lg font-semibold line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <span>By {post.author}</span>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand">
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
