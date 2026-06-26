"use client";

import Image from "next/image";
import { ArrowUpRightIcon, EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import Aurora from "../../components/reactbits/Aurora";
import RotatingText from "../../components/reactbits/RotatingText";
import LogoLoopBase from "../../components/reactbits/LogoLoop";
import ScrollReveal from "@/components/ScrollReveal";
import HeroReveal from "@/components/HeroReveal";
import StaggerReveal from "@/components/StaggerReveal";

import Cubes from "../../components/reactbits/Cubes";
import SkillCard from "@/components/SkillCard";
import DockNav from "@/components/DockNav";
import ExperienceSection from "@/components/ExperienceSection";
import PinnedProjects from "@/components/PinnedProjects";
import { resume, skillLogos } from "@/components/resume";

const LogoLoop = LogoLoopBase as React.ComponentType<Record<string, unknown>>;

export default function Home() {
  return (
    <main id="main-content" aria-label="Home page content">
      <section id="hero" className="relative min-h-dvh flex items-center overflow-hidden pt-24">
        <Aurora
          colorStops={["#b45309", "#d97706", "#f59e0b", "#b45309"]}
          speed={1.5}
          blur={100}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <HeroReveal>
                <p className="text-xs font-mono uppercase tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>
                  Full Stack Developer
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-5">
                  Dhruv Parmar
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl font-medium mb-4" style={{ color: "var(--ink-dim)" }}>
                  <RotatingText
                    texts={resume.roles}
                    rotationInterval={2500}
                    splitBy="words"
                    staggerDuration={0.04}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                </div>
                <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-[55ch]" style={{ color: "var(--ink-dim)" }}>
                  {resume.heroSub}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="btn-primary">
                    View My Work
                    <ArrowUpRightIcon size={16} weight="bold" />
                  </a>
                  <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Resume 
                  </a>
                </div>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroReveal stagger={0.6}>
                <div className="relative">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2" style={{ borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)" }}>
                    <Image
                      src="/image.jpg"
                      alt="Dhruv Parmar"
                      width={400}
                      height={400}
                      sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
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
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 sm:px-8 lg:px-24 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="section-heading mb-6">About Me</h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: "var(--ink-dim)" }}>
                {resume.objective}
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                I build agentic AI systems using LangChain, LangGraph, and RAG pipelines, with hands-on experience
                shipping LLM-powered products to real users. I thrive on taking projects from 0 to production,
                handling everything from prompt engineering to deployment.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="flex justify-center lg:justify-end">
              <Cubes
                gridSize={6}
                cubeSize={48}
                cellGap={6}
                maxAngle={45}
                radius={2}
                autoAnimate={true}
                rippleOnClick={true}
                borderStyle="1px solid color-mix(in srgb, var(--accent) 30%, transparent)"
                faceColor="var(--paper-elevated)"
                rippleColor="var(--accent)"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-gradient" />

      <section id="skills" className="py-20 md:py-28" style={{ background: "var(--paper-alt)" }}>
        <div className="px-4 sm:px-8 lg:px-24 max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading mb-12">Skills</h2>
          </ScrollReveal>
        </div>

        <ScrollReveal>
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
        </ScrollReveal>

        <div className="px-4 sm:px-8 lg:px-24 max-w-6xl mx-auto">
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
            <SkillCard category="Languages" items={resume.skills.Languages.items} className="sm:col-span-1" />
            <SkillCard category="Frontend" items={resume.skills.Frontend.items} className="sm:col-span-2" />
            <SkillCard category="AI" items={resume.skills.AI.items} className="sm:col-span-2" />
            <SkillCard category="Backend" items={resume.skills.Backend.items} className="sm:col-span-1" />
            <SkillCard category="Auth & DB" items={resume.skills["Auth & DB"].items} className="sm:col-span-1" />
            <SkillCard category="DevOps" items={resume.skills.DevOps.items} className="sm:col-span-1" />
          </StaggerReveal>
        </div>
      </section>

      <ExperienceSection experiences={resume.experience} />

      <div className="divider-gradient" />

      <PinnedProjects projects={resume.projects} />

      <div className="divider-gradient" />

      <section id="contact" className="px-4 sm:px-8 lg:px-24 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading mb-4">Get in Touch</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base sm:text-lg mb-10 max-w-[48ch]" style={{ color: "var(--ink-dim)" }}>
              Have a project in mind or just want to say hi? Let&apos;s connect.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-4 items-center">
            <a href={`mailto:${resume.contact.email}`} className="btn-primary">
              <EnvelopeIcon size={16} />
              {resume.contact.email}
            </a>
            <a href={resume.contact.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GithubLogoIcon size={16} />
              GitHub
            </a>
            <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <LinkedinLogoIcon size={16} />
              LinkedIn
            </a>
          </div>
          <div className="mt-6 text-sm" style={{ color: "var(--ink-dim)" }}>
            {resume.contact.location} &middot; {resume.contact.phone}
          </div>
        </div>
      </section>

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
