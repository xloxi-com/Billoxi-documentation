export const termsMeta = {
  title: "Terms of Service",
  effectiveDate: "13 August 2026",
  company: "XLOXI",
  app: "Billoxi",
};

export const termsIntro = [
  "These Terms of Service (“Terms”) govern your access to and use of Billoxi. By installing, accessing, or using Billoxi, you agree to these Terms. If you do not agree, do not install or use the app.",
];

type TermsSection = {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  blocks?: { heading: string; text: string }[];
  after?: string[];
  bullets?: string[];
};

export const termsSections: TermsSection[] = [
  {
    id: "who-we-are",
    number: "1",
    title: "Who we are",
    paragraphs: [
      "Billoxi is provided by XLOXI (“we”, “us”, “our”). Billoxi is an embedded Shopify application that helps merchants create, preview, print, download, and email order documents such as sales orders, invoices, drafts, packing slips, credit notes, and returns.",
      "Billoxi is not a Shopify product. Shopify is a separate platform with its own terms. Your use of Shopify remains governed by Shopify’s agreements.",
    ],
  },
  {
    id: "who-may-use",
    number: "2",
    title: "Who may use Billoxi",
    paragraphs: [
      "You must have a valid Shopify store and the right to install apps on that store; be at least 18 years old (or the age of majority in your location); and have authority to bind the business that owns the store.",
      "If you install Billoxi for a company, you confirm you are authorized to accept these Terms on that company’s behalf.",
      "You are responsible for everyone who uses Billoxi through your store, including staff and collaborators.",
    ],
  },
  {
    id: "the-service",
    number: "3",
    title: "The service",
    paragraphs: [
      "Billoxi may let you generate branded documents from Shopify orders and draft orders; convert documents (for example, sales order to invoice, packing slip, or return; draft to invoice; invoice to credit note); customize templates (logo, colors, fonts, paper size, language, tax layout, fields, metafields); print documents and download PDFs (including bulk ZIP on eligible plans); send documents by email using your SMTP settings; turn on automation (for example, invoice when an order is paid; credit note on cancel or refund); add customer PDF download links to Shopify notification emails (eligible plans); use Shopify Admin order / draft-order actions (eligible plans); and view usage analytics and activity logs (eligible plans).",
      "We may add, change, or remove features. We do not promise that any feature will remain available forever.",
      "Billoxi does not replace accounting, tax-filing, legal, or bookkeeping software. You remain responsible for whether your invoices, credit notes, and other documents meet the laws of the countries where you sell.",
    ],
  },
  {
    id: "shopify-permissions",
    number: "4",
    title: "Shopify permissions",
    paragraphs: [
      "When you install Billoxi, you authorize us to access store data through Shopify APIs and webhooks as described in the app’s requested scopes and in our Privacy Policy. That may include shop details, orders, draft orders, returns, customers, companies, products, and related fields needed to build documents.",
      "You represent that you have the right to grant this access and to process your customers’ data in Billoxi.",
    ],
  },
  {
    id: "accounts-plans-billing",
    number: "5",
    title: "Accounts, plans, and billing",
    blocks: [
      {
        heading: "5.1 Plans",
        text: "Billoxi is offered on paid plans (currently Starter, Premium, and Ultimate) with a free trial where advertised. Plan limits, prices, and features are shown in the app’s Pricing page and on the Shopify App Store listing. We may change plans with reasonable notice.",
      },
      {
        heading: "5.2 Shopify Billing",
        text: "Charges are processed by Shopify Billing. By choosing a paid plan you authorize Shopify to charge the payment method on your Shopify account. Refunds, chargebacks, and billing disputes follow Shopify’s billing rules as well as these Terms.",
      },
      {
        heading: "5.3 Trials",
        text: "If a free trial is offered, it lasts for the stated number of days. Unless you cancel before the trial ends, the paid subscription may start automatically through Shopify Billing.",
      },
      {
        heading: "5.4 Usage limits",
        text: "Plans may limit how many orders you can process per calendar month (print, PDF download, or email typically counts as one order; bulk actions count once per selected order). Previewing a document, editing templates or settings, converting document types, and browsing lists may not count, as described in the app. If you exceed a limit, some actions may be blocked until the next period or until you upgrade.",
      },
      {
        heading: "5.5 Cancellation",
        text: "You may cancel or change your plan in the app or through Shopify. Cancelling stops future charges according to Shopify Billing. Access to paid features ends when the subscription ends. Uninstalling the app also ends your access. Fees already paid are generally non-refundable except where required by law or by Shopify.",
      },
    ],
  },
  {
    id: "your-responsibilities",
    number: "6",
    title: "Your responsibilities",
    paragraphs: [
      "You agree to use Billoxi only for lawful business purposes; keep your Shopify account, SMTP credentials, and staff access secure; enter accurate store details, tax information, and document content; review documents before you send, print, or share them; comply with email, spam, privacy, consumer, and tax laws in every country where you operate; use your own SMTP server and “from” address in a way that does not impersonate others or send unsolicited bulk mail; not attempt to reverse engineer, overload, scrape, or disrupt the app; and not use Billoxi to store or send unlawful, harmful, or infringing content.",
    ],
    after: [
      "You are solely responsible for the legal validity of invoices, receipts, credit notes, and packing documents you issue; what you send to customers (including PDFs and download links); your SMTP provider’s terms and deliverability; and backing up any copies you need outside Billoxi.",
    ],
  },
  {
    id: "customer-emails",
    number: "7",
    title: "Customer emails and download links",
    paragraphs: [
      "If you send documents by email, the message is sent through the SMTP server you configure. We are not your email service provider.",
      "If you add customer download links to Shopify notification emails, anyone with the link may be able to download that document. You must place links only in messages intended for the correct customer and follow Shopify’s notification-email rules.",
      "We are not responsible for links you paste into the wrong email, or for forwards the customer makes.",
    ],
  },
  {
    id: "intellectual-property",
    number: "8",
    title: "Intellectual property",
    paragraphs: [
      "Billoxi, including its name, logo, templates, software, and design, is owned by XLOXI or its licensors. We grant you a limited, non-exclusive, non-transferable, revocable license to use Billoxi only with your Shopify store while your install and (where required) subscription remain active.",
      "You keep ownership of your store content: logo, store details, notes, terms, and other materials you upload or enter. You grant us a license to host and process that content only to provide the service.",
      "You may not copy, resell, or build a competing product from Billoxi’s templates, code, or documentation except as allowed by law.",
    ],
  },
  {
    id: "third-party",
    number: "9",
    title: "Third-party services",
    paragraphs: [
      "Billoxi depends on Shopify and may use hosting, databases, live chat (Tawk.to), and your chosen SMTP provider. Those services have their own terms and privacy policies. We are not responsible for outages or changes by Shopify or other third parties.",
      "Links to other XLOXI apps or third-party apps are provided for convenience. Installing them is optional and subject to their own terms.",
    ],
  },
  {
    id: "availability",
    number: "10",
    title: "Availability and changes",
    paragraphs: [
      "We aim to keep Billoxi available, but we do not guarantee uninterrupted or error-free service. Maintenance, Shopify API changes, hosting issues, or force majeure may cause downtime.",
      "We may update the app, these Terms, or pricing. Material changes will be posted in the app, on our website, or through the Shopify App Store. Continued use after the effective date means you accept the updated Terms.",
    ],
  },
  {
    id: "suspension",
    number: "11",
    title: "Suspension and termination",
    paragraphs: [
      "We may suspend or terminate access if you breach these Terms; use the app in a way that risks other merchants, customers, or our systems; fail to pay charges when due; or uninstall the app or close the Shopify store.",
      "You may stop using Billoxi at any time by uninstalling it.",
      "After uninstall, Shopify typically sends a shop-redact webhook (about 48 hours later). We then delete shop data we store, as described in the Privacy Policy, except where we must keep limited records (for example, billing or legal compliance).",
    ],
  },
  {
    id: "disclaimers",
    number: "12",
    title: "Disclaimers",
    paragraphs: [
      "BILLOXI IS PROVIDED “AS IS” AND “AS AVAILABLE”.",
      "To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.",
      "We do not warrant that documents will meet every tax or legal requirement in your country; emails will be delivered or land in the inbox; PDFs will render identically in every browser or printer; or Shopify data will always be complete, timely, or available.",
    ],
  },
  {
    id: "liability",
    number: "13",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law: we are not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost sales, lost data, or business interruption. Our total liability for any claim relating to Billoxi will not exceed the amount you paid us for Billoxi in the three (3) months before the claim (or, if none, fifty US dollars).",
      "Some places do not allow certain limits. In those places, our liability is limited to the maximum extent allowed.",
    ],
  },
  {
    id: "indemnity",
    number: "14",
    title: "Indemnity",
    paragraphs: [
      "You will defend and indemnify XLOXI and its team against claims, damages, and costs arising from your use of Billoxi; documents, emails, or download links you send; your violation of law or these Terms; and your infringement of someone else’s rights.",
    ],
  },
  {
    id: "governing-law",
    number: "15",
    title: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws of [YOUR COUNTRY / STATE], without regard to conflict-of-law rules, except where mandatory consumer or privacy laws of your residence apply.",
      "Disputes will first be discussed in good faith. If unresolved, they may be brought in the courts of [YOUR CITY / COUNTRY], unless applicable law requires otherwise.",
    ],
  },
  {
    id: "general",
    number: "16",
    title: "General",
    bullets: [
      "If a part of these Terms is unenforceable, the rest remains in effect",
      "Our failure to enforce a right is not a waiver",
      "You may not assign these Terms without our consent. We may assign them in connection with a merger, sale, or reorganization",
      "These Terms and the Privacy Policy are the entire agreement for Billoxi and replace prior terms for the app",
    ],
  },
  {
    id: "contact",
    number: "17",
    title: "Contact",
    paragraphs: [
      "Questions about these Terms:",
    ],
  },
];
