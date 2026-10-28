import Link from "next/link";
import { Logo } from "@/components/Logo";
import { legal, nav, site } from "@/lib/content";
import { seoLandingPages } from "@/lib/seo-pages";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            {site.listingName}. {site.oneLiner}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
            By {site.legalName}
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
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Get the app
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.appStoreUrl}
                className="text-paper/90 hover:text-lime"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shopify App Store
              </a>
            </li>
            <li>
              <Link href="/#how-it-works" className="text-paper/90 hover:text-lime">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-paper/90 hover:text-lime">
                Plans & pricing
              </Link>
            </li>
            <li>
              <Link href="/templates" className="text-paper/90 hover:text-lime">
                Document templates
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-paper/90 hover:text-lime">
                Blog & guides
              </Link>
            </li>
            <li>
              <a
                href="/rss.xml"
                className="text-paper/90 hover:text-lime"
              >
                RSS feed
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Solutions
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {seoLandingPages.map((page) => (
              <li key={page.path}>
                <Link href={page.path} className="text-paper/90 hover:text-lime">
                  {page.navLabel}
                </Link>
              </li>
            ))}
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
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.listingName}{" "}
            is a Shopify app at apps.shopify.com/billoxi.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="hover:text-lime">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-lime">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
