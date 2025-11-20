"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const activeTheme = resolvedTheme ?? theme ?? "light";
  const nextTheme = activeTheme === "dark" ? "light" : "dark";
  const Icon = activeTheme === "dark" ? SunMedium : Moon;

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] p-2 text-[var(--foreground)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--foreground)]"
      aria-label="Toggle color mode"
    >
      <Icon className="h-4 w-4" strokeWidth={1.75} />
    </button>
  );
}
