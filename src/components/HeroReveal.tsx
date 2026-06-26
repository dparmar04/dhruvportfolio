"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";

export default function HeroReveal({
  children,
  className = "",
  stagger = 0.1,
  duration = 0.8,
  y = 30,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (el) gsap.set(el.children, { opacity: 1, y: 0 });
      return;
    }

    const children = Array.from(el.children) as HTMLElement[];

    gsap.set(children, { opacity: 0, y, filter: "blur(4px)" });

    gsap.to(children, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration,
      stagger,
      ease: "power3.out",
      delay: 0.2,
    });
  }, [stagger, duration, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
