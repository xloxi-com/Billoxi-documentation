import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/content";

export function Cta() {
  return (
    <section className="px-5 pb-20 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-lime px-6 py-14 text-ink sm:px-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/55">
          {site.listingName}
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Install Billoxi on Shopify today.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-7 text-ink/70 sm:text-base">
          Search Billoxi on the App Store — Smart Invoice PDFs, packing slips,
          and credit notes from every order, by {site.legalName}.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.appUrl}
            className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-paper hover:bg-ink/90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Shopify App Store
          </a>
          <ButtonLink href="/pricing" variant="ink">
            Compare plans
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
