"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import {
  House, User, Code, Briefcase, Folder, Envelope, ArrowUpRight,
  GithubLogo, LinkedinLogo, Star
} from "@phosphor-icons/react";
import Aurora from "../../components/reactbits/Aurora";
import RotatingText from "../../components/reactbits/RotatingText";
import Dock from "../../components/reactbits/Dock";
import LogoLoopBase from "../../components/reactbits/LogoLoop";

const LogoLoop = LogoLoopBase as React.ComponentType<Record<string, unknown>>;

function FadeInView({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        opacity: visible || reduce ? 1 : 0,
        transform: visible || reduce ? "translateY(0)" : "translateY(1.5rem)",
        filter: visible || reduce ? "blur(0)" : "blur(4px)",
        transition: reduce ? "none" : "opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

function CountUp({ to, from = 0, suffix = "", label }: { to: number; from?: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const diff = to - from;
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(from + diff * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, from, to]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "var(--accent)" }}>
        {current.toFixed(0)}{suffix}
      </div>
      <div className="text-sm mt-1" style={{ color: "var(--ink-dim)" }}>{label}</div>
    </div>
  );
}

const resume = {
  name: "Dhruv Parmar",
  roles: ["Full Stack Developer", "AI Engineer", "UI/UX Designer"],
  objective:
    "Full Stack Engineer specializing in developing scalable web and AI applications with expertise in React, Node.js, and MongoDB. Demonstrated success in leading frontend projects and building agentic AI systems using LangChain, LangGraph, and RAG pipelines.",
  heroSub:
    "Full Stack Engineer building scalable web and AI applications. Ships agentic AI systems from zero to production.",
  skills: {
    Languages: { items: ["Python", "C++"], tier: 1 },
    Frontend: { items: ["JavaScript", "TypeScript", "React.js", "R3F", "Next.js", "Tailwind CSS", "GSAP"], tier: 1 },
    AI: { items: ["LangChain", "LangGraph", "RAG", "Vector Embeddings", "Guardrails", "LLM Evals", "Gemini", "Deepseek"], tier: 1 },
    Backend: { items: ["Node.js", "Express.js", "RESTful APIs"], tier: 2 },
    "Auth & DB": { items: ["Clerk", "JWT", "MongoDB"], tier: 2 },
    DevOps: { items: ["Git", "GitHub", "Vercel"], tier: 3 },
  },
  experience: [
    {
      company: "Healdoc.ai",
      role: "Frontend Developer",
      period: "Aug 2024 - Feb 2025",
      points: [
        "Led the transformation of an outdated static site into a high-performance modern web platform using React.js",
        "Managed complete redesign of Healdoc.ai to a React application, significantly improving maintainability and scalability",
      ],
    },
    {
      company: "Sensys Technology",
      role: "UI/UX Designer & Developer",
      period: "July 2024 - Oct 2025",
      points: [
        "Enhanced interface clarity and workflow efficiency by revamping key modules of the HRM Thread platform",
        "Enhanced UI with HTML, CSS, jQuery, and Tailwind CSS",
      ],
    },
    {
      company: "Engaze",
      role: "UI/UX Designer",
      period: "Dec 2023 - Jan 2024",
      points: [
        "Focused on user-centric interaction patterns, designed an accessible chat interface in Figma",
      ],
    },
  ],
  projects: [
    {
      title: "Content Buddy",
      tag: "AI SaaS",
      description:
        "AI SaaS that scrapes a creator's last 30+ Instagram posts, extracts voice/tone/niche signals, and generates personalized reel scripts across 17 languages. Shipped to real users, 0 to production solo.",
      tech: ["Next.js", "MongoDB", "Gemini", "JWT"],
      link: "#",
      img: "https://picsum.photos/seed/content-buddy/800/500",
      featured: true,
    },
    {
      title: "Support AI",
      tag: "AI Tool",
      description:
        "Automated support ticket assignment using AI skill-matching. Integrated Gemini for instant AI-generated troubleshooting steps with role-based workflow.",
      tech: ["Next.js", "Gemini", "MongoDB", "Clerk"],
      link: "#",
      img: "https://picsum.photos/seed/support-ai/600/400",
      featured: false,
    },
    {
      title: "Social Media App",
      tag: "Full Stack",
      description:
        "Feature-rich social media app with real-time post feeds, likes, comments, and protected user routes using Next.js App Router and Clerk authentication.",
      tech: ["Next.js", "Clerk", "NeonDB", "TypeScript"],
      link: "#",
      img: "https://picsum.photos/seed/social-app/600/400",
      featured: false,
    },
  ],
  contact: {
    email: "dhruvparmardp29@gmail.com",
    phone: "+91 9004192909",
    location: "Borivali, Mumbai",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  achievement:
    "Received a Letter of Appreciation from IIT Bombay for designing and developing a professional website for the Heavy Structure Lab of the Civil Engineering Department.",
};

function DockNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const iconSize = 20;
  const items = [
    { icon: <House size={iconSize} />, label: "Home", onClick: () => scrollTo("hero") },
    { icon: <User size={iconSize} />, label: "About", onClick: () => scrollTo("about") },
    { icon: <Code size={iconSize} />, label: "Skills", onClick: () => scrollTo("skills") },
    { icon: <Briefcase size={iconSize} />, label: "Work", onClick: () => scrollTo("experience") },
    { icon: <Folder size={iconSize} />, label: "Projects", onClick: () => scrollTo("projects") },
    { icon: <Envelope size={iconSize} />, label: "Contact", onClick: () => scrollTo("contact") },
  ];

  return <Dock items={items} panelHeight={60} baseItemSize={44} magnification={56} distance={150} />;
}

const skillLogos = [
  { node: <Code size={28} weight="duotone" />, ariaLabel: "Languages" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>React</span>, ariaLabel: "React" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Next.js</span>, ariaLabel: "Next.js" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>TypeScript</span>, ariaLabel: "TypeScript" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Node.js</span>, ariaLabel: "Node.js" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Python</span>, ariaLabel: "Python" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>LangChain</span>, ariaLabel: "LangChain" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>MongoDB</span>, ariaLabel: "MongoDB" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Tailwind</span>, ariaLabel: "Tailwind CSS" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>Gemini</span>, ariaLabel: "Gemini" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>GSAP</span>, ariaLabel: "GSAP" },
  { node: <span style={{ fontWeight: 600, fontSize: 18, opacity: 0.7 }}>R3F</span>, ariaLabel: "React Three Fiber" },
];

function SkillCard({ category, items, className = "" }: { category: string; items: string[]; className?: string }) {
  return (
    <div className={`card p-5 ${className}`} style={{ background: "var(--paper-elevated)" }}>
      <h3 className="text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: "var(--accent)" }}>
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span key={skill} className="tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: typeof resume.experience[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className="relative group">
      <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "color-mix(in srgb, var(--ink) 10%, transparent)" }}>
        <div className="w-3 h-3 rounded-full border-2 absolute -left-[5.5px] top-2" style={{ background: "var(--paper)", borderColor: "var(--accent)" }} />
      </div>
      <FadeInView>
        <div className="card p-6 md:p-8 ml-8 relative overflow-hidden">
          <div
            ref={glowRef}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: "radial-gradient(400px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), var(--accent-glow), transparent 60%)" }}
            onMouseMove={(e) => {
              const rect = cardRef.current?.getBoundingClientRect();
              if (rect && glowRef.current) {
                glowRef.current.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
                glowRef.current.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
              }
            }}
          />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">{exp.role}</h3>
                <p className="text-base font-medium" style={{ color: "var(--accent)" }}>{exp.company}</p>
              </div>
              <span className="text-xs sm:text-sm whitespace-nowrap shrink-0" style={{ color: "var(--ink-dim)" }}>{exp.period}</span>
            </div>
            <ul className="space-y-2">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                  <span className="mt-1.5 block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInView>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof resume.projects[0] }) {
  return (
    <div className="card p-0 h-full flex flex-col sm:flex-row overflow-hidden group" style={{ background: "var(--paper-elevated)" }}>
      <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:min-h-[220px] shrink-0">
        <Image
          src={project.img}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="tag text-xs">{project.tag}</span>
          <h3 className="text-base sm:text-lg font-bold">{project.title}</h3>
        </div>
        <p className="text-sm leading-relaxed mb-3 flex-1 line-clamp-3" style={{ color: "var(--ink-dim)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t) => (
            <span key={t} className="tag text-xs">{t}</span>
          ))}
        </div>
        <a
          href={project.link}
          className="btn-secondary text-xs self-start inline-flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowUpRight size={12} />
          Live Link
        </a>
      </div>
    </div>
  );
}

function PinnedProjects({ projects }: { projects: typeof resume.projects }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const sectionHeight = container.offsetHeight;
        const vh = window.innerHeight;
        const scrolled = -rect.top;
        const totalScroll = sectionHeight - vh;
        setProgress(Math.max(0, Math.min(1, scrolled / totalScroll)));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const count = projects.length;
  const perCard = 1 / count;
  const stackGap = 14;

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${(count + 1) * 100}vh` }}
    >
      <div
        className="sticky top-0 h-screen flex flex-col"
        style={{ background: "var(--paper-alt)" }}
      >
        <div className="px-4 sm:px-8 lg:px-24 max-w-6xl mx-auto pt-10 md:pt-14 pb-4">
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
            const isSliding = progress >= arriveAt && !hasArrived;

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
                className="absolute w-full max-w-4xl px-4"
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

export default function Home() {
  return (
    <main>
      {/* ──────── Hero ──────── */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24">
        <Aurora
          colorStops={["#b45309", "#d97706", "#f59e0b", "#b45309"]}
          speed={1.5}
          blur={100}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInView>
                <p className="text-xs font-mono uppercase tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>
                  Full Stack Developer
                </p>
              </FadeInView>
              <FadeInView>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-5">
                  Dhruv Parmar
                </h1>
              </FadeInView>
              <FadeInView>
                <div className="text-lg sm:text-xl md:text-2xl font-medium mb-4" style={{ color: "var(--ink-dim)" }}>
                  <RotatingText
                    texts={resume.roles}
                    rotationInterval={2500}
                    splitBy="words"
                    staggerDuration={0.04}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                </div>
              </FadeInView>
              <FadeInView>
                <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-[55ch]" style={{ color: "var(--ink-dim)" }}>
                  {resume.heroSub}
                </p>
              </FadeInView>
              <FadeInView>
                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="btn-primary">
                    View My Work
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Get in Touch
                  </a>
                </div>
              </FadeInView>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInView>
                <div className="relative">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2" style={{ borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)" }}>
                    <Image
                      src="https://picsum.photos/seed/dhruv-portfolio/400/400"
                      alt="Dhruv Parmar"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div
                    className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl flex items-center justify-center text-xs font-bold"
                    style={{ background: "var(--accent)", color: "var(--paper)" }}
                  >
                    <span className="text-center leading-tight">Open to<br />Work</span>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── Stats ──────── */}
      <section className="px-4 sm:px-8 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp to={3} suffix="+" label="Years Experience" />
            <CountUp to={6} label="Tech Stacks" />
            <CountUp to={3} label="Projects Shipped" />
            <CountUp to={1} suffix="+" label="IIT Recognition" />
          </div>
        </div>
      </section>

      {/* ──────── About ──────── */}
      <section id="about" className="px-4 sm:px-8 lg:px-24 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <FadeInView>
              <h2 className="section-heading mb-6">About Me</h2>
            </FadeInView>
            <FadeInView>
              <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: "var(--ink-dim)" }}>
                {resume.objective}
              </p>
            </FadeInView>
            <FadeInView>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                I build agentic AI systems using LangChain, LangGraph, and RAG pipelines, with hands-on experience
                shipping LLM-powered products to real users. I thrive on taking projects from 0 to production,
                handling everything from prompt engineering to deployment.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────── Skills - Logo Marquee + Bento ──────── */}
      <section id="skills" className="py-20 md:py-28" style={{ background: "var(--paper-alt)" }}>
        <div className="px-4 sm:px-8 lg:px-24 max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="section-heading mb-12">Skills</h2>
          </FadeInView>
        </div>

        <FadeInView>
          <div className="mb-12 overflow-hidden">
            <LogoLoop
              logos={skillLogos}
              speed={80}
              direction="left"
              logoHeight={32}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="var(--paper-alt)"
              className="py-4"
            />
          </div>
        </FadeInView>

        <div className="px-4 sm:px-8 lg:px-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
            <SkillCard category="Languages" items={resume.skills.Languages.items} className="sm:col-span-1" />
            <SkillCard category="Frontend" items={resume.skills.Frontend.items} className="sm:col-span-2" />
            <SkillCard category="AI" items={resume.skills.AI.items} className="sm:col-span-2" />
            <SkillCard category="Backend" items={resume.skills.Backend.items} className="sm:col-span-1" />
            <SkillCard category="Auth & DB" items={resume.skills["Auth & DB"].items} className="sm:col-span-1" />
            <SkillCard category="DevOps" items={resume.skills.DevOps.items} className="sm:col-span-1" />
          </div>
        </div>
      </section>

      {/* ──────── Experience ──────── */}
      <section id="experience" className="px-4 sm:px-8 lg:px-24 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="section-heading mb-4">Experience</h2>
          </FadeInView>
          <div className="mt-12 max-w-3xl space-y-10">
            {resume.experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* ──────── Projects - Pinned Section ──────── */}
      <PinnedProjects projects={resume.projects} />

      <div className="divider-gradient" />

      {/* ──────── Contact ──────── */}
      <section id="contact" className="px-4 sm:px-8 lg:px-24 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="section-heading mb-4">Get in Touch</h2>
          </FadeInView>
          <FadeInView>
            <p className="text-base sm:text-lg mb-10 max-w-[48ch]" style={{ color: "var(--ink-dim)" }}>
              Have a project in mind or just want to say hi? Let&apos;s connect.
            </p>
          </FadeInView>
          <div className="flex flex-wrap gap-4 items-center">
            <a href={`mailto:${resume.contact.email}`} className="btn-primary">
              <Envelope size={16} />
              {resume.contact.email}
            </a>
            <a href={resume.contact.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GithubLogo size={16} />
              GitHub
            </a>
            <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <LinkedinLogo size={16} />
              LinkedIn
            </a>
          </div>
          <div className="mt-6 text-sm" style={{ color: "var(--ink-dim)" }}>
            {resume.contact.location} &middot; {resume.contact.phone}
          </div>
        </div>
      </section>

      {/* ──────── Footer ──────── */}
      <footer className="text-center py-10 px-4" style={{ color: "var(--ink-dim)" }}>
        <div className="divider-gradient mb-8" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dhruv Parmar. Built with Next.js and React Bits.
        </p>
      </footer>

      <DockNav />
    </main>
  );
}
