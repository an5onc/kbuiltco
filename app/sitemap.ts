import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/employees",
    "/accolades",
    "/blog",
    "/services",
    "/catalogitems",
    "/process",
    "/services/home-building",
    "/gallery",
    "/new-builds",
    "/commercial",
    "/renovations-and-additions",
    "/testimonials",
    "/join-our-team",
    "/contact",
    "/vendors",
    "/privacy",
    "/terms",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services") ? 0.9 : 0.8,
  }));
}
