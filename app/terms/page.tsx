import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactDetails } from "@/components/ContactDetails";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/content";
import { termsIntro, termsMeta, termsSections } from "@/lib/terms";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description:
    "Terms of Service for Billoxi, the Shopify invoices and receipts app by XLOXI. Effective 13 August 2026.",
  path: "/terms",
  keywords: [
    "Billoxi terms of service",
    "XLOXI terms",
    "Shopify invoice app terms",
  ],
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Terms of Service", path: "/terms" }]} />
      <PageHero
        kicker="Legal"
        title="Terms of Service"
        body={`Effective ${termsMeta.effectiveDate}. These Terms govern your access to and use of Billoxi, a Shopify app by ${termsMeta.company}.`}
      />

      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <p className="text-sm leading-7 text-muted">
          App: {termsMeta.app} · Website:{" "}
          <a
            href={site.websiteUrl}
            className="text-lime hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.websiteLabel}
          </a>
        </p>

        {termsIntro.map((text) => (
          <p key={text} className="mt-6 text-[15px] leading-8 text-paper/90">
            {text}
          </p>
        ))}

        <nav
          aria-label="Terms sections"
          className="mt-10 rounded-2xl border border-line bg-card p-5 sm:p-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-lime">
            Contents
          </p>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {termsSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-muted hover:text-lime"
                >
                  {section.number}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-4 divide-y divide-line">
          {termsSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 py-10"
            >
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                <span className="text-lime">{section.number}.</span>{" "}
                {section.title}
              </h2>

              {section.paragraphs?.map((text) => (
                <p
                  key={text}
                  className="mt-4 text-[15px] leading-8 text-paper/90"
                >
                  {text}
                </p>
              ))}

              {section.blocks?.map((block) => (
                <div key={block.heading} className="mt-6">
                  <h3 className="text-sm font-medium text-lime">
                    {block.heading}
                  </h3>
                  <p className="mt-2 text-[15px] leading-8 text-paper/90">
                    {block.text}
                  </p>
                </div>
              ))}

              {section.after?.map((text) => (
                <p
                  key={text}
                  className="mt-4 text-[15px] leading-8 text-paper/90"
                >
                  {text}
                </p>
              ))}

              {section.bullets ? (
                <ul className="mt-4 space-y-2 text-[15px] leading-8 text-paper/90">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-lime" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.id === "contact" ? (
                <div className="mt-6 rounded-2xl border border-line bg-card p-5 text-[15px] leading-8">
                  <ContactDetails />
                  <p className="mt-4 text-sm text-muted">
                    For privacy requests, see the{" "}
                    <Link href="/privacy" className="text-lime hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    or email{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-lime hover:underline"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
