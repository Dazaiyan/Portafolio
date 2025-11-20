"use client";

import { useLocale } from "./locale-provider";

export function Footer() {
  const { content } = useLocale();

  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--card-bg)]/70 py-6 text-sm text-muted">
      <div className="mx-auto flex w-full max-w-5xl px-4 sm:px-6 lg:px-0">{content.footer}</div>
    </footer>
  );
}
