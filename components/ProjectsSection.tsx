"use client";

import Image from "next/image";
import { Github } from "lucide-react";
import { useLocale } from "./locale-provider";

type Project = {
  title: string;
  titleEn?: string;
  type: string;
  typeEs?: string;
  description: string;
  descriptionEn?: string;
  techStack: string[];
  codeUrl: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Webpage DDS",
    titleEn: "Webpage DDS",
    type: "Web App",
    typeEs: "Aplicación web",
    description: "Página web moderna desarrollada para Daza Dental Studio, enfocada en información, servicios y contacto.",
    descriptionEn: "Modern website built for Daza Dental Studio, focused on information, services, and contact.",
    techStack: ["React", "JavaScript", "CSS"],
    codeUrl: "https://github.com/Dazaiyan/web-page-dazadentalstudio",
    image: "/Webpage-DDS.jpeg",
  },
  {
    title: "Minecraft OpenGL",
    titleEn: "Minecraft OpenGL",
    type: "Graphics",
    typeEs: "Gráficos",
    description: "Implementación práctica estilo Minecraft utilizando OpenGL, con renderizado básico y manipulación 3D.",
    descriptionEn: "Practical Minecraft-style implementation using OpenGL, with basic rendering and 3D manipulation.",
    techStack: ["OpenGL", "Python"],
    codeUrl: "https://github.com/Dazaiyan/MINECRAFT-OPENGL",
    image: "/Minecraft-OpenGL.jpeg",
  },
  {
    title: "Minimalist Shop",
    titleEn: "Minimalist Shop",
    type: "Web App",
    typeEs: "Aplicación web",
    description: "Tienda virtual minimalista construida con Vue y Vite, enfocada en simplicidad, velocidad y UX limpia.",
    descriptionEn: "Minimalist online store built with Vue and Vite, focused on simplicity, speed, and a clean UX.",
    techStack: ["Vue", "Vite", "CSS"],
    codeUrl: "https://github.com/Dazaiyan/Tienda_Vue",
    image: "/Minimalist-Shop.png",
  },
  {
    title: "Parkitia",
    titleEn: "Parkitia",
    type: "Web App",
    typeEs: "Aplicación web",
    description: "Aplicación de gestión de parqueaderos desarrollada con Next.js y Tailwind, enfocada en eficiencia y diseño moderno.",
    descriptionEn: "Parking management app built with Next.js and Tailwind, focused on efficiency and modern design.",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
    codeUrl: "https://github.com/MiguelZea12/parkintia-front",
    image: "/Parkitia.JPG",
  },
];

export function ProjectsSection() {
  const { locale } = useLocale();
  const isSpanish = locale === "es";
  const heading = isSpanish ? "Proyectos" : "Projects";
  const buttonLabel = isSpanish ? "Código" : "Code";

  return (
    <section id="portfolio" className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">{heading}</h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="relative overflow-hidden rounded-xl border border-slate-200 bg-transparent p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-slate-300" />
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" priority />
            </div>

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-900">
                {isSpanish ? project.title : project.titleEn ?? project.title}
              </h3>
              <span className="inline-block rounded-xl bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {isSpanish ? project.typeEs ?? project.type : project.type}
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {isSpanish ? project.description : project.descriptionEn ?? project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="inline-flex items-center rounded-xl bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-800"
                aria-label={`Open code for ${project.title}`}
              >
                <Github className="h-4 w-4" />
                {buttonLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
