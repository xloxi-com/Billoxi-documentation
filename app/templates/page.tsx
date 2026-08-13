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
    "15 branded invoice and packing slip layouts for Shopify. Edit language, paper size, logo, fonts, tax layout, and totals.",
  path: "/templates",
  keywords: [
    "Shopify invoice templates",
    "packing slip templates",
    "branded invoice PDF",
    "invoice layout editor",
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
