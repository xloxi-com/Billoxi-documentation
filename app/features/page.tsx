import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Cta } from "@/components/home/Cta";
import { PageHero } from "@/components/PageHero";
import {
  documentTypes,
  editorHighlights,
  settingsModules,
} from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Shopify Invoice Features",
  description:
    "Sales orders, invoices, drafts, packing slips, credit notes, and returns for Shopify — plus templates, SMTP email, automation, and Admin extensions.",
  path: "/features",
  keywords: [
    "Shopify invoice features",
    "packing slip app",
    "credit note Shopify",
    "draft order invoice",
    "Shopify document automation",
  ],
});

const convertRules = [
  "Convert sales order → invoice",
  "Convert sales order → packing slip",
  "Convert sales order → return (refunded or partially refunded)",
  "Convert draft → invoice (finalize)",
  "Create credit note from invoice",
  "Void credit note",
  "Delete invoice / credit note / packing slip / return / draft (Billoxi record only)",
  "Invoice cannot be deleted until its credit note is deleted",
];

const listTools = [
  {
    title: "Search",
    body: "Shopify order name, customer name or email, company (B2B), and Billoxi document numbers. 250ms debounce.",
  },
  {
    title: "Sort & pages",
    body: "Order, reference, customer, date, total, balance due. Default date descending. 25 rows, cursor next / previous, reload.",
  },
  {
    title: "Columns",
    body: "Show, hide, and drag to reorder. Saved in the browser. Company column on every list. Document and actions stay locked.",
  },
  {
    title: "Quick actions",
    body: "Print, download PDF, and send email (SMTP) on every paid plan.",
  },
];

const bulk = [
  {
    title: "Sales orders",
    items: [
      "Bulk convert to invoice, packing slip, or return",
      "Bulk send email",
      "Bulk download PDF / ZIP",
    ],
  },
  {
    title: "Invoices",
    items: ["Create credit note (one selected)", "Bulk send, download, delete"],
  },
  {
    title: "Credit notes",
    items: ["Bulk send, download, void, delete"],
  },
  {
    title: "Packing slips & returns",
    items: ["Bulk send, download, delete"],
  },
  {
    title: "Drafts",
    items: ["Open in Shopify (single selection)"],
  },
];

const detail = [
  "Live scaled paper preview of the active template",
  "Sidebar list + search to jump between documents",
  "Download PDF, print, send email with optional PDF",
  "Edit number, date, customer note, and terms",
  "Credit note also has Reason",
  "Sales order number: auto-numbering or manual",
  "Status ribbon in admin only — not printed on the PDF",
  "Packing slip and return have no edit number/date form",
];

const dashboard = [
  "Setup guide: language, store details, templates, numbers, SMTP",
  "Plan card: current plan, install date, monthly fee, trial end",
  "Analytics: monthly printed, downloaded, sent",
  "14-day chart (Premium+)",
  "Activity / event log (Ultimate)",
  "In-app Tawk.to chat on app pages",
];

const webhooks = [
  { event: "orders/create", body: "Assign sales-order number (all paid)" },
  { event: "orders/paid", body: "Auto-convert to invoice if On paid is on (Premium+)" },
  {
    event: "orders/cancelled",
    body: "Auto credit note if On cancel is on (Premium+, needs invoice)",
  },
  {
    event: "refunds/create",
    body: "Auto credit note on full or partial refund (Premium+)",
  },
  {
    event: "returns/request & approve",
    body: "Create Billoxi return document (all paid)",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Features", path: "/features" }]} />
      <PageHero
        kicker="Features"
        title="Everything after checkout, in one document desk."
        body="Billoxi does not change Shopify totals. You brand the paper, convert as the order moves, and print, download, or email."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Document types
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          All six types are on every paid plan. Convert, print, download, and
          email from lists or the detail page.
        </p>
        <div className="mt-10 grid gap-4">
          {documentTypes.map((doc) => (
            <article
              key={doc.id}
              id={doc.id}
              className="scroll-mt-24 rounded-2xl border border-line bg-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-lime font-display text-xs font-semibold text-ink">
                  {doc.label}
                </span>
                <h3 className="font-display text-2xl font-semibold">{doc.name}</h3>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                {doc.summary}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {doc.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-paper/90">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs uppercase tracking-[0.14em] text-muted">
                Tabs · {doc.tabs.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Convert, void, delete
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {convertRules.map((rule) => (
              <li
                key={rule}
                className="rounded-xl border border-line bg-card px-4 py-3 text-sm leading-6"
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Every list page
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {listTools.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Bulk actions
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Single-row actions work on all paid plans. Two or more selected rows
            require Premium or Ultimate.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bulk.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <h3 className="font-medium">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Document detail
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {detail.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Template editor
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Gallery at /app/templates. Full editor for language, paper, logo,
            columns, totals, fonts, and notes. SKU and barcode print as text —
            no QR or generated barcode images.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {editorHighlights.map((block) => (
              <article
                key={block.title}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <h3 className="font-medium">{block.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Settings
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {settingsModules.map((mod) => (
            <article
              key={mod.title}
              className="rounded-2xl border border-line bg-card p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.14em] text-lime">
                {mod.plan}
              </p>
              <h3 className="mt-2 font-medium">{mod.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{mod.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Home dashboard
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
              {dashboard.map((item) => (
                <li key={item} className="flex gap-3 text-paper/90">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Shopify Admin extensions
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Download sales order, invoice, packing slip, return, and draft from
              the order or draft order page. Print draft and return. No credit
              note extension. Shown for paid plans at runtime.
            </p>
            <h3 className="mt-8 font-medium">B2B</h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              Company column on every list. Company and company ID on documents.
              VAT number field. Works with Shopify B2B / companies data.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Webhooks
        </h2>
        <div className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
          {webhooks.map((hook) => (
            <div
              key={hook.event}
              className="grid gap-1 px-5 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline"
            >
              <code className="text-sm text-lime">{hook.event}</code>
              <p className="text-sm text-muted">{hook.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">
          Also: app uninstall, scopes update, and GDPR privacy webhooks.
        </p>
      </section>

      <Cta />
    </>
  );
}
