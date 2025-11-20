"use client";

import type { ReactNode } from "react";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLocale } from "./locale-provider";

export function ContactSection() {
  const { content, locale } = useLocale();
  const copy = locale === "es"
    ? {
        eyebrow: "Detalles de contacto",
        heading: "Let's Work Together",
        paragraph:
          "Estoy abierto a nuevas oportunidades, proyectos interesantes o colaboraciones. Si tienes una idea, duda o simplemente quieres saludar, ¡no dudes en escribirme!",
        why: "Why Choose Me?",
        reasons: [
          "✓ Ingeniería en Software en curso",
          "✓ Experiencia en desarrollo web y backend",
          "✓ Conocimientos modernos en tecnologías (Next.js, Nest.js, React, SQL)",
          "✓ Código limpio, escalable y buenas prácticas",
          "✓ Diseño centrado en el usuario y soluciones eficientes",
        ],
        form: {
          name: "Nombre completo",
          email: "Correo electrónico",
          subject: "Asunto",
          message: "Mensaje",
          placeholderName: "Tu nombre",
          placeholderEmail: "tu@email.com",
          placeholderSubject: "Motivo del mensaje",
          placeholderMessage: "Cuéntame sobre tu proyecto...",
          button: "Enviar Mensaje",
        },
      }
    : {
        eyebrow: "Contact details",
        heading: "Let's Work Together",
        paragraph:
          "I’m open to new opportunities, exciting projects, or collaborations. If you have an idea, a question, or simply want to say hi, feel free to reach out!",
        why: "Why Choose Me?",
        reasons: [
          "✓ Software Engineering in progress",
          "✓ Experience in web and backend development",
          "✓ Modern stack knowledge (Next.js, Nest.js, React, SQL)",
          "✓ Clean, scalable code and best practices",
          "✓ User-centered design and efficient solutions",
        ],
        form: {
          name: "Full Name",
          email: "Email Address",
          subject: "Subject",
          message: "Message",
          placeholderName: "Your name",
          placeholderEmail: "you@email.com",
          placeholderSubject: "Reason for reaching out",
          placeholderMessage: "Tell me about your project...",
          button: "Send Message",
        },
      };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="contact">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{locale === "es" ? "Contacto" : "Contact"}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Get In Touch</h2>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{copy.eyebrow}</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">{copy.heading}</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{copy.paragraph}</p>
          </div>

          <div className="space-y-4">
            <ContactRow
              icon={<Mail className="h-5 w-5" />}
              label={locale === "es" ? "Correo" : "Email"}
              value={content.email}
              href={`mailto:${content.email}`}
            />
            <ContactRow
              icon={<Phone className="h-5 w-5" />}
              label={locale === "es" ? "Teléfono" : "Phone"}
              value={content.personalInfo.phone}
              href={`tel:${content.personalInfo.phone.replace(/[^\d+]/g, "")}`}
            />
            <ContactRow
              icon={<MapPin className="h-5 w-5" />}
              label={locale === "es" ? "Ubicación" : "Location"}
              value={content.personalInfo.city}
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{copy.why}</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {copy.reasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <form className="space-y-6">
          <FormField id="fullName" label={copy.form.name} placeholder={copy.form.placeholderName} />
          <FormField id="email" label={copy.form.email} placeholder={copy.form.placeholderEmail} type="email" />
          <FormField id="subject" label={copy.form.subject} placeholder={copy.form.placeholderSubject} />
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="message">
              {copy.form.message}
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder={copy.form.placeholderMessage}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 transition focus:border-slate-900 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-[#0a0a0a] px-6 py-4 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <Send className="mr-2 h-4 w-4" />
            {copy.form.button}
          </button>
        </form>
      </div>
    </section>
  );
}

function FormField({ id, label, placeholder, type = "text" }: { id: string; label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 transition focus:border-slate-900 focus:outline-none"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="rounded-full bg-slate-100 p-2 text-slate-900">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</p>
        <p className="text-base text-slate-900">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition hover:translate-x-1">
        {content}
      </a>
    );
  }

  return content;
}
