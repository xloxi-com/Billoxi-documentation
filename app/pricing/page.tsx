import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Cta } from "@/components/home/Cta";
import { PageHero } from "@/components/PageHero";
import { PricingToggle } from "@/components/PricingToggle";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pricing",
  description:
    "Billoxi by XLOXI pricing for Shopify: Starter $9.99, Premium $19.99, Ultimate $39 per month. Yearly 20% off. 7-day trial on paid plans.",
  path: "/pricing",
  keywords: [
    "Billoxi pricing",
    "XLOXI Billoxi plans",
    "Shopify invoice app price",
    "packing slip app cost",
  ],
});

const counts = [
  { yes: "Print" },
  { yes: "Download PDF" },
  { yes: "Send email" },
  { yes: "Each order in a bulk action" },
];

const free = [
  { no: "Open document preview" },
  { no: "Edit templates or settings" },
  { no: "Convert between document types" },
  { no: "Browse order lists" },
];

const support = [
  { plan: "Starter / Premium", body: "Email support" },
  { plan: "Ultimate", body: "Priority email support" },
  { plan: "All paid", body: "Tawk.to chat on app pages" },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Pricing", path: "/pricing" }]} />
      <PageHero
        kicker="Pricing"
        title="Pick a plan. Keep the paperwork moving."
        body="FREE is Home and Pricing only. Paid plans unlock all six document types, templates, and print / PDF. Yearly billing is 20% off."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <PricingToggle />
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-4 sm:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Which Billoxi plan fits your Shopify store?
        </h2>
        <p className="mt-4 text-[15px] leading-8 text-muted">
          Starter is for shops that need branded invoices, packing slips, and
          credit notes with print and PDF. Premium adds SMTP email, email
          templates, bulk convert and ZIP download, auto invoice on paid, auto
          credit note on cancel or refund, multi-currency, and the 14-day
          dashboard chart. Ultimate removes the monthly order cap and adds
          customer PDF links for Shopify notification emails, Admin order /
          draft extensions, activity log, and priority support. Yearly billing
          saves 20% on every paid plan.
        </p>
      </section>

      <section className="border-y border-line bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              Counts as 1 order
            </h2>
            <ul className="mt-5 space-y-2 text-sm">
              {counts.map((item) => (
                <li key={item.yes} className="flex gap-2">
                  <span className="text-lime">●</span>
                  {item.yes}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Does not count</h2>
            <ul className="mt-5 space-y-2 text-sm">
              {free.map((item) => (
                <li key={item.no} className="flex gap-2 text-muted">
                  <span>○</span>
                  {item.no}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-2xl font-semibold">Support</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {support.map((item) => (
            <article
              key={item.plan}
              className="rounded-2xl border border-line bg-card p-5"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-lime">
                {item.plan}
              </p>
              <p className="mt-2 text-sm">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Cancel a subscription and the shop returns to FREE until a paid plan is
          chosen again.
        </p>
      </section>

      <Cta />
    </>
  );
}
