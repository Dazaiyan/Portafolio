'use client';

import { useEffect, useRef, useState } from "react";

type AsProp = keyof React.JSX.IntrinsicElements;

type RevealProps = {
  as?: AsProp;
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({ as: Tag = "div", delay = 0, className = "", children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  
}
