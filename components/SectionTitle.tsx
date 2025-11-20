import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={["space-y-3", className].filter(Boolean).join(" ")}>
      {eyebrow ? <p className="text-sm uppercase tracking-[0.35em] text-muted">{eyebrow}</p> : null}
      {title ? <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">{title}</h2> : null}
      {description ? <div className="max-w-2xl text-base leading-relaxed text-muted">{description}</div> : null}
    </div>
  );
}
