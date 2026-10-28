import type { Metadata } from "next";
import { Cta } from "@/components/home/Cta";
import { DocumentTypes } from "@/components/home/DocumentTypes";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PricingToggle } from "@/components/PricingToggle";
import { sisterApps, techStack } from "@/lib/content";
import { getAllPosts, postPath } from "@/lib/blog";
import { faqJsonLd, pageMeta, seo, softwareJsonLd } from "@/lib/seo";
import { SeoGuide, SeoUseCases } from "@/components/home/SeoContent";
import Link from "next/link";

const homeMeta = pageMeta({
  title: seo.title,
  description: seo.description,
  path: "/",
});

export const metadata: Metadata = {
  ...homeMeta,
  title: { absolute: seo.title },
  openGraph: {
    ...homeMeta.openGraph,
    title: seo.title,
  },
  twitter: {
    ...homeMeta.twitter,
    title: seo.title,
  },
};

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <JsonLd data={[softwareJsonLd(), faqJsonLd()]} />
      <Hero />
      <HowItWorks />
      <DocumentTypes />
      <FeatureGrid />
      <SeoUseCases />
      <SeoGuide />

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
                Blog
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Learn Billoxi for Shopify.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                Guides that connect the Billoxi name to invoices, packing slips,
                credit notes, and the Shopify App Store listing.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm text-muted transition-colors hover:text-lime"
            >
              All posts →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-lime">
                  {post.category}
                </p>
                <h3 className="mt-3 font-medium leading-6">
                  <Link
                    href={postPath(post.slug)}
                    className="hover:text-lime"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted line-clamp-3">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
                Pricing
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Simple plans. Yearly saves 20%.
              </h2>
            </div>
            <Link
              href="/pricing"
              className="text-sm text-muted transition-colors hover:text-lime"
            >
              Full comparison →
            </Link>
          </div>
          <div className="mt-10">
            <PricingToggle ctaHref="/pricing" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
              FAQ
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Straight answers.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Totals stay in Shopify. Email needs SMTP. SKU and barcode print as
              text — not generated images.
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-block text-sm text-lime hover:underline"
            >
              All questions →
            </Link>
          </div>
          <FaqList />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
              From XLOXI
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold">
              Recommended apps
            </h2>
            <div className="mt-6 grid gap-3">
              {sisterApps.map((app) => (
                <div
                  key={app.name}
                  className="rounded-2xl border border-line bg-card px-5 py-4"
                >
                  <p className="font-medium">{app.name}</p>
                  <p className="mt-1 text-sm text-muted">{app.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
              Case study
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold">
              Built for Shopify Admin
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Embedded app with Polaris, GraphQL, webhooks, SMTP, and PDF
              generation — hosted on Vercel.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
