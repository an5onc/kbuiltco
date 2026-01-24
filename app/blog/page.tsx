import { Metadata } from "next";
import Link from "next/link";
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

// TODO: Replace with actual blog posts from CMS
const blogPosts = [
  {
    slug: "choosing-the-right-lot-for-your-custom-home",
    title: "Choosing the Right Lot for Your Custom Home",
    excerpt:
      "Location is everything when building a custom home. Learn what factors to consider when selecting the perfect lot for your dream home in Northern Colorado.",
    category: "Home Building Tips",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    slug: "2024-home-design-trends",
    title: "2024 Home Design Trends in Northern Colorado",
    excerpt:
      "From open floor plans to sustainable materials, discover the top design trends we're seeing in custom homes this year.",
    category: "Design",
    date: "2024-01-08",
    readTime: "4 min read",
  },
  {
    slug: "understanding-the-home-building-timeline",
    title: "Understanding the Home Building Timeline",
    excerpt:
      "A comprehensive guide to what you can expect during each phase of the custom home building process.",
    category: "Process",
    date: "2023-12-20",
    readTime: "7 min read",
  },
  {
    slug: "benefits-of-home-elevators",
    title: "The Benefits of Home Elevators",
    excerpt:
      "Why more homeowners are choosing to include custom elevators in their new homes for accessibility and luxury.",
    category: "Features",
    date: "2023-12-10",
    readTime: "4 min read",
  },
  {
    slug: "energy-efficient-home-features",
    title: "Energy-Efficient Features for Your New Home",
    excerpt:
      "Smart investments in energy efficiency that will save you money and reduce your environmental impact.",
    category: "Sustainability",
    date: "2023-11-28",
    readTime: "6 min read",
  },
  {
    slug: "preparing-for-your-design-consultation",
    title: "Preparing for Your Design Consultation",
    excerpt:
      "Make the most of your initial meeting with our team by coming prepared with these key considerations.",
    category: "Process",
    date: "2023-11-15",
    readTime: "3 min read",
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
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card hover className="h-full">
                    {/* Image Placeholder */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-ink/5 to-ink/10">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-sm text-muted">TODO: Post image</span>
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
                        <span>{post.readTime}</span>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand">
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-12 text-center text-sm text-muted">
            TODO: Connect to CMS for actual blog content. Individual blog post pages need to be created.
          </p>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
