import Link from "next/link";
import { documentTypes } from "@/lib/content";

export function DocumentTypes() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
              Six document types
            </p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Invoices, packing slips, and credit notes from one app.
            </h2>
          </div>
          <Link
            href="/features"
            className="text-sm text-muted transition-colors hover:text-lime"
          >
            See every feature →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documentTypes.map((doc) => (
            <Link
              key={doc.id}
              href={`/features#${doc.id}`}
              className="group rounded-2xl border border-line bg-card p-6 transition-colors hover:border-lime/40"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-lime font-display text-xs font-semibold text-ink">
                  {doc.label}
                </span>
                <span className="text-xs text-muted group-hover:text-lime">
                  View
                </span>
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold">{doc.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{doc.summary}</p>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Line items, prices, discounts, tax, and totals are not edited in
          Billoxi. They always sync from the Shopify order.
        </p>
      </div>
    </section>
  );
}
