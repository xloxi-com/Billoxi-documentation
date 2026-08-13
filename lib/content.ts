export const site = {
  name: "Billoxi",
  company: "XLOXI",
  legalName: "XLOXI PVT LTD",
  email: "billoxi@xloxi.com",
  websiteUrl: "https://www.xloxi.com",
  websiteLabel: "www.xloxi.com",
  appStoreUrl: "https://apps.shopify.com/billoxi",
  appUrl: "https://apps.shopify.com/billoxi",
  category: "Orders and shipping → Orders → Invoices and receipts",
  tagline: "Order documents, without the busywork.",
  oneLiner:
    "Branded invoices, packing slips, credit notes, drafts, and returns from every Shopify order.",
  hero:
    "After checkout, merchants still need paperwork. Billoxi turns the Shopify order into professional documents — print, PDF, or email — without retyping.",
  listingIntro:
    "Create branded invoices, packing slips, and credit notes. Look professional and save time per order.",
};

export const nav = [
  { href: "/features", label: "Features" },
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export const legal = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

export const documentTypes = [
  {
    id: "sales-order",
    name: "Sales Order",
    label: "SO",
    summary:
      "Every Shopify order gets a Billoxi sales-order number. Search, filter, convert, print, or email.",
    points: [
      "Search, filter, sort, and status tabs",
      "Convert to invoice, packing slip, or return",
      "Print, download PDF, send email",
      "Edit number, date, notes, and terms",
    ],
    tabs: ["All", "Unpaid", "Paid", "Voided", "Invoiced", "Open"],
  },
  {
    id: "invoice",
    name: "Invoice",
    label: "INV",
    summary:
      "Convert a sales order — manually or automatically when the order is paid.",
    points: [
      "Create a credit note from an invoice",
      "Delete is blocked while a credit note exists",
      "Print, download PDF, send email",
      "Edit number, date, notes, and terms",
    ],
    tabs: ["All", "Unpaid", "Paid", "Voided", "Refunded"],
  },
  {
    id: "draft",
    name: "Draft",
    label: "DR",
    summary:
      "Branded documents for Shopify Admin draft orders, with a path to invoice.",
    points: [
      "Requires read_draft_orders",
      "Convert / finalize draft to invoice",
      "Create in Shopify and Open in Shopify",
      "Print, download PDF, send email",
    ],
    tabs: ["All", "Open", "Invoice sent", "Completed"],
  },
  {
    id: "packing-slip",
    name: "Packing Slip",
    label: "PS",
    summary: "Warehouse and fulfillment sheet, converted from a sales order.",
    points: [
      "Print, download PDF, send email",
      "Delete the packing slip record only",
      "Sales order stays in Shopify and Billoxi",
    ],
    tabs: ["All", "Unfulfilled", "Partial", "Fulfilled"],
  },
  {
    id: "credit-note",
    name: "Credit Note",
    label: "CN",
    summary: "Created from an invoice. Void it, delete it, or create again after void.",
    points: [
      "Void stays listed as voided",
      "Edit number, date, reason, notes, and terms",
      "Auto-create on cancel or refund (Premium+)",
    ],
    tabs: ["All", "Unpaid", "Paid", "Voided", "Refunded"],
  },
  {
    id: "return",
    name: "Return",
    label: "RT",
    summary:
      "From refunded sales orders, or automatically from Shopify return webhooks.",
    points: [
      "Convert when payment is refunded or partially refunded",
      "Auto-created on return request / approve",
      "Delete the return record only — sales order stays",
    ],
    tabs: ["All"],
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Connect",
    body: "Install, pick a plan, add store details and a logo.",
  },
  {
    step: "02",
    title: "Brand",
    body: "Choose a template, set language, numbers, and tax layout.",
  },
  {
    step: "03",
    title: "Send",
    body: "Convert the order, then print, download PDF, or email.",
  },
];

export const listingFeatures = [
  {
    title: "Six document types from one order",
    body: "Create invoices, packing slips, credit notes, drafts, and returns from Shopify orders.",
  },
  {
    title: "Convert as the order moves",
    body: "Turn a sales order into an invoice, packing slip, or return when needed.",
  },
  {
    title: "Print, PDF, or email",
    body: "Send a branded document with a live preview. Email uses your SMTP server.",
  },
  {
    title: "Templates you can actually edit",
    body: "Logo, colors, fonts, paper size, and 104 document languages.",
  },
  {
    title: "Automation when you want it",
    body: "Auto-create invoices when an order is paid and credit notes on cancel or refund.",
  },
  {
    title: "Your email, your SMTP",
    body: "Send documents from your own mailbox with an optional PDF attachment.",
  },
  {
    title: "Bulk actions for busy days",
    body: "Bulk convert, download ZIP files, and email documents for many orders at once.",
  },
  {
    title: "Customer download links",
    body: "Add PDF links to Shopify order emails so customers can get their files.",
  },
  {
    title: "Shopify Admin extensions",
    body: "Print or download from the Shopify order page without opening the app.",
  },
  {
    title: "Your numbering, your prefix",
    body: "Number invoices and other documents with your own prefix and starting number.",
  },
  {
    title: "Checkout currency",
    body: "Show documents in the currency the customer paid at checkout.",
  },
];

export const templateLayouts = {
  standard: [
    "Standard",
    "Modern",
    "Classic",
    "Compact",
    "Minimal",
    "European",
    "Japanese",
    "Bold",
    "Professional",
    "Studio",
    "Horizon",
    "Ledger",
    "Folio",
    "Spectrum",
    "Apex",
  ],
  packing: [
    "Standard",
    "Branded",
    "Compact",
    "Detailed",
    "Professional",
    "Modern",
    "European",
    "Classic",
    "Minimal",
    "Bold",
    "Warehouse",
    "Express",
    "Spectrum",
    "Apex",
    "Fulfillment",
  ],
};

export const editorHighlights = [
  {
    title: "General",
    items: [
      "104 document label languages",
      "Multiple date formats",
      "Currency as symbol or ISO code",
      "A5, A4, or Letter",
      "Portrait or landscape",
      "Margins in inches",
    ],
  },
  {
    title: "Transaction details",
    items: [
      "Store name and logo from Settings",
      "Logo size and left / center / right",
      "Six details box styles",
      "Drag billing, shipping, and customer",
      "VAT, phone, email, company ID",
      "Customer metafields from Shopify",
    ],
  },
  {
    title: "Line items",
    items: [
      "Number, item, SKU, barcode (text)",
      "Qty, rate, discount, tax, amount",
      "Product metafield columns",
      "Compare price and product image",
      "Custom column labels and widths",
    ],
  },
  {
    title: "Totals & look",
    items: [
      "Five payment-status styles",
      "Tax summary table",
      "19 professional fonts",
      "Color and size per section",
      "Notes, terms, signature, stamp",
    ],
  },
];

export const plans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 9.99,
    yearlyMonthly: 7.99,
    orders: "50 orders / month",
    trial: "7-day trial",
    blurb: "All six document types, templates, and print / PDF.",
    featured: false,
    includes: [
      "All 6 document types",
      "All templates + full editor",
      "Print and PDF download",
      "Live preview and convert",
      "Store details and numbering",
      "All template languages",
      "Basic dashboard counts",
      "Email support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    monthly: 19.99,
    yearlyMonthly: 15.99,
    orders: "200 orders / month",
    trial: "7-day trial",
    blurb: "Email, bulk actions, automation, and multi-currency.",
    featured: true,
    includes: [
      "Everything in Starter",
      "Email templates for all 6 types",
      "SMTP email with PDF attach",
      "Bulk download, email, and convert",
      "Auto invoice on paid",
      "Auto credit note on cancel / refund",
      "Multi-currency",
      "Dashboard 14-day chart",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    monthly: 39,
    yearlyMonthly: 31.2,
    orders: "Unlimited orders",
    trial: "7-day trial",
    blurb: "Customer links, Admin extensions, and activity log.",
    featured: false,
    includes: [
      "Everything in Premium",
      "Customer download links in Shopify emails",
      "Shopify Admin order / draft extensions",
      "Activity / event log",
      "Priority email support",
    ],
  },
];

export const faqs = [
  {
    q: "Does Billoxi change Shopify order totals?",
    a: "No. Items, prices, discounts, tax, and totals stay in Shopify and sync to the document. You can edit number, date, notes, and terms — not line items.",
  },
  {
    q: "Do I need SMTP to email documents?",
    a: "Yes. Send Email uses your SMTP server. There is no mailto fallback. Without SMTP, the app asks you to set it up in Settings first.",
  },
  {
    q: "Are barcodes scanned images or QR codes?",
    a: "No. SKU and barcode print as text from the Shopify variant. Billoxi does not generate barcode or QR images.",
  },
  {
    q: "What about COD or unpaid orders?",
    a: "Use the sales-order PDF until the order is converted to an invoice. Customer download links have a Smart option: paid → invoice link; COD / unpaid → sales order link.",
  },
  {
    q: "Can customers download a PDF from the order email?",
    a: "Yes on Ultimate. Paste the hashed link into Shopify notification emails. If the document is not created yet, they see a notice — not an empty PDF.",
  },
  {
    q: "What counts toward the monthly order limit?",
    a: "Print, download PDF, send email, and each order in a bulk action count as 1. Opening a preview, editing templates, converting document types, and browsing lists do not.",
  },
  {
    q: "What happens if I cancel my subscription?",
    a: "The shop returns to FREE. FREE can open Home and Pricing only until a paid plan is chosen.",
  },
  {
    q: "Does admin language change the PDF?",
    a: "No. Admin language is for Billoxi menus and pages. PDF label language is set per template under Templates → Edit → Language.",
  },
  {
    q: "Is Billoxi a Shopify invoice app or only a packing slip printer?",
    a: "Both. Billoxi creates sales orders, invoices, drafts, packing slips, credit notes, and returns from Shopify orders. You brand templates once, then print, download PDF, or email.",
  },
  {
    q: "Can I use Billoxi for B2B company invoices?",
    a: "Yes. List pages show a Company column. Documents can show company name, company ID, and VAT on the Bill To block using Shopify B2B / companies data.",
  },
  {
    q: "Does Billoxi sync with QuickBooks or Xero?",
    a: "No. Billoxi does not offer accounting sync. Line items and totals stay in Shopify. You print or email documents from the order.",
  },
  {
    q: "Can I auto-create invoices when an order is paid?",
    a: "Yes on Premium and Ultimate. Turn on auto invoice on paid in Settings. Credit notes can auto-create on cancel, full refund, or partial refund.",
  },
  {
    q: "How many invoice template layouts are included?",
    a: "Fifteen layout presets per document type on every paid plan, plus a full editor for logo, colors, fonts, paper size, language, and tax layout.",
  },
];

export const seoUseCases = [
  {
    title: "DTC brands that need branded invoices",
    body: "After checkout, customers still ask for a PDF invoice. Billoxi turns the Shopify order into a branded invoice you can print, download, or email — without copying line items by hand.",
  },
  {
    title: "Warehouses that print packing slips",
    body: "Convert a sales order into a packing slip for fulfillment. Print or download a PDF with SKU, barcode text, quantity, and your warehouse layout from the template gallery.",
  },
  {
    title: "Stores that issue credit notes and returns",
    body: "Create a credit note from an invoice, or convert a refunded order into a return document. Premium plans can auto-create credit notes on cancel or refund.",
  },
  {
    title: "B2B merchants with company billing",
    body: "Show company name on every list and print company ID and VAT on documents. Billoxi works with Shopify B2B / companies data for professional paperwork.",
  },
];

export const seoGuide = {
  kicker: "Shopify order documents",
  title: "A Shopify invoice and packing slip app built for real order desks",
  lead: "Billoxi by XLOXI is an embedded Shopify app for invoices, packing slips, credit notes, drafts, and returns. It reads the Shopify order so items, prices, discounts, tax, and totals stay accurate — then you brand, convert, print, download PDF, or email.",
  sections: [
    {
      heading: "What Billoxi creates from a Shopify order",
      body: "Every paid plan includes six document types: sales order, invoice, draft, packing slip, credit note, and return. Convert a sales order into an invoice, packing slip, or return as the order progresses. Finalize a draft into an invoice. Create a credit note from an invoice when you need to void or refund paperwork.",
    },
    {
      heading: "Print, PDF download, or email",
      body: "Open a live paper preview of your active template, then print from the browser, download a PDF, or send email through your own SMTP server with an optional PDF attachment. Bulk download ZIP files and bulk email are available on Premium and Ultimate. There is no mailto fallback — email needs SMTP in Settings.",
    },
    {
      heading: "Templates and languages",
      body: "Choose from fifteen layout presets per document type, then edit logo, colors, fonts, paper size (A5, A4, Letter), orientation, margins, tax layout, and labels. Document PDF labels support 104 languages. Admin UI language is separate and does not change the PDF.",
    },
    {
      heading: "Automation and Shopify Admin",
      body: "Premium plans can auto-create invoices when an order is paid and credit notes on cancel or refund. Ultimate adds customer PDF download links for Shopify notification emails, Shopify Admin order and draft extensions, and an activity log. Line items are never edited inside Billoxi — they always sync from Shopify.",
    },
  ],
};

export const seoKeywordsBlock = [
  "Shopify invoice app",
  "Shopify packing slip PDF",
  "Shopify credit note",
  "Order printer",
  "Branded invoice templates",
  "Draft order invoice",
  "B2B company invoice",
  "SMTP document email",
];

export const settingsModules = [
  {
    title: "Admin language",
    plan: "All paid",
    body: "100 languages for Billoxi menus and pages. Does not change PDF labels.",
  },
  {
    title: "Store details",
    plan: "All paid",
    body: "Logo (PNG, JPG, or WebP, max 1 MB), name, address, phone, email, website, and custom header fields.",
  },
  {
    title: "Transaction numbers",
    plan: "All paid",
    body: "Prefix and starting number per module, with a live preview of the next number.",
  },
  {
    title: "Automation",
    plan: "Premium+",
    body: "Auto invoice on paid. Auto credit note on cancel, full refund, or partial refund.",
  },
  {
    title: "Multi currency",
    plan: "Premium+",
    body: "Shop currency, or the currency the customer paid at checkout with Shopify Payments.",
  },
  {
    title: "Customer download links",
    plan: "Ultimate",
    body: "Copy snippets into Shopify notification emails. Smart option for paid vs COD.",
  },
  {
    title: "SMTP",
    plan: "Premium+",
    body: "Host, port, TLS, from address. One-click Gmail and Webmail presets.",
  },
  {
    title: "Email templates",
    plan: "Premium+",
    body: "One template per document type: subject, HTML body, attach PDF, live preview.",
  },
];

export const techStack = [
  "React Router 7 + TypeScript",
  "Shopify Polaris + App Bridge",
  "Shopify Admin GraphQL API",
  "Prisma",
  "Admin UI extensions",
  "Webhooks + GDPR",
  "Nodemailer SMTP",
  "jsPDF + html2canvas + JSZip",
  "Vercel",
];

export const sisterApps = [
  {
    name: "Approvefy",
    body: "B2B registration for Shopify.",
  },
  {
    name: "Offrefy",
    body: "Quantity breaks for Shopify.",
  },
];
