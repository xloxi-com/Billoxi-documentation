import type { MetadataRoute } from "next";
import { getAllPosts, postPath } from "@/lib/blog";
import { seoLandingPages } from "@/lib/seo-pages";
import { siteUrl } from "@/lib/seo";

const pages: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/features", changeFrequency: "weekly", priority: 0.9 },
  { path: "/templates", changeFrequency: "weekly", priority: 0.85 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.75 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  ...seoLandingPages.map((page) => ({
    path: page.path,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = pages.map((page) => ({
    url: page.path ? `${siteUrl}${page.path}` : siteUrl,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: `${siteUrl}${postPath(post.slug)}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}
