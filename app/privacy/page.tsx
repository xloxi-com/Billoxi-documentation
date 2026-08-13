import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactDetails } from "@/components/ContactDetails";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/content";
import { privacyIntro, privacyMeta, privacySections } from "@/lib/privacy";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Billoxi by XLOXI. How we collect, use, store, and share Shopify store and order data. Effective 13 August 2026.",
  path: "/privacy",
  keywords: [
    "Billoxi privacy policy",
    "XLOXI privacy",
    "Shopify invoice app privacy",
    "GDPR Shopify app",
  ],
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        body={`Effective ${privacyMeta.effectiveDate}. How ${privacyMeta.company} collects, uses, stores, and shares information when you use Billoxi.`}
      />

      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <p className="text-sm leading-7 text-muted">
          App: {privacyMeta.app} · Website:{" "}
          <a
            href={site.websiteUrl}
            className="text-lime hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.websiteLabel}
          </a>
        </p>

        {privacyIntro.map((text) => (
          <p key={text} className="mt-6 text-[15px] leading-8 text-paper/90">
            {text}
          </p>
        ))}

        <nav
          aria-label="Privacy sections"
          className="mt-10 rounded-2xl border border-line bg-card p-5 sm:p-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-lime">
            Contents
          </p>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {privacySections.map((section) => (
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
          {privacySections.map((section) => (
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

              {section.roles ? (
                <div className="mt-6 grid gap-3">
                  {section.roles.map((role) => (
                    <div
                      key={role.title}
                      className="rounded-2xl border border-line bg-card p-5"
                    >
                      <h3 className="text-sm font-medium text-lime">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-8 text-paper/90">
                        {role.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.blocks?.map((block) => (
                <div key={block.heading} className="mt-6">
                  <h3 className="text-sm font-medium text-lime">
                    {block.heading}
                  </h3>
                  {block.text ? (
                    <p className="mt-2 text-[15px] leading-8 text-paper/90">
                      {block.text}
                    </p>
                  ) : null}
                  {block.link ? (
                    <p className="mt-2 text-[15px] leading-8">
                      <a
                        href={block.link.href}
                        className="text-lime hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {block.link.label}
                      </a>
                    </p>
                  ) : null}
                  {block.bullets ? (
                    <ul className="mt-3 space-y-2 text-[15px] leading-8 text-paper/90">
                      {block.bullets.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-lime" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
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

              {section.after?.map((text) => (
                <p
                  key={text}
                  className="mt-4 text-[15px] leading-8 text-paper/90"
                >
                  {text}
                </p>
              ))}

              {section.id === "contact" ? (
                <div className="mt-6 rounded-2xl border border-line bg-card p-5 text-[15px] leading-8">
                  <ContactDetails />
                  <p className="mt-4 text-sm text-muted">
                    If you are in the EEA/UK, you may also contact your local
                    data protection authority. See also our{" "}
                    <Link href="/terms" className="text-lime hover:underline">
                      Terms of Service
                    </Link>
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
