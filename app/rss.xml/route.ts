import { getAllPosts, postPath } from "@/lib/blog";
import { site } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const items = posts
    .map((post) => {
      const link = `${siteUrl}${postPath(post.slug)}`;
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(`${post.publishedAt}T12:00:00Z`).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Billoxi Blog — Smart Invoice PDF for Shopify</title>
    <link>${siteUrl}/blog</link>
    <description>Guides for Billoxi: Smart Invoice PDF by ${site.legalName} — Shopify invoices, packing slips, credit notes, and more.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
