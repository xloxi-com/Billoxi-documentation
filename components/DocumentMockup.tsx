type Variant = "invoice" | "packing" | "credit";

const copy: Record<
  Variant,
  { title: string; number: string; status: string; accent: boolean }
> = {
  invoice: {
    title: "Invoice",
    number: "INV-1042",
    status: "Paid",
    accent: true,
  },
  packing: {
    title: "Packing slip",
    number: "PS-0288",
    status: "Fulfilled",
    accent: false,
  },
  credit: {
    title: "Credit note",
    number: "CN-0019",
    status: "Issued",
    accent: false,
  },
};

export function DocumentMockup({
  variant = "invoice",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const doc = copy[variant];

  return (
    <div
      role="img"
      aria-label={`Sample Shopify ${doc.title.toLowerCase()} ${doc.number}`}
      className={`w-[240px] rounded-xl border border-line bg-paper p-4 text-ink shadow-[0_24px_60px_rgb(0_0_0/0.35)] sm:w-[260px] ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="grid size-8 place-items-center rounded-md bg-ink">
          <span className="size-3 rounded-[2px] bg-lime" />
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#6b6b63]">
            {doc.title}
          </p>
          <p className="font-display text-sm font-semibold">{doc.number}</p>
        </div>
      </div>

      <div className="mt-4 space-y-1 text-[11px] leading-4 text-[#4a4a44]">
        <p className="font-medium text-ink">Northline Studio</p>
        <p>214 Market Street</p>
        <p>Bill to · Atelier Co.</p>
      </div>

      <div className="mt-4 overflow-hidden rounded-md border border-[#e4e4d8]">
        <div className="grid grid-cols-[1.4fr_0.5fr_0.7fr] bg-ink px-2 py-1.5 text-[9px] uppercase tracking-wide text-lime">
          <span>Item</span>
          <span>Qty</span>
          <span className="text-right">Amount</span>
        </div>
        {[
          ["Wool throw", "1", "89.00"],
          ["Oak tray", "2", "64.00"],
          ["Linen set", "1", "120.00"],
        ].map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-[1.4fr_0.5fr_0.7fr] border-t border-[#ecece2] px-2 py-1.5 text-[10px]"
          >
            <span>{row[0]}</span>
            <span>{row[1]}</span>
            <span className="text-right">{row[2]}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-end justify-between">
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
            doc.accent ? "bg-lime text-ink" : "bg-ink text-lime"
          }`}
        >
          {doc.status}
        </span>
        <div className="text-right">
          <p className="text-[9px] uppercase tracking-wide text-[#6b6b63]">Total</p>
          <p className="font-display text-lg font-semibold">$273.00</p>
        </div>
      </div>
    </div>
  );
}
