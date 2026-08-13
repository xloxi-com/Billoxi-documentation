export const privacyMeta = {
  title: "Privacy Policy",
  effectiveDate: "13 August 2026",
  company: "XLOXI",
  app: "Billoxi",
};

export const privacyIntro = [
  "This Privacy Policy explains how XLOXI (“we”, “us”, “our”) collects, uses, stores, and shares information when you install or use Billoxi.",
  "Billoxi runs inside Shopify Admin and helps merchants create order documents (sales orders, invoices, drafts, packing slips, credit notes, and returns).",
];

type PrivacyBlock = {
  heading: string;
  text?: string;
  bullets?: string[];
  link?: { href: string; label: string };
};

export type PrivacySection = {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  roles?: { title: string; text: string }[];
  blocks?: PrivacyBlock[];
  bullets?: string[];
  after?: string[];
};

export const privacySections: PrivacySection[] = [
  {
    id: "roles",
    number: "1",
    title: "Roles (who is responsible)",
    roles: [
      {
        title: "Merchant / store owner",
        text: "You are the business using Billoxi. For your customers’ personal data that appears on orders and documents, you are typically the data controller (or “business”). You decide what to send, print, and store.",
      },
      {
        title: "XLOXI / Billoxi",
        text: "We provide the app. For merchant account and billing data, we are typically the controller. For customer and order data we process only to generate documents and run the app for you, we act as a processor (or “service provider”) on your instructions.",
      },
      {
        title: "Shopify",
        text: "Shopify is a separate platform. Shopify’s privacy policy applies to data Shopify holds. We receive store data through Shopify APIs and webhooks after you install the app.",
      },
    ],
  },
  {
    id: "information-we-collect",
    number: "2",
    title: "Information we collect",
    blocks: [
      {
        heading: "2.1 From Shopify (after you install)",
        text: "Shop / merchant data may include shop domain and shop identifiers; store name, address, phone, email, website (if you load or save store details); staff user id, name, email, locale, and account-owner flag from the Shopify session (used to keep you logged in); access tokens needed to call Shopify APIs; and billing and subscription status through Shopify Billing.",
      },
      {
        heading: "Orders, drafts, returns, and related records",
        text: "As needed to build documents, this may include:",
        bullets: [
          "Order id, order name / number, dates, payment and fulfillment status",
          "Line items, SKUs, barcodes (as text), quantities, prices, discounts, tax, shipping, totals, currency",
          "Customer name, email, phone, billing and shipping addresses",
          "Company / B2B fields (company name, company id) when present",
          "Customer notes and order notes",
          "Product images and product / customer metafields if you enable them on a template",
          "Return and refund information when you use return or credit-note features",
        ],
      },
      {
        heading: "Shopify scopes",
        text: "We request only the Shopify access scopes required to provide Billoxi. Current scopes are listed in the app’s Shopify listing and in the install prompt.",
      },
      {
        heading: "2.2 Information you enter in Billoxi",
        bullets: [
          "Logo and store details",
          "Custom header fields",
          "Template settings (layout, colors, fonts, language, paper, labels)",
          "Document numbers, prefixes, dates",
          "Notes, terms, and credit-note reasons you save on a document",
          "SMTP host, port, username, password, from name, and from email",
          "Email subject lines and email body templates",
          "Automation choices (auto invoice on paid; auto credit note on cancel / refund)",
          "Multi-currency preference",
          "Admin language preference",
          "Setup-guide progress",
        ],
      },
      {
        heading: "2.3 Usage data we create",
        bullets: [
          "Which documents were printed, downloaded, or emailed",
          "Monthly usage counters (for plan limits and the home dashboard)",
          "Activity / event log entries (document type, document number, order name / id, action, time) on eligible plans",
          "Technical logs needed to run and debug the app (for example, shop domain, error messages, timestamps)",
        ],
      },
      {
        heading: "2.4 Live chat (Tawk.to)",
        text: "The app may load Tawk.to so you can contact support from inside Billoxi. Tawk.to may collect the messages you send, your IP address, browser type, and similar technical data under Tawk.to’s own policy. You do not have to use chat. You can email us instead.",
        link: {
          href: "https://www.tawk.to/privacy-policy/",
          label: "Tawk.to privacy policy",
        },
      },
      {
        heading: "2.5 We do not intentionally collect",
        bullets: [
          "Payment card numbers (Shopify Billing handles charges)",
          "Sensitive categories of data unrelated to order documents",
          "Data from visitors to your storefront, except when that data is already on a Shopify order and needed to produce a document",
        ],
      },
    ],
    after: ["We do not sell personal information."],
  },
  {
    id: "how-we-use",
    number: "3",
    title: "How we use information",
    paragraphs: ["We use information to:"],
    bullets: [
      "Authenticate your Shopify session and keep the app embedded",
      "Read order and shop data to generate previews, PDFs, and printouts",
      "Save your templates, numbers, store details, and automation settings",
      "Send emails you request through your SMTP server",
      "Create customer PDF download links you paste into Shopify emails",
      "Count usage against your plan and show analytics",
      "Provide Shopify Admin download / print actions",
      "Respond to support requests",
      "Maintain security, prevent abuse, and fix bugs",
      "Comply with law and Shopify’s app requirements (including GDPR webhooks: customers/data_request, customers/redact, shop/redact)",
      "Process subscriptions through Shopify Billing",
    ],
    after: ["We do not use your store’s customer list to send our own marketing."],
  },
  {
    id: "how-we-share",
    number: "4",
    title: "How we share information",
    paragraphs: ["We share information only as needed to operate Billoxi:"],
    blocks: [
      {
        heading: "Shopify",
        text: "Platform authentication, APIs, webhooks, and Billing.",
      },
      {
        heading: "Hosting and infrastructure",
        text: "Our hosting provider and database provider (cloud servers) store app data to run Billoxi. They process data on our instructions.",
      },
      {
        heading: "Your SMTP provider",
        text: "If you send a document email, the message (and any PDF) is delivered by the mail server you configured (for example Gmail or your webmail host). That provider’s terms apply.",
      },
      {
        heading: "Tawk.to",
        text: "If you use in-app chat, Tawk.to processes the chat as described in their privacy policy.",
      },
      {
        heading: "Professional advisors and legal",
        text: "We may disclose information if required by law, to protect rights and safety, or in a merger, acquisition, or sale of assets, with appropriate safeguards.",
      },
    ],
    after: [
      "We do not sell, rent, or share your data with advertisers. We do not use customer data to advertise to your customers.",
    ],
  },
  {
    id: "customer-download-links",
    number: "5",
    title: "Customer download links",
    paragraphs: [
      "On eligible plans you can paste a Billoxi download link into Shopify notification emails. The link is a public URL with a secret token. Anyone who has the link can download that document.",
    ],
    bullets: [
      "Place the link only in the correct customer email",
      "Do not post download links on a public page",
      "If a document has not been created yet, the customer sees a notice instead of a PDF",
    ],
    after: [
      "We generate the PDF when the link is used, using store and order data needed for that document.",
    ],
  },
  {
    id: "smtp-and-email",
    number: "6",
    title: "SMTP and email",
    paragraphs: [
      "SMTP passwords and server settings are stored so the app can send mail on your behalf. Protect your mailbox and use an app password where required (for example Gmail).",
      "We are not responsible for how your SMTP provider stores or logs mail. You are responsible for the content of emails and for complying with anti-spam and privacy laws.",
    ],
  },
  {
    id: "cookies",
    number: "7",
    title: "Cookies and similar technology",
    paragraphs: [
      "Billoxi is an embedded Shopify Admin app. We use session cookies or equivalent storage as needed to keep you logged in and to remember harmless UI preferences (for example list column layout in the browser).",
      "We do not run third-party advertising cookies in the app. Tawk.to may set its own cookies if chat is loaded.",
    ],
  },
  {
    id: "data-retention",
    number: "8",
    title: "Data retention",
    paragraphs: [
      "We keep shop data for as long as the app is installed and you need the service (templates, numbers, settings, document metadata, usage).",
      "When you uninstall Billoxi, Shopify typically sends a shop/redact request about 48 hours later. We then delete shop-scoped data we store in our database, including sessions, settings (including SMTP), templates, document numbers, and related status records, except:",
    ],
    bullets: [
      "Information we must keep for legal, tax, security, or billing reasons (kept only as long as required)",
      "Backups, which are removed on the backup cycle",
      "Anonymized usage that cannot reasonably identify a shop",
    ],
    after: [
      "If Shopify sends a customers/redact webhook, we delete or anonymize personal data we store for that customer / those orders, as required by Shopify’s privacy rules.",
      "Order line items and full order payloads are primarily read from Shopify when you open or export a document. We store document metadata (such as Billoxi document numbers, dates, notes, terms, and conversion status) keyed to the shop and order.",
    ],
  },
  {
    id: "security",
    number: "9",
    title: "Security",
    paragraphs: ["We use reasonable technical and organizational measures, including:"],
    bullets: [
      "Shopify OAuth / session authentication",
      "HTTPS for the app",
      "Webhook HMAC verification",
      "Access limited to staff who need it to operate the service",
    ],
    after: [
      "No method of transmission or storage is 100% secure. You must also protect staff accounts and SMTP credentials.",
    ],
  },
  {
    id: "international-transfers",
    number: "10",
    title: "International transfers",
    paragraphs: [
      "We may process data on servers in [YOUR COUNTRY] and in other countries where our hosting providers operate. If you are in the EEA, UK, or Switzerland, we rely on appropriate safeguards (such as standard contractual clauses used by our providers, or your instructions as merchant) where required.",
    ],
  },
  {
    id: "your-rights",
    number: "11",
    title: "Your rights",
    blocks: [
      {
        heading: "Merchants",
        text: "You can access and update store details, templates, and settings in the app. You can uninstall Billoxi at any time. You may request a copy or deletion of merchant account data by emailing billoxi@xloxi.com.",
      },
      {
        heading: "Your customers",
        text: "Customers should contact you (the store) first. You are the merchant of record. Shopify will forward certain privacy requests to us through mandatory webhooks (data request, customer redact, shop redact). We respond to those webhooks as required. If you are a customer of a store that uses Billoxi and you cannot reach the store, you may email billoxi@xloxi.com. We may need to verify the request and involve the merchant and Shopify.",
      },
    ],
    after: [
      "Depending on where you live (for example GDPR, UK GDPR, CCPA/CPRA), you may have rights to access, correct, delete, restrict, or port personal data, to object to certain processing, and to lodge a complaint with a supervisory authority.",
      "We do not “sell” or “share” personal information for cross-context behavioral advertising as those terms are commonly used in US state privacy laws.",
    ],
  },
  {
    id: "children",
    number: "12",
    title: "Children",
    paragraphs: [
      "Billoxi is for businesses using Shopify. It is not directed at children under 16 (or a higher age where required). We do not knowingly collect personal data from children.",
    ],
  },
  {
    id: "automated-decision-making",
    number: "13",
    title: "Automated decision-making",
    paragraphs: [
      "Billoxi does not use automated decision-making or profiling that produces legal or similarly significant effects about individuals. Automation in the app (for example creating an invoice when an order is paid) only follows settings you choose.",
    ],
  },
  {
    id: "changes",
    number: "14",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy. The “Effective date” will change. Material changes will be posted in the app, on our website, or on the Shopify App Store listing. Continued use after the effective date means you accept the updated policy.",
    ],
  },
  {
    id: "contact",
    number: "15",
    title: "Contact",
    paragraphs: ["Privacy and data-protection requests:"],
  },
];
