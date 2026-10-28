import type { Metadata } from "next";
import { SeoLanding } from "@/components/seo/SeoLanding";
import { getSeoLandingPage } from "@/lib/seo-pages";
import { pageMeta } from "@/lib/seo";

const page = getSeoLandingPage("shopify-packing-slip-app")!;

export const metadata: Metadata = pageMeta({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: page.keywords,
});

export default function ShopifyPackingSlipAppPage() {
  return <SeoLanding page={page} />;
}
