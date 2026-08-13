"use client";

import { useState } from "react";
import { plans, site } from "@/lib/content";
import { ButtonLink } from "@/components/Button";

function money(n: number) {
  return n % 1 === 0 ? n.toFixed(0) : n.toFixed(2);
}

export function PricingToggle({
  showFree = true,
  ctaHref,
}: {
  showFree?: boolean;
  ctaHref?: string;
}) {
  const [yearly, setYearly] = useState(true);

  return (
    <div>
      <div className="mb-10 flex flex-col items-center gap-4">
        <div className="inline-flex rounded-full border border-line bg-card p-1">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-2 text-sm ${
              !yearly ? "bg-lime text-ink" : "text-muted hover:text-paper"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`rounded-full px-4 py-2 text-sm ${
              yearly ? "bg-lime text-ink" : "text-muted hover:text-paper"
            }`}
          >
            Yearly <span className="opacity-80">· 20% off</span>
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = yearly ? plan.yearlyMonthly : plan.monthly;
          return (
            <article
              key={plan.id}
              className={`flex flex-col rounded-3xl border p-6 sm:p-8 ${
                plan.featured
                  ? "border-lime bg-card shadow-[0_0_0_1px_#E3FF75]"
                  : "border-line bg-card"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                {plan.featured ? (
                  <span className="rounded-full bg-lime px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-ink">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{plan.blurb}</p>
              <p className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl font-semibold tracking-tight">
                  ${money(price)}
                </span>
                <span className="mb-1.5 text-sm text-muted">/ month</span>
              </p>
              <p className="text-xs text-muted">
                {yearly ? "Billed yearly · " : ""}
                {plan.trial} · {plan.orders}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-paper/90">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lime" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={ctaHref ?? site.appUrl}
                external={!ctaHref}
                variant={plan.featured ? "lime" : "ghost"}
                className="mt-8 w-full"
              >
                Choose {plan.name}
              </ButtonLink>
            </article>
          );
        })}
      </div>

      {showFree ? (
        <p className="mt-8 text-center text-sm text-muted">
          FREE is $0 — Home and Pricing only until a plan is chosen. Cancel and
          the shop returns to FREE.
        </p>
      ) : null}
    </div>
  );
}
