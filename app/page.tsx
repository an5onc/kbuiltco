import { Hero } from "@/components/sections/hero";
import { IntroBlock } from "@/components/sections/intro-block";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FeatureHighlight } from "@/components/sections/feature-highlight";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ServiceArea } from "@/components/sections/service-area";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/layout/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroBlock />
      <GalleryGrid />
      <ProcessSteps />
      <FeatureHighlight />
      <ServicesGrid />
      <ServiceArea />
      <Testimonials />
      <CTASection />
    </>
  );
}
