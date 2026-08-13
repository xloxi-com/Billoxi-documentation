import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export function Breadcrumb({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-6xl px-5 pt-6 sm:px-8"
      >
        <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <li>
            <Link href="/" className="hover:text-lime">
              Home
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.path} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              <Link href={item.path} className="hover:text-lime">
                {item.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
