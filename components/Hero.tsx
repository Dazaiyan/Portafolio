"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useLocale } from "./locale-provider";
import TextType from "./TextType";

export function Hero() {
  const { content } = useLocale();

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-slate-50 px-4 py-16 text-slate-900">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-500">{content.hero.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">{content.hero.title}</h1>
        <TextType
          as="p"
          text={content.hero.subtitle}
          typingSpeed={120}
          pauseDuration={3000}
          showCursor
          cursorCharacter="|"
          className="mt-4 text-2xl font-medium text-slate-800 sm:text-3xl"
          cursorClassName="text-slate-500"
        />
        <p className="mt-6 text-lg leading-relaxed text-slate-600">{content.hero.description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
          >
            {content.hero.primaryCta}
          </a>
          <a
            href="#portfolio"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >
            {content.hero.secondaryCta}
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-5 text-slate-700">
          <Link
            href="https://github.com/Dazaiyan"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent p-2 transition hover:border-slate-300 hover:text-slate-900"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/juan-daza-b40216346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent p-2 transition hover:border-slate-300 hover:text-slate-900"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:jusedame@hotmail.com"
            className="rounded-full border border-transparent p-2 transition hover:border-slate-300 hover:text-slate-900"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center text-slate-400">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
