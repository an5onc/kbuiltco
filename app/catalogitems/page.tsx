import { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTASection } from "@/components/layout/cta-section";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Premium products and finishes available through Kiefer Built Contracting for your custom home.",
};

// TODO: Replace with actual catalog data
const categories = [
  {
    title: "Flooring",
    items: [
      "Hardwood flooring",
      "Luxury vinyl plank",
      "Tile & natural stone",
      "Carpet",
    ],
  },
  {
    title: "Countertops",
    items: [
      "Granite",
      "Quartz",
      "Marble",
      "Solid surface",
    ],
  },
  {
    title: "Cabinetry",
    items: [
      "Custom wood cabinets",
      "Semi-custom options",
      "Storage solutions",
      "Built-ins",
    ],
  },
  {
    title: "Fixtures & Hardware",
    items: [
      "Plumbing fixtures",
      "Lighting",
      "Door hardware",
      "Cabinet hardware",
    ],
  },
  {
    title: "Appliances",
    items: [
      "Kitchen appliances",
      "Laundry",
      "HVAC systems",
      "Water heaters",
    ],
  },
  {
    title: "Exterior",
    items: [
      "Siding options",
      "Roofing materials",
      "Windows & doors",
      "Landscaping",
    ],
  },
];

const featuredProducts = [
  {
    name: "Custom Home Elevators",
    description: "Luxury residential elevators for accessibility and convenience",
    tag: "New",
  },
  {
    name: "Smart Home Integration",
    description: "Whole-home automation and smart technology systems",
    tag: "Popular",
  },
  {
    name: "Energy-Efficient Windows",
    description: "Triple-pane windows for optimal insulation and comfort",
    tag: "Green",
  },
];

export default function CatalogItemsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Quality Materials"
        description="Premium products and finishes carefully selected for your custom home."
      />

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-center">Featured Products</h2>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.name}>
                <Card hover className="h-full">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-ink/5 to-ink/10">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-muted">TODO: Product image</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <Badge variant="default">{product.tag}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted">{product.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-paper-dark">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2>Product Categories</h2>
              <p className="mt-4 text-lg text-muted">
                We partner with trusted suppliers to offer a wide selection of quality products for every aspect of your home.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <StaggerItem key={category.title}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-12 text-center text-sm text-muted">
            TODO: Replace with actual product catalog. Consider integrating with vendor catalog system.
          </p>
        </div>
      </section>

      <CTASection
        title="Need Help Choosing?"
        description="Our design team can help you select the perfect products and finishes for your home."
        variant="dark"
      />
    </>
  );
}
