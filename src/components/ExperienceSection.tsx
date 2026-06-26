"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
import ExperienceCard from "./ExperienceCard";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection({ experiences }: { experiences: { role: string; company: string; period: string; points: string[] }[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".exp-card", { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".exp-card");
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 85%", end: "top 35%", scrub: 1 } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="px-4 sm:px-8 lg:px-24 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="section-heading mb-4">Experience</h2>
        </ScrollReveal>
        <div className="relative mx-auto max-w-3xl">
          <div className="hidden md:block absolute left-[19px] top-0 h-full w-px" style={{ background: "color-mix(in srgb, var(--ink) 10%, transparent)" }} />
          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
