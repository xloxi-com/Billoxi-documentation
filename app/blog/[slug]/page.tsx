import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/JsonLd";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  postPath,
} from "@/lib/blog";
import { site } from "@/lib/content";
import { articleJsonLd, pageMeta, siteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return pageMeta({
      title: "Article not found",
      description: "This Billoxi blog post could not be found.",
      path: `/blog/${slug}`,
    });
  }

  return pageMeta({
    title: post.title,
    description: post.description,
    path: postPath(post.slug),
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const path = postPath(post.slug);

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <Breadcrumb
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]}
      />

      <article>
        <header className="relative overflow-hidden border-b border-line">
          <div className="pointer-events-none absolute inset-0 grid-fade" />
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
              {post.category}
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {post.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-muted">
              <time dateTime={post.publishedAt}>
                {formatPostDate(post.publishedAt)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
              <span aria-hidden="true">·</span>
              <span>By {site.company}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <BlogArticleBody sections={post.sections} />

          <aside className="mt-12 rounded-2xl border border-line bg-card p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-lime">
              Get Billoxi
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Billoxi is the Shopify invoice, packing slip, and credit note app
              by {site.company}. Install from the App Store, then brand, print,
              download PDF, or email from every order.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={site.appStoreUrl}
                className="inline-flex h-10 items-center rounded-full bg-lime px-4 text-sm font-medium text-ink hover:bg-[#edff9a]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Shopify App Store
              </a>
              <Link
                href="/pricing"
                className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm text-paper hover:border-lime/50"
              >
                View pricing
              </Link>
            </div>
          </aside>

          <p className="mt-8 text-xs text-muted">
            Updated {formatPostDate(post.updatedAt)} ·{" "}
            <a href={`${siteUrl}${path}`} className="hover:text-lime">
              {siteUrl}
              {path}
            </a>
          </p>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Related Billoxi guides
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={postPath(item.slug)}
                    className="block rounded-2xl border border-line bg-card p-5 transition-colors hover:border-lime/40"
                  >
                    <p className="text-[11px] uppercase tracking-[0.14em] text-lime">
                      {item.category}
                    </p>
                    <p className="mt-2 font-medium leading-6">{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-8 inline-block text-sm text-lime hover:underline"
            >
              All blog posts →
            </Link>
          </div>
        </section>
      ) : null}

      <Cta />
    </>
  );
}
