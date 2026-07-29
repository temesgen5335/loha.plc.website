"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Dictionary, Locale } from "../i18n/dictionaries";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "../config/gallery";

type Filter = "all" | GalleryCategory;

export default function Gallery({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["gallery"];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((cur) =>
        cur === null ? cur : (cur + dir + visible.length) % visible.length
      );
    },
    [visible.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, step]);

  // Only categories that actually have photos get a chip; empty ones appear
  // automatically once their first item lands in config/gallery.ts.
  const populated = galleryCategories.filter((c) =>
    galleryItems.some((item) => item.category === c)
  );
  const chips: { key: Filter; label: string }[] = [
    { key: "all", label: t.all },
    ...populated.map((c) => ({ key: c as Filter, label: t.categories[c] })),
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {chips.map((chip) => (
          <button
            key={chip.key}
            onClick={() => {
              setFilter(chip.key);
              setLightbox(null);
            }}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              filter === chip.key
                ? "border-brand-700 bg-brand-700 text-white"
                : "border-slate-300 bg-white text-slate-600 hover:border-brand-400 hover:text-brand-700"
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
          </svg>
          <p className="max-w-sm text-sm text-slate-500">{t.comingSoon}</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {visible.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 text-left"
            >
              <Image
                src={item.src}
                alt={item.caption[locale]}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/85 to-transparent px-4 pb-3.5 pt-10 text-xs font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100">
                {item.caption[locale]}
              </span>
            </button>
          ))}
        </div>
      )}

      {lightbox !== null && visible[lightbox] && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-brand-950/95 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label={t.close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 sm:left-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 sm:right-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <div
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={visible[lightbox].src}
              alt={visible[lightbox].caption[locale]}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="mt-4 max-w-xl text-center text-sm text-white/80">
            {visible[lightbox].caption[locale]}
          </p>
        </div>
      )}
    </div>
  );
}
