type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-lg border border-[var(--card-border)] px-3 py-1 text-sm text-muted">
      {label}
    </span>
  );
}
