import Link from "next/link";

type LogoProps = {
  className?: string;
  compact?: boolean;
  invert?: boolean;
};

export function Logo({ className = "", compact = false, invert = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Billoxi home"
    >
      <span
        className={`grid size-8 shrink-0 place-items-center rounded-lg ${
          invert ? "bg-ink" : "bg-lime"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          className="size-5"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="6.5"
            width="16"
            height="19"
            rx="2.2"
            stroke={invert ? "#E3FF75" : "#191919"}
            strokeWidth="1.8"
          />
          <path
            d="M11 12h10M11 16h7.5M11 20h5"
            stroke={invert ? "#E3FF75" : "#191919"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {!compact ? (
        <span className="font-display text-[1.15rem] font-semibold tracking-tight">
          Billoxi
        </span>
      ) : null}
    </Link>
  );
}
