"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { templateLayouts } from "@/lib/content";

const types = [
  { id: "standard", label: "Sales / Invoice / Draft / Return / Credit" },
  { id: "packing", label: "Packing slip" },
] as const;

type DocType = (typeof types)[number]["id"];

type SelectedTemplate = {
  type: DocType;
  name: string;
  index: number;
};

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

function TemplateImage({
  type,
  name,
  index,
  className,
  variant = "thumbnail",
}: {
  type: string;
  name: string;
  index: number;
  className?: string;
  variant?: "thumbnail" | "full";
}) {
  const candidates = imageCandidates(type, name, index);
  const [srcIndex, setSrcIndex] = useState(0);
  const src = candidates[srcIndex];

  if (!src) {
    return (
      <div
        className={
          variant === "full"
            ? "mx-auto aspect-3/4 w-full max-w-3xl rounded-lg border border-ink/15 bg-paper"
            : "absolute inset-x-8 top-8 bottom-0 rounded-t-md border border-ink/15 bg-paper"
        }
      >
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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} document template`}
      draggable={false}
      className={
        variant === "full"
          ? `block h-auto w-full max-w-none ${className ?? ""}`
          : `pointer-events-none h-full w-full object-cover object-top ${className ?? ""}`
      }
      onError={() => setSrcIndex((i) => i + 1)}
    />
  );
}

function TemplateLightbox({
  selected,
  layouts,
  onClose,
  onNavigate,
}: {
  selected: SelectedTemplate;
  layouts: readonly string[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const { type, name, index } = selected;
  const hasPrev = index > 0;
  const hasNext = index < layouts.length - 1;
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && hasPrev) {
        event.preventDefault();
        onNavigate(index - 1);
      }
      if (event.key === "ArrowRight" && hasNext) {
        event.preventDefault();
        onNavigate(index + 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onNavigate, index, hasPrev, hasNext]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="fixed inset-0 z-[9999] m-0 h-full max-h-none w-full max-w-none border-0 bg-ink/95 p-0 backdrop:bg-ink/80 open:flex open:flex-col"
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line bg-ink px-4 py-3 sm:px-6">
        <div>
          <p className="text-lg font-medium text-paper sm:text-xl">{name}</p>
          <p className="text-xs text-muted sm:text-sm">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(layouts.length).padStart(2, "0")}
          </p>
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:border-lime hover:text-paper"
        >
          Close
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4 sm:px-8 sm:py-6">
        <div className="mx-auto w-full max-w-[min(1200px,calc(100vw-1.5rem))]">
          <TemplateImage
            key={`${type}-${name}-${index}`}
            type={type}
            name={name}
            index={index}
            variant="full"
            className="rounded-lg border border-line bg-paper shadow-2xl"
          />
        </div>
      </div>

      {layouts.length > 1 ? (
        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-line bg-ink px-4 py-3 sm:px-6">
          <button
            type="button"
            disabled={!hasPrev}
            onClick={() => onNavigate(index - 1)}
            className="rounded-full border border-line px-4 py-2 text-sm text-muted transition enabled:hover:border-lime enabled:hover:text-paper disabled:opacity-40"
          >
            Previous
          </button>
          <p className="text-xs text-muted sm:text-sm">
            Scroll to read the full document
          </p>
          <button
            type="button"
            disabled={!hasNext}
            onClick={() => onNavigate(index + 1)}
            className="rounded-full border border-line px-4 py-2 text-sm text-muted transition enabled:hover:border-lime enabled:hover:text-paper disabled:opacity-40"
          >
            Next
          </button>
        </div>
      ) : null}
    </dialog>
  );
}

export function TemplateGallery() {
  const [type, setType] = useState<DocType>("standard");
  const [selected, setSelected] = useState<SelectedTemplate | null>(null);
  const layouts = templateLayouts[type];

  const openPreview = useCallback((name: string, index: number) => {
    setSelected({ type, name, index });
  }, [type]);

  const closePreview = useCallback(() => {
    setSelected(null);
  }, []);

  const navigatePreview = useCallback(
    (index: number) => {
      const name = layouts[index];
      if (name) setSelected({ type, name, index });
    },
    [type, layouts],
  );

  useEffect(() => {
    setSelected(null);
  }, [type]);

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
            className="overflow-hidden rounded-2xl border border-line bg-card transition hover:border-lime/40"
          >
            <button
              type="button"
              aria-label={`View full ${name} template preview`}
              onClick={() => openPreview(name, index)}
              className="group relative block w-full cursor-pointer text-left"
            >
              <div className="relative aspect-3/4 bg-soft">
                <TemplateImage type={type} name={name} index={index} />
                <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-linear-to-t from-ink/70 via-ink/10 to-transparent pb-5 opacity-100 transition group-hover:from-ink/80">
                  <span className="rounded-full bg-lime px-4 py-2 text-sm font-medium text-ink shadow-lg">
                    View full preview
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-muted">
                  {String(index + 1).padStart(2, "0")} / 15
                </p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selected ? (
        <TemplateLightbox
          key={`${selected.type}-${selected.name}-${selected.index}`}
          selected={selected}
          layouts={layouts}
          onClose={closePreview}
          onNavigate={navigatePreview}
        />
      ) : null}

      <p className="mt-6 text-sm text-muted">
        15 layout presets per type, on every paid plan. Credit note also keeps
        legacy Simple / Detailed ids.
      </p>
    </div>
  );
}
