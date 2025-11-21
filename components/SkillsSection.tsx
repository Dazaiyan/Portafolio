"use client";

import { Code2, Database, Palette, Server } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SkillBar } from "./SkillBar";
import { useLocale } from "./locale-provider";

const skillsData = [
  {
    icon: <Code2 className="h-5 w-5 text-slate-900" />,
    title: "Frontend Development",
    items: [
      { label: "React / Next.js", percentage: 90 },
      { label: "JavaScript / TypeScript", percentage: 85 },
      { label: "HTML5 & CSS3", percentage: 90 },
      { label: "Tailwind CSS", percentage: 85 },
    ],
  },
  {
    icon: <Server className="h-5 w-5 text-slate-900" />,
    title: "Backend Development",
    items: [
      { label: "Nest.js", percentage: 80 },
      { label: "Express.js", percentage: 80 },
      { label: "REST APIs", percentage: 85 },
      { label: "SQL", percentage: 75 },
    ],
  },
  {
    icon: <Database className="h-5 w-5 text-slate-900" />,
    title: "Database & Tools",
    items: [
      { label: "PostgreSQL", percentage: 80 },
      { label: "Git / GitHub", percentage: 90 },
      { label: "Docker", percentage: 70 },
      { label: "Node.js", percentage: 80 },
    ],
  },
  {
    icon: <Palette className="h-5 w-5 text-slate-900" />,
    title: "Design & UI/UX",
    items: [
      { label: "Figma", percentage: 80 },
      { label: "Responsive Design", percentage: 90 },
      { label: "User Experience", percentage: 80 },
      { label: "Prototyping", percentage: 75 },
    ],
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const { locale } = useLocale();
  const eyebrow = locale === "es" ? "Perfil" : "Profile";
  const title = locale === "es" ? "Habilidades & Experticia" : "Skills & Expertise";

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-5xl px-4 py-16" id="skills">
      <div className={`text-center transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillsData.map((category, idx) => (
          <div
            key={category.title}
            className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-slate-100 p-3">{category.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.items.map((item) => (
                <SkillBar key={item.label} label={item.label} percentage={item.percentage} isActive={inView} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
