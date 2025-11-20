"use client";

import { useLocale } from "./locale-provider";

export function CertificationsSection() {
  const { content, locale } = useLocale();
  const title = locale === "es" ? "Certificaciones" : "Certifications";

  return (
    <section className="mx-auto max-w-5xl px-4 py-12" id="certifications">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-6 rounded-2xl border border-slate-200 p-4">
        <div className="flex flex-wrap gap-4">
          {content.certifications.map((item) => (
            <span key={item} className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-900">
              <span className="h-2.5 w-2.5 rounded-full bg-black" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
