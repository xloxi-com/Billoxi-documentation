import Link from "next/link";

type Variant = "lime" | "ghost" | "ink";

const styles: Record<Variant, string> = {
  lime: "bg-lime text-ink hover:bg-[#edff9a]",
  ghost:
    "border border-line bg-transparent text-paper hover:border-lime/40 hover:bg-soft",
  ink: "bg-ink text-lime hover:bg-[#111]",
};

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "lime",
  external = false,
}: Common & { href: string; external?: boolean }) {
  const cls = `inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  className = "",
  variant = "lime",
  type = "button",
  onClick,
}: Common & {
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
