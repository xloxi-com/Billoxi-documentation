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
import { faqJsonLd, pageMeta, seo, softwareJsonLd } from "@/lib/seo";
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
  return (
    <>
      <JsonLd data={[softwareJsonLd(), faqJsonLd()]} />
      <Hero />
      <HowItWorks />
      <DocumentTypes />
      <FeatureGrid />

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
