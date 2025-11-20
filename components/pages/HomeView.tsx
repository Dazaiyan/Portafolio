'use client';

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Tag } from "@/components/Tag";
import { useLocale } from "@/components/locale-provider";
import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { SocialLinksSection } from "@/components/SocialLinksSection";
import { EducationSection } from "@/components/EducationSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import Image from "next/image";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
}

const revealClass = (visible: boolean) => `transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`;

export function HomeView() {
  const { content, locale } = useLocale();
  const isSpanish = locale === "es";
  const infoLabels = {
    phone: isSpanish ? "Teléfono" : "Phone",
    city: isSpanish ? "Ciudad" : "City",
    email: "Email",
    id: isSpanish ? "Cédula" : "ID",
    role: isSpanish ? "Rol actual" : "Current role",
  };

  const [profileRef, profileVisible] = useReveal<HTMLElement>();
  const [educationRef, educationVisible] = useReveal<HTMLDivElement>();
  const [certRef, certVisible] = useReveal<HTMLDivElement>();
  const [languagesRef, languagesVisible] = useReveal<HTMLElement>();
  const [projectsRef, projectsVisible] = useReveal<HTMLElement>();
  const [contactRef, contactVisible] = useReveal<HTMLDivElement>(); 


  return (
    <div className="space-y-14">
      <Hero />
      <section id="profile" ref={profileRef} className={`space-y-8 ${revealClass(profileVisible)}`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <p className="text-sm text-muted">{content.personalInfo.city}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">{content.personalInfo.name}</h1>
            <p className="text-lg font-medium text-[var(--foreground)]">{content.personalInfo.currentRole}</p>
            <p className="max-w-2xl text-base leading-relaxed text-muted">{content.about}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${content.email}`}
                className="inline-flex items-center rounded-lg border border-[var(--card-border)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--foreground)]"
              >
                {content.nav.contactCta}
              </a>
              <a href="#portfolio" className="link-underline text-sm font-semibold">
                {isSpanish ? "Ver proyectos" : "View projects"}
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/perfil.jpg"
              alt={content.personalInfo.name}
              width={320}
              height={320}
              className="h-72 w-72 rounded-xl object-cover shadow-soft"
              priority
            />
          </div>
        </div>
        <div className="grid gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:grid-cols-2">
          <InfoRow label={infoLabels.phone} value={content.personalInfo.phone} />
          <InfoRow label={infoLabels.city} value={content.personalInfo.city} />
          <InfoRow
            label={infoLabels.email}
            value={
              <a href={`mailto:${content.personalInfo.email}`} className="link-underline">
                {content.personalInfo.email}
              </a>
            }
          />
          <InfoRow label={infoLabels.id} value={content.personalInfo.idNumber} />
          <InfoRow label={infoLabels.role} value={content.personalInfo.currentRole} />
        </div>
      </section>

      <ExperienceSection />

      <div ref={educationRef} className={revealClass(educationVisible)}>
        <EducationSection />
      </div>

      <div ref={certRef} className={revealClass(certVisible)}>
        <CertificationsSection />
      </div>

      <SkillsSection />

      <section ref={languagesRef} className={`space-y-6 border-t border-[var(--card-border)] pt-10 ${revealClass(languagesVisible)}`}>
        <SectionTitle title={isSpanish ? "Idiomas y habilidades blandas" : "Languages & soft skills"} />
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-muted">{isSpanish ? "Idiomas" : "Languages"}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.languages.map((language) => (
                <Tag key={language.name} label={`${language.name} · ${language.level}`} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-muted">
              {isSpanish ? "Habilidades blandas" : "Soft skills"}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.softSkills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" ref={projectsRef} className={`space-y-6 border-t border-[var(--card-border)] pt-10 ${revealClass(projectsVisible)}`}>
        <SectionTitle title={content.projects.title} description={content.projects.description} />
        <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 text-sm text-muted">
          {content.projects.note}
        </div>
      </section>

      <div ref={contactRef} className={revealClass(contactVisible)}>
        <ContactSection />
      </div>

      <SocialLinksSection />
    </div>
  );
}

type InfoRowProps = {
  label: string;
  value: ReactNode;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">{label}</p>
      <p className="text-base text-[var(--foreground)]">{value}</p>
    </div>
  );
}
