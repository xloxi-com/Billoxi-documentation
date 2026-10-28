import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Billoxi: Smart Invoice PDF",
    short_name: "Billoxi",
    description:
      "Billoxi: Smart Invoice PDF by XLOXI — branded invoices, packing slips, and credit notes from every Shopify order.",
    start_url: "/",
    display: "standalone",
    background_color: "#191919",
    theme_color: "#E3FF75",
    icons: [
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
