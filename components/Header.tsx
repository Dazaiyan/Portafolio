"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useLocale } from "./locale-provider";

const navLinks = [
  { key: "profile", href: "#profile" },
  { key: "experience", href: "#experience" },
  { key: "education", href: "#education" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#portfolio" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const { content, locale, toggleLocale } = useLocale();

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--card-border)] bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-0">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
          DAZADEV
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((item) => (
            <Link key={item.key} href={item.href} className="link-underline opacity-80 hover:opacity-100">
              {content.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${content.email}`}
            className="inline-flex rounded-lg border border-[var(--card-border)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--foreground)]"
          >
            {content.nav.contactCta}
          </a>
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--foreground)] transition hover:border-[var(--foreground)]"
            aria-label="Toggle language"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
