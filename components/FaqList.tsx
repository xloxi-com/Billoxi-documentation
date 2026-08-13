"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-medium leading-6 text-paper">{item.q}</span>
              <span
                className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-line text-lime transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen ? (
              <p className="px-5 pb-5 text-sm leading-7 text-muted sm:px-6">
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
