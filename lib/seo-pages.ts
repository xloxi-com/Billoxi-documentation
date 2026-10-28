export type SeoLandingPage = {
  slug: string;
  path: string;
  navLabel: string;
  title: string;
  description: string;
  keywords: string[];
  kicker: string;
  h1: string;
  lead: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "smart-invoice-pdf",
    path: "/smart-invoice-pdf",
    navLabel: "Smart Invoice PDF",
    title: "Billoxi: Smart Invoice PDF | Shopify App by XLOXI",
    description:
      "Billoxi: Smart Invoice PDF is the Shopify app by XLOXI for branded invoices, packing slips, credit notes, drafts, and returns. Print, download PDF, or email from every order.",
    keywords: [
      "Billoxi",
      "Billoxi: Smart Invoice PDF",
      "Smart Invoice PDF",
      "Billoxi Shopify app",
      "Shopify smart invoice PDF",
      "XLOXI PVT LTD",
      "apps.shopify.com/billoxi",
    ],
    kicker: "Billoxi · Shopify App Store",
    h1: "Billoxi: Smart Invoice PDF for Shopify",
    lead: "Billoxi is the Shopify Smart Invoice PDF app by XLOXI PVT LTD. Install from apps.shopify.com/billoxi to turn every order into a branded invoice, packing slip, credit note, draft, or return — without retyping line items.",
    sections: [
      {
        heading: "What Smart Invoice PDF means in Billoxi",
        body: "Beautiful PDF templates, professional invoices, sales orders, and credit notes in seconds. Billoxi keeps prices, discounts, tax, and totals synced with the Shopify order, then lets you customize logo, language, numbering, tax layout, and paper size.",
        bullets: [
          "Professional templates — modern, customizable designs",
          "Easy to use — generate PDFs in a few clicks",
          "Download & share — export or email customers via SMTP",
          "Secure & reliable — order data stays tied to Shopify",
        ],
      },
      {
        heading: "Documents included",
        body: "One Billoxi install covers the full order-desk stack merchants search for when they look up Billoxi or Smart Invoice PDF.",
        bullets: [
          "Invoices",
          "Sales orders",
          "Credit notes",
          "Packing slips",
          "Drafts",
          "Returns",
        ],
      },
      {
        heading: "Where to install Billoxi",
        body: "Search Billoxi on the Shopify App Store or open the listing for Billoxi: Smart Invoice PDF by XLOXI PVT LTD. Plans start from $9.99/month with a free trial on paid plans. This website (www.xloxi.com) is the product home for features, pricing, templates, FAQ, and guides.",
      },
    ],
    faqs: [
      {
        q: "What is Billoxi: Smart Invoice PDF?",
        a: "Billoxi is a Shopify app by XLOXI that creates branded Smart Invoice PDFs plus packing slips, credit notes, drafts, and returns from Shopify orders.",
      },
      {
        q: "Who makes Billoxi?",
        a: "XLOXI PVT LTD. Support: billoxi@xloxi.com. Website: www.xloxi.com. App Store: apps.shopify.com/billoxi.",
      },
    ],
    related: [
      { href: "/shopify-invoice-app", label: "Shopify invoice app" },
      { href: "/shopify-packing-slip-app", label: "Packing slip app" },
      { href: "/blog/what-is-billoxi-shopify-invoice-app", label: "What is Billoxi?" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    slug: "shopify-invoice-app",
    path: "/shopify-invoice-app",
    navLabel: "Invoice app",
    title: "Shopify Invoice App | Billoxi Smart Invoice PDF by XLOXI",
    description:
      "Billoxi is a Shopify invoice app for branded PDF invoices from every order. Auto-create on paid, customize templates, print, download, or email via SMTP.",
    keywords: [
      "Shopify invoice app",
      "Billoxi",
      "PDF invoice Shopify",
      "branded Shopify invoice",
      "Smart Invoice PDF",
      "best Shopify invoice app",
    ],
    kicker: "Shopify invoice app",
    h1: "Shopify invoice app with branded Smart Invoice PDFs",
    lead: "Billoxi by XLOXI is the Shopify invoice app merchants install when customers need a professional PDF after checkout. Convert sales orders to invoices, brand fifteen templates, then print, download, or email — line items stay in Shopify.",
    sections: [
      {
        heading: "Why merchants pick Billoxi for invoices",
        body: "Generic exports look unfinished. Billoxi turns the Shopify order into a branded invoice with your logo, colors, tax layout, numbering, and language — without copying products into another tool.",
        bullets: [
          "Manual convert or auto invoice when the order is paid (Premium+)",
          "Fifteen layout presets plus a full template editor",
          "B2B company name, company ID, and VAT on documents",
          "Bulk PDF / ZIP and bulk email on Premium and Ultimate",
        ],
      },
      {
        heading: "Invoice workflow",
        body: "Every Shopify order gets a Billoxi sales order. Convert to invoice when you are ready — or let automation create it on paid. Edit number, date, notes, and terms. Totals never diverge from Shopify.",
      },
      {
        heading: "Install the Billoxi Shopify invoice app",
        body: "Open Billoxi: Smart Invoice PDF on the Shopify App Store, start the trial, set store details and a template, then create your first invoice PDF from an order.",
      },
    ],
    faqs: [
      {
        q: "Is Billoxi only for invoices?",
        a: "No. Billoxi also creates packing slips, credit notes, drafts, and returns — the full order document desk in one Shopify app.",
      },
      {
        q: "Can I email Shopify invoices?",
        a: "Yes. Premium+ plans use your SMTP server with optional PDF attachments and per-document email templates.",
      },
    ],
    related: [
      { href: "/smart-invoice-pdf", label: "Smart Invoice PDF" },
      { href: "/shopify-packing-slip-app", label: "Packing slips" },
      { href: "/shopify-credit-note-app", label: "Credit notes" },
      { href: "/blog/create-branded-shopify-invoices-with-billoxi", label: "Invoice guide" },
    ],
  },
  {
    slug: "shopify-packing-slip-app",
    path: "/shopify-packing-slip-app",
    navLabel: "Packing slips",
    title: "Shopify Packing Slip App | Billoxi PDF Printer by XLOXI",
    description:
      "Billoxi is a Shopify packing slip app: convert orders to branded packing slip PDFs, print SKU and barcode text, and fulfill faster from one document desk.",
    keywords: [
      "Shopify packing slip",
      "packing slip PDF",
      "Billoxi packing slip",
      "Shopify packing slip app",
      "order printer Shopify",
      "Billoxi",
    ],
    kicker: "Shopify packing slip app",
    h1: "Shopify packing slip PDFs with Billoxi",
    lead: "Fulfillment teams need clear packing slips. Billoxi converts a sales order into a branded packing slip PDF — logo, columns, paper size, SKU and barcode text — then you print or download for the warehouse.",
    sections: [
      {
        heading: "Built for warehouse desks",
        body: "Convert sales order → packing slip without deleting the sales order. Status tabs help you work Unfulfilled, Partial, and Fulfilled lists. Single-row print and PDF work on every paid plan; bulk ZIP is on Premium+.",
        bullets: [
          "SKU and barcode print as text from the variant",
          "No generated QR or barcode images",
          "Same template system as invoices and credit notes",
          "Email packing slips through SMTP when needed",
        ],
      },
      {
        heading: "One app with invoices and packing slips",
        body: "Search Billoxi when you want both a Shopify invoice app and a packing slip printer. Billoxi: Smart Invoice PDF covers invoices, packing slips, credit notes, drafts, and returns in one install.",
      },
    ],
    faqs: [
      {
        q: "Does deleting a packing slip delete the Shopify order?",
        a: "No. Deleting removes only the Billoxi packing-slip record. The sales order stays in Shopify and Billoxi.",
      },
    ],
    related: [
      { href: "/shopify-invoice-app", label: "Invoice app" },
      { href: "/templates", label: "Templates" },
      { href: "/blog/shopify-packing-slip-pdf-with-billoxi", label: "Packing slip guide" },
      { href: "/features", label: "Features" },
    ],
  },
  {
    slug: "shopify-credit-note-app",
    path: "/shopify-credit-note-app",
    navLabel: "Credit notes",
    title: "Shopify Credit Note App | Billoxi Refunds & Returns by XLOXI",
    description:
      "Issue Shopify credit notes and return documents with Billoxi. Create from invoices, auto-create on cancel or refund, then print or email branded PDFs.",
    keywords: [
      "Shopify credit note",
      "Billoxi credit note",
      "Shopify return document",
      "refund invoice Shopify",
      "Billoxi",
      "Smart Invoice PDF",
    ],
    kicker: "Shopify credit note app",
    h1: "Shopify credit notes and returns with Billoxi",
    lead: "Refunds need paperwork. Billoxi creates credit notes from invoices and return documents for refunded Shopify orders — with optional Premium automation on cancel or refund.",
    sections: [
      {
        heading: "Credit note controls",
        body: "Create a credit note from an invoice. Edit number, date, reason, notes, and terms. Void to keep a voided record, or delete and recreate after void. An invoice cannot be deleted while its credit note exists.",
      },
      {
        heading: "Automation",
        body: "Premium and Ultimate can auto-create credit notes when an order is cancelled or when a full or partial refund is created. Return documents can follow Shopify returns webhooks on all paid plans.",
      },
      {
        heading: "Same Smart Invoice PDF brand",
        body: "Credit notes and returns use the same Billoxi template system as invoices — so refund paperwork looks as professional as your Smart Invoice PDFs.",
      },
    ],
    faqs: [
      {
        q: "Does Billoxi sync credit notes to QuickBooks?",
        a: "No. Billoxi keeps documents next to the Shopify order for print, PDF, and email. It does not sync to QuickBooks or Xero.",
      },
    ],
    related: [
      { href: "/shopify-invoice-app", label: "Invoice app" },
      { href: "/blog/shopify-credit-notes-and-returns-billoxi", label: "Credit notes guide" },
      { href: "/faq", label: "FAQ" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
];

export function getSeoLandingPage(slug: string): SeoLandingPage | undefined {
  return seoLandingPages.find((page) => page.slug === slug);
}
