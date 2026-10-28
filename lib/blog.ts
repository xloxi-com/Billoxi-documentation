export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  category: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-billoxi-shopify-invoice-app",
    title: "What Is Billoxi? The Shopify Invoice & Packing Slip App by XLOXI",
    description:
      "Billoxi is a Shopify app by XLOXI that creates branded invoices, packing slips, credit notes, drafts, and returns from every order — print, PDF, or email.",
    keywords: [
      "Billoxi",
      "Billoxi Shopify app",
      "Billoxi by XLOXI",
      "Shopify invoice app",
      "XLOXI Billoxi",
      "apps.shopify.com/billoxi",
    ],
    publishedAt: "2026-09-15",
    updatedAt: "2026-10-28",
    readingMinutes: 7,
    category: "Product",
    sections: [
      {
        type: "p",
        text: "Billoxi is a Shopify app built by XLOXI (XLOXI PVT LTD) for merchants who still need paperwork after checkout. Search for Billoxi on the Shopify App Store, or open it at apps.shopify.com/billoxi, to install branded order documents without retyping line items.",
      },
      {
        type: "h2",
        text: "What Billoxi does inside Shopify",
      },
      {
        type: "p",
        text: "Billoxi reads the Shopify order so items, prices, discounts, tax, and totals stay accurate. You brand the document once, then convert, print, download a PDF, or email through your own SMTP server as the order moves from paid to fulfilled or refunded.",
      },
      {
        type: "ul",
        items: [
          "Sales orders with a Billoxi document number on every Shopify order",
          "Invoices — manual convert or auto-create when the order is paid",
          "Draft order documents that can finalize into invoices",
          "Packing slips for warehouse and fulfillment desks",
          "Credit notes from invoices, with optional auto-create on cancel or refund",
          "Return documents tied to refunded or returning orders",
        ],
      },
      {
        type: "h2",
        text: "Why merchants choose the Billoxi Shopify app",
      },
      {
        type: "p",
        text: "Billoxi does not change Shopify order totals. Line items always sync from Shopify — you never edit prices inside the app. That keeps invoices honest for customers, accountants, and B2B company billing while still looking like your brand on paper and PDF.",
      },
      {
        type: "ol",
        items: [
          "Install Billoxi from the Shopify App Store listing for Billoxi by XLOXI.",
          "Set store details, logo, transaction number prefixes, and a document template.",
          "Open any order desk list — sales orders, invoices, packing slips, and more.",
          "Print, download PDF, or send email with an optional PDF attachment.",
        ],
      },
      {
        type: "h2",
        text: "Plans and where to find Billoxi",
      },
      {
        type: "p",
        text: "Paid plans start with Starter for core print, PDF, and email. Premium adds automation, bulk ZIP downloads, multi-currency, and SMTP email templates. Ultimate adds customer PDF download links for Shopify notification emails, Admin extensions, and an activity log. Find Billoxi under Orders and shipping → Orders → Invoices and receipts, or search Billoxi on apps.shopify.com.",
      },
      {
        type: "p",
        text: "Billoxi by XLOXI is the Shopify invoice, packing slip, and credit note app designed for real order desks — not a generic PDF generator disconnected from your catalog.",
      },
    ],
  },
  {
    slug: "create-branded-shopify-invoices-with-billoxi",
    title: "How to Create Branded Shopify Invoices with Billoxi",
    description:
      "Step-by-step guide to branded Shopify invoices with Billoxi: convert sales orders, customize templates, print or download PDF, and email customers.",
    keywords: [
      "Billoxi invoice",
      "Shopify branded invoice",
      "create Shopify invoice PDF",
      "Billoxi Shopify app",
      "invoice templates Shopify",
    ],
    publishedAt: "2026-09-22",
    updatedAt: "2026-10-28",
    readingMinutes: 8,
    category: "Guides",
    sections: [
      {
        type: "p",
        text: "Customers often ask for a PDF invoice after checkout. With Billoxi, every Shopify order already has a sales order you can convert into a branded invoice — logo, colors, paper size, and tax layout included — without copying products into a spreadsheet.",
      },
      {
        type: "h2",
        text: "1. Install Billoxi and set store branding",
      },
      {
        type: "p",
        text: "Open the Billoxi Shopify app, then add your logo (PNG, JPG, or WebP), store name, address, phone, email, and website. These details appear on invoices so the PDF matches your brand, not a blank Shopify export.",
      },
      {
        type: "h2",
        text: "2. Pick an invoice template",
      },
      {
        type: "p",
        text: "Billoxi includes fifteen layout presets per document type. Edit fonts, margins, A5 / A4 / Letter paper, orientation, column visibility, tax layout, and PDF label language (104 languages). Admin UI language is separate and does not change printed labels.",
      },
      {
        type: "h2",
        text: "3. Convert a sales order to an invoice",
      },
      {
        type: "ul",
        items: [
          "Open Sales orders in Billoxi and find the Shopify order by name, customer, or Billoxi number.",
          "Convert to invoice — or turn on Premium automation to auto-create invoices when orders are paid.",
          "Edit invoice number, date, customer notes, and terms if needed.",
          "Print from the live paper preview, download a PDF, or send email via SMTP.",
        ],
      },
      {
        type: "h2",
        text: "4. Keep totals in Shopify",
      },
      {
        type: "p",
        text: "Billoxi never rewrites order totals. Discounts, tax, and currency come from the Shopify order so your branded invoice stays aligned with what the customer paid. For B2B, company name, company ID, and VAT can appear on the document when Shopify companies data is present.",
      },
      {
        type: "p",
        text: "Need the app? Search Billoxi on the Shopify App Store or visit the Billoxi by XLOXI listing to start a trial.",
      },
    ],
  },
  {
    slug: "shopify-packing-slip-pdf-with-billoxi",
    title: "Shopify Packing Slip PDF: Print Warehouse Docs with Billoxi",
    description:
      "Convert Shopify orders into packing slip PDFs with Billoxi. Print SKU and barcode text, brand the layout, and fulfill faster from one document desk.",
    keywords: [
      "Shopify packing slip",
      "packing slip PDF",
      "Billoxi packing slip",
      "Shopify warehouse documents",
      "order printer Shopify",
    ],
    publishedAt: "2026-09-29",
    updatedAt: "2026-10-28",
    readingMinutes: 6,
    category: "Guides",
    sections: [
      {
        type: "p",
        text: "Fulfillment teams need a clear packing slip — not a full invoice. Billoxi lets you convert a sales order into a packing slip, then print or download a PDF sized for your warehouse workflow.",
      },
      {
        type: "h2",
        text: "Convert sales order → packing slip",
      },
      {
        type: "p",
        text: "From the Billoxi sales-order list or detail page, convert to packing slip. The sales order stays in Shopify and Billoxi; deleting a packing slip removes only the Billoxi packing-slip record.",
      },
      {
        type: "h2",
        text: "What prints on a Billoxi packing slip",
      },
      {
        type: "ul",
        items: [
          "Line items and quantities from the Shopify order",
          "SKU and barcode as text from the variant (no generated barcode or QR images)",
          "Your active packing-slip template: logo, columns, paper size, language",
          "Fulfillment-friendly status tabs: Unfulfilled, Partial, Fulfilled",
        ],
      },
      {
        type: "h2",
        text: "Bulk print and PDF ZIP",
      },
      {
        type: "p",
        text: "On Premium and Ultimate, select multiple packing slips to bulk download PDF / ZIP or bulk email. Single-row print, PDF, and email work on every paid Billoxi plan.",
      },
      {
        type: "p",
        text: "Billoxi is listed as a Shopify packing slip and invoice app — search Billoxi when you need warehouse PDFs that match your brand.",
      },
    ],
  },
  {
    slug: "shopify-credit-notes-and-returns-billoxi",
    title: "Shopify Credit Notes & Returns with Billoxi",
    description:
      "Issue Shopify credit notes from invoices and create return documents with Billoxi. Optional auto-create on cancel or refund for Premium plans.",
    keywords: [
      "Shopify credit note",
      "Billoxi credit note",
      "Shopify return document",
      "refund paperwork Shopify",
      "Billoxi returns",
    ],
    publishedAt: "2026-10-06",
    updatedAt: "2026-10-28",
    readingMinutes: 7,
    category: "Guides",
    sections: [
      {
        type: "p",
        text: "Refunds need paperwork too. Billoxi creates credit notes from invoices and return documents for refunded or returning Shopify orders — so accounting and customers get a clear paper trail.",
      },
      {
        type: "h2",
        text: "Credit notes from invoices",
      },
      {
        type: "p",
        text: "Open an invoice in Billoxi and create a credit note. You can edit number, date, reason, notes, and terms. Void a credit note to keep it listed as voided, or delete and recreate after void when needed. An invoice cannot be deleted while its credit note still exists.",
      },
      {
        type: "h2",
        text: "Automation on cancel and refund",
      },
      {
        type: "ul",
        items: [
          "Premium+: auto credit note when an order is cancelled (if an invoice exists)",
          "Premium+: auto credit note on full or partial refund via refunds/create",
          "All paid: return documents from returns/request and returns/approve webhooks",
          "Convert a refunded sales order into a return document manually when needed",
        ],
      },
      {
        type: "h2",
        text: "Print, PDF, or email",
      },
      {
        type: "p",
        text: "Like invoices and packing slips, credit notes and returns use your branded templates. Print the live preview, download a PDF, or send through SMTP with an optional attachment. Billoxi does not sync to QuickBooks or Xero — it keeps documents next to the Shopify order.",
      },
      {
        type: "p",
        text: "Install the Billoxi Shopify app by XLOXI when you need credit notes and returns that look as professional as your invoices.",
      },
    ],
  },
  {
    slug: "auto-invoice-when-shopify-order-paid",
    title: "Auto-Create Shopify Invoices When Orders Are Paid (Billoxi)",
    description:
      "Turn on Billoxi Premium automation to auto-create invoices when Shopify orders are paid. Less clicking, same branded PDF output.",
    keywords: [
      "auto invoice Shopify",
      "Billoxi automation",
      "invoice on paid",
      "Shopify paid order invoice",
      "Billoxi Premium",
    ],
    publishedAt: "2026-10-10",
    updatedAt: "2026-10-28",
    readingMinutes: 5,
    category: "Automation",
    sections: [
      {
        type: "p",
        text: "If every paid order needs an invoice, manual convert does not scale. Billoxi Premium and Ultimate can listen for orders/paid and auto-create the invoice from the Billoxi sales order.",
      },
      {
        type: "h2",
        text: "How Billoxi automation works",
      },
      {
        type: "ol",
        items: [
          "A Shopify order creates a Billoxi sales order (all paid plans).",
          "When the order is paid, the orders/paid webhook can convert to invoice if automation is On.",
          "Your active invoice template brands the PDF automatically.",
          "You still print, download, or email — or let bulk tools handle batches later.",
        ],
      },
      {
        type: "h2",
        text: "Pair with credit-note automation",
      },
      {
        type: "p",
        text: "The same Settings → Automation area can create credit notes on cancel or refund. Together, Billoxi keeps invoice and credit-note paperwork moving with Shopify payment state instead of a separate spreadsheet.",
      },
      {
        type: "p",
        text: "Search Billoxi on the Shopify App Store, choose Premium or Ultimate, and enable auto invoice on paid in a few clicks.",
      },
    ],
  },
  {
    slug: "email-shopify-invoices-smtp-billoxi",
    title: "Email Shopify Invoices with SMTP Using Billoxi",
    description:
      "Send branded Shopify invoice PDFs from Billoxi using your own SMTP. Gmail and Webmail presets, email templates, and optional PDF attachments.",
    keywords: [
      "email Shopify invoice",
      "SMTP invoice Shopify",
      "Billoxi email",
      "send packing slip email",
      "Billoxi SMTP",
    ],
    publishedAt: "2026-10-14",
    updatedAt: "2026-10-28",
    readingMinutes: 6,
    category: "Guides",
    sections: [
      {
        type: "p",
        text: "Billoxi does not use a mailto fallback. Emailing invoices, packing slips, or credit notes requires SMTP in Settings — so messages leave from your domain with a professional from address.",
      },
      {
        type: "h2",
        text: "Connect SMTP",
      },
      {
        type: "ul",
        items: [
          "Enter host, port, TLS, username, password, and from address",
          "Use one-click Gmail or Webmail presets when they match your provider",
          "Premium+ unlocks SMTP and per-document email templates",
          "Attach the PDF optionally so customers get the branded file",
        ],
      },
      {
        type: "h2",
        text: "Email templates per document type",
      },
      {
        type: "p",
        text: "Premium plans include one email template per document type — subject, HTML body, attach PDF, and live preview. Customize invoice language differently from packing-slip language while keeping the same SMTP server.",
      },
      {
        type: "h2",
        text: "Customer download links (Ultimate)",
      },
      {
        type: "p",
        text: "Ultimate adds snippets you can paste into Shopify notification emails so customers download PDFs themselves — including a smart option for paid versus COD. That complements SMTP send from the Billoxi desk.",
      },
      {
        type: "p",
        text: "Billoxi by XLOXI is the Shopify app to email order documents without leaving Admin. Open Billoxi on apps.shopify.com to configure SMTP after install.",
      },
    ],
  },
  {
    slug: "billoxi-invoice-templates-guide",
    title: "Billoxi Invoice Templates: 15 Layouts for Shopify Documents",
    description:
      "Explore Billoxi’s fifteen Shopify invoice and packing slip templates. Customize logo, colors, fonts, paper size, language, tax layout, and totals.",
    keywords: [
      "Billoxi templates",
      "Shopify invoice templates",
      "packing slip templates",
      "branded PDF Shopify",
      "Billoxi layout presets",
    ],
    publishedAt: "2026-10-18",
    updatedAt: "2026-10-28",
    readingMinutes: 6,
    category: "Templates",
    sections: [
      {
        type: "p",
        text: "Generic packing slips look unfinished. Billoxi ships fifteen layout presets for sales orders, invoices, drafts, packing slips, credit notes, and returns so every PDF matches your brand.",
      },
      {
        type: "h2",
        text: "What you can edit",
      },
      {
        type: "ul",
        items: [
          "Logo, colors, and typography",
          "Paper size: A5, A4, or Letter — plus orientation and margins",
          "Column visibility for SKU, barcode text, quantity, tax, and totals",
          "Tax layout and totals presentation",
          "PDF label language across 104 languages",
          "Customer notes and terms blocks",
        ],
      },
      {
        type: "h2",
        text: "Live paper preview",
      },
      {
        type: "p",
        text: "Document detail pages show a scaled live preview of the active template before you print or download. Status ribbons stay in admin only — they are not printed on the customer PDF.",
      },
      {
        type: "h2",
        text: "Honest limits",
      },
      {
        type: "p",
        text: "SKU and barcode print as text from the Shopify variant. Billoxi does not generate QR codes or barcode images. That keeps templates simple and reliable across printers.",
      },
      {
        type: "p",
        text: "Browse templates on this site or inside the Billoxi Shopify app after you install from the App Store listing for Billoxi.",
      },
    ],
  },
  {
    slug: "shopify-draft-order-invoices-billoxi",
    title: "Shopify Draft Order Invoices with Billoxi",
    description:
      "Create branded documents for Shopify Admin draft orders with Billoxi, then finalize drafts into invoices when the deal is ready.",
    keywords: [
      "Shopify draft order invoice",
      "Billoxi drafts",
      "B2B Shopify invoice",
      "draft order PDF",
      "Billoxi Shopify app",
    ],
    publishedAt: "2026-10-22",
    updatedAt: "2026-10-28",
    readingMinutes: 5,
    category: "B2B",
    sections: [
      {
        type: "p",
        text: "Wholesale and custom quotes often start as Shopify draft orders. Billoxi creates branded draft documents you can print or email, then finalize into an invoice when the customer commits.",
      },
      {
        type: "h2",
        text: "Draft workflow in Billoxi",
      },
      {
        type: "ul",
        items: [
          "Requires read_draft_orders scope",
          "Create and open drafts in Shopify from Billoxi where supported",
          "Convert / finalize draft → invoice",
          "Tabs: Open, Invoice sent, Completed",
          "Ultimate Admin extensions can download or print draft PDFs from Shopify Admin",
        ],
      },
      {
        type: "h2",
        text: "B2B company fields",
      },
      {
        type: "p",
        text: "Company columns appear on Billoxi lists. Documents can show company name, company ID, and VAT when Shopify B2B / companies data is available — useful for purchase-order style paperwork without leaving Shopify.",
      },
      {
        type: "p",
        text: "Looking for a draft order invoice app? Search Billoxi — the Shopify app by XLOXI built for drafts, invoices, and packing slips together.",
      },
    ],
  },
  {
    slug: "best-shopify-invoice-app-for-order-desks",
    title: "Best Shopify Invoice App for Real Order Desks: Why Billoxi",
    description:
      "Compare what a Shopify invoice app should do after checkout. Billoxi by XLOXI covers invoices, packing slips, credit notes, drafts, returns, PDF, and SMTP email.",
    keywords: [
      "best Shopify invoice app",
      "Billoxi",
      "Shopify order documents",
      "order printer Shopify",
      "Billoxi by XLOXI",
    ],
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-28",
    readingMinutes: 8,
    category: "Comparisons",
    sections: [
      {
        type: "p",
        text: "Merchants searching for the best Shopify invoice app usually need more than one PDF. They need packing slips, credit notes, draft paperwork, returns, bulk download, and email — all reading the same order. That is what Billoxi is built for.",
      },
      {
        type: "h2",
        text: "Checklist for a Shopify invoice app",
      },
      {
        type: "ul",
        items: [
          "Totals stay in Shopify — no divergent prices",
          "Branded templates with logo and paper sizes",
          "Packing slips for fulfillment, not only invoices",
          "Credit notes and returns for refund workflows",
          "Print, PDF download, and real SMTP email",
          "Automation when orders are paid or refunded",
          "Clear App Store listing — Billoxi on apps.shopify.com/billoxi",
        ],
      },
      {
        type: "h2",
        text: "How Billoxi scores on that checklist",
      },
      {
        type: "p",
        text: "Billoxi by XLOXI is an embedded Shopify app with six document types on every paid plan, fifteen templates, SMTP email on Premium+, and Admin extensions on Ultimate. It is listed under invoices and receipts so searching Billoxi or Shopify invoice app both point merchants to the right tool.",
      },
      {
        type: "h2",
        text: "Who Billoxi fits",
      },
      {
        type: "ul",
        items: [
          "DTC brands that email PDF invoices after checkout",
          "Warehouses printing packing slips all day",
          "Stores issuing credit notes on cancel or refund",
          "B2B merchants printing company and VAT details",
        ],
      },
      {
        type: "p",
        text: "Install Billoxi from the Shopify App Store, compare Starter / Premium / Ultimate on the pricing page, and run the 7-day trial on paid plans. When someone searches Billoxi, they should find this Shopify app — branded order documents without the busywork.",
      },
    ],
  },
  {
    slug: "billoxi-shopify-app-setup-checklist",
    title: "Billoxi Shopify App Setup Checklist (First Week)",
    description:
      "First-week setup for the Billoxi Shopify app: language, store details, templates, numbers, SMTP, automation, and your first invoice PDF.",
    keywords: [
      "Billoxi setup",
      "Billoxi Shopify app",
      "install Billoxi",
      "Shopify invoice setup",
      "XLOXI Billoxi",
    ],
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
    readingMinutes: 7,
    category: "Getting started",
    sections: [
      {
        type: "p",
        text: "Just installed Billoxi? This checklist gets you from empty settings to a branded invoice PDF merchants can trust. Billoxi’s home dashboard already surfaces the same setup steps inside the app.",
      },
      {
        type: "h2",
        text: "Day one",
      },
      {
        type: "ol",
        items: [
          "Install Billoxi from apps.shopify.com/billoxi and open the embedded app.",
          "Set Admin language (menus only — PDF labels are per template).",
          "Add store details and logo under Settings.",
          "Choose a template for invoices and packing slips; set PDF language.",
          "Configure transaction number prefixes and starting numbers with the live preview.",
        ],
      },
      {
        type: "h2",
        text: "Day two — send and automate",
      },
      {
        type: "ol",
        items: [
          "On Premium+, connect SMTP and send a test invoice email with PDF attached.",
          "Customize email templates per document type.",
          "Enable auto invoice on paid and credit note on cancel/refund if you want less clicking.",
          "On Ultimate, copy customer download-link snippets into Shopify notification emails.",
        ],
      },
      {
        type: "h2",
        text: "First real order",
      },
      {
        type: "p",
        text: "Open Sales orders, find a live Shopify order, convert to invoice and packing slip, print once, download PDF once, and email once. Confirm totals match Shopify. Then train your team on list search, filters, and bulk ZIP on Premium+.",
      },
      {
        type: "p",
        text: "Questions? Read the Billoxi FAQ or email billoxi@xloxi.com. Searching Billoxi should bring you back to this Shopify app by XLOXI whenever you need order documents.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0,
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return getAllPosts().slice(0, limit);
  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .filter(
      (post) =>
        post.category === current.category ||
        post.keywords.some((k) => current.keywords.includes(k)),
    )
    .slice(0, limit);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function postPath(slug: string): string {
  return `/blog/${slug}`;
}
