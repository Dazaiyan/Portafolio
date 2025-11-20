import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Desarrollador & TICs — MedicalPluss",
    company: "MedicalPluss",
    date: "2025 – Presente",
    location: "Manta, Ecuador",
    bullets: [
      "Desarrollo y mantenimiento de sistemas internos para la gestión médica.",
      "Implementación de mejoras y automatizaciones en los flujos de trabajo.",
      "Soporte en infraestructura tecnológica y despliegue de soluciones digitales.",
      "Colaboración con el equipo médico para adaptar el software a sus necesidades.",
    ],
  },
  {
    title: "Desarrollo web y software para consultorio dental",
    company: "Consultorio Dental (proyecto freelance)",
    date: "2024 – 2025",
    location: "Manta, Ecuador",
    bullets: [
      "Creación de una página web moderna para un consultorio dental.",
      "Ajustes y mejoras en el software dental utilizado por el consultorio.",
      "Optimización de la experiencia de usuario y organización de la información.",
      "Integración básica con herramientas de agenda y contacto.",
    ],
  },
  {
    title: "Prácticas Preprofesionales — Hospital de Especialidades de Portoviejo",
    company: "Hospital de Especialidades de Portoviejo",
    date: "2024",
    location: "Portoviejo, Ecuador",
    bullets: [
      "Desarrollo de un Print-Server para gestionar impresiones dentro del hospital.",
      "Integración del servidor de impresión con la red interna de la institución.",
      "Mejora en la eficiencia del flujo de documentos clínicos.",
      "Soporte técnico al personal en el uso de la nueva solución.",
    ],
  },
  {
    title: "Prácticas Preprofesionales — PUCESM",
    company: "Pontificia Universidad Católica del Ecuador Sede Manabí",
    date: "2024",
    location: "Manta, Ecuador",
    bullets: [
      "Colaboración en proyectos internos de desarrollo de software.",
      "Soporte en mantenimiento de aplicaciones y herramientas académicas.",
      "Participación en pruebas, documentación y mejoras de sistemas.",
      "Trabajo en equipo con otros estudiantes y docentes.",
    ],
  },
  {
    title: "Ganador del concurso Dojo Code — PUCESM",
    company: "Pontificia Universidad Católica del Ecuador Sede Manabí (Dojo Code)",
    date: "2024",
    location: "Manta, Ecuador",
    bullets: [
      "Ganador del concurso de programación Dojo Code durante la semana cultural.",
      "Resolución de desafíos de programación bajo presión de tiempo.",
      "Demostración de habilidades en lógica, algoritmos y buenas prácticas de código.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16" id="experience">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Pasado y Presente</p>  
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Experiencia</h2>
      </div>

      <div className="relative mt-12 pl-10 sm:pl-16">
        <div className="absolute left-3 top-0 h-full w-px bg-slate-200 sm:left-6" aria-hidden="true" />

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={experience.title} className="relative flex gap-6">
              <div className="absolute left-0 top-8 -translate-x-1.5 sm:left-3">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-slate-900 shadow-md" />
              </div>

              <div className="ml-6 flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
                    <p className="text-sm text-slate-500">{experience.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>{experience.date}</span>
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
