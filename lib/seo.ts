import type { Metadata } from "next";
import { faqs, plans, site } from "@/lib/content";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://billoxi-app.xloxi.com"
).replace(/\/$/, "");

export const seo = {
  title: "Billoxi | Shopify Invoice & Packing Slip App",
  description:
    "Create branded invoices, packing slips, credit notes, drafts, and returns from every Shopify order. Print, PDF, or email — without retyping.",
  keywords: [
    "Shopify invoice app",
    "Shopify packing slip",
    "Shopify credit note",
    "PDF invoice",
    "order printer",
    "branded invoices",
    "Shopify order documents",
    "packing slip PDF",
    "invoice templates Shopify",
  ],
};

export function pageMeta({
  title,
  description,
  path,
  keywords = seo.keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} · Billoxi`,
      description,
      url,
      type: "website",
      locale: "en_US",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Billoxi`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company,
    url: siteUrl,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    description: site.oneLiner,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: siteUrl,
    description: seo.description,
    publisher: {
      "@type": "Organization",
      name: site.company,
    },
    inLanguage: "en",
  };
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Invoices and receipts",
    operatingSystem: "Web",
    url: siteUrl,
    description: seo.description,
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.monthly,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.monthly,
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    })),
    publisher: {
      "@type": "Organization",
      name: site.company,
    },
    featureList: [
      "Shopify invoices",
      "Packing slips",
      "Credit notes",
      "Draft orders",
      "Returns",
      "PDF download",
      "SMTP email",
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${siteUrl}${item.path}`,
      })),
    ],
  };
}
