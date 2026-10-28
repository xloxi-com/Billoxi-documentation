import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Cta } from "@/components/home/Cta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import type { SeoLandingPage } from "@/lib/seo-pages";
import { site } from "@/lib/content";
import { faqJsonLdFor, siteUrl } from "@/lib/seo";

export function SeoLanding({ page }: { page: SeoLandingPage }) {
  return (
    <>
      <JsonLd
        data={faqJsonLdFor(page.faqs)}
      />
      <Breadcrumb items={[{ name: page.navLabel, path: page.path }]} />
      <PageHero kicker={page.kicker} title={page.h1} body={page.lead} />

      <section className="mx-auto max-w-3xl px-5 pb-4 sm:px-8">
        <p className="text-[15px] leading-8 text-muted">
          Billoxi: Smart Invoice PDF by {site.legalName} —{" "}
          <a
            href={site.appStoreUrl}
            className="text-lime hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            apps.shopify.com/billoxi
          </a>
          . Product site:{" "}
          <Link href="/" className="text-lime hover:underline">
            {siteUrl.replace(/^https?:\/\//, "")}
          </Link>
          .
        </p>
      </section>

      {page.sections.map((section) => (
        <section
          key={section.heading}
          className="mx-auto max-w-3xl border-t border-line px-5 py-12 sm:px-8"
        >
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {section.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-muted">{section.body}</p>
          {section.bullets ? (
            <ul className="mt-6 space-y-2.5">
              {section.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-paper/90">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-lime" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {page.faqs.length > 0 ? (
        <section className="border-y border-line bg-card/30">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              FAQ
            </h2>
            <div className="mt-8 space-y-6">
              {page.faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="font-medium text-paper">{item.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          Keep exploring Billoxi
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {page.related.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex rounded-full border border-line px-3.5 py-2 text-sm text-paper/90 hover:border-lime/50 hover:text-lime"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Cta />
    </>
  );
}
