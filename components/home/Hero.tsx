import { ButtonLink } from "@/components/Button";
import { DocumentMockup } from "@/components/DocumentMockup";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute inset-0 noise" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-16">
        <div>
          <p className="rise text-xs font-medium uppercase tracking-[0.22em] text-lime">
            {site.listingName} · by {site.company}
          </p>
          <h1 className="rise rise-delay-1 font-display mt-5 max-w-xl text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            {site.tagline}
          </h1>
          <p className="rise rise-delay-2 mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {site.hero}
          </p>
          <div className="rise rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.appStoreUrl} external>
              Install on Shopify
            </ButtonLink>
            <ButtonLink href="/templates" variant="ghost">
              Explore templates
            </ButtonLink>
          </div>
          <p className="rise rise-delay-4 mt-6 text-sm text-muted">
            {site.listingHeadline}. Print, PDF, or email — totals always sync
            from Shopify.
          </p>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-[420px] sm:h-[430px]">
          <div className="float-slow absolute left-0 top-10 hidden sm:block">
            <DocumentMockup variant="credit" />
          </div>
          <div className="float absolute right-0 top-0 hidden sm:block">
            <DocumentMockup variant="packing" />
          </div>
          <div className="absolute left-1/2 top-12 -translate-x-1/2 sm:top-16">
            <DocumentMockup variant="invoice" />
          </div>
        </div>
      </div>
    </section>
  );
}
