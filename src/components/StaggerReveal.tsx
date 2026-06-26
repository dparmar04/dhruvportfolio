"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  y?: number;
}

export default function StaggerReveal({
  children,
  className = "",
  stagger = 0.12,
  duration = 0.7,
  y = 24,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (el) gsap.set(el.children, { opacity: 1, y: 0 });
      return;
    }

    const children = Array.from(el.children) as HTMLElement[];

    gsap.set(children, { opacity: 0, y });

    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, [stagger, duration, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
