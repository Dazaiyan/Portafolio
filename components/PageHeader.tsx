type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="space-y-4 border-b border-[var(--card-border)] pb-10">
      <p className="text-sm uppercase tracking-[0.3em] text-muted">Minimalfolio</p>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">{title}</h1>
      <p className="max-w-2xl text-lg text-muted">{description}</p>
    </header>
  );
}
