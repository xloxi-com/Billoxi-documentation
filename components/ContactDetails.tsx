import { site } from "@/lib/content";

export function ContactDetails({
  className = "",
}: {
  className?: string;
}) {
  return (
    <address className={`not-italic ${className}`}>
      <p className="font-medium">
        {site.company} — {site.name}
      </p>
      <p>
        Email:{" "}
        <a href={`mailto:${site.email}`} className="text-lime hover:underline">
          {site.email}
        </a>
      </p>
      <p>
        Website:{" "}
        <a
          href={site.websiteUrl}
          className="text-lime hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.websiteLabel}
        </a>
      </p>
      <p>
        Shopify:{" "}
        <a
          href={site.appStoreUrl}
          className="text-lime hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          apps.shopify.com/billoxi
        </a>
      </p>
    </address>
  );
}
