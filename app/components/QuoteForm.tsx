"use client";

import { useState } from "react";
import type { Dictionary } from "../i18n/dictionaries";

export default function QuoteForm({
  form,
  email,
}: {
  form: Dictionary["form"];
  email: string;
}) {
  const [service, setService] = useState(form.services[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Service request — ${service}`;
    const body = [
      `${form.name}: ${data.get("name")}`,
      `${form.phone}: ${data.get("phone")}`,
      `${form.need} ${service}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            {form.name}
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            placeholder={form.namePh}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            {form.phone}
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            placeholder={form.phonePh}
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
          {form.need}
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        >
          {form.services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          {form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          placeholder={form.messagePh}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
      >
        {form.submit}
      </button>
      <p className="text-center text-xs text-slate-500">{form.note}</p>
    </form>
  );
}
