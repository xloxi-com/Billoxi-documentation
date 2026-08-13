import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-5 py-20 sm:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-lime">404</p>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight">
        This page is not on the order.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted">
        The link may be old. Head back to the Billoxi site.
      </p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/features" variant="ghost">
          Features
        </ButtonLink>
      </div>
    </div>
  );
}
