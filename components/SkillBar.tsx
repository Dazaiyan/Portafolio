import { useEffect, useState } from "react";

type SkillBarProps = {
  label: string;
  percentage: number;
  isActive: boolean;
};

export function SkillBar({ label, percentage, isActive }: SkillBarProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame: number;

    if (!isActive) {
      const resetFrame = requestAnimationFrame(() => setDisplayValue(0));
      return () => cancelAnimationFrame(resetFrame);
    }

    const duration = 900;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayValue(Math.round(progress * percentage));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isActive, percentage]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-medium text-slate-900">
        <span>{label}</span>
        <span>{displayValue}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-slate-900 transition-all duration-1000 ease-out"
          style={{ width: `${isActive ? percentage : 0}%` }}
          aria-label={`${label} proficiency ${displayValue} percent`}
        />
      </div>
    </div>
  );
}
