import Image from "next/image";
import Logo from "./Logo";
import { site } from "../config/site";
import type { Dictionary } from "../i18n/dictionaries";

function IconTelegram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.9 4.1c.3-1.2-.9-2.2-2-1.7L2.7 9.2c-1.2.5-1.1 2.2.1 2.6l4.7 1.5 1.8 5.6c.3 1 1.6 1.3 2.3.5l2.5-2.7 4.9 3.6c.9.7 2.2.2 2.4-.9l2.5-15.3ZM8.4 12.6l9.3-5.7c.4-.2.8.3.4.6l-7.1 6.5c-.3.3-.5.7-.6 1.1l-.3 2.1c0 .3-.5.4-.6 0l-1.1-3.5c-.2-.4 0-.9.4-1.1h-.4Z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.6 7.3a5 5 0 0 1-3.5-1.4 5 5 0 0 1-1.5-3.4h-3.3v13.7a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V10a6.3 6.3 0 0 0-.9-.1 6.2 6.2 0 1 0 6.2 6.2V9.9a8.2 8.2 0 0 0 5 1.7V8.3c-.7 0-1.4-.3 0-1Z" />
    </svg>
  );
}

const socialEntries = [
  { key: "telegram", label: "Telegram", icon: <IconTelegram /> },
  { key: "tiktok", label: "TikTok", icon: <IconTikTok /> },
  { key: "facebook", label: "Facebook", icon: <IconFacebook /> },
  { key: "instagram", label: "Instagram", icon: <IconInstagram /> },
] as const;

export default function Footer({ dict }: { dict: Dictionary }) {
  const links = [
    { href: "#services", label: dict.nav.services },
    { href: "#work", label: dict.nav.work },
    { href: "#contact", label: dict.nav.contact },
    { href: "#contact", label: dict.nav.cta },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-950 text-white/70">
      {/* Legacy ሎሃ mark as a heritage watermark. invert+grayscale turns the
          white JPEG background black, which `screen` then renders as nothing
          against the navy — leaving only the letterforms as a faint glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-10 hidden w-[560px] select-none opacity-[0.07] mix-blend-screen [filter:invert(1)_grayscale(1)] lg:block"
      >
        <Image
          src="/brand/loha-legacy-mark.jpg"
          alt=""
          width={630}
          height={320}
          className="h-auto w-full"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo variant="reverse" size={34} />
            <span className="font-display leading-none text-white">
              <span className="block text-lg font-extrabold tracking-[0.02em]">LOHA</span>
              <span className="mt-1 block text-[8px] font-semibold tracking-[0.3em] text-white/60">
                ADVERTISING PLC
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{dict.footer.tagline}</p>
        </div>

        <nav aria-label={dict.footer.quickLinks}>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">
            {dict.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`tel:${site.phones.telephone}`} className="transition hover:text-white">
                {site.phones.telephone}
              </a>
            </li>
            {site.phones.mobiles.map((m) => (
              <li key={m}>
                <a href={`tel:${m.replace(/\s/g, "")}`} className="transition hover:text-white">
                  {m}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">
            {dict.footer.followUs}
          </h3>
          <div className="mt-4 flex gap-3">
            {socialEntries.map((s) => {
              const href = site.socials[s.key];
              const isPlaceholder = href === "#";
              return (
                <a
                  key={s.key}
                  href={href}
                  aria-label={s.label}
                  title={s.label}
                  {...(!isPlaceholder && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 hover:text-white ${
                    isPlaceholder ? "opacity-50" : ""
                  }`}
                >
                  {s.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {dict.footer.rights}
      </div>
    </footer>
  );
}
