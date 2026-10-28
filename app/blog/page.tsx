import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { formatPostDate, getAllPosts, postPath } from "@/lib/blog";
import { blogListJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Billoxi Blog | Smart Invoice PDF Guides for Shopify",
  description:
    "Guides for Billoxi: Smart Invoice PDF by XLOXI — branded Shopify invoices, packing slips, credit notes, SMTP email, automation, and setup.",
  path: "/blog",
  keywords: [
    "Billoxi blog",
    "Billoxi: Smart Invoice PDF",
    "Billoxi Shopify app",
    "Shopify invoice guide",
    "packing slip PDF",
    "Billoxi by XLOXI",
  ],
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={blogListJsonLd(posts)} />
      <Breadcrumb items={[{ name: "Blog", path: "/blog" }]} />
      <PageHero
        kicker="Blog"
        title="Guides for Billoxi: Smart Invoice PDF."
        body="Practical articles so searching Billoxi leads merchants to the Shopify Smart Invoice PDF app by XLOXI PVT LTD."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <ul className="grid gap-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-2xl border border-line bg-card p-6 transition-colors hover:border-lime/40 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted">
                  <span className="text-lime">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.publishedAt}>
                    {formatPostDate(post.publishedAt)}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  <Link
                    href={postPath(post.slug)}
                    className="hover:text-lime"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                  {post.description}
                </p>
                <Link
                  href={postPath(post.slug)}
                  className="mt-5 inline-block text-sm text-lime hover:underline"
                >
                  Read article →
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-sm leading-7 text-muted">
          Prefer the app listing? Open{" "}
          <a
            href="https://apps.shopify.com/billoxi"
            className="text-lime hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Billoxi on the Shopify App Store
          </a>{" "}
          or browse{" "}
          <Link href="/features" className="text-lime hover:underline">
            features
          </Link>
          .
        </p>
      </section>

      <Cta />
    </>
  );
}
