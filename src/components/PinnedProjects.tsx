"use client";

import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { useLenis } from "@/lib/lenis";

export default function PinnedProjects({ projects }: { projects: { title: string; tag: string; description: string; tech: string[]; link: string; img: string }[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const sectionHeight = container.offsetHeight;
      const vh = window.innerHeight;
      const scrolled = -rect.top;
      const totalScroll = sectionHeight - vh;
      setProgress(Math.max(0, Math.min(1, scrolled / totalScroll)));
    };

    lenis.on("scroll", update);
    update();
    return () => { lenis.off("scroll", update) as unknown as void };
  }, [lenis]);

  const count = projects.length;
  const perCard = 1 / count;
  const stackGap = 14;

  return (
    <div
      id="projects"
      ref={containerRef}
      className="relative"
      style={{ height: `${(count + 1) * 100}vh` }}
    >
      <div
        className="sticky top-0 h-screen flex flex-col"
        style={{ background: "var(--paper-alt)" }}
      >
        <div className="sm:px-8 lg:px-24 max-w-6xl mx-auto pt-10 md:pt-14 pb-4">
          <h2 className="section-heading">Projects</h2>
        </div>

        <div className="flex-1 relative overflow-hidden flex items-center justify-center">
          {projects.map((project, i) => {
            const arriveAt = i * perCard;
            const settleAt = arriveAt + perCard * 0.7;
            const local = (progress - arriveAt) / (settleAt - arriveAt);
            const clamped = Math.max(0, Math.min(1, local));

            if (progress < arriveAt - 0.02) return null;

            const hasArrived = progress >= settleAt;

            const slideY = reduce ? 0 : (1 - clamped) * 100;
            const stackY = reduce ? 0 : i * stackGap;
            const totalY = slideY + stackY;

            const targetScale = 1 - (count - 1 - i) * 0.035;
            const slideScale = reduce ? 1 : 0.85 + clamped * (targetScale - 0.85);
            const totalScale = hasArrived ? targetScale : slideScale;

            const opacity = clamped < 0.1 ? clamped / 0.1 : 1;

            return (
              <div
                key={i}
                className="absolute w-full max-w-4xl"
                style={{
                  transform: `translateY(${totalY}px) scale(${totalScale})`,
                  opacity,
                  zIndex: i + 1,
                  willChange: "transform, opacity",
                  boxShadow: hasArrived && i < count - 1
                    ? "0 8px 30px rgba(0,0,0,0.12)"
                    : "none",
                }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, i) => {
              const arriveAt = i * perCard;
              const active = progress >= arriveAt && progress < (i + 1) * perCard;
              const done = progress >= (i + 1) * perCard;
              return (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full transition-colors duration-200"
                  style={{
                    background: active
                      ? "var(--accent)"
                      : done
                        ? "color-mix(in srgb, var(--accent) 40%, transparent)"
                        : "color-mix(in srgb, var(--ink) 15%, transparent)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
