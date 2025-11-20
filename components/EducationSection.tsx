"use client";

import { Calendar, MapPin, Bookmark } from "lucide-react";
import { useLocale } from "./locale-provider";

export function EducationSection() {
  const { content, locale } = useLocale();
  const title = locale === "es" ? "Educación" : "Education";
  const label = locale === "es" ? "Cursos / Enfoque:" : "Coursework & Focus:";
  const eyebrow = locale === "es" ? "Formación" : "Education";

  return (
    <section className="mx-auto max-w-5xl space-y-10 px-4 py-16" id="education">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      </div>

      <div className="space-y-6">
        {content.education.map((item) => (
          <article key={item.title} className="space-y-3 border-l-2 border-slate-200 bg-transparent px-6 py-3">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="text-base text-slate-600">{item.institution}</p>
            <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" /> {item.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" /> {item.dates}
              </div>
            </div>
            <p className="text-base text-slate-600">{item.description}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <Bookmark className="h-4 w-4 text-slate-500" />
                {label}
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
