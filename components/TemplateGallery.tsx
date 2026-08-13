"use client";

import { useState } from "react";
import { templateLayouts } from "@/lib/content";

const types = [
  { id: "standard", label: "Sales / Invoice / Draft / Return / Credit" },
  { id: "packing", label: "Packing slip" },
] as const;

function slug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function imageCandidates(type: string, name: string, index: number) {
  const nn = String(index + 1).padStart(2, "0");
  return [
    `/templates/${type}/${nn}.png`,
    `/templates/${type}/${nn}.jpg`,
    `/templates/${type}/${nn}.webp`,
    `/templates/${type}/${slug(name)}.png`,
    `/templates/${type}/${slug(name)}.jpg`,
  ];
}

function TemplatePreview({
  type,
  name,
  index,
}: {
  type: string;
  name: string;
  index: number;
}) {
  const candidates = imageCandidates(type, name, index);
  const [srcIndex, setSrcIndex] = useState(0);
  const src = candidates[srcIndex];

  if (!src) {
    return (
      <div className="absolute inset-x-8 top-8 bottom-0 rounded-t-md border border-ink/15 bg-paper">
        <div className="flex items-center justify-between px-3 pt-3">
          <span className="size-5 rounded bg-ink" />
          <span className="h-1.5 w-10 rounded bg-ink/20" />
        </div>
        <div className="mt-4 space-y-1.5 px-3">
          <div className="h-1.5 w-full rounded bg-ink/10" />
          <div className="h-1.5 w-4/5 rounded bg-ink/10" />
          <div className="h-1.5 w-2/3 rounded bg-ink/10" />
        </div>
      </div>
    );
  }

  return (
    // Native img so missing files fall back without next/image errors
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} document template`}
      className="h-full w-full object-cover object-top"
      onError={() => setSrcIndex((i) => i + 1)}
    />
  );
}

export function TemplateGallery() {
  const [type, setType] = useState<(typeof types)[number]["id"]>("standard");
  const layouts = templateLayouts[type];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {types.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setType(item.id)}
            className={`rounded-full px-4 py-2 text-sm ${
              type === item.id
                ? "bg-lime text-ink"
                : "border border-line text-muted hover:text-paper"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {layouts.map((name, index) => (
          <article
            key={`${type}-${name}`}
            className="overflow-hidden rounded-2xl border border-line bg-card"
          >
            <div className="relative aspect-[3/4] bg-soft">
              <TemplatePreview type={type} name={name} index={index} />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-muted">
                {String(index + 1).padStart(2, "0")} / 15
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">
        15 layout presets per type, on every paid plan. Credit note also keeps
        legacy Simple / Detailed ids.
      </p>
    </div>
  );
}
