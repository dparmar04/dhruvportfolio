import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function ProjectCard({ project }: { project: { title: string; tag: string; description: string; tech: string[]; link: string; img: string } }) {
  return (
    <div className="card p-0 h-full flex flex-col sm:flex-row overflow-hidden group" style={{ background: "var(--paper-elevated)" }}>
      <div className="sm:w-1/2 aspect-5/3 sm:aspect-auto sm:min-h-[220px] shrink-0">
        <Image
          src={project.img}
          alt={project.title}
          width={600}
          height={400}
          sizes="(max-width: 640px) 100vw, (max-width: 896px) 50vw, 400px"
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
