import Link from "next/link";
import { Logo } from "@/components/Logo";
import { legal, nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            {site.oneLiner}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
            By {site.company}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Product
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/90 hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#how-it-works" className="text-paper/90 hover:text-lime">
                How it works
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-paper/90 hover:text-lime"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.websiteUrl}
                className="text-paper/90 hover:text-lime"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.websiteLabel}
              </a>
            </li>
            <li>
              <a
                href={site.appStoreUrl}
                className="text-paper/90 hover:text-lime"
                target="_blank"
                rel="noopener noreferrer"
              >
                apps.shopify.com/billoxi
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Legal
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/90 hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.company}. Billoxi is a Shopify app.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="hover:text-lime">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-lime">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
