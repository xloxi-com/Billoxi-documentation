import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Billoxi",
    short_name: "Billoxi",
    description:
      "Branded invoices, packing slips, and credit notes from every Shopify order.",
    start_url: "/",
    display: "standalone",
    background_color: "#191919",
    theme_color: "#E3FF75",
    icons: [
      {
        src: "/logo.svg",
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
  };
}
