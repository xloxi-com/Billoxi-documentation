import Link from "next/link";
import { seoGuide, seoKeywordsBlock, seoUseCases } from "@/lib/content";

export function SeoGuide() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
          {seoGuide.kicker}
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {seoGuide.title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
          {seoGuide.lead}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {seoGuide.sections.map((section) => (
            <article key={section.heading}>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {section.heading}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {seoKeywordsBlock.map((label) => (
            <span
              key={label}
              className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
            >
              {label}
            </span>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Explore{" "}
          <Link href="/features" className="text-lime hover:underline">
            features
          </Link>
          ,{" "}
          <Link href="/templates" className="text-lime hover:underline">
            invoice templates
          </Link>
          , and{" "}
          <Link href="/pricing" className="text-lime hover:underline">
            pricing
          </Link>{" "}
          — or open Billoxi on the{" "}
          <a
            href="https://apps.shopify.com/billoxi"
            className="text-lime hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify App Store
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function SeoUseCases() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
          Who uses Billoxi
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for merchants who still need paperwork after checkout.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {seoUseCases.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <h3 className="font-medium leading-6">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
