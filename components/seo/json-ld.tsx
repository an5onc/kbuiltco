import { generateLocalBusinessJsonLd } from "@/lib/metadata";

/**
 * JSON-LD structured data component for SEO.
 * Content is statically generated from our own config - no user input.
 */
export function JsonLd() {
  const jsonLd = generateLocalBusinessJsonLd();
  const jsonString = JSON.stringify(jsonLd);

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
