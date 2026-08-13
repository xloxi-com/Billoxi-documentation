import { ImageResponse } from "next/og";

export const alt =
  "Billoxi — Shopify invoice, packing slip, and credit note app by XLOXI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#191919",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#E3FF75",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#191919",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: "#F6F6EE",
            }}
          >
            Billoxi
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#E3FF75",
            }}
          >
            Shopify · Invoices and receipts
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#F6F6EE",
              maxWidth: 900,
            }}
          >
            Order documents, without the busywork.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#9A9A90",
          }}
        >
          Invoices · Packing slips · Credit notes · by XLOXI
        </div>
      </div>
    ),
    size,
  );
}
