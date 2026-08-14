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
          ? `block h-auto max-h-[calc(100dvh-10.5rem)] w-auto max-w-[min(920px,calc(100vw-2rem))] select-none ${className ?? ""}`
          : `pointer-events-none h-full w-full object-cover object-top ${className ?? ""}`
      }
      onError={() => setSrcIndex((i) => i + 1)}
    />
  );
}

const ZOOM_MIN = 1;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.25;

function clampZoom(value: number) {
  return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Number(value.toFixed(2))));
}

function TemplatePreviewViewer({
  type,
  name,
  index,
}: {
  type: string;
  name: string;
  index: number;
}) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const pinchStart = useRef<{ distance: number; zoom: number } | null>(null);

  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [type, name, index]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      setZoom((z) => {
        const next = clampZoom(z + delta);
        if (next === ZOOM_MIN) setPan({ x: 0, y: 0 });
        return next;
      });
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, []);

  const zoomIn = () => setZoom((z) => clampZoom(z + ZOOM_STEP));
  const zoomOut = () => {
    setZoom((z) => {
      const next = clampZoom(z - ZOOM_STEP);
      if (next === ZOOM_MIN) setPan({ x: 0, y: 0 });
      return next;
    });
  };
  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    if (zoom > 1) {
      resetView();
      return;
    }
    setZoom(2);
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    if (zoom <= 1) return;
    viewportRef.current?.setPointerCapture(event.pointerId);
    setDragging(true);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!dragging || zoom <= 1) return;
    setPan({
      x: dragStart.current.panX + event.clientX - dragStart.current.x,
      y: dragStart.current.panY + event.clientY - dragStart.current.y,
    });
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (!dragging) return;
    viewportRef.current?.releasePointerCapture(event.pointerId);
    setDragging(false);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length !== 2) return;
    const [a, b] = [event.touches[0], event.touches[1]];
    const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    pinchStart.current = { distance, zoom };
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length !== 2 || !pinchStart.current) return;
    event.preventDefault();
    const [a, b] = [event.touches[0], event.touches[1]];
    const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    const ratio = distance / pinchStart.current.distance;
    setZoom(clampZoom(pinchStart.current.zoom * ratio));
  };

  const handleTouchEnd = () => {
    pinchStart.current = null;
    setZoom((z) => {
      if (z === ZOOM_MIN) setPan({ x: 0, y: 0 });
      return z;
    });
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex shrink-0 items-center justify-center gap-2 border-b border-line bg-ink px-4 py-2.5">
        <button
          type="button"
          onClick={zoomOut}
          disabled={zoom <= ZOOM_MIN}
          aria-label="Zoom out"
          className="grid size-9 place-items-center rounded-full border border-line text-lg text-paper transition enabled:hover:border-lime disabled:opacity-40"
        >
          −
        </button>
        <span className="min-w-14 text-center text-sm text-muted">
          {Math.round(zoom * 100)}%
        </span>
        <button
          type="button"
          onClick={zoomIn}
          disabled={zoom >= ZOOM_MAX}
          aria-label="Zoom in"
          className="grid size-9 place-items-center rounded-full border border-line text-lg text-paper transition enabled:hover:border-lime disabled:opacity-40"
        >
          +
        </button>
        <button
          type="button"
          onClick={resetView}
          disabled={zoom === 1 && pan.x === 0 && pan.y === 0}
          className="rounded-full border border-line px-3 py-1.5 text-xs text-muted transition enabled:hover:border-lime enabled:hover:text-paper disabled:opacity-40"
        >
          Fit to screen
        </button>
      </div>

      <div
        ref={viewportRef}
        className={`relative min-h-0 flex-1 touch-none overflow-hidden bg-soft/40 ${zoom > 1 ? (dragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"}`}
        onDoubleClick={handleDoubleClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex h-full w-full items-center justify-center p-3 sm:p-6">
          <div
            className={dragging ? "" : "transition-transform duration-150 ease-out"}
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            }}
          >
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
      </div>

      <p className="shrink-0 px-4 py-2 text-center text-xs text-muted">
        Scroll wheel or pinch to zoom · Double-click to zoom · Drag when zoomed in
      </p>
    </div>
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

      <TemplatePreviewViewer type={type} name={name} index={index} />

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
          <p className="text-xs text-muted sm:text-sm">Switch template</p>
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
