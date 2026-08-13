import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Billoxi home"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={32}
        height={32}
        className="size-8 rounded-lg"
        priority
        unoptimized
      />
      {!compact ? (
        <span className="font-display text-[1.15rem] font-semibold tracking-tight">
          Billoxi
        </span>
      ) : null}
    </Link>
  );
}
