import type { Metadata } from "next";
import { faqs, plans, site } from "@/lib/content";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.xloxi.com"
).replace(/\/$/, "");

export const seo = {
  title: "Billoxi by XLOXI | Shopify Invoice, Packing Slip & Credit Note App",
  description:
    "Billoxi by XLOXI creates branded Shopify invoices, packing slips, credit notes, drafts, and returns. Print, download PDF, or email from every order — without retyping.",
  keywords: [
    "Billoxi",
    "XLOXI",
    "XLOXI PVT LTD",
    "Shopify invoice app",
    "Shopify packing slip",
    "Shopify credit note",
    "PDF invoice Shopify",
    "order printer Shopify",
    "branded invoices",
    "Shopify order documents",
    "packing slip PDF",
    "invoice templates Shopify",
    "Shopify draft order invoice",
    "Shopify return document",
    "SMTP invoice email Shopify",
    "B2B Shopify invoice",
    "Shopify packing slip printer",
    "auto invoice on paid",
  ],
};

const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Billoxi by XLOXI — Shopify invoice and packing slip app",
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
  const fullTitle = title.includes("Billoxi") ? title : `${title} | Billoxi by XLOXI`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: site.company, url: siteUrl }],
    creator: site.company,
    publisher: site.company,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      locale: "en_US",
      siteName: "Billoxi by XLOXI",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage.url],
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
    name: site.legalName,
    legalName: site.legalName,
    alternateName: ["XLOXI", "Billoxi"],
    url: siteUrl,
    email: site.email,
    logo: `${siteUrl}/favicon-512x512.png`,
    image: `${siteUrl}/favicon-512x512.png`,
    brand: {
      "@type": "Brand",
      name: site.name,
      logo: `${siteUrl}/favicon-512x512.png`,
      url: siteUrl,
    },
    sameAs: [site.appStoreUrl, site.websiteUrl],
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      contactType: "customer support",
      url: siteUrl,
    },
    description: site.oneLiner,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Billoxi",
    alternateName: "Billoxi by XLOXI",
    url: siteUrl,
    description: seo.description,
    publisher: {
      "@type": "Organization",
      name: "XLOXI PVT LTD",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon-512x512.png`,
      },
    },
    inLanguage: "en",
  };
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Billoxi",
    alternateName: "Billoxi by XLOXI",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Invoices and receipts",
    operatingSystem: "Web",
    url: siteUrl,
    downloadUrl: site.appStoreUrl,
    installUrl: site.appStoreUrl,
    image: `${siteUrl}/favicon-512x512.png`,
    description: seo.description,
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: String(plan.monthly),
      priceCurrency: "USD",
      url: `${siteUrl}/pricing`,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.monthly),
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
    })),
    publisher: {
      "@type": "Organization",
      name: "XLOXI PVT LTD",
      url: siteUrl,
    },
    featureList: [
      "Shopify invoices",
      "Packing slips",
      "Credit notes",
      "Draft orders",
      "Returns",
      "PDF download",
      "SMTP email",
      "Document templates",
      "Shopify Admin extensions",
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
