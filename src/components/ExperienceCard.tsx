import SpotlightCard from "../../components/reactbits/SpotlightCard";

export default function ExperienceCard({ exp }: { exp: { role: string; company: string; period: string; points: string[] } }) {
  return (
    <div className="exp-card relative flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="hidden md:flex md:w-10 shrink-0 items-start justify-center pt-1">
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 0 4px var(--paper-alt)" }} />
      </div>
      <SpotlightCard className="flex-1">
        <div className="p-6" style={{ borderRadius: 16 }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h3 className="text-lg font-bold" style={{ color: "var(--ink)" }}>{exp.role}</h3>
            <span className="text-xs font-medium" style={{ color: "var(--ink-dim)" }}>{exp.period}</span>
          </div>
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent)" }}>{exp.company}</p>
          <ul className="space-y-1.5">
            {exp.points.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                <span className="mt-1.5 block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </SpotlightCard>
    </div>
  );
}
