import Image from "next/image";
import Header from "../components/Header";
import Reveal from "../components/Reveal";
import QuoteForm from "../components/QuoteForm";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { dictionaries, type Locale } from "../i18n/dictionaries";
import { site, mapEmbedUrl } from "../config/site";

function IconPrint() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9V3h12v6" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="7" rx="1" />
    </svg>
  );
}

function IconWater() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5S5.5 10 5.5 14.5a6.5 6.5 0 0 0 13 0C18.5 10 12 2.5 12 2.5Z" />
      <path d="M9 15a3 3 0 0 0 3 3" />
    </svg>
  );
}

function IconBlocks() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="13" width="8" height="7" rx="1" />
      <rect x="13" y="13" width="8" height="7" rx="1" />
      <rect x="8" y="4" width="8" height="7" rx="1" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

const pillarStyles = [
  { id: "printing", icon: <IconPrint />, tint: "bg-brand-50 text-brand-700", bar: "bg-brand-600" },
  { id: "water", icon: <IconWater />, tint: "bg-sky-50 text-sky-700", bar: "bg-sky-500" },
  { id: "blocks", icon: <IconBlocks />, tint: "bg-amber-50 text-amber-700", bar: "bg-accent-500" },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = dictionaries[locale];

  return (
    <main id="top" className="flex-1">
      <Header locale={locale} nav={dict.nav} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 pt-32 pb-24 text-white sm:pt-40 sm:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(63,130,241,0.45), transparent), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(245,158,11,0.25), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Legacy ሎሃ mark, same heritage treatment as the footer — filling the
            whole section as a ghosted brand plate behind the copy. `contain` on
            narrow screens keeps the mark readable where `cover` would crop it
            down to a single letterform. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none opacity-[0.05] mix-blend-screen [filter:invert(1)_grayscale(1)]"
        >
          <Image
            src="/brand/loha-legacy-mark.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-contain md:object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
              {dict.hero.badge}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {dict.hero.h1a}{" "}
              <span className="text-accent-400">{dict.hero.h1b}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {dict.hero.p}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-brand-950 transition hover:bg-accent-400"
              >
                {dict.hero.ctaPrimary}
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {dict.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services overview */}
      <section id="services" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              {dict.services.eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {dict.services.h2}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {dict.services.pillars.map((p, i) => (
              <Reveal key={pillarStyles[i].id} delay={i * 120}>
                <div
                  id={pillarStyles[i].id}
                  className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`h-1.5 ${pillarStyles[i].bar}`} />
                  <div className="flex flex-1 flex-col p-7">
                    <span className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${pillarStyles[i].tint}`}>
                      {pillarStyles[i].icon}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                    <ul className="mt-5 space-y-2.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <svg className="mt-0.5 shrink-0 text-brand-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-auto pt-6 text-sm font-semibold text-brand-700 transition group-hover:text-brand-800"
                    >
                      {dict.services.request}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Printing detail */}
      <section id="printing-detail" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              {dict.printing.eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {dict.printing.h2}
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">{dict.printing.p}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dict.printing.items.map((item, i) => (
              <Reveal key={item.name} delay={(i % 4) * 90}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-brand-300 hover:shadow-md">
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work / Gallery */}
      <section id="work" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              {dict.gallery.eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {dict.gallery.h2}
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">{dict.gallery.p}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <Gallery locale={locale} t={dict.gallery} />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-block rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-brand-950 transition hover:bg-accent-400"
              >
                {dict.gallery.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why LOHA */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                {dict.why.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {dict.why.h2}
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">{dict.why.p}</p>
              <a
                href={`tel:${site.phones.mobiles[0].replace(/\s/g, "")}`}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                <IconPhone />
                {dict.why.call}
              </a>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {dict.why.features.map((f, i) => (
                <Reveal key={f.t} delay={i * 100}>
                  <div className="h-full rounded-xl bg-brand-50 p-6">
                    <h3 className="font-semibold text-brand-900">{f.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-950/70">{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-brand-950 pt-20 text-white sm:pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                {dict.contact.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {dict.contact.h2}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/70">
                {dict.contact.p}
              </p>

              <div className="mt-10 space-y-5">
                <a href={`tel:${site.phones.telephone}`} className="flex items-center gap-4 text-white/90 transition hover:text-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                    <IconPhone />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/50">{dict.contact.telephone}</span>
                    <span className="font-semibold">{site.phones.telephone}</span>
                  </span>
                </a>
                {site.phones.mobiles.map((m) => (
                  <a key={m} href={`tel:${m.replace(/\s/g, "")}`} className="flex items-center gap-4 text-white/90 transition hover:text-white">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                      <IconPhone />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-white/50">{dict.contact.mobile}</span>
                      <span className="font-semibold">{m}</span>
                    </span>
                  </a>
                ))}
                <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-white/90 transition hover:text-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                    <IconMail />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/50">{dict.contact.email}</span>
                    <span className="font-semibold">{site.email}</span>
                  </span>
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/90 transition hover:text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
                    <IconWhatsApp />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/50">{dict.contact.whatsapp}</span>
                    <span className="font-semibold">+251 911 878 237</span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-2xl bg-white p-7 text-slate-900 shadow-xl sm:p-9">
                <h3 className="text-lg font-bold">{dict.form.heading}</h3>
                <p className="mb-6 mt-1 text-sm text-slate-500">{dict.form.sub}</p>
                <QuoteForm form={dict.form} email={site.email} />
              </div>
            </Reveal>
          </div>

        </div>

        {/* Map — full-bleed width, flush with the footer */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto mb-4 flex max-w-6xl flex-wrap items-baseline justify-between gap-2 px-4 sm:px-6">
            <h3 className="text-lg font-bold">{dict.map.title}</h3>
            <a
              href={site.map.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent-400 transition hover:text-accent-500"
            >
              {dict.map.hint} →
            </a>
          </div>
          <iframe
            src={mapEmbedUrl()}
            title={dict.map.title}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[380px] w-full border-0 sm:h-[440px]"
          />
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}
