import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Cta } from "@/components/home/Cta";
import { PageHero } from "@/components/PageHero";
import { TemplateGallery } from "@/components/TemplateGallery";
import { editorHighlights } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Shopify Invoice Templates",
  description:
    "15 Billoxi invoice and packing slip templates for Shopify by XLOXI. Customize logo, colors, fonts, paper size, language, tax layout, and totals.",
  path: "/templates",
  keywords: [
    "Billoxi templates",
    "Shopify invoice templates",
    "packing slip templates",
    "branded invoice PDF",
    "invoice layout editor",
    "XLOXI",
  ],
});

export default function TemplatesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Templates", path: "/templates" }]} />
      <PageHero
        kicker="Templates"
        title="Fifteen layouts. One editor. Your logo."
        body="Pick a type, preview, use, then edit. Document labels support 104 languages. Admin language does not change the PDF."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <TemplateGallery />
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-8 sm:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Shopify invoice templates you can brand
        </h2>
        <p className="mt-4 text-[15px] leading-8 text-muted">
          Billoxi includes fifteen layout presets for sales orders, invoices,
          drafts, returns, and credit notes — and fifteen packing-slip layouts
          for fulfillment. Every paid plan unlocks the full editor: store logo
          from Settings, paper size (A5, A4, Letter), portrait or landscape,
          margins, currency symbol or ISO code, tax summary, payment-status
          styles, product images, metafield columns, and 104 document label
          languages. SKU and barcode print as text from the Shopify variant —
          Billoxi does not generate QR codes or barcode images.
        </p>
        <p className="mt-4 text-[15px] leading-8 text-muted">
          After you pick a template, use it across the document desk for print,
          PDF download, and SMTP email. Admin language for menus is separate
          from PDF label language, so your team can work in one language while
          customer documents ship in another.
        </p>
      </section>

      <section className="border-y border-line bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            What you can edit
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {editorHighlights.map((block) => (
              <article
                key={block.title}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <h3 className="font-medium">{block.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Not included: QR codes or generated barcode images. SKU and barcode
            print as text from the Shopify variant.
          </p>
        </div>
      </section>

      <Cta />
    </>
  );
}
