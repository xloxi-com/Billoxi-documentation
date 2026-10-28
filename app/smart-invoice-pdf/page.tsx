import type { Metadata } from "next";
import { SeoLanding } from "@/components/seo/SeoLanding";
import { getSeoLandingPage } from "@/lib/seo-pages";
import { pageMeta } from "@/lib/seo";

const page = getSeoLandingPage("smart-invoice-pdf")!;

export const metadata: Metadata = pageMeta({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: page.keywords,
});

export default function SmartInvoicePdfPage() {
  return <SeoLanding page={page} />;
}
