import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Cta } from "@/components/home/Cta";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FAQ",
  description:
    "Billoxi by XLOXI FAQ: Shopify totals stay in the order, email needs SMTP, and SKU or barcode print as text — not QR images.",
  path: "/faq",
  keywords: [
    "Billoxi FAQ",
    "XLOXI Billoxi help",
    "Shopify invoice SMTP",
    "Shopify packing slip PDF",
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Breadcrumb items={[{ name: "FAQ", path: "/faq" }]} />
      <PageHero
        kicker="FAQ"
        title="What merchants usually ask."
        body="Clear limits, honest answers. No fake stats. No mailto fallback. No generated QR codes."
      />
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <FaqList />
      </section>
      <Cta />
    </>
  );
}
