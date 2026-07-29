"use client";

import { useEffect, useRef, useState } from "react";
import {
  locales,
  localeNames,
  type Locale,
  type Dictionary,
} from "../i18n/dictionaries";
import Logo from "./Logo";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  am: "አማ",
  om: "OM",
};

function LangSwitcher({ locale, menuAlign = "right" }: { locale: Locale; menuAlign?: "right" | "center" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {localeLabels[locale]}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-brand-950/95 shadow-xl backdrop-blur ${
            menuAlign === "center" ? "left-1/2 -translate-x-1/2" : "right-0"
          }`}
          role="listbox"
        >
          {locales.map((l) => (
            <a
              key={l}
              href={`/${l}`}
              role="option"
              aria-selected={l === locale}
              className={`flex items-center justify-between px-4 py-2.5 text-sm transition ${
                l === locale
                  ? "bg-white/10 font-semibold text-accent-400"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              {localeNames[l]}
              {l === locale && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: nav.services },
    { href: "#work", label: nav.work },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-brand-950/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Logo variant="reverse" size={38} />
          <span className="font-display leading-none text-white">
            <span className="block text-xl font-extrabold tracking-[0.02em]">
              LOHA
            </span>
            <span className="mt-1 block text-[9px] font-semibold tracking-[0.3em] text-white/60">
              ADVERTISING PLC
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <LangSwitcher locale={locale} />
          <a
            href="#contact"
            className="rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-brand-950 transition hover:bg-accent-400"
          >
            {nav.cta}
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-md p-2 text-white md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-brand-950/95 px-4 pb-4 backdrop-blur md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-sm font-medium text-white/85"
            >
              {l.label}
            </a>
          ))}
          <div className="flex justify-center py-4">
            <LangSwitcher locale={locale} menuAlign="center" />
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-accent-500 px-4 py-2.5 text-center text-sm font-semibold text-brand-950"
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
