import { Calendar, MapPin } from "lucide-react";
import { useLocale } from "./locale-provider";

export function ExperienceSection() {
  const { content, locale } = useLocale();
  const experiences = content.experience;
  const isSpanish = locale === "es";

  return (
    <section className="mx-auto max-w-5xl px-4 py-16" id="experience">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">{isSpanish ? "Pasado y Presente" : "Past & Present"}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{content.nav.experience}</h2>
      </div>

      <div className="relative mt-12 pl-10 sm:pl-16">
        <div className="absolute left-3 top-0 h-full w-px bg-slate-200 sm:left-6" aria-hidden="true" />

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={experience.title} className="relative flex gap-6">
              <div className="absolute left-0 top-8 -translate-x-1.5 sm:left-3">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-slate-900 shadow-md" />
              </div>

              <div className="ml-6 flex-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
                    <p className="text-sm text-slate-500">{experience.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>{experience.dates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-slate-900">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
